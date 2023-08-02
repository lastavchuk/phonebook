import PropTypes from 'prop-types';
import StyledHeadTitle from './HeadTilte.styled';

const HeadTilte = ({ title }) => {
    return <StyledHeadTitle>{title}</StyledHeadTitle>;
};

HeadTilte.propTypes = {
    title: PropTypes.string.isRequired,
};

export default HeadTilte;
