import React from 'react';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    const {user, singInWithGoogle} = useFirebase()
    return (
        <div>
            <h3>Please login</h3>
            <div style={{margin: '20px'}}>
            <button onClick={singInWithGoogle}>Google sign In</button>
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