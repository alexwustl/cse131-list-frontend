import React from 'react';


interface LoginWrapperProps {
    // setUserInfo(id: string, username: string, name: string, token: string, classes: ClassObj[], admin: boolean ): void;
}

const LoginWrapper: React.FC<LoginWrapperProps>  = () => {

    return (
        <div className='align-items-center align-middle my-auto'>
            <h1>Welcome to the CSE 131 Virutal Lists!</h1>
            <button onClick={()=>{window.location.href = 'https://github.com/login/oauth/authorize?client_id=9765e58690fb0cd32bd4&scope=user:email%20read:org%20read:user';}} className='btn btn-primary'>Login</button>
            <p>Please make sure to have a WUSTL email added to your github account before signing in!</p>
        </div>
    );
}

export default LoginWrapper;