/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as selectors from '../Login/selectors';
import * as loginActions from '../Login/actions';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount(){
    if(sessionStorage.getItem('token') != null ){
      if(!this.props.isAuthenticated){
        var token = sessionStorage.getItem('token');
        this.props.dispatch(loginActions.get_user_info(token,'/'));
      }
    }
  }
  render() {
    let welcomeMessage = null;
    if(this.props.isAuthenticated){
      welcomeMessage = <h2>Welcome, { this.props.selectName }</h2>
    }
    return (
       <section id="about" className="container content-section text-center">
          <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                  { welcomeMessage }
                  <p>Grayscale is a free Bootstrap 3 theme created by Start Bootstrap. It can be yours right now, simply download the template on <a href="http://startbootstrap.com/template-overviews/grayscale/">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
                  <p>This theme features stock photos by <a href="http://gratisography.com/">Gratisography</a> along with a custom Google Maps skin courtesy of <a href="http://snazzymaps.com/">Snazzy Maps</a>.</p>
                  <p>Grayscale includes full HTML, CSS, and custom JavaScript files along with LESS files for easy customization.</p>
              </div>
          </div>
      </section>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  dispatch
});
const mapStateToProps = createStructuredSelector({
  selectName: selectors.selectName(),
  isAuthenticated:selectors.selectisAuthenticated()
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
