

# DyteJs

## Official state management library for DativeJs

```shell
npm install dativejs dytejs 
```

```js
import Dative from 'dativejs';
import { defineStore, connect } from 'dytejs';



  var store = defineStore({
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
    template: `

        <div>
        <h1>Testing dyte</h1>
        <p>Count: {{$store.count}}</p>
        <button on:click="counter()">Add #1</button>
        </div>
     `,
    use: [store],
    methods:{
      counter: function(){
       this.$store.dispatch('increase');
      }
    }
   })


connect()(app);
```
