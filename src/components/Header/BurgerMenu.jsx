import React from "react";
import styled from "styled-components";

const BurgerMenu = ({ isOpen, toggleMenu, scrolled }) => {
  //   const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <StyledWrapper $isOpen={isOpen} $scrolled={scrolled}>
      <label className="burger" htmlFor="burger">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={toggleMenu}
          id="burger"
        />
        <span />
        <span />
        <span />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .burger {
    position: relative;

    width: 40px;
    height: 25px;
    background: transparent;
    cursor: pointer;
    display: block;
    // outline: 1px solid red;
  }

  .burger input {
    display: none;
  }

  .burger span {
    position: absolute;
    display: block;

    height: 2px;

    width: 100%;
    background: ${({ $isOpen, $scrolled }) =>
      $isOpen || $scrolled ? "var(--bg-burger)" : "var(--default-nav)"};
    border-radius: 9px;
    opacity: 1;
    right: 0;
    transform: rotate(0deg);
    transition: 250ms ease-in-out;
  }

  .burger input:checked ~ span {
    background: var(--bg-burger);
  }

  .burger span:nth-of-type(1) {
    top: 0px;
    // background: red;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }
  .burger span:nth-of-type(2) {
    left: 0;
    height: 2px;
    width: 65%;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 29px;
    left: 5px;
  }
`;

export default BurgerMenu;
