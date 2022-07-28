import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles';

import Routes from '../../Router';

function App() {
  return (
    <BrowserRouter>

      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
