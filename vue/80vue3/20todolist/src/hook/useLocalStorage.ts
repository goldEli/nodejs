import type { TodoListItem } from "@/stores/todoList";

// 操作localStorage的方法
export function useLocalStorage() {
  function getLocalStorage(): TodoListItem[] {
    return JSON.parse(localStorage.getItem("ToDoList") || "[]");
  }
  function setLocalStorage(list: TodoListItem[]) {
    localStorage.setItem("ToDoList", JSON.stringify(list));
  }
  // 有return ,就有类型定义
  return {
    getLocalStorage,
    setLocalStorage,
  };
}
