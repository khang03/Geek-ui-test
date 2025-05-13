import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

function DefaultLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/"; // fallback nếu không có

  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div className="container" style={{ display: "flex" }}>
        <Sidebar />
        <div
          className="content"
          style={{
            width: "0",
            marginTop: "60px",
            padding: "30px",
            backgroundColor: " rgb(157 157 157 / 17%)",
            flex: 1,
            position:"relative"
          }}
        >
          {location.pathname === "/users" && (
            <div style={{ marginBottom: "20px" }}>
              <h3>Users</h3>
            </div>
          )}
          {location.pathname.includes("/usershow/") && (
            <>
              <div style={{ marginBottom: "20px", display: "flex" }}>
                <PeopleAltOutlinedIcon
                  sx={{ fontSize: 20, marginRight: "10px", color: "#9d9d9d" }}
                />
                <h3>
                  <a
                    style={{ textDecoration: "none", color: "#9d9d9d" }}
                    href="http://localhost:3000/users"
                  >
                    User
                  </a>
                  /
                </h3>
                <h3> Show</h3>
              </div>
              <div style={{ display: "flex" }}>
                <ArrowBackOutlinedIcon
                  onClick={() => navigate(-1)}
                  sx={{ marginRight: "10px" }}
                />{" "}
                <h2>Show User</h2>
              </div>
            </>
          )}
           {location.pathname.includes("/albumshow/") && (
            <>
              <div style={{ marginBottom: "20px", display: "flex" }}>
                <PeopleAltOutlinedIcon
                  sx={{ fontSize: 20, marginRight: "10px", color: "#9d9d9d" }}
                />
                <h3>
                  <a
                    style={{ textDecoration: "none", color: "#9d9d9d" }}
                    href="http://localhost:3000/albums"
                  >
                    Albums
                  </a>
                  /
                </h3>
                <h3> Show</h3>
              </div>
              <div style={{ display: "flex" }}>
                <ArrowBackOutlinedIcon
                  onClick={() => navigate(-1)}
                  sx={{ marginRight: "10px" }}
                />{" "}
                <h2>Show Album</h2>
              </div>
            </>
          )}
          {/* {location.pathname.includes("/users") && (
            <div style={{ marginBottom: "20px" }}>
              <h3>Users</h3>
            </div>
          )} */}
          {children}{" "}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
