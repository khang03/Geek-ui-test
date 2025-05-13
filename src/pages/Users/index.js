import classNames from "classnames/bind";
import styles from "./Users.module.scss";
import TableListUser from "~/components/TableListUser";
import { useEffect, useState } from "react";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

const cx = classNames.bind(styles);

function Users() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsersData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("không kết nối được dữ liệu", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={cx("Users")}>
      {loading && (
        <div className={cx("loading")}>
          <AutorenewOutlinedIcon className={cx("icon-loading")} /> Đang tải dữ
          liệu...
        </div>
      )}
      <div className={cx("wrapper-title")}>
        <TableListUser listUserData={usersData} />
      </div>
    </div>
  );
}

export default Users;
