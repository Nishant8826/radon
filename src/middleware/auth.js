const jwt = require("jsonwebtoken");

const mid=async function(req,res,next){
  let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    //in above 2 line we are verifying the case-sensitive cases;
  
    //If no token is present in the request header return error
    if (!token) {
      return res.send({ status: false, msg: "token must be present" });
    }
  

  let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken) {
      return res.send({ status: false, msg: "token is invalid" });
    }

   //userId for which the request is made. In this case message to be posted.
   let userToBeModified = req.params.userId
   //userId for the logged-in user
   let userLoggedIn = decodedToken.userId
 
   //userId comparision to check if the logged-in user is requesting for their own data
   if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'Wrong User Credentials'})
    
   
   next();
}

module.exports.mid=mid;
