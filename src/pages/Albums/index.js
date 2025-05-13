import classNames from "classnames/bind";
import styles from "./Albums.module.scss";
import TableList from "~/components/TableListUser";
import TableListAlbums from "~/components/TableListAlbums";
import { useEffect, useState } from "react";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
const cx = classNames.bind(styles);

function Albums() {
  const [albumsData, setAlbumsData] = useState([]);
  const [usersData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get("page")) || 1;

  const [page, setPage] = useState(pageFromUrl);
  const [perPage, setPerPage] = useState(10);

  const handleChange = (event, value) => {
    setPage(value);
    setSearchParams({ page: value });
  };

  const pageData = albumsData.slice((page - 1) * perPage, page * perPage);

  const handleChangePage = (event) => {
    setPerPage(event.target.value);
  };
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((res) => res.json())
      .then((data) => {
        setAlbumsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("không kết nối được dữ liệu", err);
        setLoading(false);
      });
      
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.error("không kết nối được dữ liệu", err));
  }, []);

  return (
    <>
      <div className={cx("Albums")}>
        {loading && (
          <div className={cx("loading")}>
            <AutorenewOutlinedIcon className={cx("icon-loading")} /> Đang tải dữ
            liệu...
          </div>
        )}
        <div className={cx("wrapper-title")}>
          <TableListAlbums listUserData={usersData} listAlbum={pageData} />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: "20px",
        }}
      >
        <Stack spacing={2} sx={{ marginRight: "20px" }}>
          <Pagination
            count={Math.ceil(albumsData.length / perPage)}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Stack>
        <FormControl >
          <InputLabel id="demo-simple-select-label">PageChange</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={perPage}
            label="PageChange"
            onChange={handleChangePage}
          >
            {" "}
            <MenuItem value={perPage}>
              <em>{perPage} / Page</em>
            </MenuItem>
            <MenuItem value={20}>20 / Page</MenuItem>
            <MenuItem value={50}>50 / Page</MenuItem>
            <MenuItem value={100}>100 / Page</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default Albums;
