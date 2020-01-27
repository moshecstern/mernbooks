const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/auth/", { target: "http://localhost:3001/" }));
  app.use(proxy("/api/home", { target: "http://localhost:3001/" }));
  app.use(proxy("/loginUser", { target: "http://localhost:3001/" }));
  app.use(proxy("/registerUser", { target: "http://localhost:3001/" }));
  
  app.use(proxy("/api/notes", { target: "http://localhost:3001/" }));
  app.use(proxy("/api/series", { target: "http://localhost:3001/" }));
  app.use(proxy("/api/characters", { target: "http://localhost:3001/" }));
  // app.use(proxy("/api/characters/:id", { target: "http://localhost:3001/" }));

};
