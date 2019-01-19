import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateAmount} from '../../ducks/reducer';
import axios from 'axios';
import './step3.scss';

class Step3 extends Component {
  state = {
    monthlyMA: '',
    desiredMR: '',
  };

  componentDidMount() {
    this.setState({
      monthlyMA: this.props.monthlyMA,
      desiredMR: this.props.desiredMR,
    });
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


   createHouse = () => {
      axios.post(`/api/house`, this.props);

   };

  render() {
    return (
      <div className="step3">
        <p> Monthly Mortgage Amount: </p>
        <input
          className="step3_amount"
          name="monthlyMA"
          value={this.state.monthlyMA}
          type="number"
          onChange={e => this.handleInput(e)}
        />
        <p> Desired Monthly Rate </p>
        <input
          className="step3_rate"
          name="desiredMR"
          type="number"
          onChange={e => this.handleInput(e)}
          value={this.state.desiredMR}
        />
        <button
          className="step3_btn-prev"
          onClick={() => {
            this.props.history.goBack();
            this.props.updateAmount(this.state);
          }}>
          Previous Step
        </button>
        <Link to="/">
          <button
            className="step3_btn-complete"
            onClick={() => this.createHouse()}> Complete </button>
        </Link>
      </div>
   );
  }
}

const mapPropsToState = state => ({...state});

export default connect(
  mapPropsToState,
  {updateAmount},
)(Step3);
