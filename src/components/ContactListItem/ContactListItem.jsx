import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, phone, onDelete }) => {
  return (
    <li>
      <div>
        <p>{name}: </p>
        <p>{phone}</p>
      </div>
      <button type="button" aria-label="delete" onClick={() => onDelete(id)}>
        {' '}
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};