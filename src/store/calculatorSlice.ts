import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Calculator = {
	phone: string,
	operator: string,
	minutes: number | number[],
	internet: number | number[],
	routerRental: {
		state: boolean,
		price: number
	},
	buyRouter: {
		state: boolean,
		price: number
	},
	socialMedia: {
		facebook: {
			state: boolean,
			price: number
		},
		vk: {
			state: boolean,
			price: number
		},
		odnoklassniki: {
			state: boolean,
			price: number
		},
		instagram: {
			state: boolean,
			price: number
		},
		tikTok: {
			state: boolean,
			price: number
		},
	},
	calcSum: number,
}

const initialState: Calculator = {
	phone: "(100) 000-0000",
	operator: "Оператор 2",
	minutes: 63,
	internet: 33,
	routerRental: {
		state: false,
		price: 99,
	},
	buyRouter: {
		state: false,
		price: 2600,
	},
	socialMedia: {
		facebook: {
			state: false,
			price: 20,
		},
		vk: {
			state: false,
			price: 20,
		},
		odnoklassniki: {
			state: false,
			price: 20,
		},
		instagram: {
			state: false,
			price: 60,
		},
		tikTok: {
			state: false,
			price: 60,
		},
	},
	calcSum: 0,
}

const calculatorSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		togglePhone(state, action: PayloadAction<string>) {
			state.phone = action.payload;
			//console.log("togglePhone", action.payload)
			return state;
		},
		toggleOperator(state, action: PayloadAction<string>) {
			state.operator = action.payload;
			//console.log("toggleOperator", action.payload)
			return state;
		},
		toggleMinutes(state, action: PayloadAction<number | number[]>) {
			state.minutes = action.payload;
			//console.log("toggleMinutes", action.payload)
			return state;
		},
		toggleInternet(state, action: PayloadAction<number | number[]>) {
			state.internet = action.payload;
			//console.log("toggleInternet", action.payload)
			return state;
		},


		toggleRouterRental(state, action: PayloadAction<boolean>) {
			state.routerRental.state = action.payload;
			if (action.payload) {
				state.calcSum += state.routerRental.price;
			} else {
				state.calcSum -= state.routerRental.price;
			}
			return state;
		},
		toggleBuyRouter(state, action: PayloadAction<boolean>) {
			state.buyRouter.state = action.payload;
			if (action.payload) {
				state.calcSum += state.buyRouter.price;
			} else {
				state.calcSum -= state.buyRouter.price;
			}
			return state;
		},
		toggleFacebook(state, action: PayloadAction<boolean>) {
			state.socialMedia.facebook.state = !action.payload;
			if (!action.payload) {
				state.calcSum += state.socialMedia.facebook.price;
			} else {
				state.calcSum -= state.socialMedia.facebook.price;
			}
			return state;
		},
		toggleVk(state, action: PayloadAction<boolean>) {
			state.socialMedia.vk.state = !action.payload;
			if (!action.payload) {
				state.calcSum += state.socialMedia.vk.price;
			} else {
				state.calcSum -= state.socialMedia.vk.price;
			}
			return state;
		},
		toggleOdnoklassniki(state, action: PayloadAction<boolean>) {
			state.socialMedia.odnoklassniki.state = !action.payload;
			if (!action.payload) {
				state.calcSum += state.socialMedia.odnoklassniki.price;
			} else {
				state.calcSum -= state.socialMedia.odnoklassniki.price;
			}
			return state;
		},
		toggleiInstagram(state, action: PayloadAction<boolean>) {
			state.socialMedia.instagram.state = !action.payload;
			if (!action.payload) {
				state.calcSum += state.socialMedia.instagram.price;
			} else {
				state.calcSum -= state.socialMedia.instagram.price;
			}
			return state;
		},
		toggletTikTok(state, action: PayloadAction<boolean>) {
			state.socialMedia.tikTok.state = !action.payload;
			if (!action.payload) {
				state.calcSum += state.socialMedia.tikTok.price;
			} else {
				state.calcSum -= state.socialMedia.tikTok.price;
			}
			return state;
		},

		handleSum(state, action: PayloadAction<number>) {
			state.calcSum = action.payload;
			console.log("handleSum", action.payload)
			return state;
		},
	},
	//extraReducers: (builder) => {
	//	builder
	//}
});

export const {
	togglePhone,
	toggleOperator,
	toggleMinutes,
	toggleInternet,
	toggleRouterRental,
	toggleBuyRouter,

	toggleFacebook,
	toggleVk,
	toggleOdnoklassniki,
	toggleiInstagram,
	toggletTikTok,

	handleSum,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;