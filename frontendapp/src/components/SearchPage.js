import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Header from './Header';
import Companies from './Companies';

const cookies = new Cookies();


const SearchPage = ({ whoami, logout }) => {
    const [company, setCompany] = useState([]);
    const [search, setSearch] = useState('');

    const fetchCompanies = () => {
        fetch("/api/company/", {
            credentials: "same-origin"
        })
            .then((res) => {
                if (res.status >= 200 && res.status <= 299) {
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            })
            .then((data) => {
                setCompany(data);
            })
    }

    useEffect(() => {
        fetchCompanies();
    }, []);

    const favoriteCompanies = () => {
        fetch("/api/favorite/", {
            credentials: "same-origin"
        })
            .then((res) => {
                if (res.status >= 200 && res.status <= 299) {
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            })
            .then((data) => {
                let data1 = data.favorite;
                for (let row of data1) {
                    let logo_ = 'media/' + row.logo
                    row.logo = logo_;
                }
                setCompany(data.favorite);
            })
            .catch(err => console.log(err));
    }

    const setSearchCompany = e => {
        setSearch(e);
    }

    const searchCompany = () => {
        if (search !== '') {
            fetch("/api/search_company/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": cookies.get("csrftoken"),
                },
                credentials: "same-origin",
                body: JSON.stringify({
                    search,
                })
            })
                .then((res) => {
                    if (res.status >= 200 && res.status <= 299) {
                        return res.json();
                    } else {
                        throw Error(res.statusText);
                    }
                })
                .then((data) => {
                    let data1 = data.companies;
                    if (data1.length > 0) {
                        for (let row of data1) {
                            let logo_ = 'media/' + row.logo
                            row.logo = logo_;
                        }
                        console.log(data1);
                        setCompany(data1);
                    } else {
                        setCompany([]);
                        console.log(data.companies);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    return (
        <div>
            <div className="header-container">
                <ul>
                    <input
                        type="text"
                        className="serch-field"
                        placeholder="Search for a company"
                        onChange={(e) => setSearchCompany(e.target.value)}
                    />
                    <button className="btn btn-primary mr-2" onClick={searchCompany}>Search</button>
                    <button className="btn btn-primary" onClick={favoriteCompanies}>Favorite Companies</button>
                    <button className="btn btn-danger" onClick={fetchCompanies}>Clear</button>
                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                </ul>
            </div>

            <div className="header-container">
                <Companies
                    data={company}
                />
            </div>
        </div>
    );
}

export default SearchPage;
