import { Link, useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const scrollToSection = (hash) => {
    const id = hash?.replace("#", "");
    if (!id) return;

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.location.hash = hash;
  };

  const handleNavClick = (item) => {
    handleClick();

    if (!item.url) return;

    if (item.url.startsWith("#")) {
      if (location.pathname !== "/") {
        window.location.assign(`/${item.url}`);
        return;
      }

      scrollToSection(item.url);
      return;
    }

    if (item.url.startsWith("/")) {
      navigate(item.url);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/">
          <h1 className="h5 mb-1">
            The TSAGO Project
          </h1>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => {
              const isExternal = item.url?.startsWith("http");
              const isActive =
                item.url === location.hash ||
                item.url === location.pathname ||
                (item.url === "#features" && location.pathname === "/");

              const linkClasses = `block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                item.onlyMobile ? "lg:hidden" : ""
              } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                isActive ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
              } lg:leading-5 lg:hover:text-n-1 xl:px-12`;

              if (item.url?.startsWith("#")) {
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className={linkClasses}
                  >
                    {item.title}
                  </button>
                );
              }

              if (isExternal) {
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    onClick={handleClick}
                    className={linkClasses}
                  >
                    {item.title}
                  </a>
                );
              }

              return (
                <Link key={item.id} to={item.url} onClick={handleClick} className={linkClasses}>
                  {item.title}
                </Link>
              );
            })}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="https://www.facebook.com/PastorMoyo"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          Facebook
        </a>
        <Button className="hidden lg:flex" href="https://sandbox.flutterwave.com/donate/sdinqa8sues6">
          Donate
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
