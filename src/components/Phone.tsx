import * as React from 'react';
import { IMaskInput } from 'react-imask';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import { togglePhone } from '../store/calculatorSlice';
import { useAppSelector, useAppDispatch } from '../hook';

interface CustomProps {
	onChange: (event: { target: { name: string; value: string } }) => void;
	name: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
	function TextMaskCustom(props, ref) {
		const { onChange, ...other } = props;
		return (
			<IMaskInput
				{...other}
				mask="+7(#00) 000-0000"
				definitions={{
					'#': /[1-9]/,
				}}
				inputRef={ref}
				onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
				overwrite
			/>
		);
	},
);

const Phone: React.FC = () => {
	const dispatch = useAppDispatch();
	const phone = useAppSelector(state => state.list.phone);

	const [values, setValues] = React.useState({
		//textmask: '(100) 000-0000',
		textmask: phone,
		numberformat: '1320',
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		//console.log("event Tel", event.target.value)
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
		dispatch(togglePhone(event.target.value)) 
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<Typography gutterBottom>Телефон</Typography>
			<FormControl variant="standard" fullWidth>
				<Input
					value={values.textmask}
					onChange={handleChange}
					name="textmask"
					id="formatted-text-mask-input"
					inputComponent={TextMaskCustom as any}
				/>
				<FormHelperText>Обязательное поле</FormHelperText>
			</FormControl>
		</Box>
	);
}

export default Phone;