import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    } else {
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/*  Header Nav */}
      <div className="header__nav">
        <Link to={user ? "/" : "/login"}>
          <div className="header__option">
            <div className="header__optionLineOne">
              <span>Hello {user ? user.email : "Guest"}</span>
            </div>
            <div
              className="header__optionLineTwo"
              onClick={handleAuthentication}
            >
              <span>{user ? "Sing out" : "Sign In"}</span>
            </div>
          </div>
        </Link>
        <Link to={user ? "/orders" : "/login"}>
          <div className="header__option">
            <div className="header__optionLineOne">
              <span>Returns</span>
            </div>
            <div className="header__optionLineTwo">
              <span>& Orders</span>
            </div>
          </div>
        </Link>
        <div className="header__option">
          <div className="header__optionLineOne">
            <span>Your</span>
          </div>
          <div className="header__optionLineTwo">
            <span>Prime</span>
          </div>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
