import { Fragment } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { DefaultLayout } from "./layout"
import { publicRoutes } from "./routes"

const App = () => {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component
                    let Layout = DefaultLayout

                    if (route.layout) {
                        Layout = route.layout
                    } else if (route.layout === null) {
                        Layout = Fragment
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<Layout />}
                        >
                            <Route index element={<Page />} />
                        </Route>
                    )
                })}
            </Routes>
        </Router>
    )
}

export default App
