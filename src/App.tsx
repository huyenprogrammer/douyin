import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { publicRoutes } from "./routes";

const App = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((item, index) => (
          <Route key={index} path={item.path} element={<></>} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
