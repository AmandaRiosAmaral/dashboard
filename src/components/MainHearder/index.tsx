import React from 'react';
import { Container, Profile, Welcome, UserName } from './styles';
import Mode from '../Mode';

const MainHeader: React.FC = () => {
  return (
    <Container>
      <Mode 
        checked
        labelLeft='dark' 
        labelRight='light' 
        onChange={
          () => console.log('mudou')
        }></Mode>
      <Profile>
        <Welcome>Hello</Welcome>
        <UserName>Amanda</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;