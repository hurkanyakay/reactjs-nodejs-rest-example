/*
 *
 * Users
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectUsers from './selectors';
import { requireAuthentication } from '../../utils/AuthWrapper';

export class Users extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let userlist = this.props.userList.map((user,i) =>{
      return <li key={i}> {user} </li>
    });

    return (
      <section className="container content-section text-center">
         <div className="row">
             <div className="col-lg-4 col-lg-offset-4">
                 <h2>User List</h2>
                 <ul className="text-left">
                  { userlist }
                 </ul>
             </div>
         </div>
     </section>
    );
  }
}

const mapStateToProps = selectUsers();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(requireAuthentication(Users));
