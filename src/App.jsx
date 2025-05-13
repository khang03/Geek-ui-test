import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Albums from "./pages/Albums";
import Users from "./pages/Users";
import { publicRouters } from "./router";
import { DefaultLayout } from "~/components/Layout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component;
            return (
              <>
                <Route path="/" element={<Navigate to="/albums" />} />
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <DefaultLayout>
                      <Page />
                    </DefaultLayout>
                  }
                />
              </>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
