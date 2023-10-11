import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

import NativeSelect from '@mui/material/NativeSelect';

import Typography from '@mui/material/Typography';
import { useAppSelector, useAppDispatch } from '../hook';

import { toggleOperator } from '../store/calculatorSlice';

type selectNamesTypes = {
	1: string,
	2: string,
	3: string,
}

const selectNames: selectNamesTypes = {
	1: "Оператор 1",
	2: "Оператор 2",
	3: "Оператор 3",
}

const Operator: React.FC = () => {
	const dispatch = useAppDispatch();
	const operator = useAppSelector(state => state.list.operator);

	return (
		<Box sx={{ minWidth: 120 }}>
			<Typography gutterBottom>Оператор</Typography>
			<FormControl fullWidth>
				<NativeSelect
					defaultValue={operator}
					onChange={(event) => dispatch(toggleOperator(event.target.value))}
					inputProps={{
						name: 'operator',
						id: 'uncontrolled-native',
					}}
				>
					<option value={selectNames[1]}>{selectNames[1]}</option>
					<option value={selectNames[2]}>{selectNames[2]}</option>
					<option value={selectNames[3]}>{selectNames[3]}</option>
				</NativeSelect>
			</FormControl>
		</Box>
	);
}

export default Operator;