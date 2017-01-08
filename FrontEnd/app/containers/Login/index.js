/*
 *
 * Login
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import * as selectors from './selectors';
import * as actionCreators from './actions';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const redirectRoute = this.props.location.query.redirect || '/';
    this.state = {
      email:'',
      password:'',
      redirectTo: redirectRoute,
      errorText1:'',
      errorText2:''
    };
  }
  componentDidMount(){
    if(sessionStorage.getItem('token') != null ){
      var token = sessionStorage.getItem('token');
      this.props.actions.get_user_info(token,this.state.redirectTo);
    }
  }
  handleNameChange(event) {    this.setState({email: event.target.value});  }
  handlePasswordChange(event) {    this.setState({password: event.target.value});  }
  onSubmit = (e) => {
    e.preventDefault()
    if(this.state.email == ''){
      this.setState({errorText1: 'Email can not be empty'});
    }
    else if(this.state.password == ''){
      this.setState({errorText1: ''});
      this.setState({errorText2: 'Password can not be empty'});
    }else{
      this.props.actions.loginUser(this.state.email, this.state.password, this.state.redirectTo);
    }
  };

  render() {
    let errorText = null;
    if(this.props.selectError != false){
      errorText= <div className="text-danger"> { this.props.selectError } </div>;
    }
    return (
      <div className="container content-section">
         <div className="card card-container">
             <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
             <p id="profile-name" className="profile-name-card"></p>
             <form className="form-signin">
                 <span id="reauth-email" className="reauth-email"></span>
                 <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required value={this.state.email} onChange={this.handleNameChange.bind(this)}/>
                 <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
                 <div id="remember" className="checkbox">
                     <label>
                         <input type="checkbox" value="remember-me" /> Remember me
                     </label>
                 </div>
                 <button className="btn btn-lg btn-primary btn-block btn-signin" onClick={this.onSubmit}>Sign in</button>
             </form>
             <a href="#" className="forgot-password">
                 Forgot the password?
             </a>
             { errorText }
         </div>
     </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});
const mapStateToProps = createStructuredSelector({
  isAuthenticating: selectors.selectisAuthenticating(),
  selectError: selectors.selectError(),
  isAuthenticated:selectors.selectisAuthenticated()
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
