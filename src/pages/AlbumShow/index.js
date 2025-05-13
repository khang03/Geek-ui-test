import classNames from "classnames/bind";

import styles from "./AlbumShow.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

const cx = classNames.bind(styles);

function AlbumShow() {
  const { id } = useParams();

  const [albumDetail, setAlbumDetail] = useState({});
  const [user, setUser] = useState({});
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((res) => res.json())
      .then((data) => setAlbumDetail(data))
      .catch((err) => console.error("không kết nối được dữ liệu", err));
  }, [albumDetail.id]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${albumDetail.userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => console.error("không kết nối được dữ liệu", err));
  }, [albumDetail.userId]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumDetail.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((err) => console.error("không kết nối được dữ liệu", err));
  }, [albumDetail.id]);
  return (
    <div className={cx("album-show")}>
      {loading && (
        <div className={cx("loading")}>
          <AutorenewOutlinedIcon className={cx("icon-loading")} /> Đang tải dữ
          liệu...
        </div>
      )}
      <div className={cx("wr-show")}>
        <div className={cx("user-info")}>
          <img
            src={`https://ui-avatars.com/api/?name=${user.name}&color=fff&background=random`}
            alt="image-album"
          />
          <p>{user.name}</p>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
        <h3 style={{ margin: "20px 0", textAlign: "center" }}>
          {albumDetail.title}
        </h3>
        <div className={cx("list-photo")}>
          {photos.slice(0, 10).map((photo, index) => (
            <div className={cx("item-photo")} key={index}>
              <img src={photo.url} alt={photo.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlbumShow;
