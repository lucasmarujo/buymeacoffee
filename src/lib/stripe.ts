import { loadStripe, Stripe } from '@stripe/stripe-js';

// Substitua pela sua chave pública do Stripe
// Para obter sua chave, vá para: https://dashboard.stripe.com/apikeys
const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '';

let stripePromise: Promise<Stripe | null>;

/**
 * Obtém a instância do Stripe (singleton pattern)
 */
export const getStripe = (): Promise<Stripe | null> => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

/**
 * Cria uma sessão de checkout do Stripe
 */
export const createCheckoutSession = async (amount: number) => {
  try {
    // Aqui você precisará fazer uma chamada para seu backend
    // que criará a sessão de checkout do Stripe
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const session = await response.json();
    return session;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

/**
 * Redireciona para o checkout do Stripe
 */
export const redirectToCheckout = async (sessionId: string) => {
  try {
    const stripe = await getStripe();
    
    if (!stripe) {
      throw new Error('Stripe not loaded');
    }

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.error('Stripe redirect error:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error redirecting to checkout:', error);
    throw error;
  }
};

/**
 * Interface para os dados de pagamento
 */
export interface PaymentData {
  amount: number;
  currency?: string;
  description?: string;
  metadata?: Record<string, string>;
}

/**
 * Inicia o processo de pagamento completo
 */
export const initiatePayment = async (paymentData: PaymentData) => {
  try {
    const session = await createCheckoutSession(paymentData.amount);
    await redirectToCheckout(session.id);
  } catch (error) {
    console.error('Payment initiation error:', error);
    throw error;
  }
};
