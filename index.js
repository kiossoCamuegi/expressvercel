import express  from "express";

const app =  express();
app.use(express.json());


app.get("/", (req, res)=>{
    res.send([
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        {
            name:"kiosso",
            age:22,
            jobtitle:"software developer"
        },
        {
            name:"Carlos",
            age:12,
            jobtitle:"Police officer"
        },
        
    ])
})
 

const port =   5009;
app.listen(port, ()=>console.log("App is running on port "+port));