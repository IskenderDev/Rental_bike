/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
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
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				orbitron: ["Orbitron"],
				inter: ["Inter"],
			},
                        colors: {
                                border: "hsl(215 28% 88%)",
                                input: "hsl(215 28% 88%)",
                                ring: "hsl(262 80% 45%)",
                                background: "hsl(0 0% 100%)",
                                foreground: "hsl(232 15% 15%)",
                                primary: {
                                        DEFAULT: "hsl(262 80% 55%)",
                                        foreground: "hsl(0 0% 100%)",
                                },
                                secondary: {
                                        DEFAULT: "hsl(213 95% 62%)",
                                        foreground: "hsl(0 0% 100%)",
                                },
                                destructive: {
                                        DEFAULT: "hsl(0 72% 55%)",
                                        foreground: "hsl(0 0% 100%)",
                                },
                                muted: {
                                        DEFAULT: "hsl(216 33% 93%)",
                                        foreground: "hsl(215.4 16.3% 46.9%)",
                                },
                                accent: {
                                        DEFAULT: "hsl(338 73% 58%)",
                                        foreground: "hsl(0 0% 100%)",
                                },
                                popover: {
                                        DEFAULT: "hsl(0 0% 100%)",
                                        foreground: "hsl(232 15% 15%)",
                                },
                                card: {
                                        DEFAULT: "hsl(0 0% 100%)",
                                        foreground: "hsl(232 15% 15%)",
                                },
                        },
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
		backgroundImage: {
			"carousel-1":
				"url('https://probike.templaza.net/wp-content/uploads/2023/08/Home-1-Slider-2.jpg')",
			"carousel-2":
				"url('https://probike.templaza.net/wp-content/uploads/2023/08/slide1.jpg')",
			"carousel-3":
				"url('https://askproject.net/venturo/wp-content/uploads/sites/84/2022/06/josh-nuttall-XVTWFHcNIko-unsplash.jpg')",
			"about-us":
				"url('https://probike.templaza.net/wp-content/uploads/2023/07/bg-breadcrumb.jpg')",
			testimonials: "url(https://i.ibb.co/b2vY4mW/testimonials.webp)",
			contact:
				"url(https://probike.templaza.net/wp-content/uploads/2023/08/bg-contact.jpg)",
			"discount-1": "url(https://i.ibb.co/Br96pXJ/icon2.png)",
			"discount-2": "url(https://i.ibb.co/t8vKZx6/icon1.png)",
			"discount-3": "url(https://i.ibb.co/4PmLPpT/background-spot-oval.png)",
		},
	},
	plugins: [require("tailwindcss-animate")],
}
