import '@/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ROUTES } from './routes'
import Header from '@/components/layout/header/header'
import Footer from '@/components/layout/footer/Footer'

function App() {


  return (
    <BrowserRouter>
      <Header/>  

      <Routes>
          {ROUTES.map(el=> <Route path={el.pathname} element={el.component}/>)}
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App
