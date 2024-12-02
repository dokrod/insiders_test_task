import "./Navbar.css";

import cn from "classnames";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn("link", { active: isActive });

  return (
    <nav className="nav">
      <div className="container">
        <NavLink to="edit" className={getLinkClass}>
          Edit Users
        </NavLink>
        <NavLink to="users" className={getLinkClass}>
          Users
        </NavLink>
      </div>
    </nav>
  );
};
