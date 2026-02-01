import '@/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ROUTES } from './routes'
import Header from '@/components/layout/header/header'

function App() {


  return (
    <BrowserRouter>
      <Header/>  

      <Routes>
          {ROUTES.map(el=> <Route path={el.pathname} element={el.component}/>)}
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
