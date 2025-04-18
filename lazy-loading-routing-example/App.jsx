import React, { Suspense, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
const Layout = React.lazy(() => import("./components/Layout"));

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <AppBar></AppBar>
          <Routes>
            <Route path='/' element={
              <Suspense fallback={<div>Loading home...</div>}>
                <Home />
              </Suspense>
            }></Route>
            <Route path='/layout' element={
              <Suspense fallback={<div>Loading home...</div>}>
                <Layout />
              </Suspense>
            }></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div>
      </div>
    </>
  )
}

function AppBar() {
  const nav = useNavigate();
  return (<div>
    <button onClick={() => nav('/')}>Home route</button>
    <button onClick={() => nav('/layout')}>Layout route</button>

  </div>)
}

export default App;