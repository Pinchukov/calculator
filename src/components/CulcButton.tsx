import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useAppSelector } from '../hook';

function CulcButton() {
	const calcSum = useAppSelector(state => state.list.calcSum);
	const list = useAppSelector(state => state.list);
	return (
		<Stack spacing={2} direction="row">
			<Button variant="contained" onClick={
				() => alert(JSON.stringify(list, null, 2))
			}>{calcSum} ₽. в месяц</Button>
		</Stack>
	);
};

export default CulcButton;