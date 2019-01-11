import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Step3 extends Component {
  state = {
    monthlyMA: '',
    desiredMR: '',
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          name="imgUrl"
          value={this.props.imgUrl}
          onChange={e => this.props.handleInput(e)}
        />
        <input
          name="imgUrl"
          value={this.props.imgUrl}
          onChange={e => this.props.handleInput(e)}
        />
        <Link to="/">
          <button onClick={() => this.createHouse()}> Complete </button>
        </Link>
        <button onClick={() => this.props.history.goBack()}>
          Previous Step
        </button>
      </div>
    );
  }
}

export default Step3;
