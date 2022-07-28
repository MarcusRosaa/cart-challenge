import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import Cart from '../Cart';
import {
  Container, HeaderNavigation, Logo, NavigationItem, NavigationList,
} from './styles';

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleCartOpen() {
    setOpen((prevState) => !prevState);
  }

  return (
    <Container>
      <Logo>LOGO</Logo>

      <HeaderNavigation>
        <NavigationList>
          <NavigationItem>
            <AiOutlineShoppingCart onClick={handleCartOpen} />
            <Cart open={open} />
          </NavigationItem>
        </NavigationList>
      </HeaderNavigation>
    </Container>
  );
}
