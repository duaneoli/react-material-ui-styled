import Layout from 'layouts'
import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'
import { Home } from './public'

function Routers() {
  return (
    <TransitionGroup style={{ width: '100%', height: '100%' }}>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </TransitionGroup>
  )
}

export default Routers
