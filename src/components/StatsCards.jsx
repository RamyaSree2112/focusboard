import {
  ListTodo,
  Clock3,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import "./StatsCards.css";

function StatsCards({ tasks }) {
  const totalTasks = tasks.length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In progress"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const completionPercentage =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <section className="stats-grid">
      <article className="stat-card">
        <ListTodo />
        <p>Total Tasks</p>
        <h2>{totalTasks}</h2>
      </article>

      <article className="stat-card">
        <Clock3 />
        <p>In Progress</p>
        <h2>{inProgressTasks}</h2>
      </article>

      <article className="stat-card">
        <CheckCircle2 />
        <p>Completed</p>
        <h2>{completedTasks}</h2>
      </article>

      <article className="stat-card">
        <TrendingUp />
        <p>Completion Rate</p>
        <h2>{completionPercentage}%</h2>
      </article>
    </section>
  );
}

export default StatsCards;