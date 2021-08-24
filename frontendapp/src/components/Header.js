import React from 'react';
import close from './images/icon-remove.svg';


const Header = ({ whoami, logout }) => {

    const searchCompany = () => {

    }

    return (
        <div className="header-container">
            <ul>
                <input
                    type="text"
                    className="serch-field"
                    placeholder="Search for a company"
                    onChange={(e) => searchCompany(e.target.value)}
                />
                <button className="btn btn-primary mr-2">Search</button>
                <button className="btn btn-danger" onClick={logout}>Logout</button>
            </ul>
        </div>
    )
}

export default Header
