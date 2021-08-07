![](src/logo.svg)

# VadexJs

## Official state management library for DativeJs

```js
import Dative from 'https://cdn.jsdelivr.net/gh/dativeJs/dativejs@main/dist/dative.es.min.js';
 import Vadex from 'https://cdn.jsdelivr.net/gh/vadexjs/vadexjs@main/dist/vadex.es.min.js';
      
  Dative.use(Vadex);
     
  var store = new Vadex.Store({
    state:{
     count: 0
    },
    mutations:{
     increment(state){
        state.count++
     }
    },
    actions:{
     increase({ commit }){
      commit('increment')
     }
   }
  })
     
  var vm = new Dative({
    el: "#app",
    store: store,
    computed:{
      count(){
        return this.store.state.count
      }
    }
    template: function(){
     return `
        <h1>Testing vadex</h1>
        <p>Count: {{ count }}</p>
        <button on:click="counter">Add #1</button>
           `
    },
    methods:{
      counter: function(){
       this.store.dispatch('increase');
      }
    }
   })
vm.render();
```
