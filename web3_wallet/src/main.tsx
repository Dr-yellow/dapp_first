import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { TransactionsProvider } from "./context/TransactionContext";
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionsProvider>,
)
