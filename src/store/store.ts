import { create } from 'zustand';

// types 
import { Store } from '../types/types';

export const todosStore = create<Store>((set) => ({
    todos: [],
    clearTodos: () => ({todos: []}),
    addTodo: (name: string) => set((state) => ({todos: [...state.todos, name]})),
    deleteTodo: (name: string) => set((state) => ({todos: state.todos.filter(element => element = name)})),
}))