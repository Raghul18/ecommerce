import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ShoppingPage = React.lazy(() => import('./pages/ShoppingPage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));


export default function App() {
  return <div className="bg-white dark:bg-slate-900 min-h-screen">
    <NavBar />
    <Routes>
      <Route path='/' element={<React.Suspense fallback={<div>Loading...</div>}><HomePage /></React.Suspense>} />
      <Route path='/shop' element={<React.Suspense fallback={<div>Loading...</div>}><ShoppingPage /></React.Suspense>} />
      <Route path='/cart' element={<React.Suspense fallback={<div>Loading...</div>}><CartPage /></React.Suspense>} />
      <Route path='*' element={<React.Suspense fallback={<div>Loading...</div>}><ErrorPage /></React.Suspense>} />
    </Routes>
    <Footer />
  </div>
}
