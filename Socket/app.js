const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
 


app.get('/', function(req, res){ res.sendFile('C:/Users/cppat/OneDrive/Desktop/practice/Socket/index.html');
});

let client=0;
io.on('connection', function(socket){
    client++;

   socket.emit('broadcost',{discription : 'hey ! welcome to my chat application...'})
   socket.broadcast.emit('broadcost', {discription : client + ' is connected us ...'})

   socket.on('disconnet', ()=>{
      client--;
      socket.broadcast.emit('broadcost', {discription : client + ' is connected..'})
   })

});

// io.on('connection', function(socket){
//    clients++;
//    socket.emit('newclientconnect',{ description: 'Hey, welcome!'});
//    socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})
//    socket.on('disconnect', function () {
//       clients--;
//       socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})
//    });
// });


http.listen(3000, function(){
   console.log('listening on *:3000');
});