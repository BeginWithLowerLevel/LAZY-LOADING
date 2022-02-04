import React, { lazy, Suspense } from "react";
const User = lazy(() => import("./User"));

const App = () => {
  return (
    <div>
      <center>
        <h1>Another Component</h1>
      </center>
      <Suspense fallback={<div>Loading...</div>}>
        <User />
      </Suspense>
    </div>
  );
};

export default App;
