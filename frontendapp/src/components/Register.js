import React from 'react';



const Register = ({
    login, handleUserNameChange,
    handlePasswordChange, username,
    password, error
}) => {
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
                <button type="submit" className="btn btn-primary mr-3">Register</button>
            </form>
        </div>
    );
}

export default Register;
