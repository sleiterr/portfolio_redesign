import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import logo from "../../assets/logo/logo-white.svg";

const LogoLink = ({ scrollTarget = "hero" }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === "/") {
      scroller.scrollTo(scrollTarget, {
        smooth: true,
        duration: 400,
      });
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <img
        src={logo}
        alt="logo"
        onClick={handleClick}
        className="w-[120px] h-[52px] md:w-[105px] md:h-[37px] cursor-pointer"
      />
    </>
  );
};

export default LogoLink;
