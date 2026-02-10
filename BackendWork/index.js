const http=require('http');
const sum=require('./fetchAPI');
const PORT=4002;
const server=http.createServer(async(req, res)=>{
    // res.setHeader('content-type', 'application/json');
    // res.end('<h2>Welcome to Node Server</h2>');
    // res.end(JSON.stringify({msg: "Welcome to the server"}));

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if(req.url=='/msg' && req.method=="GET"){
        res.setHeader('content-type', 'text/html');
        res.end("<h2>Greetings of the Day</h2>");
    }
    // else if(req.url=='/data' && req.method=="POST"){
    //     const student={
    //         name:"Rahul",
    //         branch:"CSE",
    //         college:"ABESEC"
    //     }
    //     res.setHeader('content-type', 'application/json');
    //     res.end(JSON.stringify({msg: student}));
    // }
    else if(req.url=='/data' && req.method=="GET"){
        res.setHeader('content-type', 'application/json');
        const data=await sum();
        res.end(JSON.stringify({msg: data}));
    }
    else{
        res.setHeader('content-type', 'text/html');
        res.end('<h2 style="color: red;">Invalid Endpoint</h2>');
    }
})
server.listen(PORT, ()=>{
    console.log("Server is running on "+PORT);
})