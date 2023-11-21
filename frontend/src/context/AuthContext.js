import React from 'react';
import { createContext, useEffect, useReducer } from 'react';

const initial_state = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    loading: false,
    error: null,

};

export const AuthContext = createContext(initial_state);

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                loading: true,
                error: null,
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                loading: false,
                error: null,
            };
        case 'LOGIN_FAILURE':
            return {
                user: null,
                loading: false,
                error: action.payload,
            };
        case 'REGISTER_SUCCESS':
            return {
                user: null,
                loading: false,
                error: null,
            };
        case 'LOGOUT':
            return {
                user: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }

};

export const AuthContextProvider = ({ children }) => {
    // children is the component that will be wrapped by the context provider
    const [state, dispatch] = useReducer(reducer, initial_state);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
        // const user = JSON.parse(localStorage.getItem('user'));
        // if (user) {
        //     dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        // }
    }, [state.user]);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}