import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
const Details = lazy(() => import('./components/pages/Details'))
const Home = lazy(() => import('./components/pages/Home'))
const List = lazy(() => import('./components/pages/List'))

export const Router = () => {
  return (
    <div>
      <Suspense fallback={<div>nowloading</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="pokemon" element={<List />} />
        </Routes>
      </Suspense>
    </div>
  )
}
