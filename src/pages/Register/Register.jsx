import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/Button/Button';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import Notification from 'components/Notification/Notification';
import StyledFormAddContact from 'components/Forms/FormAddContact.styled';

import { registerUserThunk } from 'redux/operations';
import { selectUserError } from 'redux/selectors';
import { toast } from 'react-toastify';

export default function Register() {
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
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        console.log({ name, email, password });

        dispatch(registerUserThunk({ name, email, password }));
        e.currentTarget.reset();
    };
    return (
        <Section>
            <Container>
                <h2>Register</h2>
                <StyledFormAddContact onSubmit={onFormSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" title="Name" required />

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
                        register
                    </Button>
                </StyledFormAddContact>
                <Notification />
            </Container>
        </Section>
    );
}
