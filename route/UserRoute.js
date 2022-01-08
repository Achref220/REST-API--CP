const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Return all the users
router.get("/users", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).send({msg: `all users are : ${allUsers}`})
  } catch (err) {
    res.status(500).send(err)
  }
});

// Add a new User to the database
router.post('/users/addUser', (req, res) => {
  const newUser = new User(req.body)
  newUser.save()
  res.send(newUser)
});

// Edit a user By Id
router.put('/users/update/:id', async (req, res) => {
  let updatedId = req.params.id;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: updatedId },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: `this user ${updatedUser} is found and updated successfully ` })
  } catch (err) {
    console.log(err)
  }
});

// Remove a User by id
router.delete('/users/delete/:id', async (req, res) => {
  let deletedId = req.params.id;
  try {
    await User.deleteOne(
      {_id: deletedId}
    )
    res.status(200).send(`the user is found by his id ${deletedId} and it has been deleted`)
  } catch (err) {
    console.log(err)
  }
})



module.exports = router;