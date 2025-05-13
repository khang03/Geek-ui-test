import classNames from "classnames/bind";
import styles from "./UserShow.module.scss";
import TableList from "~/components/TableListUser";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

const cx = classNames.bind(styles);

function UserShow() {
  const { id } = useParams();
  const [userShow, setUserShow] = useState({});
  const [userAlbums, setUserAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUserShow(data))
      .catch((err) => console.error("không kết nối được dữ liệu", err));
  }, []);

  useEffect(() => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserAlbums(data);
        setLoading(false);
      })
      .catch((err) => console.error("không kết nối được dữ liệu", err));
  }, []);

  return (
    <div className={cx("user-show")}>
      {loading && (
        <div className={cx("loading")}>
          <AutorenewOutlinedIcon className={cx("icon-loading")} /> Đang tải dữ
          liệu...
        </div>
      )}
      <div className={cx("wr-show")}>
        <div className={cx("user-info")}>
          <img
            src={`https://ui-avatars.com/api/?name=${userShow.name}&color=fff&background=random`}
            alt="image-user"
          />
          <p>{userShow.name}</p>
          <a href={`mailto:${userShow.email}`}>{userShow.email}</a>
        </div>
        <div className={cx("user-show-albums")}>
          <h2>Albums</h2>

          {/* <TableList listUserAlbums={userAlbums} /> */}

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1px solid #ccc",
              marginTop: 20,
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f0f0f0" }}>
                <th
                  style={{ width: "10%", padding: "15px", textAlign: "left" }}
                >
                  ID
                </th>
                <th
                  style={{ width: "50%", padding: "15px", textAlign: "left" }}
                >
                  Title
                </th>
                <th
                  style={{ width: "40%", padding: "15px", textAlign: "left" }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userAlbums.map((item, index) => (
                <tr key={index} className={cx("item-user")}>
                  <td style={{ padding: "15px" }}>{item.id}</td>
                  <td style={{ padding: "15px" }}>{item.title}</td>
                  <td style={{ padding: "15px" }}>
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
                      href={`/albumshow/${item.id}`}
                    >
                      Show{" "}
                      <ArrowForwardOutlinedIcon
                        sx={{ fontSize: 12, marginLeft: "5px" }}
                      />{" "}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserShow;
