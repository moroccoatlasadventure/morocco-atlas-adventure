import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import styles from "./Header.module.css";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isToursDropdownOpen, setIsToursDropdownOpen] = useState(false);

  const navLinks = [
    { path: "/", label: t("nav.home"), isScrollTarget: true },
    { path: "/about", label: t("nav.about"), isScrollTarget: true },
    { 
      path: "/destinations", 
      label: t("nav.places"), 
      isScrollTarget: false,
      isDropdown: true,
      dropdownItems: [
        { label: "Top Destinations", action: () => scrollToToursSection() },
        { label: "Marrakech", path: "/tour/marrakech" },
        { label: "Fez", path: "/tour/fez" },
        { label: "Tangier", path: "/tour/tangier" },
        { label: "Casablanca", path: "/tour/casablanca" },
      ]
    },
    { path: "/trekking", label: t("nav.trips"), isScrollTarget: true },
    { path: "/activities", label: t("nav.activities"), isScrollTarget: true },
    { path: "/contact", label: t("nav.contact"), isScrollTarget: false },
  ];

  // Track which section is currently in view
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("home"); // Reset to home when not on homepage
      return;
    }

    const handleScroll = () => {
      const aboutSection = document.querySelector(".aboutPreview");
      const toursSection = document.querySelector(".toursSection");
      const trekkingSection = document.querySelector(".trekkingTripsPreview");
      const activitiesSection = document.querySelector(".activitiesPreview");

      const sections = [
        { element: activitiesSection, name: "activities" },
        { element: trekkingSection, name: "trekking" },
        { element: toursSection, name: "tours" },
        { element: aboutSection, name: "about" },
      ];

      // Find the first section that's in view
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const isInView = rect.top <= 100 && rect.bottom >= 100;

          if (isInView) {
            setActiveSection(section.name);
            return;
          }
        }
      }

      // If no section is in view, default to home
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (link) => {
    setIsMenuOpen(false);

    if (link.isScrollTarget) {
      // If we're not on the homepage, navigate there first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          scrollToSection(link.path);
        }, 100);
      } else {
        // We're already on homepage, just scroll
        scrollToSection(link.path);
      }
    }
  };

  const scrollToSection = (path) => {
    switch (path) {
      case "/":
        scrollToTop();
        break;
      case "/about":
        scrollToAboutSection();
        break;
      case "/destinations":
        scrollToToursSection();
        break;
      case "/trekking":
        scrollToTrekkingSection();
        break;
      case "/activities":
        scrollToActivitiesSection();
        break;
      default:
        break;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToAboutSection = () => {
    const aboutSection = document.querySelector(".aboutPreview");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToToursSection = () => {
    const toursSection = document.querySelector(".toursSection");
    if (toursSection) {
      toursSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTrekkingSection = () => {
    const trekkingSection = document.querySelector(".trekkingTripsPreview");
    if (trekkingSection) {
      trekkingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToActivitiesSection = () => {
    const activitiesSection = document.querySelector(".activitiesPreview");
    if (activitiesSection) {
      activitiesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src="/images/logo.png" alt="Morocco Atlas Adventure" />
          <span>Morocco Atlas Adventure</span>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          {navLinks.map((link) => {
            const isActive = link.isScrollTarget
              ? location.pathname === "/" && link.path === "/"
                ? activeSection === "home"
                : location.pathname === "/" && link.path === "/about"
                ? activeSection === "about"
                : location.pathname === "/" && link.path === "/destinations"
                ? activeSection === "tours"
                : location.pathname === "/" && link.path === "/trekking"
                ? activeSection === "trekking"
                : location.pathname === "/" && link.path === "/activities"
                ? activeSection === "activities"
                : false
              : location.pathname === link.path;

            if (link.isDropdown) {
              return (
                <div key={link.path} className={styles.dropdownContainer}>
                  <button
                    className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                    onClick={() => setIsToursDropdownOpen(!isToursDropdownOpen)}
                    onBlur={() => setTimeout(() => setIsToursDropdownOpen(false), 200)}
                  >
                    {link.label}
                  </button>
                  {isToursDropdownOpen && (
                    <div className={styles.dropdownMenu}>
                      {link.dropdownItems.map((item, index) => (
                        <div key={index} className={styles.dropdownItem}>
                          {item.path ? (
                            <Link
                              to={item.path}
                              onClick={() => {
                                setIsToursDropdownOpen(false);
                                setIsMenuOpen(false);
                                navigate(item.path);
                              }}
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <button
                              onClick={() => {
                                item.action();
                                setIsToursDropdownOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              {item.label}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return link.isScrollTarget ? (
              <button
                key={link.path}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                onClick={() => handleNavClick(link)}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.headerActions}>
          <LanguageSelector />
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
