import app from "./src/app.js";

const PORT = 2804

const server = app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})

process.on("SIGINT",()=>{
    server.close(()=>{
        console.log("Server closed");
        process.exit(0);
    })
})