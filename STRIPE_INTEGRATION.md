# Integração Stripe - Buy Me a Coffee

## 📋 Visão Geral

Este projeto agora inclui integração com Stripe para processar pagamentos. Este documento explica como configurar e usar a integração.

## 🔧 Configuração

### 1. Criar uma Conta no Stripe

1. Acesse [https://stripe.com](https://stripe.com) e crie uma conta
2. Complete o processo de registro
3. Acesse o Dashboard do Stripe

### 2. Obter as Chaves da API

1. No Dashboard do Stripe, vá para **Developers** → **API keys**
2. Você verá duas chaves:
   - **Publishable key** (pk*test*...) - Para o frontend
   - **Secret key** (sk*test*...) - Para o backend (NUNCA exponha no frontend!)

### 3. Configurar Variáveis de Ambiente

1. Copie o arquivo `.env.example` para `.env`:

   ```bash
   cp .env.example .env
   ```

2. Edite o arquivo `.env` e adicione sua chave pública do Stripe:
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_sua_chave_aqui
   ```

### 4. Backend API (Necessário)

Para que o Stripe funcione corretamente, você precisa de um backend que crie as sessões de checkout. Aqui está um exemplo usando Node.js + Express:

#### Instalação do Backend

```bash
mkdir server
cd server
npm init -y
npm install express stripe cors dotenv
```

#### Código do Backend (server/index.js)

```javascript
require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { amount } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Buy me a coffee",
              description: `Support with $${amount / 100}`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

#### Variáveis de Ambiente do Backend (server/.env)

```
STRIPE_SECRET_KEY=sk_test_sua_chave_secreta_aqui
CLIENT_URL=http://localhost:5173
PORT=3000
```

#### Executar o Backend

```bash
cd server
node index.js
```

## 🎨 Melhorias Visuais Implementadas

### Framer Motion

O projeto agora usa **Framer Motion** para animações suaves e modernas:

- ✨ Animações de entrada (fade-in, slide-up)
- 🎯 Hover effects interativos
- 🌊 Transições fluidas entre estados
- 📱 Animações responsivas
- ⚡ Performance otimizada

### Componentes Animados

1. **CoffeeSelector**

   - Animação de entrada staggered
   - Botões com hover e tap effects
   - Transições suaves ao selecionar valores
   - Loading state animado

2. **NeonAvatar**

   - Entrada com rotação e scale
   - Pulso contínuo de glow
   - Hover effect interativo
   - Transições spring suaves

3. **ProjectCard**

   - Hover lift effect
   - Badge animations staggered
   - Botões com scale effects
   - Transições de cor suaves

4. **Index Page**
   - Scroll-triggered animations
   - Staggered children animations
   - Parallax-like effects
   - Smooth section transitions

## 🚀 Uso

### Iniciando o Projeto

1. Instale as dependências (já instaladas):

   ```bash
   npm install
   ```

2. Configure as variáveis de ambiente (veja acima)

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Inicie o backend (em outro terminal):
   ```bash
   cd server
   node index.js
   ```

### Testando Pagamentos

Use os cartões de teste do Stripe:

- **Sucesso**: 4242 4242 4242 4242
- **Data**: Qualquer data futura
- **CVC**: Qualquer 3 dígitos
- **CEP**: Qualquer 5 dígitos

## 📁 Estrutura de Arquivos

```
buymeacoffee/
├── src/
│   ├── components/
│   │   ├── CoffeeSelector.tsx     # Componente com Stripe + Framer Motion
│   │   ├── NeonAvatar.tsx         # Avatar animado
│   │   ├── ProjectCard.tsx        # Card de projeto animado
│   │   └── Header.tsx
│   ├── lib/
│   │   └── stripe.ts              # Serviço de integração Stripe
│   ├── pages/
│   │   └── Index.tsx              # Página principal com animações
│   └── ...
├── server/                        # Backend para Stripe (criar)
│   ├── index.js
│   ├── package.json
│   └── .env
├── .env                           # Variáveis de ambiente
├── .env.example                   # Exemplo de variáveis
└── STRIPE_INTEGRATION.md          # Este arquivo
```

## 🔒 Segurança

⚠️ **IMPORTANTE:**

- NUNCA exponha sua `STRIPE_SECRET_KEY` no frontend
- Use variáveis de ambiente para chaves
- Adicione `.env` ao `.gitignore`
- Sempre valide pagamentos no backend
- Use HTTPS em produção

## 🐛 Troubleshooting

### Erro: "Stripe not loaded"

- Verifique se a chave pública está correta no `.env`
- Certifique-se de que o arquivo `.env` está na raiz do projeto

### Erro: "Failed to create checkout session"

- Verifique se o backend está rodando
- Confirme que a URL da API está correta
- Verifique os logs do servidor backend

### Animações não funcionam

- Certifique-se de que `framer-motion` foi instalado: `npm install framer-motion`
- Limpe o cache: `npm run dev -- --force`

## 📚 Recursos

- [Stripe Documentation](https://stripe.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Stripe Testing](https://stripe.com/docs/testing)

## 🎯 Próximos Passos

1. Criar páginas de sucesso e cancelamento
2. Adicionar webhooks do Stripe para confirmar pagamentos
3. Implementar histórico de transações
4. Adicionar mais opções de pagamento (PIX, boleto, etc.)
5. Criar dashboard de doações
