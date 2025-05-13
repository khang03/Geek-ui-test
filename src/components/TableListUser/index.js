import classNames from "classnames/bind";
import styles from "./TableList.module.scss";
import { Button } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const cx = classNames.bind(styles);

function TableListUser({ listUserData }) {
  return (
    <div className={cx("table-list")}>
      <div className={cx("head-table")}>
        <div className={cx("title-id", "head-title")}>ID</div>
        <div className={cx("title-avatar", "head-title")}>Avatar</div>
        <div className={cx("title-name", "head-title")}>Name</div>
        <div className={cx("title-email", "head-title")}>Email</div>
        <div className={cx("title-phone", "head-title")}>Phone</div>
        <div className={cx("title-website", "head-title")}>Website</div>
        <div className={cx("title-action", "head-title")}>Action</div>
      </div>
      {listUserData.map((user, index) => (
        <div className={cx("users")} key={index}>
          <div className={cx("user-id", "user-item")}>{user.id}</div>
          <div className={cx("user-avatar", "user-item")}>
            <img
              src={`https://ui-avatars.com/api/?name=${user.name}&color=fff&background=random`}
              alt="image-user"
            />
          </div>
          <div className={cx("user-name", "user-item")}>{user.name}</div>
          <div className={cx("user-email", "user-item")}>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </div>
          <div className={cx("user-phone", "user-item")}>
            <a href={`tel:${user.phone}`}>{user.phone}</a>
          </div>
          <div className={cx("user-website", "user-item")}>
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </div>
          <div className={cx("user-action", "user-item")}>
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
                fontSize: 12,
              }}
              variant="outlined"
              href={`/usershow/${user.id}`}
            >
              Show{" "}
              <ArrowForwardOutlinedIcon
                sx={{ fontSize: 12, marginLeft: "5px" }}
              />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TableListUser;
