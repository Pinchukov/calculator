import './App.css';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Phone from './components/Phone';
import Operator from './components/Operator';
import Minutes from './components/Minutes';
import Internet from './components/Internet';
import WiFiRouter from './components/WiFiRouter';
import CulcButton from './components/CulcButton';

function App() {
	return (
		<Container maxWidth="xl">
			<Grid container spacing={2}>
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
					<CulcButton />
				</Grid>
			</Grid>
		</Container>
	);
}

export default App;