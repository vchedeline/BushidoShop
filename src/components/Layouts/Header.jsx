import * as React from "react";
import { Link } from "gatsby";
import "../../styles/header.sass";
import Detail from "./Detail";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}>
        <div className="HeaderGroup">
          <div className="logo">
            <Link to="/">Bushido Shop</Link>
          </div>
          <Detail />
        </div>
      </div>
    );
  }
}

export default Header;
