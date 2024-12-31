import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { publicRotes } from "./routes";
import { DefaultLayout } from "~/components/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRotes.map((route, index) => {
            let Layout = DefaultLayout;
            if(route.layoutPage){
              Layout = route.layoutPage;
            }else if(route.layoutPage === null){
              Layout = Fragment
            }
            
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
