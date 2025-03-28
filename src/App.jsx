import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutLoader } from './components/layout/Loaders'
const ProtectRoute = lazy(() => import('./components/auth/ProtectRoute'))
const Home = lazy(() => import('./pages/Home'))
const Chat = lazy(() => import('./pages/Chat'))
const Groups = lazy(() => import('./pages/Groups'))
const Login = lazy(() => import('./pages/Login'))
const NotFound = lazy(() => import('./pages/NotFound'))

let user = true

const App = () => {
  return (
    <Suspense fallback={<LayoutLoader/>}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route index element={<Home />} />
            <Route path='/chat/:chatId' element={<Chat />} />
            <Route path='/groups' element={<Groups />} />
          </Route>

          <Route
            path='/login'
            element={
              <ProtectRoute user={!user} redirect='/'>
                <Login />
              </ProtectRoute>
            }
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
