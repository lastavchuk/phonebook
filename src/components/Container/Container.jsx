import PropTypes from 'prop-types';
import StyledContainer from './Container.styled';

const Container = ({ children, className }) => {
    return <StyledContainer className={className}>{children}</StyledContainer>;
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Container;
