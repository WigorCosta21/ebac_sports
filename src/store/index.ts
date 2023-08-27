import { configureStore } from '@reduxjs/toolkit'
import carrinhoReduce from './reducers/carrinho'
import favoritosReduce from './reducers/favoritos'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReduce,
    favoritos: favoritosReduce,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefailtMiddleware) =>
    getDefailtMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
