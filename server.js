var app = require('express')()

app.get('/quote',function(request,response){
  response.sendFile(__dirname+"/quote.html");
})

app.listen(8080,function(req,res){
  console.log('Server Started');
})
