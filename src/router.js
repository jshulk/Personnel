class Personnel {

  constructor (config) {
    this.config = config;
    this._onRouteChange = this._onRouteChange.bind(this);
  }

  define (path, cb) {
    this._routes = this._routes || {};
    if (!this._routes[path]) {
      this._routes[path] = { path: path, cb : cb };
    }
  }

  start () {
    window.addEventListener("popstate", this._onRouteChange);
  }

  _onRouteChange () {

    if (this._routes) {
        for (var route in this._routes) {
          if (window.location.pathname === route) {
            this._currentRoute = route;
            this._routes[this._currentRoute].cb();
          }
        }
    }

  }

  get routes () {
    return this._routes;
  }

  go (path) {
    window.history.pushState(null, null, path);
    this._onRouteChange();
  }

}

module.exports = Personnel;
