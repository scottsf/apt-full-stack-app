import React, {Component} from 'react';

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
      </div>
    );
  }
}

export default Step2;
