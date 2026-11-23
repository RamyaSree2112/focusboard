
import { Bell, Plus } from "lucide-react";
import "./Header.css";

function Header({ onNewTask }) {
  return (
    <header className="header">

      <div className="welcome">
        <h2>Good morning!</h2>
        <p>Here's what's happening with your tasks today.</p>
      </div>

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
