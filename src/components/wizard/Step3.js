import React, {Component} from 'react';

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
      </div>
    );
  }
}

export default Step3;
