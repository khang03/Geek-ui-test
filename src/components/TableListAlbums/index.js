import classNames from "classnames/bind";
import styles from "./TableListAlbums.module.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function TableListAlbums({ listAlbum, listUserData }) {
  const navigate = useNavigate();

  const getUserById = (userId) => {
    return listUserData.find((user) => user.id === userId);
  };

  return (
    <div className={cx("table-list")}>
      <div className={cx("head-table")}>
        <div className={cx("title-id", "head-title")}>ID</div>
        <div className={cx("title", "head-title")}>Title</div>
        <div className={cx("title-user", "head-title")}>User</div>
        <div className={cx("title-action", "head-title")}>Action</div>
      </div>
      {listAlbum.map((item, index) => {
        const user = getUserById(item.userId);
        return (
          <div className={cx("albums")}>
            <div className={cx("albums-id", "album-item")}>{item.id}</div>
            <div className={cx("albums-title", "album-item")}>{item.title}</div>
            <div
              className={cx("albums-user", "album-item")}
              onClick={() => navigate(`/usershow/${user.id}`)}
            >
              {user ? (
                <>
                  <img
                    src={`https://ui-avatars.com/api/?name=${user.name}&color=fff&background=random`}
                    alt="image-user"
                  />
                  <a href={`/usershow/${user.id}`}>{user.name}</a>
                </>
              ) : (
                <img src={``} alt="no-image" />
              )}
            </div>
            <div className={cx("albums-action", "album-item")}>
              <Button
                sx={{
                  height: 30,
                  backgroundColor: "#fff", // màu tím
                  borderColor: "#217d77 ", // để border cùng màu
                  color: "#217d77 !important", // ví dụ: xanh MUI mặc định
                  "&:hover": {
                    backgroundColor: "#217d77", // màu khi hover
                    borderColor: "#217d77",
                    color: "#fff !important",
                  },
                }}
                variant="outlined"
                href={`/albumshow/${item.id}`}
              >
                Show
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TableListAlbums;
