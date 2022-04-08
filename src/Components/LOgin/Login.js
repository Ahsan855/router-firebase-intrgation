import React from 'react';

const Login = () => {
    return (
        <div>
            <h3>Please login</h3>
            <div style={{margin: '20px'}}>
            <button>Google sign In</button>
            </div>
            <form action="">
                <input type="email" placeholder='your email' /><br />
                <input type="password" name="" id=""  placeholder='[password'/><br />
                <input type="submit" value="Login" placeholder='register' />
            </form>
        </div>
    );
};

export default Login;