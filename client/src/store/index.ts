import { createStore, Module } from 'vuex';
import todo from './modules/Todos';
import { TodoSate } from './types/TodoType';

// ! this is our main rootstate
export interface RootState {
  todo: Module<TodoSate, RootState> & TodoSate;
}

export const store = createStore({
  modules: {
    todo,
  },
});

export const useStore = () => {
  return store;
};
