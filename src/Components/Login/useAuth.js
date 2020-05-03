import React, { useContext, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config'
import { useState, createContext } from "react";
import { Route, Redirect } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

const getUser = user => {
    const {displayName, email, photoURL} = user;

    return { name: displayName, email, photo: photoURL};
}

const Auth = () => {
    const [user, setUser] = useState(null);

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const signedInUse = getUser(res.user);
                setUser(signedInUse);
                return res.user;
            })
            .catch(err => {
                setUser(null);
                return err.message;
            })
    }

    const signOut = () => {
        firebase.auth().signOut().then(function () {
            setUser(null)
            return true;
        }).catch(function (error) {
            return false;
        });
    }

    const is_valid_email = email => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
    const hasNumber = input => /\d/.test(input);

    const handleChange = e => {
        const newUserInfo = {
            ...user
        };
        let isValidEmail = true;
        let isValidPassword = true;
        let isValidConfirmPassword = true;
        if (e.target.name === 'email') {
            isValidEmail = is_valid_email(e.target.value);
        }
        if (e.target.name === "password") {
            isValidPassword = e.target.value.length > 7 && hasNumber(e.target.value);
        }
        if (e.target.name === "confirm_password") {
            isValidConfirmPassword = e.target.value.length > 8 && hasNumber(e.target.value);
        }

        newUserInfo[e.target.name] = e.target.value
        newUserInfo.isValidEmail = isValidEmail;
        newUserInfo.isValidPassword = isValidPassword;
        newUserInfo.isValidConfirmPassword = isValidConfirmPassword;
        setUser(newUserInfo)
    }

    const createAccount = (event) => {
        if (user) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    firebase.auth().currentUser.updateProfile({
                        displayName: user.name
                    }).then(() => {
                        const createdUser = { ...user };
                        createdUser.isSignedIn = true;
                        createdUser.error = '';
                        setUser(createdUser);
                    });
                })
                .catch(err => {
                    const createdUser = { ...user };
                    createdUser.isSignedIn = false;
                    createdUser.error = err.message;
                    setUser(createdUser);
                })
        }
        event.preventDefault();
        event.target.reset();
    }

    const signInUser = event => {
        if (user) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const createdUser = { ...user };
                    createdUser.isSignedIn = true;
                    createdUser.error = '';
                    setUser(createdUser);
                })
                .catch(err => {
                    const createdUser = { ...user };
                    createdUser.isSignedIn = false;
                    createdUser.error = err.message;
                    setUser(createdUser);
                })
        }
        event.preventDefault();
        event.target.reset();
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (usr) {
            if (usr) {
                const currUser = getUser(usr);
                setUser(currUser);
            } else {
                // No user is signed in.
            }
        });
    }, [])

    return {
        user,
        signInWithGoogle,
        signOut,
        signInUser,
        handleChange,
        createAccount
    }
}

export default Auth;