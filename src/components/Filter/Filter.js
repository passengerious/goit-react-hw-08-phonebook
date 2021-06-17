// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { getFilter } from 'redux/phonebook/phonebook-selectors';
import * as phonebookActions from 'redux/phonebook/phonebook-actions';
import s from './Filter.module.css';

export default function Filter() {
  //*** Step 2 ***
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(phonebookActions.changeFilter(e.target.value));

  return (
    <label className={s.filter}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter name to search"
        className={s.input}
      />
    </label>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

//*** Step 1 ***
// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(phonebookActions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
