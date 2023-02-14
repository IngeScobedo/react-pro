import {
    BrowserRouter,
    Navigate,
    NavLink,
    Route,
    Routes
} from "react-router-dom";
import logo from "../assets/react.svg";
import { LazyPage, LazyPage1, LazyPage2 } from "../lazyload/pages";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="Logo" />
          <ul>
            <li>
              <NavLink
                to="/lazy1"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="lazy1" element={<LazyPage />} />
          <Route path="lazy2" element={<LazyPage1 />} />
          <Route path="lazy3" element={<LazyPage2 />} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
