import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'neon-cyan': 'hsl(var(--neon-cyan))',
				'neon-pink': 'hsl(var(--neon-pink))',
				'neon-purple': 'hsl(var(--neon-purple))',
				'neon-yellow': 'hsl(var(--neon-yellow))',
			},
			backgroundImage: {
				'gradient-neon': 'var(--gradient-neon)',
				'gradient-coffee': 'var(--gradient-coffee)',
				'gradient-hero': 'var(--gradient-hero)',
			},
			boxShadow: {
				'neon': 'var(--shadow-neon)',
				'glow': 'var(--shadow-glow)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'neon-pulse': {
					'0%, 100%': {
						'box-shadow': '0 0 20px hsl(150 91% 55% / 0.5), 0 0 40px hsl(191 73% 64% / 0.3), 0 0 60px hsl(271 81% 56% / 0.2)'
					},
					'50%': {
						'box-shadow': '0 0 30px hsl(150 91% 55% / 0.8), 0 0 60px hsl(191 73% 64% / 0.6), 0 0 80px hsl(271 81% 56% / 0.4)'
					}
				},
				'rgb-wave': {
					'0%': { 'border-color': 'hsl(150 91% 55%)', 'box-shadow': '0 0 20px hsl(150 91% 55% / 0.5)' },
					'25%': { 'border-color': 'hsl(191 73% 64%)', 'box-shadow': '0 0 20px hsl(191 73% 64% / 0.5)' },
					'50%': { 'border-color': 'hsl(60 81% 56%)', 'box-shadow': '0 0 20px hsl(60 81% 56% / 0.5)' },
					'75%': { 'border-color': 'hsl(30 100% 50%)', 'box-shadow': '0 0 20px hsl(30 100% 50% / 0.5)' },
					'100%': { 'border-color': 'hsl(150 91% 55%)', 'box-shadow': '0 0 20px hsl(150 91% 55% / 0.5)' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.5' },
					'50%': { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'rgb-wave': 'rgb-wave 3s linear infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
