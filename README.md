<img src="banner.png" align="center" />

<br />

<div align="center"><strong>React.Js/Node.Js Project</strong></div>

<br />
## Quick start

1. FrontEnd part: `cd Frontend`
   Run `npm run setup` to install dependencies <br />
   Run `npm start` for development <br />
   Run `npm run build` for production <br />
   Run `npm run test` for testing <br />     
1. BackEnd part: `cd Backend`
   Run `npm install` to install dependencies <br />
   Run `npm start` for development <br />
   Run `npm run prod` for production <br />
   Run `npm run test` for testing <br />      

## Frontend

<dl>
  <dt> Authentication  </dt>
  <dd>Only User page needs authentication and `redux-auth-wrapper` high order component library is wrapped that page for authentication. Trying access to Users page without authentication, HOC will redirect to login page and login page validates token in sessionStorage if exist. If it not exist, client stayes in login page. If re-login succesfull, re-direct again to desired page. </dd>
  <dd>Home and Contact pages validate jwt token in mount state. </dd>
  <dd>Credentials are email:john@doe.com, password:secret  </dd>

  <dt>Styling</dt>
  <dd>Styles are in global-styles.js file which provide css injection to `<head>` tag </dd>

  <dt>Sagas </dt>
  <dd>For side effects, `redux-saga` is implemented. All the actions are sync and sagas listens stores and actions and catch the desired requests then fires back the request results  </dd>

  <dd> Main saga is in App container.This saga runs all the time, but other sagas destroy themselves later. <dd>
</dl>
