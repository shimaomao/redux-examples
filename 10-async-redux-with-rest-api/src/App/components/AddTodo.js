import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions/todo';

const AddTodo = ({ addTodo }) => {
  let input;
  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (!input.value || !input.value.trim()) return;
      addTodo(input.value);
      input.value = '';
    }}>
      <input type='text' ref={ref => input = ref}/>
    </form>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addTodo: title => dispatch(addTodo(title)),
});

export default connect(null, mapDispatchToProps)(AddTodo);
