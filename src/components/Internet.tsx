import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { toggleInternet } from '../store/calculatorSlice';
import { useAppSelector, useAppDispatch } from '../hook';

const marks = [
	{
		value: 0,
		label: '5 ГБ',
	},
	{
		value: 33,
		label: '15',
	},
	{
		value: 63,
		label: '30',
	},
	{
		value: 100,
		label: '35',
	},
];

function valueLabelFormat(value: number) {
	return marks.findIndex((mark) => mark.value === value) + 1;
}

const Internet: React.FC = () => {
	const dispatch = useAppDispatch();
	const internet = useAppSelector(state => state.list.internet);

	return (
		<Box sx={{ width: 300 }}>
			<Typography gutterBottom>Интернет</Typography>
			<Slider
				aria-label="Restricted values"
				value={internet}
				valueLabelFormat={valueLabelFormat}
				onChange={(_, newValue) => dispatch(toggleInternet(newValue)) }
				step={null}
				valueLabelDisplay="auto"
				marks={marks}
			/>
		</Box>
	);
}

export default Internet;