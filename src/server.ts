import express, { response } from "express";

//@types/express
const app = express();

app.get("/test-get", (request, response) => {
    //Request -> Entrando
    //Response -> Saindo
    response.send("Hi!");
})

app.post("/test-post", (request, response) => {
    return response.send("POST");
})

app.listen(3000, () => console.log("Server is running NLW"));
