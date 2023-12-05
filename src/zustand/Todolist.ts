import create from 'zustand';

interface Todo {
  text: string;
  id: number;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo:(id:number) => void;
  updateTodo:(id:number, text:string) => void
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text }],
    })),
  deleteTodo:(id) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id)
  })),
  updateTodo: (id: number, text: string) =>
  set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, text } : todo
    ),
  })),
}));

export default useTodoStore;