import { Action, ActionTree, Mutation, MutationTree } from 'vuex';
import { RootState } from '..';

// ? start of TS interfaces
export interface Todo {
  done: boolean;
  content: string;
  id: number;
}

export interface TodoSate {
  items: Todo[];
}

export interface TodoMutations extends MutationTree<TodoSate> {
  ADD_TO_DO: Mutation<TodoSate>;
  REMOVE_TO_DO: Mutation<TodoSate>;
}

export interface TodoActions extends ActionTree<TodoSate, RootState> {
  addTodo: Action<TodoSate, RootState>;
  removeTodo: Action<TodoSate, RootState>;
}

// ? end of TS interfaces
