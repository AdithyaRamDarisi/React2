import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const Students = lazy(() => import("./pages/Students"));
const Departments = lazy(() => import("./pages/Departments"));
const Destructuring = lazy(() => import("./pages/Destructuring"));
const LazyLoadingDemo = lazy(() => import("./pages/LazyLoadingDemo"));
const PerformanceDemo = lazy(() => import("./pages/PerformanceDemo"));

function App() {
  return (
    <div className="app">
      <Navbar />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/destructuring" element={<Destructuring />} />
          <Route path="/lazy-loading" element={<LazyLoadingDemo />} />
          <Route path="/performance" element={<PerformanceDemo />} />
        </Routes>
      </Suspense>

      <footer className="footer">
        <p>ReactLab — Learn React by Building</p>
      </footer>
    </div>
  );
}

export default App;