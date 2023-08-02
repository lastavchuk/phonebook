import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUserToken } from 'redux/selectors';
import StyledHome from './Home.styled';

export default function Home() {
    const token = useSelector(selectUserToken);
    return (
        <Section>
            <Container>
                <StyledHome>
                    <h1>Phonebook</h1>
                    <p>An app to store your contacts</p>
                    {!token && (
                        <p>
                            To get started,{' '}
                            <Link to="/login" className="link">
                                log in
                            </Link>{' '}
                            or{' '}
                            <Link to="/login" className="link">
                                register
                            </Link>
                        </p>
                    )}
                </StyledHome>
            </Container>
        </Section>
    );
}
