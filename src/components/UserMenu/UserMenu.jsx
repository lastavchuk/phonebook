import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import { logOutUserThunk } from 'redux/operations';
import Button from 'components/Button/Button';
import StyledUserMenu from './UserMenu.styled';

export default function UserMenu() {
    const user = useSelector(selectUserData);

    const dispatch = useDispatch();
    const onLogOut = () => dispatch(logOutUserThunk());

    return (
        <StyledUserMenu>
            <span>Hi, {user.name} </span>
            <Button className="btnBlue fixed" onClick={onLogOut}>
                Log Out
            </Button>
        </StyledUserMenu>
    );
}
