import { todos } from "./../db2.json"
console.log(todos)

const BASE = "http://localhost:3004/todos"

export async function fetchTodos(state = "all") {
  const queries = state === "all" ? "" : `?completed=${state === "completed"}`

  const res = await fetch(`${BASE}/${queries}`)

  if (!res.ok) throw new Error("Failed to fetch todos!")

  return res.json()
}

export async function toggleTodoStatus(todoId, completed) {
  const res = await fetch(`${BASE}/${todoId}`, {
    method: "PATCH",
    body: JSON.stringify({ completed }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  return res.json()
}

export async function createTodo(title) {
  const res = await fetch(BASE, {
    method: "POST",
    body: JSON.stringify({ title, completed: false }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  return res.json()
}
