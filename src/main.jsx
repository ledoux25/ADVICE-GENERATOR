import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ApiProvider from './Context/AdviceContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider>
    <App/>
  </ApiProvider>
)
