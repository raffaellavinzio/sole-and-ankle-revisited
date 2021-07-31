import React from "react";
import styled from "styled-components/macro";

import { QUERIES} from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Side />

        <NavMobile>
          <UnstyledButton>
            <Icon id='shopping-bag' strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id='search' strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id='menu' strokeWidth={2} />
          </UnstyledButton>
        </NavMobile>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);

  @media ${QUERIES.laptop} {
    overflow-y: hidden;
    overflow-x: auro;
  }

  @media ${QUERIES.phone} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8vw - 4rem, 2.5rem);
  margin: 0px 48px;
  margin-right: -32px;

  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const NavMobile = styled.nav`
  display: none;

  @media ${QUERIES.tablet} {
    color: var(--color-gray-900);
    display: flex;
    gap: 48px;
  }

  @media ${QUERIES.phone} {
    gap: 24px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
