import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateImg} from '../../ducks/reducer';
import './step2.scss';

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
      <div className="step2">
        <p className="step2_p"> Image URL </p>
        <input
          className="step2_imgUrl"
          name="imgUrl"
          value={this.state.imgUrl}
          onChange={e => this.handleInput(e)}
        />
        <button
          className="step2_btn-prev"
          onClick={() => {
            this.props.history.push('/wizard/step1');
            this.props.updateImg(this.state.imgUrl);
          }}>
          Previous Step
        </button>
        <Link to="/wizard/step3">
          <button className="step2_btn-next"onClick={() => this.props.updateImg(this.state.imgUrl)}>
            Next Step
          </button>
        </Link>
      </div>
    );
  }
}

const mapPropsToState = state => ({imgUrl: state.imgUrl});

export default connect(
  null,
  {updateImg},
)(Step2);
