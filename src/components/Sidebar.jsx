
import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  Settings,
  Menu,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-header">
        <h2 className="logo">FocusBoard</h2>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <nav className={`sidebar-nav ${isMenuOpen ? "open" : ""}`}>

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          <LayoutDashboard size={20} />
          <span>Overview</span>
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          <CheckSquare size={20} />
          <span>My Tasks</span>
        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          <CalendarDays size={20} />
          <span>Calendar</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;
