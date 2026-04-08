import { configureStore } from '@reduxjs/toolkit'

import todoReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
    reducer: {
      // Define a top level state field named 'todos', handled by 'todoReducer'
      todos: todoReducer,
      filters: filtersReducer,
    },
  });

export default store