import Albums from "~/pages/Albums";
import AlbumShow from "~/pages/AlbumShow";
import Users from "~/pages/Users";
import UserShow from "~/pages/UserShow";

const publicRouters = [
  
  {
    path: "/albums",
    component: Albums,
  },
  { path: "/users", component: Users },
  { path: "/usershow/:id", component: UserShow },
  { path: "/albumshow/:id", component: AlbumShow },
];

export { publicRouters };
