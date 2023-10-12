import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Calculator = {
	phone: string,
	operator: string,
	minutes: number | number[],
	internet: number | number[],
	routerRental: boolean,
	buyRouter: boolean,
	socialMedia: {
		facebook: boolean,
		vk: boolean,
		odnoklassniki: boolean,
		instagram: boolean,
		tikTok: boolean,
	},
	calcSum: number,
}

const initialState: Calculator = {
	phone: "(100) 000-0000",
	operator: "Оператор 2",
	minutes: 64,
	internet: 33,
	routerRental: false,
	buyRouter: true,
	socialMedia: {
		facebook: false,
		vk: true,
		odnoklassniki: false,
		instagram: true,
		tikTok: false,
	},
	calcSum: 0,
}

const calculatorSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		togglePhone(state, action: PayloadAction<string>) {
			console.log("togglePhone", action.payload)
			state.phone = action.payload;
		},
		toggleOperator(state, action: PayloadAction<string>) {
			console.log("toggleOperator", action.payload)
			state.operator = action.payload;
		},
		toggleMinutes(state, action: PayloadAction<number | number[]>) {
			console.log("toggleMinutes", action.payload)
			state.minutes = action.payload;
		},
		toggleInternet(state, action: PayloadAction<number | number[]>) {
			console.log("toggleInternet", action.payload)
			state.internet = action.payload;
		},
		toggleRouterRental(state, action: PayloadAction<boolean>) {
			console.log("toggleRouterRental", action.payload)
			state.routerRental = action.payload;
		},
		toggleBuyRouter(state, action: PayloadAction<boolean>) {
			console.log("toggleBuyRouter", action.payload)
			state.buyRouter = action.payload;
		},
		handleSum(state, action: PayloadAction<number>) {
			console.log("handleSum", action.payload)
			state.calcSum = action.payload;
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
	handleSum,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;