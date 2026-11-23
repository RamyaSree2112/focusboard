
import { Search } from "lucide-react";
import "./TaskFilters.css";

function TaskFilters({
  selectedStatus,
  setSelectedStatus,
  selectedPriority,
  setSelectedPriority,
  tasks,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="task-filters">

      {/* First row: My Tasks heading and Priority dropdown */}
      <div className="task-filters-header">
        <h2>My Tasks</h2>

        <select
          className="priority-filter"
          aria-label="Filter tasks by priority"
          value={selectedPriority}
          onChange={(event) => setSelectedPriority(event.target.value)}
        >
          <option value="All Priorities">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Second row: Status buttons and Search */}
      <div className="task-filters-bottom">

        <div className="status-filters" aria-label="Filter tasks by status">

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

        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search tasks..."
            aria-label="Search tasks"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

      </div>

    </div>
  );
}

export default TaskFilters;
