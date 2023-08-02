import PropTypes from 'prop-types';
import StyledSection from 'components/Section/Section.styled';

const Section = ({ children }) => {
    return <StyledSection>{children}</StyledSection>;
};

Section.propTypes = {
    children: PropTypes.node,
};

export default Section;
