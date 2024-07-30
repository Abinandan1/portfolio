import { Outlet } from "react-router-dom";
import { Wrapper } from "../wrappers/Home";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import { useEffect, useRef, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useAppContext } from "../App";
const Home = () => {
  const { getThemeFromLocalStorage } = useAppContext();
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const mainRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      mainRef.current.classList.add("show-main");
    }, 1000);
  });
  useEffect(() => {
    console.log(theme);
    localStorage.setItem("theme", theme);
    document.body.classList.toggle(
      "dark-theme",
      getThemeFromLocalStorage() === "dark"
    );
  }, [theme]);
  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <Logo />
          <Navbar />
          <div className="theme-btn-container">
            {theme === "light" ? (
              <button onClick={() => setTheme("dark")} className="theme-btn">
                <IoMoon />
              </button>
            ) : (
              <button onClick={() => setTheme("light")} className="theme-btn">
                <IoSunny />
              </button>
            )}
          </div>
        </div>
      </nav>
      <main ref={mainRef}>
        <Outlet />
      </main>
      <SocialIcons />
    </Wrapper>
  );
};
export default Home;
