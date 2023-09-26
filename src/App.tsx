import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { publicRoutes } from "./routes";

const App = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((item, index) => {
          const Page = item.component;
          const Layout = item.layout || DefaultLayout;

          return (
            <Route
              key={index}
              path={item.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
