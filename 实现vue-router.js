// hash方法实现
class Routers {
  constructor() {
    this.routes = {}; // 存放path及callback
    this.currentUrl = '';
    this.refresh = this.refresh.bind(this);
    // 监听路由change调用相对应的路由回调
    window.addEventListener('load', this.refresh, false);
    window.addEventListener('hashchange', this.refresh, false);
  }
  route(path, callback) {
    this.routes[path] = callback;
  }
  push() {
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl] && this.routes[this.currentUrl]()
  }
}