const User = require("../Models/userAccount");

// Method: GET
// API:    http://localhost:5000/users
async function getUsers(req, res) {
    try {
        const allUsers = await User.find();
        res.status(200).send({ "Data": allUsers });
    } catch (error) {
        res.status(500).send({ "error": error.message });
    }
}

// Method: POST
// API:    http://localhost:5000/users
async function createUser(req, res) {
    const { userName, userEmail, userPassword } = req.body;

    // Validation checks
    const emailChecker = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordChecker = /^.{8,}$/;

    if (!emailChecker.test(userEmail)) {
        return res.status(400).send({ "error": "Invalid email format" });
    }

    if (!passwordChecker.test(userPassword)) {
        return res.status(400).send({ "error": "Password must be at least 8 characters long" });
    }

    try {
        // Check if user already exists by email
        const existingUser = await User.findOne({ userEmail: userEmail.toLowerCase() });
        if (existingUser) {
            return res.status(400).send({ "error": "User already exists" });
        }

        // Create new user
        const newUser = await User.create({
            userName: userName,
            userEmail: userEmail.toLowerCase(),
            userPassword: userPassword,
        });

        res.status(201).send({
            "data": newUser,
            "message": "User created successfully!"
        });
    } catch (error) {
        res.status(500).send({ "error": error.message });
    }
}


module.exports = { getUsers, createUser};