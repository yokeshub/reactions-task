import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../redux/auth/auth.actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("in login ueff");
    if (userId !== undefined && userId !== null && userId !== "") {
      history.push("/chatbox");
    }
  }, [userId, history]);
  const navList = [
    { id: "1", navText: "Login", navPath: "/" },
    { id: "2", navText: "Chatbox", navPath: "/chatbox" },
  ];
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {navList &&
          navList.map((nav) => {
            return (
              <Link
                key={nav.id}
                to={nav.navPath}
                style={{
                  padding: "10px",
                  textDecoration: "none",
                  color: "rgb(0, 0, 0)",
                }}
              >
                {nav.navText}
              </Link>
            );
          })}
        {userId !== undefined && userId !== null && userId !== null && (
          <button
            type="button"
            style={{
              padding: "10px",
              textDecoration: "none",
              color: "rgb(0, 0, 0)",
              border: "transparent",
              background: "transparent",
              fontFamily: "IBM Plex Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "18px",
            }}
            onClick={() => {
              dispatch(logout());
              history.push('/')
            }}
          >
            Logout
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default Navbar;
