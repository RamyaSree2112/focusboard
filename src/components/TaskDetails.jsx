
import { X, CalendarDays, Tag, Flag } from "lucide-react";
import "./TaskDetails.css";

function TaskDetails({ task, onClose }) {
  if (!task) return null;

  return (
    <div className="task-details-overlay" onClick={onClose}>
      <section
        className="task-details-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="task-details-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="task-details-header">
          <h2 id="task-details-title">Task Details</h2>

          <button
            type="button"
            className="task-details-close"
            onClick={onClose}
            aria-label="Close task details"
          >
            <X size={20} />
          </button>
        </div>

        <div className="task-details-content">
          <h3>{task.title}</h3>

          <p className="task-details-description">
            {task.description || "No description available."}
          </p>

          <div className="task-details-item">
            <Tag size={18} />
            <div>
              <span>Category</span>
              <strong>{task.category}</strong>
            </div>
          </div>

          <div className="task-details-item">
            <Flag size={18} />
            <div>
              <span>Priority</span>
              <strong>{task.priority}</strong>
            </div>
          </div>

          <div className="task-details-item">
            <CalendarDays size={18} />
            <div>
              <span>Due Date</span>
              <strong>{task.dueDate || "No due date"}</strong>
            </div>
          </div>

          <div className="task-details-item">
            <div className="details-status-dot" />
            <div>
              <span>Status</span>
              <strong>{task.status}</strong>
            </div>
          </div>
        </div>

        <div className="task-details-footer">
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
}

export default TaskDetails;
