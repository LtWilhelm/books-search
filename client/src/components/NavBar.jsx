import React, {Component} from 'react';

class NavBar extends Component {

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Google Books</a>
                <ul className="nav navbar-dark">
                    <li className="nav-item">
                        <a className={"nav-link " + (this.props.location === "/search" ? "active" : "")} href="/search">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link " + (this.props.location === "/saved" ? "active" : "")} href="/saved">Saved</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;