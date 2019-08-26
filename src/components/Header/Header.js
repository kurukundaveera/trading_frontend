import React, { Component } from "react";

import image from "./image.jpg";

import "./Header.css";

import { Link, withRouter } from "react-router-dom";

// import { withTranslation } from 'react-i18next';

class Header extends Component {
  // selectedLang = (event) => {

  //     console.log(event.target.value);

  //     const { i18n } = this.props;

  //     i18n.changeLanguage(event.target.value);

  // }

  render() {
    console.log(this.props);

    let { t } = this.props;

    return (
      <div>
        <div style={{ backgroundColor: "#ff6200", color: "#fff" }}>
          <img
            className="img"
            src={image}
            alt="not found"
            width="100px"
            height="100px"
          />

          <span
            className="ing-title"
            style={{ color: "#fff", fontSize: "40px", margin: "15%" }}
          >
            ING TRADING
          </span>

          {this.props.isLoggedIn ? (
            <span>
              <button
                className="bt"
                onClick={() =>
                  this.props.redirect("/logout", this.props.history)
                }
                data-toggle="tooltip"
                title="Logout"
              >
                Logout
              </button>
            </span>
          ) : (
            <span>
              <button
                className="bt"
                onClick={() =>
                  this.props.redirect("/login", this.props.history)
                }
                data-toggle="tooltip"
                title="Login"
              >
                Login
              </button>
            </span>
          )}

          <span>
          <select onChange="window.location.redirect(this.value)">
    <option value="..">back</option>
    <option value="./listOfStocks">list</option>
    <option value="/dashBoard">bottom</option>
    </select>
          </span>

          <span>
            <select className="drp" onChange={this.selectedLang}>
              <option value="en">English</option>

              <option value="sp">Spanish</option>
            </select>
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
