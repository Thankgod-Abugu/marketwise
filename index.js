import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));

// config
app.set("view engine", "ejs"); // might remove this???

// routes
// add a welcome page
app.get("/register", (req, res) => {
    res.render("register.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

// revalidating username in backend
// remember you used username1 not username
/** 
let isValid = false;
let username1 = 123;
const rules = {
    isEmpty: "",
    hasSpaces: " ",
    validLength: /^.{8,12}$/,
    hasLowercase: /[a-z]/,
    hasUppercase: /[A-Z]/,
    hasNumber: /\d/,
    hasSymbol: /[^A-Za-z0-9]/,
};
// check if data type is string
if (username1 === rules.isEmpty) {
    console.log("username is empty");
    isValid = false;
} else if (typeof username1 !== "string") {
    console.log("username is not a string, it is " + typeof username1);
    isValid = false;
} else if (username1.includes(rules.hasSpaces)) {
    console.log("username contains spaces");
    isValid = false;
} else if (!rules.validLength.test(username1)) {
    console.log("username is less than 8 or more than 12 characters");
    isValid = false;
} else if (!rules.hasLowercase.test(username1)) {
    console.log("username does not contain lower case letter");
    isValid = false;
} else if (!rules.hasUppercase.test(username1)) {
    console.log("username does not contain upper case letter");
    isValid = false;
} else if (!rules.hasNumber.test(username1)) {
    console.log("username does not contain any number");
    isValid = false;
} else if (!rules.hasSymbol.test(username1)) {
    console.log("username does not contain any symbol or special character");
    isValid = false;
} else {
    console.log("username is valid");
    isValid = true;
}*/

app.post("/register", (req, res) => {
    try {
        const { username, password, confirmPassword } = req.body;
        // console.log(username + " " + password + " " + confirmPassword);

        // check for existence in db
        // then send file to user
    } catch (error) {}
});
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

// get data from ejs pages
