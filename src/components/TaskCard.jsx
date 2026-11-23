
import {
  CalendarDays,
  Check,
  Clock3,
  Circle,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import "./TaskCard.css";

function TaskCard({ task, onDelete, onEdit, onView }) {
  const getStatusIcon = () => {
    if (task.status === "Completed") {
      return <Check size={17} />;
    }

    if (task.status === "In progress") {
      return <Clock3 size={17} />;
    }

    return <Circle size={17} />;
  };

  const statusClass = task.status.toLowerCase().replace(" ", "-");

  return (
    <article className="task-card">

      {/* Left: Status, title and description */}
      <div className="task-card-left">

        <div className={`task-status-icon ${statusClass}`}>
          {getStatusIcon()}
        </div>

        <div className="task-card-text">
          <h3 className="task-title">{task.title}</h3>
          <p className="task-description">{task.description}</p>
        </div>

      </div>

      {/* Middle: Category, priority and due date */}
      <div className="task-card-details">

        <span className="category-badge">
          {task.category}
        </span>

        <span className={`priority-badge ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>

        <div className="due-date">
          <CalendarDays size={16} />
          <span>{task.dueDate}</span>
        </div>

      </div>

      {/* Right: Action icons */}
      <div className="task-actions">

        <button
          type="button"
          className="task-action-btn view-btn"
          onClick={() => onView(task)}
          aria-label={`View ${task.title}`}
          title="View task"
        >
          <Eye size={18} />
        </button>

        <button
          type="button"
          className="task-action-btn edit-btn"
          onClick={() => onEdit(task)}
          aria-label={`Edit ${task.title}`}
          title="Edit task"
        >
          <Pencil size={18} />
        </button>

        <button
          type="button"
          className="task-action-btn delete-btn"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.title}`}
          title="Delete task"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </article>
  );
}

export default TaskCard;
