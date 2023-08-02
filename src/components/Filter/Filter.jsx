import PropTypes from 'prop-types';
import StyledFieldInput from './Filter.styled';

const Filter = ({ filter, onFilterChange }) => {
    const onInputChange = e => {
        onFilterChange(e.target.value);
    };

    return (
        <>
            <span>Find contacts by name or phone number</span>
            <StyledFieldInput
                onChange={onInputChange}
                value={filter}
                type="text"
                name="search"
            ></StyledFieldInput>
        </>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
