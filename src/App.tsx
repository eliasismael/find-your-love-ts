import { useRef } from "react";

import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

// Context
import { UsersContextProvider } from "./context/users";
import { CouplesContextProvider } from "./context/couples";

import { ISectionRefs } from "./models/pageSections";

function App() {
  const refs: ISectionRefs = {
    contactRef: useRef<HTMLDivElement | null>(null),
    aboutUsRef: useRef<HTMLDivElement | null>(null),
    appRef: useRef<HTMLDivElement | null>(null),
  };

  return (
    <UsersContextProvider>
      <CouplesContextProvider>
        <Layout>
          <Navbar refs={refs} />
          <Home ref={refs.appRef} />
          <AboutUs ref={refs.aboutUsRef} />
          <Contact ref={refs.contactRef} />
          <Footer />
        </Layout>
      </CouplesContextProvider>
    </UsersContextProvider>
  );
}

export default App;
