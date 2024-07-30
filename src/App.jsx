import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "animate.css";
import {
  About,
  Contact,
  Courses,
  FrontendMentorChallenges,
  Home,
  Landing,
  Projects,
  Skills,
} from "./components";
import { createContext, useContext } from "react";

import { action as contactAction } from "./components/Contact";

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme");
  return theme || "light";
};
console.log(getThemeFromLocalStorage());
document.body.classList.toggle(
  "dark-theme",
  getThemeFromLocalStorage() === "dark"
);
const AppContext = createContext();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/contact",
        element: <Contact />,
        action: contactAction,
      },
      {
        path: "/fm-challenges",
        element: <FrontendMentorChallenges />,
      },
    ],
  },
]);

function App({ children }) {
  return (
    <AppContext.Provider value={{ getThemeFromLocalStorage }}>
      <RouterProvider router={router}></RouterProvider>
    </AppContext.Provider>
  );
}
export const useAppContext = () => useContext(AppContext);

export default App;
