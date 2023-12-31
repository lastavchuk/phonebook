import PropTypes from 'prop-types';
import StyledButton from './Button.styled';

const Button = ({ children, className, ...restProps }) => {
    return (
        <StyledButton className={className} {...restProps}>
            {children}
        </StyledButton>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Button;
