import  React from 'react';

const Login = () => {

    const onChange = () => {

    }
    
    return (
        <div className="form-usuario">
            <div className="container-form shadow-dark">
                <h1>Sign In</h1>
                <form action="">
                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Your password"
                        onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <input type="submit" className="btn btn-primary btn-block"
                        value="Sign In"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;