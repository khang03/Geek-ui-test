import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
const cx = classNames.bind(styles);
function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const location = useLocation();

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  const navigate = useNavigate();
  return (
    <div className={cx("wrapper-sidebar", { openSide: openSidebar })}>
      <aside className={cx("aside-sidebar")}>
        <ul>
          <li
            onClick={() => navigate("/albums")}
            style={{
              backgroundColor: location.pathname.includes("/albums")
                ? "#35b2aa53"
                : "#fff",
            }}
          >
            {openSidebar ? (
              <div className={cx("title-categories")}>
                <LibraryBooksIcon
                  sx={{ fontSize: 12, scale: 1.1, marginRight: "10px" }}
                />{" "}
                <div>Albums</div>
              </div>
            ) : (
              <>
                <LibraryBooksIcon sx={{ fontSize: 12, scale: 1.3 }} />{" "}
              </>
            )}
          </li>
          <li
            onClick={() => navigate("/users")}
            style={{
              backgroundColor: location.pathname.includes("/users")
                ? "#35b2aa53"
                : "#fff",
            }}
          >
            {openSidebar ? (
              <div className={cx("title-categories")}>
                <PeopleAltOutlinedIcon
                  sx={{ fontSize: 11, scale: 1.5, marginRight: "10px" }}
                />{" "}
                <div>Users</div>
              </div>
            ) : (
              <>
                <PeopleAltOutlinedIcon sx={{ fontSize: 12, scale: 1.7 }} />{" "}
              </>
            )}
          </li>
        </ul>
        <div onClick={handleOpenSidebar} className={cx("action-open-sidebar")}>
          {openSidebar ? (
            <KeyboardDoubleArrowLeftOutlinedIcon />
          ) : (
            <KeyboardDoubleArrowRightOutlinedIcon />
          )}
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
