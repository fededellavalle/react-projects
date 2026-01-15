import { useEffect, useState, useRef } from "react";

export function TaskList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [saving, setSaving] = useState(false);

  const isFirstRender = useRef(true);

  function addTask() {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setSaving(true);

    const timeout = setTimeout(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      setSaving(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [tasks]);

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Escribi una tarea"
      />
      <button onClick={addTask} disabled={saving}>
        {saving ? "Guardando..." : "Agregar Tarea"}
      </button>

      <p>Total de Tareas: {tasks.length}</p>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
