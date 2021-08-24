import React from 'react';


const Login = ({
    login, handleUserNameChange,
    handlePasswordChange, registerUser,
    username, password, error
}) => {
    console.log('HERE');
    return (
        <div className="container mt-3">
            <h1>React Cookie Auth</h1>
            <br />
            <h2>Login</h2>
            <form onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" value={username} onChange={handleUserNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input type="text" className="form-control" id="password" name="password" value={password} onChange={handlePasswordChange} />
                    <div>
                        {error &&
                            <small className="text-danger">
                                {error}
                            </small>
                        }
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mr-3">Login</button>
            </form>
            <div style={{
                marginTop: "10px"
            }}>
                <button
                    className="btn btn-primary ml-4"
                    onClick={registerUser}
                >Register</button>
            </div>
        </div>
    );
}

export default Login;
