import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Step2 extends Component {
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <input
          name="imgUrl"
          value={this.props.imgUrl}
          onChange={e => this.props.handleInput(e)}
        />
        <button onClick={() => this.props.history.push('/wizard/step1')}>
          Previous Step
        </button>
        <Link to="/wizard/step3">
          <button>Next Step</button>
        </Link>
      </div>
    );
  }
}

export default Step2;
