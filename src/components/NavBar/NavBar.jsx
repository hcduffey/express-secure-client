import './NavBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const [isActive, setisActive] = useState(false);
    const {gitHubAccount, updateGitHubAccount} = props

    return(
        <nav className="navbar is-info" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">
                <img src="/images/logo.png" alt="logo"/>
            </Link>
            {/* We need the <a> tag to href to nowhere - which creates a warning, the line below disables that warning */}
            {/* eslint-disable-next-line */}
            <a
                onClick={() => { setisActive(!isActive); }}
                role="button"
                className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                href="#"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-end">
            {gitHubAccount && <Link to="/" onClick={() => { setisActive(!isActive); }} className="navbar-item">GitHubAccout</Link>}
            <Link onClick={() => { setisActive(!isActive); }} to="/" className="navbar-item">Change</Link>          
          </div>
        </div>
     </nav>
    )
}

export default NavBar