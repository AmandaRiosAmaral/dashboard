import React from 'react';
import { Container, ModeLabel, ModeSelector } from './styles';

interface IModeProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Mode: React.FC<IModeProps> = ({
  labelLeft,
  labelRight,
  checked,
  onChange
}) => (
  <Container>
    <ModeLabel>{labelLeft}</ModeLabel>
    <ModeSelector 
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => console.log('mudou')}  
    />
    <ModeLabel>{labelRight}</ModeLabel>
  </Container>
); 

export default Mode;