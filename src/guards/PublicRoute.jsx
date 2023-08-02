import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserToken } from 'redux/selectors';

export default function PublicRoute({ children }) {
    const token = useSelector(selectUserToken);
    return !token ? children : <Navigate to="/contacts" />;
}
