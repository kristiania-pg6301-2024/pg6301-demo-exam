import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")!);
root.render(<Application />);

interface Task {
  description: string;
  completed: boolean;
}
function Application() {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function loadTasks() {
    const tasks = [
      { description: "get it to work", completed: true },
      { description: "move tasks to server", completed: false },
      { description: "deploy to heroku", completed: false },
    ];
    setTasks(tasks);
  }
  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1>My tasks</h1>
      {tasks.map((task) => (
        <div key={task.description}>
          <input type={"checkbox"} checked={task.completed} />
          {task.description}
        </div>
      ))}
    </>
  );
}
