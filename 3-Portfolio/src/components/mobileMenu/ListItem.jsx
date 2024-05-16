import PropTypes from 'prop-types';

function ListItem(props) {
  return (
    <li>
      <img src={props.icon} alt={props.alt} />
    </li>
  );
}

ListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ListItem;
