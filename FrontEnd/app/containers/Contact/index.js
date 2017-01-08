/*
 *
 * Contact
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectContact from './selectors';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';
import * as loginActions from '../Login/actions';
import * as loginSelectors from '../Login/selectors';


export class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      subject:'',
      message:''
    };
  }
  componentDidMount(){
    if(sessionStorage.getItem('token') != null ){
      if(!this.props.isAuthenticated){
        var token = sessionStorage.getItem('token');
        this.props.dispatch(loginActions.get_user_info(token,'/contact'));
      }
    }
  }
  handleNameChange = (event) => { this.setState({name: event.target.value});  }
  handleEmailChange = (event) => { this.setState({email: event.target.value});  }
  handleSubjectChange = (event) => { this.setState({subject: event.target.value});  }
  handleMessageChange = (event) => { this.setState({message: event.target.value});  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.actions.sendContactInfoRequest(this.state );
  };
  render() {
    let statusText = null;
    if(this.props.selectContact.sendingError != false){
      statusText= <div className="text-danger"> { this.props.selectContact.sendingError } </div>;
    }else{
      if(this.props.selectContact.sentInfo){
        statusText= <div className="text-success"> Form Sent! </div>;
      }
    }
    return (
      <section className="container content-section">
        <div className="container">
          <div className="row">
              <div className="col-sm-12 col-lg-12">
                  <h1 className="h1">
                      Contact us <small>Feel free to contact us</small></h1>
              </div>
          </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="well well-sm">
                        <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label name="name">
                                        Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter name" required="required" value={this.state.name} onChange={this.handleNameChange}/>
                                </div>
                                <div className="form-group">
                                    <label name="email">
                                        Email Address</label>
                                    <div className="input-group">
                                        <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                                        </span>
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" required="required" value={this.state.email} onChange={this.handleEmailChange}/></div>
                                </div>
                                <div className="form-group">
                                  <label name="subject">
                                      Subject</label>
                                  <input type="text" className="form-control" id="subject" placeholder="Enter subject" required="required" value={this.state.subject} onChange={this.handleSubjectChange}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label name="name">
                                        Message</label>
                                    <textarea name="message" id="message" className="form-control" rows="9" cols="25" required="required"
                                        placeholder="Message" value={this.state.message} onChange={this.handleMessageChange}></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                               { statusText }
                                <button type="submit" onClick={ this.onSubmit } className="btn btn-primary pull-right" id="btnContactUs">
                                    Send Message</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-4">
                    <form>
                    <legend><span className="glyphicon glyphicon-globe"></span> Our office</legend>
                    <address>
                        <strong>Twitter, Inc.</strong><br/>
                        795 Folsom Ave, Suite 600<br/>
                        San Francisco, CA 94107<br/>
                        <abbr title="Phone">
                            P:</abbr>
                        (123) 456-7890
                    </address>
                    <address>
                        <strong>Full Name</strong><br/>
                        <a href="mailto:#">first.last@example.com</a>
                    </address>
                    </form>
                </div>
            </div>
        </div>
      </section>
    );
  }
}

// const mapStateToProps = selectContact();

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(actionCreators, dispatch),
    dispatch,
  };
}
const mapStateToProps = createStructuredSelector({
  selectContact: selectContact(),
  isAuthenticated:loginSelectors.selectisAuthenticated()
});
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
