import React from 'react';
import { Grid } from './styles';

import MainHeader from '../MainHearder';
import Menu from '../Menu';
import Content from '../Content';

const Layout: React.FC = () => {
  return (
    <Grid>
      <MainHeader />
      <Menu />
      <Content />
    </ Grid>
  );
};

export default Layout;