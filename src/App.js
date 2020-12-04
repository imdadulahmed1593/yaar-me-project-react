import "./App.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import logo from "./images/logo.png";
import HomeIcon from "@material-ui/icons/Home";
import ShopOutlinedIcon from "@material-ui/icons/ShopOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { Avatar } from "@material-ui/core";
import avatarImg from "./images/pp2.jpg";
function App() {
  return (
    <div className="app">
      {/*header part*/}
      <div className="header">
        <a href="#">
          <CameraAltOutlinedIcon />
        </a>
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <div className="header__right">
          <a href="#">
            <SearchOutlinedIcon className="searchIcon" />
          </a>
          <a href="#">
            <SendOutlinedIcon />
          </a>
        </div>
      </div>

      {/*Main Body*/}
      <div className="body">
        <h1>HELLO GREEKS</h1>
      </div>

      {/*footer part*/}
      <div className="footer">
        <a href="#">
          {" "}
          <HomeIcon />
        </a>
        <a href="#">
          <ShopOutlinedIcon />
        </a>
        <a href="#">
          <AddBoxOutlinedIcon />
        </a>
        <a href="#">
          <FavoriteBorderOutlinedIcon />
        </a>
        <a href="#">
          <Avatar alt="Remy Sharp" src={avatarImg} />
        </a>
      </div>
    </div>
  );
}

export default App;
