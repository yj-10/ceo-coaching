import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Layout from "./Common/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/About"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/Services"
          element={
            <Layout>
              <Service />
            </Layout>
          }
        />
        <Route
          path="/Contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;

