import express  from "express"; 
const app =  express();
app.use(express.json()); 
const port =   5009;
app.listen(port, ()=>console.log("App is running on port "+port));
