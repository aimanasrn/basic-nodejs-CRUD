const express = require('express')
const {userProfile,  createUser, deleteUser, updateUser} = require('../controller/user.js')

const router = express.Router()

router.get("/", userProfile);
router.get("/create", createUser);
router.get("/delete", deleteUser);
router.get("/update", updateUser);

module.exports = router;