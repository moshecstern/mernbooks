const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/auth/", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/api/home", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/loginUser", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/registerUser", { target: process.env.PORT||"http://localhost:3001/" }));
  
  app.use(proxy("/api/notes", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/api/series", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/api/characters", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/api/userbooks", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/api/userhighscoretrivia", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/api/userhighscorememory", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/api/userprofilecustom", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/api/userbookstoloan", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/api/userbooksloaned", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/api/userblog", { target: process.env.PORT||"http://localhost:3001/" }));
  app.use(proxy("/api/userfavblogs", { target: process.env.PORT||"http://localhost:3001/" }));
  
  // app.use(proxy("/api/userfavtv", { target: process.env.PORT||"http://localhost:3001/" }));
  // app.use(proxy("/api/userfavmovies", { target: process.env.PORT||"http://localhost:3001/" }));
  // app.use(proxy("/api/userfavnews", { target: process.env.PORT||"http://localhost:3001/" }));
  
};
