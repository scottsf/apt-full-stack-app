import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateAmount, clearState} from '../../ducks/reducer';
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
      let {name, address, city, state, zipcode, imgUrl} = this.props;
     let house = {name, address, city, state, zipcode, imgUrl, ...this.state};
      axios.post(`/api/house`, house)
       .then(res => {
          this.props.clearState();
          this.props.history.push('/');
       })
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
            this.props.updateAmount(this.state)
            this.props.history.goBack();
          }}>
          Previous Step
        </button>
        <button
          className="step3_btn-complete"
          onClick={() => this.createHouse()}> Complete </button>
      </div>
   );
  }
}

const mapPropsToState = state => ({...state});

export default connect(
  mapPropsToState,
  {updateAmount, clearState},
)(Step3);
