
import { Bell, Plus } from "lucide-react";
import "./Header.css";

function Header({ onNewTask }) {
  return (
    <header className="header">

      {/* Mobile top bar */}
      <div className="mobile-topbar">
        <h2 className="mobile-logo">FocusBoard</h2>

        <div className="mobile-profile">
          R
        </div>
      </div>

      {/* Welcome section */}
      <div className="welcome">
        <h2 className="desktop-welcome">Good morning!</h2>

        <h2 className="mobile-welcome">
          Your work, in focus.
        </h2>

        <p className="desktop-description">
          Here's what's happening with your tasks today.
        </p>

        <p className="mobile-description">
          Stay organized and keep moving forward.
        </p>
      </div>

      {/* Desktop header actions */}
      <div className="header-actions">

        <button
          type="button"
          className="new-task-btn"
          onClick={onNewTask}
        >
          <Plus size={18} />
          New Task
        </button>

        <button
          type="button"
          className="notification-btn"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>

        <div className="profile">
          <span>R</span>
        </div>

      </div>

    </header>
  );
}

export default Header;
