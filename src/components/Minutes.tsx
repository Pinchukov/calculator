import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { toggleMinutes } from '../store/calculatorSlice';
import { useAppSelector, useAppDispatch } from '../hook';

const marks = [
	{
		value: 0,
		label: '200',
	},
	{
		value: 33,
		label: '350',
	},
	{
		value: 63,
		label: '600 мин.',
	},
	{
		value: 100,
		label: '650',
	},
];

function valueLabelFormat(value: number) {
	return marks.findIndex((mark) => mark.value === value) + 1;
}

const Minutes: React.FC = () => {
	const dispatch = useAppDispatch();
	const minutes = useAppSelector(state => state.list.minutes);

	return (
		<Box sx={{ width: 300 }}>
			<Typography gutterBottom>Минуты</Typography>
			<Slider
				aria-label="Restricted values"
				value={minutes}
				valueLabelFormat={valueLabelFormat}
				onChange={(_, newValue) => dispatch(toggleMinutes(newValue)) }
				step={null}
				valueLabelDisplay="auto"
				marks={marks}
			/>
		</Box>
	);
}

export default Minutes;