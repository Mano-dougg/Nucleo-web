import PropTypes from 'prop-types';

function SectionListItem(props) {
  return(
    <li>
      <a href="#">
        {props.text}
      </a>
    </li>
  );
}

SectionListItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionListItem;
