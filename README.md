

# DyteJs

## Official state management library for DativeJs

```js
import Dative from 'https://cdn.jsdelivr.net/gh/dativeJs/dativejs@main/dist/dative.es.min.js';
 import Dyte from 'https://cdn.jsdelivr.net/npm/dytejs@1.0.0/dist/dyte.es.min.js';
      
  Dative.use(Dyte);
     
  var store = new Dyte.Store({
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
        <h1>Testing dyte</h1>
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
