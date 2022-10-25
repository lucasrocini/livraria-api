// import expressBasicAuth from "express-basic-auth";

// function myBasicAuth(username, password) {
//     const defaultAdminUser = {'admin': 'desafio-igti-nodejs'};
//     const userMatches = expressBasicAuth.safeCompare(username, 'admin');
//     const pwdMatches = expressBasicAuth.safeCompare(password, 'desafio-igti-nodejs');
//     return userMatches && pwdMatches;
// }

// export default{
//     myBasicAuth
// }

// import basicAuth from "express-basic-auth";

// const defaultAdminUser = {'admin': 'desafio-igti-nodejs'};

// function myBasicAuth(){

// }

// app.use(basicAuth({
//     authorizer: (username, password) => {
//         const userMatches = expressBasicAuth.safeCompare(username, 'admin');
//         const pwdMatches = expressBasicAuth.safeCompare(password, 'desafio-igti-nodejs');
//         return userMatches && pwdMatches;
//     }
// }));

// function getRoles(username) {
//     if(username == 'admin') {
//         return 'admin';
//     }
// }

// function authorize(...allowed) {

//     const isAllowed = role => allowed.indexOf(role) > -1;

//     return (req, res, next) => {
//         if(req.auth.user) {
//             const role = getRoles(req.auth.user);

//             if (isAllowed(role)) {
//                 next();
//             } else {
//                 res.status(401).send('Role not allowed');
//             }
//         } else {
//             res.status(403).send('User not found');
//         }
//     }
// }



// export default {
//     myBasicAuth,
//     authorize
// }

