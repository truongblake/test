import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const location = useLocation();
  const currentRoute = location.pathname;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    { label: "Home", route: "/", className: "nav-link" },
    { label: "About", route: "/about", className: "nav-link" },
    { label: "Work", route: "/work", className: "nav-link" },
    { label: "Projects", route: "/projects", className: "nav-link" },
    { label: "Contact", route: "/contact", className: "nav-link md:hidden" },
  ];

  const isNavbarRoute = navItems.some((item) => item.route === currentRoute);

  useEffect(() => {
    const setActiveBoxPosition = () => {
      if (lastActiveLink.current && isNavbarRoute) {
        // Apply transition only when moving to a navbar item
        activeBox.current.style.transition = "all 0.3s ease";
        activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
        activeBox.current.style.width =
          lastActiveLink.current.offsetWidth + "px";
        activeBox.current.style.height =
          lastActiveLink.current.offsetHeight + "px";
      } else {
        // Remove transition when no navbar item is active
        activeBox.current.style.transition = "none";
        activeBox.current.style.top = "0px";
        activeBox.current.style.left = "0px";
        activeBox.current.style.width = "0px";
        activeBox.current.style.height = "0px";
      }
    };

    if (isNavbarRoute) {
      const activeLink = document.querySelector(
        `.nav-link[href="${currentRoute}"]`
      );

      if (activeLink) {
        lastActiveLink.current = activeLink;
        activeLink.classList.add("active");
        setActiveBoxPosition();
      }
    } else {
      setActiveBoxPosition();
    }

    window.addEventListener("resize", setActiveBoxPosition);
    return () => window.removeEventListener("resize", setActiveBoxPosition);
  }, [currentRoute, isNavbarRoute]);

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, className, route }, key) => (
        <Link
          to={route}
          className={`${className} ${currentRoute === route ? "active" : ""}`}
          key={key}
          onClick={scrollToTop}
        >
          {label}
        </Link>
      ))}
      {/* controls the white box */}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;
