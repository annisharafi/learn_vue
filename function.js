 var app = new Vue({
            el:'#app',
            data: {
                message: 'Hello vue!'
            }
        })
 
 var app2= new Vue({
     el: '#app-2',
     data:{
         message:'you loaded this page on '+ new Date().toLocaleString()
     }
 })
 
 var app3= new Vue({
     el:'#app-3',
     data:{
         seen:true
     }
 })
 
 var app4 = new Vue ({
     el: '#app-4',
     data:{
         todos:[
             { text: 'learn javascript'},
             { text: 'learn vue'},
             { text: 'build something awesome'}
             
         ]
     }
 })
 
 var app5 = new Vue ({
     el: '#app-5',
     data: {
         message: 'hello vue.js!'
     },
     methods: {
         reverseMessage: function(){
             this.message =this.message.split('').reverse().join('')
         }
     }
 })
 
 var app6 =new Vue({
     el:'#app-6',
     data: {
         message: 'hello vue!'
     }
 })
 
 Vue.component('todo-item', {
     props:['todo'],
     template: '<li>{{ todo.text }}</li>'
 })

var app7 =new Vue ({
    el:'#app-7',
    data:{
        groceryList: [
            { id:0, text:'vegetables'},
            { id:1, text:'cheese'},
            { id:2, text:'whatever'}
        ]
    }
})