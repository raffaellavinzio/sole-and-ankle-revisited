/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <CloseButtonWrapper onClick={onDismiss}>
          <UnstyledButton>
            <Icon id='close' strokeWidth={2} size={22} />
            <VisuallyHidden>Dismiss Modal</VisuallyHidden>
          </UnstyledButton>
        </CloseButtonWrapper>
        <Top />
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href='/terms'>Terms and Conditions</FooterLink>
          <FooterLink href='/privacy'>Privacy Policy</FooterLink>
          <FooterLink href='/contact'>Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(96, 100, 108, 0.8);

  @media ${QUERIES.laptop} {
    display: block;
  }
`;

const Content = styled(DialogContent)`
  position: relative;
  margin-left: auto;
  background-color: ${COLORS.white};
  width: 300px;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 32px;
  top: 26px;

  @media ${QUERIES.phone} {
    right: 20px;
  }
`;

const Nav = styled.nav`
  flex: 1;
`;

const NavLink = styled.a`
  display: block;
  color: inherit;
  font-size: 18px;
  font-weight: ${WEIGHTS.medium};
  line-height: 2;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: ${COLORS.secondary}
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  font-size: 14px;
  font-weight: ${WEIGHTS.normal};
  text-decoration: none;
  line-height: 2;
  &:nth-child(1) {
    margin-top: auto;
  }
`;

const Top = styled.div`
  flex: 1;
`;

export default MobileMenu;
