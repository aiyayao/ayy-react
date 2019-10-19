import React, { Component } from 'React';

class Bundle extends Component {
  constructor(props) {
    this.state = {
      mod: null,
    };
  }

  componentDidMount() {
    this.loader(this.props);
  }

  componentDidUpdate(nextProps) {
    if (nextProps.load !=== this.props.load) {
      this.load(next.props);
    }
  }

  load = (props) => {
    this.setState({ mod: null });
    props.load((mod) => {
      this.setState({
        mod: mod.default || mod
      });
    });
  }

  render() {
    return this.props.children(this.state.mod);
  }
}

export default Bundle;
