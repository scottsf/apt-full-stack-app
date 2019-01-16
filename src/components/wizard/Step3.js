import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateAmount} from '../../ducks/reducer';

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
          name="monthlyMA"
          value={this.props.imgUrl}
          type="number"
          onChange={e => this.handleInput(e)}
        />
        <input
          name="desiredMR"
          type="number"
          onChange={e => this.handleInput(e)}
          value={this.props.imgUrl}
        />
        <Link to="/">
          <button onClick={() => this.createHouse()}> Complete </button>
        </Link>
        <button
          onClick={
            (() => this.props.history.goBack(),
            () => this.props.updateAmount(this.state))
          }>
          Previous Step
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  {updateAmount},
)(Step3);
