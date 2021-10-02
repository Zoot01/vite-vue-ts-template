import { Module } from 'vuex';
import { RootState } from '..';
import { Todo, TodoActions, TodoMutations, TodoSate } from '../types/TodoType';

const state: TodoSate = {
  items: [
    {
      done: false,
      content: 'Go to the store',
      id: 1633190642876,
    },
    {
      done: true,
      content: 'Start studying',
      id: 1633190642875,
    },
  ],
};

const mutations: TodoMutations = {
  ADD_TO_DO(state, todo: Todo) {
    state.items.push(todo);
  },
  REMOVE_TO_DO(state, todo: number) {
    console.log('from state', todo);
    state.items.splice(
      state.items.findIndex(function (i) {
        return i.id === todo;
      }),
      1
    );
  },
};

const actions: TodoActions = {
  addTodo(context, todo: Todo) {
    context.commit('ADD_TO_DO', todo);
  },
  removeTodo(context, todo: Todo) {
    context.commit('REMOVE_TO_DO', todo);
  },
};

const module: Module<TodoSate, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default module;
