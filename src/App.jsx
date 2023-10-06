import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "./pages"
import DefaultLayout from "~/layout/defaultLayout"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DefaultLayout />} >
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
