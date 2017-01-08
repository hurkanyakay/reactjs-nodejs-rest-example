/**
*
* Header
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import * as loginSelectors from '../../containers/Login/selectors';
import * as loginActions from '../../containers/Login/actions';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  openRoute = (route) => { this.props.changeRoute(route); };
  openHome = () => {
    this.openRoute('/');
  }
  openUsers = () => {
    this.openRoute('/users');
  }
  openContact = () => {
    this.openRoute('/contact');
  }
  openLogin = () => {
    this.openRoute('/login');
  }
  render() {
    let LoginLogout=null
    if(this.props.isAuthenticated){
      LoginLogout = <a className="page-scroll" href="#" onClick={ this.props.logout }>Logout, {this.props.selectName}</a>
    }else{
      LoginLogout = <a className="page-scroll" href="#" onClick={ this.openLogin }>Login</a>
    }
    return (
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                      Menu <i className="fa fa-bars"></i>
                  </button>
                  <a className="navbar-brand page-scroll" href="#page-top">
                      <i className="fa fa-play-circle"></i> <span className="light">React</span> Bootstrap
                  </a>
              </div>

              <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                  <ul className="nav navbar-nav">
                      <li className="hidden">
                          <a href="#page-top"></a>
                      </li>
                      <li>
                          <a className="page-scroll" href="#" onClick={ this.openHome } >Home</a>
                      </li>
                      <li>
                          <a className="page-scroll" href="#" onClick={ this.openUsers }>Users</a>
                      </li>
                      <li>
                          <a className="page-scroll" href="#" onClick={ this.openContact }>Contact</a>
                      </li>
                      <li>
                          { LoginLogout }
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  selectName: loginSelectors.selectName(),
  isAuthenticated:loginSelectors.selectisAuthenticated()
});
function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    logout: ()=> dispatch( loginActions.logout() ),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
