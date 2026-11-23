
import TaskCard from "./TaskCard";
import "./TaskList.css";

function TaskList({ tasks, onDelete, onEdit, onView }) {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
            onView={onView}
          />
        ))
      ) : (
        <div className="empty-state">
          <h3>No tasks found</h3>
          <p>Try changing your search or filters.</p>
        </div>
      )}
    </div>
  );
}

export default TaskList;
