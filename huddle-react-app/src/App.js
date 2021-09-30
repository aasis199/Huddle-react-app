import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

const theme = {
  colors: {
    header: '#edfbff',
    body: '#fff',
    footer: 'hsl(192, 100%, 9%)',
  }
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme = {theme}>
        <Header/>
        <Container/>
        <Footer/>
      </ThemeProvider>
    </div>

  );
}

export default App;
