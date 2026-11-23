
import { useState } from "react";
import { ListTodo, Search } from "lucide-react";
import TaskList from "../components/TaskList";
import "./AllTasks.css";

function AllTasks({ tasks, onDelete, onEdit, onView }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" ||
      task.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="all-tasks-page">

      <div className="all-tasks-header">
        <div>
          <div className="all-tasks-heading">
            <ListTodo size={26} />
            <h1>My Tasks</h1>
          </div>

          <p>Manage and track all your tasks in one place.</p>
        </div>

        <span className="total-tasks">
          {tasks.length} Total Tasks
        </span>
      </div>

      <div className="all-tasks-filters">

        <div className="task-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="To do">To do</option>
          <option value="In progress">In progress</option>
          <option value="Completed">Completed</option>
        </select>

      </div>

      <div className="all-tasks-content">

        <div className="all-tasks-list-header">
          <h2>All Tasks</h2>
          <span>{filteredTasks.length} tasks found</span>
        </div>

        {filteredTasks.length > 0 ? (
          <TaskList
            tasks={filteredTasks}
            onDelete={onDelete}
            onEdit={onEdit}
            onView={onView}
          />
        ) : (
          <div className="no-tasks">
            <ListTodo size={40} />
            <h3>No tasks found</h3>
            <p>Try changing your search or status filter.</p>
          </div>
        )}

      </div>

    </div>
  );
}

export default AllTasks;
