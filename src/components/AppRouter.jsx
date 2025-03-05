import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Error from '../pages/Error'
import Posts from '../pages/Posts'
import About from '../pages/About'
import PostIdPage from '../pages/PostIdPage'
import { privateRoutes, publicRoutes } from '../router/routes'
import { AuthContext } from '../context'
import Loader from './UI/Loader/Loader'

function AppRouter() {
const {isAuth, isLoading} = useContext(AuthContext)

if(isLoading) {
return <Loader/>
}

  return (
    isAuth
      ? <Routes>
        {privateRoutes.map((route, index) => {
          return (
            <Route key={index} element={<route.element />} path={route.path} />
          )
        })
        } 
             <Route path="*" element={<Navigate to="posts" replace />} />
        </Routes >
     
        : <Routes>{
        publicRoutes.map((route, index) => {
          return (
            <Route key={index} element={<route.element />} path={route.path} />
          )
        })
      }
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes >
  )
}

export default AppRouter