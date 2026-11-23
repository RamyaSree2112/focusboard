
import { Search, Plus } from "lucide-react";
import "./TaskFilters.css";

function TaskFilters({
  selectedStatus,
  setSelectedStatus,
  selectedPriority,
  setSelectedPriority,
  tasks,
  searchTerm,
  setSearchTerm,
  onNewTask,
}) {
  return (
    <div className="task-filters">

      {/* Heading and New Task button */}
      <div className="task-filters-header">
        <h2>My Tasks</h2>

        <div className="task-filter-actions">
          <select
            className="priority-filter"
            aria-label="Filter tasks by priority"
            value={selectedPriority}
            onChange={(event) =>
              setSelectedPriority(event.target.value)
            }
          >
            <option value="All Priorities">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <button
            type="button"
            className="mobile-add-task"
            onClick={onNewTask}
            aria-label="Create new task"
            title="Create new task"
          >
            <Plus size={21} />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="task-search-row">
        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search tasks..."
            aria-label="Search tasks"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />
        </div>
      </div>

      {/* Status filters */}
      <div className="task-filters-bottom">
        <div
          className="status-filters"
          aria-label="Filter tasks by status"
        >
          <button
            type="button"
            className={`filter-btn ${selectedStatus === "All Tasks" ? "active" : ""}`}
            aria-pressed={selectedStatus === "All Tasks"}
            onClick={() => setSelectedStatus("All Tasks")}
          >
            All Tasks <span className="task-count">{tasks.length}</span>
          </button>

          <button
            type="button"
            className={`filter-btn ${selectedStatus === "To do" ? "active" : ""}`}
            aria-pressed={selectedStatus === "To do"}
            onClick={() => setSelectedStatus("To do")}
          >
            To do
          </button>

          <button
            type="button"
            className={`filter-btn ${selectedStatus === "In progress" ? "active" : ""}`}
            aria-pressed={selectedStatus === "In progress"}
            onClick={() => setSelectedStatus("In progress")}
          >
            In progress
          </button>

          <button
            type="button"
            className={`filter-btn ${selectedStatus === "Completed" ? "active" : ""}`}
            aria-pressed={selectedStatus === "Completed"}
            onClick={() => setSelectedStatus("Completed")}
          >
            Completed
          </button>
        </div>
      </div>

    </div>
  );
}

export default TaskFilters;
