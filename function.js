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