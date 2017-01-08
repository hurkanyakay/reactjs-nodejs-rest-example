import { Router } from 'express'
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
const router = new Router()

const secret = 'superSecret'

export const require_auth = (req, res, next) =>{
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.params.token || req.headers['x-access-token'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
}

router.post('/',function(req, res) {
    var user = {
     email : 'john@doe.com',
     password: 'secret',
      name: 'John Doe',
      picture: 'https://api.adorable.io/avatars/285/abott@adorable.io.png'
   }
   if (user.email !=  req.body.email) {
     res.json({ success: false, message: 'Authentication failed. User not found.' });
   } else if (user) {
     // check if password matches
     if (user.password != req.body.password) {
       res.json({ success: false, message: 'Authentication failed. Wrong password.' });
     } else {
       // if user is found and password is right
       // create a token
       var token = jwt.sign(user, secret, {
         expiresIn: 86400 // expires in 24 hours
       });

       res.json({
         success: true,
         data: { email: user.email, name: user.name, picture: user.picture},
         token: token
       });
     }
   }
 });
 router.get('/', require_auth, function(req, res) {

    res.json({
      success: true,
      data: req.decoded
    })
  });


export default router
