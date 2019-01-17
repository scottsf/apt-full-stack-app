import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateImg} from '../../ducks/reducer';

class Step2 extends Component {
  state = {
    imgUrl: '',
  };

  componentDidMount() {
    this.setState({imgUrl: this.props.imgUrl});
  }

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
          value={this.state.imgUrl}
          onChange={e => this.handleInput(e)}
        />
        <button
          onClick={() => {
            this.props.history.push('/wizard/step1');
            this.props.updateImg(this.state.imgUrl);
          }}>
          Previous Step
        </button>
        <Link to="/wizard/step3">
          <button onClick={() => this.props.updateImg(this.state.imgUrl)}>
            Next Step
          </button>
        </Link>
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {imgUrl: state.imgUrl};
};

export default connect(
  mapPropsToState,
  {updateImg},
)(Step2);
