
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { sampleTasks } from "./data/sampleTasks";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import FocusNotes from "./components/FocusNotes";
import StatsCards from "./components/StatsCards";
import TaskList from "./components/TaskList";
import TaskFilters from "./components/TaskFilters";
import CreateTask from "./components/CreateTask";
import TaskDetails from "./components/TaskDetails";
import AllTasks from "./pages/AllTasks";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Tasks");
  const [selectedPriority, setSelectedPriority] =
    useState("All Priorities");

  // Store all tasks
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("focusboard-tasks");

    return savedTasks ? JSON.parse(savedTasks) : sampleTasks;
  });

  // Create and edit popup states
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // View popup state
  const [viewingTask, setViewingTask] = useState(null);

  // Save tasks in localStorage
  useEffect(() => {
    localStorage.setItem("focusboard-tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Create a new task
  const handleCreateTask = (newTask) => {
    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);

    setShowCreateForm(false);
  };

  // Delete a task
  const handleDeleteTask = (taskId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      setTasks((previousTasks) =>
        previousTasks.filter((task) => task.id !== taskId)
      );

      setViewingTask((previousTask) =>
        previousTask?.id === taskId ? null : previousTask
      );
    }
  };

  // Edit a task
  const handleEditTask = (task) => {
    setViewingTask(null);
    setEditingTask(task);
    setShowCreateForm(true);
  };

  // Update an existing task
  const handleUpdateTask = (updatedTask) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );

    setEditingTask(null);
    setShowCreateForm(false);
  };

  // View task details
  const handleViewTask = (task) => {
    setViewingTask(task);
  };

  // Open create task form
  const openCreateForm = () => {
    setEditingTask(null);
    setShowCreateForm(true);
  };

  // Search and filter tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "All Tasks" ||
      task.status === selectedStatus;

    const matchesPriority =
      selectedPriority === "All Priorities" ||
      task.priority === selectedPriority;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <BrowserRouter>
      <div className="app-container">

        {/* Sidebar */}
        <Sidebar />

        <main className="main-content">

          {/* Header */}
          <Header onNewTask={openCreateForm} />

          {/* Create and Edit Task Popup */}
          {showCreateForm && (
            <CreateTask
              onCreate={handleCreateTask}
              onClose={() => {
                setShowCreateForm(false);
                setEditingTask(null);
              }}
              task={editingTask}
              onUpdate={handleUpdateTask}
            />
          )}

          {/* View Task Details Popup */}
          {viewingTask && (
            <TaskDetails
              task={viewingTask}
              onClose={() => setViewingTask(null)}
            />
          )}

          {/* Page Navigation */}
          <Routes>

            {/* Dashboard Page */}
            <Route
              path="/"
              element={
                <>
                  <FocusNotes />

                  <StatsCards tasks={tasks} />

                  <TaskFilters
                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}
                    selectedPriority={selectedPriority}
                    setSelectedPriority={setSelectedPriority}
                    tasks={tasks}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    onNewTask={openCreateForm}
                  />

                  <TaskList
                    tasks={filteredTasks}
                    onDelete={handleDeleteTask}
                    onEdit={handleEditTask}
                    onView={handleViewTask}
                  />
                </>
              }
            />

            {/* My Tasks Page */}
            <Route
              path="/tasks"
              element={
                <AllTasks
                  tasks={tasks}
                  onDelete={handleDeleteTask}
                  onEdit={handleEditTask}
                  onView={handleViewTask}
                />
              }
            />

            {/* Other Pages - Coming Soon */}
            <Route
              path="/calendar"
              element={<h2>Calendar Page</h2>}
            />

            <Route
              path="/settings"
              element={<h2>Settings Page</h2>}
            />

            {/* Invalid URL */}
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />

          </Routes>

        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
