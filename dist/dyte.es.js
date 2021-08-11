  function tip() {
    console.warn('[dyte Tips]: ', arguments[0])
   }
  let Dative;
  function setDative(_Dative){
    Dative = _Dative;
  }
  /**
   * @private
   * @param {object} obj coverts a string to object 
   **/
  var clone = function(obj) {
    return JSON.parse(JSON.stringify(obj))
  }
  /**
   * @param {Object} options options for the Store
   */
  function Store(options = {}) {
    if (!Dative) {
      Dative.warn(`[dyte Warn]: Dative Not Found\nTry Using Dative.use(Dyte) To install dyte with Dative`)
      return;
    }
    var $this = this;
    $this.options = options;
    $this.actions = $this.options.actions;
    $this.mutations = $this.options.mutations;
    $this.plugins = $this.options.plugins;
    $this.listeners = [];
    $this.state = new Proxy(($this.options.state || {}), {
      set: function(state, key, value) {
        state[key] = value;
        return true;
      }
    });
    if ($this.plugins === void 0) $this.plugins = [];
    $this.plugins.forEach(function(plugin){
      return plugin($this);
    })
  }
  /**
   * @param {string} action from the actions
   * @param {*} payload payload for the action
   **/
  Store.prototype.dispatch = function(action, payload) {
    if (!this.actions[action]) {
      Dative.warn(`[dyte warn]: action ${action} is undefined`)
    }
    this.actions[action](
      {
        commit: this.commit.bind(this),
        state: clone(this.state)
      },
      payload
    )
    this.listeners.forEach(listener => listener(this.mutations,this.state))
  }
  /**
   * @param {string} type from the mutations
   * @param {*} payload payload for the mutations
   **/
  Store.prototype.commit = function(type, payload) {
    if (!this.mutations[type]) {
      Dative.warn(`[dyte warn]: mutation ${type} is undefined`)
    }
    this.mutations[type].call(null, this.state, payload)
  }
  /**
   * @param {function} listener subscribe to change in the action
   **/
  Store.prototype.subscribe = function(listener) {
    this.listeners.push(listener)
    return function unsubscribe() {
      const index = this.listeners.indexOf(listener)
      this.listeners.splice(index, 1)
    }
  }
  var Dyte = {
    Store: Store,
    install: install,
    version: 'v1.0.0',
  }
  /**
   * @param {constructor} Dative installs dyte to DativeJs
  **/
  function install(dative) {
    if (Dative) {
      tip(`dyte is already installed. Dative.use(Dyte) should be called only once.`);
    }
    setDative(dative);
  }
  if (typeof window.Dative !== 'undefined' && window.Dative) {
    window.Dative.use(Dyte);
  }
  export default Dyte;
  export { Store }