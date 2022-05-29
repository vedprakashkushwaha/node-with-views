const express = require("express");
const router = new express.Router();
const userModel = require('../model/users');

router.get("/users", async (req, res) => {
    try {
        const data = await userModel.find({});
        res.send(data);
    } catch (err) {
        res.send(err);
    }
})

router.post("/user", async (req, res) => {
    try {
        const user = new userModel(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (err) {
        res.send(err);
    }
})

module.exports = router