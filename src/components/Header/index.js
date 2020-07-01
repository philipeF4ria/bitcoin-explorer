import React from 'react';
import { FaBitcoin } from 'react-icons/fa';

import { HeaderBar } from './styles';

const Header = () => {
  return (
    <HeaderBar>
      <FaBitcoin size={40} />
      <strong> Bitcoin Explorer </strong>
    </HeaderBar>
  );
};

export default Header;
