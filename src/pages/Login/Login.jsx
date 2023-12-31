import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/Button/Button';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import StyledFormAddContact from 'components/Forms/FormAddContact.styled';

import { selectUserError } from 'redux/selectors';
import Notification from 'components/Notification/Notification';
import { toast } from 'react-toastify';
import { loginUserThunk } from 'redux/auth/userOperations';

export default function Login() {
    const dispatch = useDispatch();
    const error = useSelector(selectUserError);

    useEffect(() => {
        if (!!error) {
            toast.dismiss();
            toast.error(error);
        }
    }, [error]);

    const onFormSubmit = e => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        dispatch(loginUserThunk({ email, password }));
        e.currentTarget.reset();
    };
    return (
        <Section>
            <Container>
                <h2>Login</h2>
                <StyledFormAddContact onSubmit={onFormSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" title="Email" required />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        title="Password"
                        required
                    />

                    <Button className="btnGreen" type="submit">
                        Sign in
                    </Button>
                </StyledFormAddContact>
                <Notification />
            </Container>
        </Section>
    );
}
