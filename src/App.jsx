import { Fragment } from "react"
import { Route, BrowserRouter, Routes, redirect as Redirect, Navigate } from "react-router-dom"
import { DefaultLayout } from "./layout"
import { publicRoutes, privateRoutes } from "./routes"
import Router from './routes'

const App = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    )
}

export default App
