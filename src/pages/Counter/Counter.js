import React, { Component } from 'react';
import { increment, decrement, reset } from 'actions/counter';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
  counter: PropTypes.object,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func,
};

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <div>当前显示计数为：{this.props.counter.count}</div>
        <button onClick={() => this.props.increment()}>自增</button>
        <button onClick={() => this.props.decrement()}>自减</button>
        <button onClick={() => this.props.reset()}>重置</button>
      </div>
    ); 
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
    reset: () => {
      dispatch(reset());
    }
  };
};

Counter.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
