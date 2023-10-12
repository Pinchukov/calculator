import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { toggleFacebook, toggleVk, toggleOdnoklassniki, toggleiInstagram, toggletTikTok } from '../store/calculatorSlice';
import { useAppSelector, useAppDispatch } from '../hook';

const Social: React.FC = () => {
	const dispatch = useAppDispatch();

	const facebook = useAppSelector(state => state.list.socialMedia.facebook);
	const vk = useAppSelector(state => state.list.socialMedia.vk);
	const odnoklassniki = useAppSelector(state => state.list.socialMedia.odnoklassniki);
	const instagram = useAppSelector(state => state.list.socialMedia.instagram);
	const tikTok = useAppSelector(state => state.list.socialMedia.tikTok);

	return (
		<Box sx={{ width: '100%' }}>
			<Typography variant="h6" gutterBottom>Соцсети</Typography>
			<Stack direction="row" spacing={1}>
				<IconButton aria-label="facebook" onClick={() => dispatch(toggleFacebook(facebook.state))}>
					{facebook.price}₽
				</IconButton>
				<IconButton aria-label="vk" color="primary" onClick={() => dispatch(toggleVk(vk.state))}>
					{vk.price}₽
				</IconButton>
				<IconButton aria-label="odnoklassniki" color="secondary" onClick={() => dispatch(toggleOdnoklassniki(odnoklassniki.state))}>
					{odnoklassniki.price}₽
				</IconButton>
				<IconButton aria-label="instagram" color="primary" onClick={() => dispatch(toggleiInstagram(instagram.state))}>
					{instagram.price}₽
				</IconButton>
				<IconButton aria-label="tikTok" color="primary" onClick={() => dispatch(toggletTikTok(tikTok.state))}>
					{tikTok.price}₽
				</IconButton>
			</Stack>
		</Box>
	);
};

export default Social;