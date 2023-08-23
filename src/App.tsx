import { useRoutes, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";

// Context

import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

import { UsersContextProvider } from "./context/users";
import { CouplesContextProvider } from "./context/couples";

function App() {
    const AppRoutes = () => {
        const routes = useRoutes([
            { path: "/", element: <Home /> },
            { path: "/about-us", element: <AboutUs /> },
            { path: "/contact", element: <Contact /> },
        ]);

        return routes;
    };

    return (
        <UsersContextProvider>
            <CouplesContextProvider>
                <BrowserRouter>
                    <Layout>
                        <Navbar />
                        <AppRoutes />
                    </Layout>
                </BrowserRouter>
            </CouplesContextProvider>
        </UsersContextProvider>
    );
}

export default App;
