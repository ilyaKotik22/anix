import '@/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './routes'
import Header from '@/components/layout/header/header'
import Footer from '@/components/layout/footer/Footer'
import { useAuth } from './context'

function App() {
  const user = useAuth()

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {PUBLIC_ROUTES.map(el => <Route path={el.pathname} element={el.component} />)}
        {user && PRIVATE_ROUTES.map(el => <Route path={el.pathname} element={el.component} />)}

      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
