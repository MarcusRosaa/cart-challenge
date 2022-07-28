import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1300px;
  margin: 0 auto;
  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1``;

export const HeaderNavigation = styled.nav`
`;

export const NavigationList = styled.ul`
  list-style: none;
`;

export const NavigationItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    width: 34px;
    height: 34px;
    cursor: pointer;

    :hover {
      transform: scale(1.1);
    }

    :active {
      transform: scale(1);
      transition: transform 2ms ease-in-out;
    }
  }
`;
