import { lazy, Suspense, useState } from "react";
import Loading from "../components/Loading";

// Normal import comparison
import NormalDemo from "./PerformanceDemo";

// Lazy imports
const LazyPerformanceDemo = lazy(() => import("./PerformanceDemo"));

const LazyDepartments = lazy(() => import("./Departments"));

function LazyLoadingDemo() {
  const [showLazyComponent, setShowLazyComponent] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);

  return (
    <div className="page">
      <div className="page-header">
        <span className="eyebrow">MODULE 04</span>
        <h1>Lazy Loading Lab</h1>
        <p>
          Explore normal imports, dynamic imports, React.lazy() and Suspense.
        </p>
      </div>

      <div className="demo-card">
        <span className="demo-label">NORMAL IMPORT</span>
        <h2>Component loaded with a normal import</h2>

        <p>
          The PerformanceDemo component is imported directly at the top of
          this file. It becomes part of this page's eagerly loaded
          dependency graph.
        </p>

        <NormalDemo />
      </div>

      <div className="demo-card">
        <span className="demo-label">REACT.LAZY()</span>
        <h2>Lazy-loaded component</h2>

        <p>
          The component is dynamically imported when it is first rendered.
        </p>

        <button
          className="primary-button"
          onClick={() => setShowLazyComponent(true)}
        >
          Load Lazy Component
        </button>

        {showLazyComponent && (
          <Suspense fallback={<Loading />}>
            <LazyPerformanceDemo />
          </Suspense>
        )}
      </div>

      <div className="demo-card">
        <span className="demo-label">LAZY-LOADED PAGE COMPONENT</span>
        <h2>Lazy Department Explorer</h2>

        <button
          className="primary-button"
          onClick={() => setShowDepartments((previous) => !previous)}
        >
          {showDepartments ? "Hide Departments" : "Load Departments"}
        </button>

        {showDepartments && (
          <Suspense fallback={<Loading />}>
            <LazyDepartments />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default LazyLoadingDemo;