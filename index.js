import express from "express";

const app = express();
const port = 3000;

app.set("view engine", ejs); // might remove this???

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
