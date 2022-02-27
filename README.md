

# DyteJs

## Official state management library for DativeJs

```js
import Dative from 'dativejs';
import { defineStore, connect } from 'dytejs';



  var store = defineStore ({
    state:{
     count: 0
    },
    actions:{
     increase(){
      this.count+=1
     }
   }
  })
     
  var app = new Dative({
    el: "#app",
    template: function(){
     return `
        <div>
        <h1>Testing dyte</h1>
        <p>Count: {{$store.count}}</p>
        <button on:click="counter()">Add #1</button>
        </div>
        `
    },
    methods:{
      counter: function(){
       this.$store.dispatch('increase');
      }
    }
   })
app.use(store);
app.render();
connect()(app);
```
