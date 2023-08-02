import { NavLink } from 'react-router-dom';
import Container from 'components/Container/Container';
import StyledHeader from './Header.styled';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import UserMenu from 'components/UserMenu/UserMenu';

export default function Header() {
    const user = useSelector(selectUserData);

    return (
        <StyledHeader>
            <Container className="flex">
                <nav className="main-nav">
                    {/* <NavLink to="/" className="logo">
                        Logo
                    </NavLink> */}
                    <ul className="site-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="link">
                                Home
                            </NavLink>
                        </li>
                        {!!user ? (
                            <li className="nav-item">
                                <NavLink to="/contacts" className="link">
                                    Contacts
                                </NavLink>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <NavLink to="/login" className="link">
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/register" className="link">
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
                {!!user && <UserMenu />}
            </Container>
        </StyledHeader>
    );
}
