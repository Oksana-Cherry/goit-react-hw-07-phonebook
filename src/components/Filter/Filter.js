import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { contactsSelectors, changeFilterName } from '../../redux/contacts';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={styles.Title}>
      Find contacts by name
      <input
        className={styles.Title_input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilterName(e.target.value)),
});

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
