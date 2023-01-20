import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'


const AuthContext = createContext({});

// const [user, setUser] = useState(null)
// const [loading, setLoading] = useState(true)

const authStorge = async (token) => {
    if (token) {
        console.log("Got token")
        Cookies.set('token', token, { expires: 60 })
        console.log("Got user", user)
    }
}

const clearStorge = () => {
    Cookies.remove('token')
    // setUser(null)
    window.location.pathname = '/login'
}

export const AuthProvider = ({ children }) => {

    return (
        <AuthContext.Provider value={{ isAuthenticated: Cookies.get('token')}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)