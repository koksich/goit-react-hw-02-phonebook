import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="filter"> Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="filter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};