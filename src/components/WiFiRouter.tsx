import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { toggleRouterRental, toggleBuyRouter } from '../store/calculatorSlice';
import { useAppSelector, useAppDispatch } from '../hook';

const WiFiRouter: React.FC = () => {
	const dispatch = useAppDispatch();
	const rental = useAppSelector(state => state.list.routerRental);
	const buy = useAppSelector(state => state.list.buyRouter);

	return (
		<Box sx={{ width: 300 }}>
			<Typography gutterBottom>Wi-Fi роутер</Typography>
			<FormGroup>
				<FormControlLabel control={
					<Checkbox
						checked={rental}
						onChange={(event) => dispatch(toggleRouterRental(event.target.checked))}
					/>
				} label="Аренда 99₽/мес." />
				<FormControlLabel required control={
					<Checkbox
						checked={buy}
						onChange={(event) => dispatch(toggleBuyRouter(event.target.checked))}
					/>
				} label="Выкупить 2600₽" />
			</FormGroup>
		</Box>
	);
};

export default WiFiRouter;