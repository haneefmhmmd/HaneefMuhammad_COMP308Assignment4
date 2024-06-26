import "bootstrap/dist/css/bootstrap.min.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

const StudentForm = lazy(() => import("StudentForm/form"));

import "./index.css";

const App = () => (
  <>
    <nav className="navbar navbar-light bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          StudentApp2
        </a>
      </div>
    </nav>
    <main className="container mt-5">
      <Suspense fallback={<span>Loading...</span>}>
        <StudentForm />
      </Suspense>
    </main>
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
