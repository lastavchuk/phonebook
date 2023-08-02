import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserToken } from 'redux/selectors';
import PropTypes from 'prop-types';

export default function PrivateRoute({ children }) {
    const token = useSelector(selectUserToken);
    return !!token ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
