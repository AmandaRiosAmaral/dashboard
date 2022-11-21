import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Layout />
      </ThemeProvider>
    </>
  );
};

export default App;
