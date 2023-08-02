import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';
import SharedLayout from 'layout/SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUserThunk } from 'redux/auth/userOperations';
import { selectUserToken } from 'redux/selectors';

const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));

export function App() {
    const dispatch = useDispatch();
    const token = useSelector(selectUserToken);

    useEffect(() => {
        if (!token) return;

        dispatch(refreshUserThunk());
    }, [dispatch, token]);

    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route
                    path="contacts"
                    element={
                        <PrivateRoute>
                            <Contacts />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route
                    path="register"
                    element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
