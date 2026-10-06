import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import styled from "styled-components";

const wrapperData = [
  {
    id: 1,
    href: "https://github.com/sleiterr",
    className: "icon icon-github",
    icon: <FaGithub className="h-5 w-5 text-white" />,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/oleg-troian-031922250/",
    className: "icon icon-in",
    icon: <FaLinkedin className="h-5 w-5 text-white" />,
  },
  {
    id: 3,
    href: "https://www.upwork.com/freelancers/~01ad4dfb96e6282764?mp_source=share",
    className: "icon icon-upwork",
    icon: <FaSquareUpwork className="h-5 w-5 text-white" />,
  },
];

export const LinkWrapper = () => {
  return (
    <StyledWrapper>
      <ul className="container">
        {wrapperData.map((item) => (
          <li key={item.id} className="cursor-pointer">
            <a
              href={item.href}
              target="_blank"
              className={item.className}
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    display: flex;
    column-gap: 28px;
  }

  .icon {
    display: inline-flex;
    width: 44px;
    height: 44px;
    text-decoration: none;
    outline: 1px solid white;
    border-radius: 50%;
    transition-property: outline-offset, outline-color, background-color;
    transition-duration: 0.25s;
    color: white;
  }

  .icon:hover {
    outline-offset: 4px;
  }

  .icon svg {
    margin: auto;
    width: 20px;
    height: 20px;
  }

  .icon-github:hover {
    background-color: #555555;
    outline-color: #555555;
  }

  .icon-in:hover {
    background-color: #0a66c2;
    outline-color: #0a66c2;
  }

  .icon-upwork:hover {
    background-color: #14a800;
    outline-color: #14a800;
  }

  .icon:hover svg {
    animation: shake 0.25s;
  }

  @keyframes shake {
    10% {
      transform: rotate(15deg);
    }
    20% {
      transform: rotate(-15deg);
    }
  }
`;
