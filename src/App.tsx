import './App.css';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Phone from './components/Phone';
import Operator from './components/Operator';
import Minutes from './components/Minutes';
import Internet from './components/Internet';
import WiFiRouter from './components/WiFiRouter';
import Social from './components/Social';
import CulcButton from './components/CulcButton';

const App: React.FC = () => {
	return (
		<Container maxWidth="md">
			<Grid container spacing={2}>
				<Grid item xs={12} style={{ margin: '10px 0' }}>
					<Typography variant="h4">Настройте тариф</Typography>
				</Grid>
				<Grid item xs={12}>
					<Phone />
				</Grid>
				<Grid item xs={12}>
					<Operator />
				</Grid>
				<Grid item xs={12}>
					<Minutes />
				</Grid>
				<Grid item xs={12}>
					<Internet />
				</Grid>
				<Grid item xs={12}>
					<WiFiRouter />
				</Grid>
				<Grid item xs={12}>
					<Social />
				</Grid>
				<Grid item xs={12}>
					<CulcButton />
				</Grid>
			</Grid>
		</Container >
	);
};

export default App;