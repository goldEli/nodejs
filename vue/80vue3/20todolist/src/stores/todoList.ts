import { ref, computed, watch, onMounted } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "../hook/useLocalStorage";

export interface TodoListItem {
  id: number;
  value: string;
  complete: boolean;
}

const createId = function () {
  return parseInt(Math.random() * 100000 + "");
};

export const useTodoListStore = defineStore("todoList", () => {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const inputVal = ref("");

  const todoList = ref<TodoListItem[]>([
    { id: 1, value: "123", complete: true },
    { id: 2, value: "111", complete: false },
  ]);

  onMounted(() => {
    todoList.value = getLocalStorage();
  });

  watch(
    () => todoList.value.length,
    (newValue, oldValue) => {
      console.log(newValue, oldValue, todoList);
      setLocalStorage(todoList.value);
    }
  );

  const total = computed(() => {
    return todoList.value.length;
  });

  const completeNum = computed(() => {
    return todoList.value.filter((item) => item.complete).length;
  });

  const selectAll = computed({
    set(val: boolean) {
      todoList.value.forEach((item) => {
        item.complete = val;
      });
    },
    get() {
      return (
        todoList.value.filter((item) => item.complete).length ===
          todoList.value.length && todoList.value.length > 0
      );
    },
  });

  const del = (id: number) => {
    for (let i = 0; i < todoList.value.length; ++i) {
      const item = todoList.value[i];
      if (item.id === id) {
        todoList.value.splice(i, 1);
      }
    }
  };

  const clearInput = () => {
    inputVal.value = "";
  };

  const addTodoList = () => {
    const item = {
      id: createId(),
      value: inputVal.value,
      complete: false,
    };
    todoList.value.push(item);
    clearInput();
  };

  const clear = () => {
    todoList.value = todoList.value.filter((item) => !item.complete);
  };

  return {
    del,
    todoList,
    addTodoList,
    inputVal,
    total,
    completeNum,
    selectAll,
    clear,
  };
});
