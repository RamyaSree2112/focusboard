
import { useState, useEffect } from "react";
import { X, CalendarDays } from "lucide-react";
import "./CreateTask.css";

function CreateTask({ onCreate, onClose, task, onUpdate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("To do");
  const [dueDate, setDueDate] = useState("");
  const [titleError, setTitleError] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setPriority(task.priority);
      setStatus(task.status);
      setDueDate(task.dueDate);
    } else {
      setTitle("");
      setDescription("");
      setPriority("Medium");
      setStatus("To do");
      setDueDate("");
    }

    setTitleError("");
  }, [task]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      setTitleError("Please enter a task title.");
      return;
    }

    setTitleError("");

    const newTask = {
      id: task ? task.id : Date.now().toString(),
      title: title.trim(),
      description,
      category: task ? task.category : "Development",
      priority,
      status,
      dueDate,
    };

    if (task) {
      onUpdate(newTask);
    } else {
      onCreate(newTask);
    }

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setStatus("To do");
    setDueDate("");
    setTitleError("");
  };

  return (
    <div className="create-task-overlay">

      <section
        className="create-task-form"
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-task-heading"
      >

        <div className="form-header">
          <div>
            <h2 id="create-task-heading">
              {task ? "Edit task" : "Create new task"}
            </h2>

            <p>
              Add your task details to stay on top of your work.
            </p>
          </div>

          <button
            type="button"
            className="close-form-btn"
            onClick={onClose}
            aria-label="Close form"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="title">
              Task title <span>*</span>
            </label>

            <input
              type="text"
              id="title"
              placeholder="e.g. Update pricing page"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
                setTitleError("");
              }}
              aria-invalid={Boolean(titleError)}
              aria-describedby={titleError ? "title-error" : undefined}
            />

            {titleError && (
              <p className="error-message" id="title-error">
                {titleError}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">
              Description
            </label>

            <textarea
              id="description"
              placeholder="Add notes about this task..."
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="status">Status</label>

              <select
                id="status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              >
                <option value="To do">To do</option>
                <option value="In progress">In progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority</label>

              <select
                id="priority"
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

          </div>

          <div className="form-group due-date-group">
            <label htmlFor="dueDate">Due date</label>

            <div className="date-input-wrapper">
              <CalendarDays size={17} />

              <input
                type="date"
                id="dueDate"
                value={dueDate}
                onChange={(event) => setDueDate(event.target.value)}
                required
              />
            </div>
          </div>

          <p className="required-note">
            * Required field
          </p>

          <div className="form-footer">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="save-task-btn">
              {task ? "Update task" : "Create task"}
            </button>
          </div>

        </form>

      </section>
    </div>
  );
}

export default CreateTask;
