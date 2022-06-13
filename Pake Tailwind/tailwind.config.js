module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				black: "#000",
				white: "#fff",
				offWhite: "#f5f5f7",
				gray: "#f8f8f8",
				blue: "#06c",
				offGray: "#f5f5f7",
				offBlack: "#131313",
			},
			backgroundImage: {
				iPhone13Pro: "url('/src/assets/image/iPhone13Pro.jpg')",
				iPhoneSE: "url('/src/assets/image/iPhoneSE.jpg')",
				iPhoneSEicon: "url('/src/assets/image/iPhoneSE_Icon.png')",
				CodaLogo: "url('/src/assets/image/coda_logo.png')",
				Coda: "url('/src/assets/image/CodaHero.jpg')",
			},
		},
	},
	plugins: [],
};
