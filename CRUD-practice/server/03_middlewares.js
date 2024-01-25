// ------------------------------- MiddleWares ---------------------------------------
import express from 'express';
import morgan from 'morgan';

const server = express();

// Initiate Server
server.listen(8080, () => {
  console.log('Server Started ...');
});

// Rule:
// Priority in server always from top to bottom

// Req -> Middleware -> Server
// Req <- Middleware <- Server
// place first middleware then all api methods

// server.use(express.json());

// 4.Third Party Middleware like morgan[logger]
// server.use(morgan('dev'))
// server.use(morgan('default'));

// /menu?password=123
// ?password=123 <- Query String [req.query]
// password <- Query Parameter  [req.query.password]

// 1.Application Level Middleware [Global Level Server]
// Logger
// server.use((req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     req.path,
//     new Date(),
//     res.get('User-Agent')
//   );
//   next(); //pass the req to server for processing
// });

// 2.Router Level Middleware [Routes Level Server]
// bodyParser
// server.use(express.urlencoded());

// const auth = (req, res, next) =>
//   req.query.password === '123' ? next() : res.sendStatus(401);

// // Middleware can be use globally or with any method
// //a. globallevel use
// server.use(auth);

// //b.  with method
// server.get('/menu', auth, (req, res) => {
//   res.json({ dosa: 'masalaDosa' });
// });

// Previous Method was unsecure method for passwords
// Secure Method body me post karo password, use postman to check

// server.use(express.json()); //we have to use this to parse body of json type
// const auth = (req, res, next) =>
//   req.body.password == '123' ? next() : res.sendStatus(401);

// server.post('/', auth, (req, res) => {
//   // for not password on browser query parameter, use bodyParser first
//   res.json({ dosa: 'masalaDosa' });
// });

// 3.BuiltIn Level Middleware [Routes Level Server]
// express.json(), express.static(), express.urlencoded();

// a.Parses incoming(reqBody) JSON
// server.use(express.json()); ✅

// b.Parses incoming urlencoded
// server.use(express.urlencoded({ extended: true }));

// Static hosting using this middleware
// c.Serves static files such as HTML, images, CSS, and JavaScript.
// public folder will include all the static things that can be accessed with '/'
// server.use(express.static('public'));

// ----------------------------- Handling Requests ---------------------------------------
// 1. req.query
// 2. req.body
// 3. req.params , product/:id

server.get('/product/:id', (req, res) => {
  console.log(req.params);
  res.json({ food: 'dal-chawal' });
});

server.get('/', (req, res) => {
  res.json({ food: 'dal-chawal' });
});
