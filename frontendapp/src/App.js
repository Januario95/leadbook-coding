import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
// import Register from './components/Register';
import Header from './components/Header';
import SearchPage from './components/SearchPage';


const cookies = new Cookies();


const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

    useEffect(() => {
        getSession();
    }, []);

    const getSession = () => {
        fetch("/api/session/", {
                credentials: "same-origin"
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.isAuthenticated) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            })
            .catch(err => console.log(err));
    }

    const whoami = () => {
        fetch("/api/whoami/", {
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "same-origin"
            })
            .then((res) => res.json())
            .then((data) => {
                console.log("You are logged in as: " + data.username);
            })
            .catch(err => console.log(err));
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleUserNameChange = (event) => {
        setUsername(event.target.value);
    }

    const login = (event) => {
        event.preventDefault();

        fetch("/api/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": cookies.get("csrftoken"),
                },
                credentials: "same-origin",
                body: JSON.stringify({
                    username,
                    password
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
                setIsAuthenticated(true);
                setUsername("");
                setPassword("");
                setError("");
            })
            .catch(err => {
                console.log(err);
                setError("Wrong username or password");
            });
    }

    const logout = () => {
        fetch("/api/logout/", {
                credentials: "same-origin",
            })
            .then((res) => {
                if (res.status >= 200 && res.status <= 299) {
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            })
            .then((data) => {
                console.log(data);
                setIsAuthenticated(false);
            })
            .catch(err => console.log(err));
    }

    const registerUser = () => {
        setIsAuthenticated(false);
        console.log('Yes');
        if (isRegister) {
            setIsRegister(false);
        } else {
            setIsRegister(true);
        }
    }


    if (!isAuthenticated) {
        return (
            <div className="container mt-3">
                <h1>React Cookie Auth</h1>
                <br />
                <h2>Login</h2>
                <form onSubmit={login}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            value={username}
                            onChange={ handleUserNameChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <div>
                            {error &&
                                <small className="text-danger">
                                    { error }
                                </small>
                            }
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary mr-3"
                    >Login</button>
                </form>
            </div>
        )
    }

    return (
        <div>
            <div className="header">
                <SearchPage
                    whoami={whoami}
                    logout={logout}
                />
            </div>
        </div>
    )
}

export default App;
