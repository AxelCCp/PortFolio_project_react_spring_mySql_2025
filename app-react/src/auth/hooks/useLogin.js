import Swal from "sweetalert2";
import { loginUser } from "../service/loginService";
import { useNavigate } from "react-router-dom";
import { loginReducer } from "../reducers/loginReducer";
import { useReducer, useState } from "react";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}

let usernameLogued = '';

export const useLogin = () => {

    const navigate = useNavigate();

    const [login, dispatch] = useReducer(loginReducer, initialLogin);


    const handlerLogin = ({username, password}) => {

        const isLogin = loginUser({ username, password });

        if (isLogin) {
            
            const user = { username: 'admin' }
            
            dispatch({
                type: 'login',
                payload: user,
            });

            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user,
            }));


            usernameLogued = user.username;

            console.log('usernameLogued: ', usernameLogued);

            navigate('/');

        } else {
            Swal.fire('Error Login', 'Username o password invalidos', 'error');
        }

    } 



    const handlerLogout = () => {

        dispatch({
            type: 'logout',
        });

        usernameLogued = '';

        sessionStorage.removeItem('login');
    }


    return {
        login,
        handlerLogin,
        handlerLogout,
        usernameLogued,
    }
}