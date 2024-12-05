let http =  require('http') //http mode nodule
let port = 2000

let server = http.createServer((req, res)=>{
    let url = req.url
    console.log(url);

    res.writeHead(200,{
        'content-type' : 'application/json' 
    })
    if(url == '/student'){
        res.write("Student Page")
    }
    else if(url == '/lecture'){
        res.write("Lecture Page")
    }
    else if(url == '/'){
        res.write("Welcome to My REST API")
    }
    else{
        res.write("Wrong API Endpoint")
    }
    res.end()

})

server.listen(port, ()=>{
    console.log(`Server run at http://localhost:${port}`);
})