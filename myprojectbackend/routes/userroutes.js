const express = require('express');
const router = express.Router();
const User = require('../model/user');

// Add user
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    age: req.body.age
  });

  newUser.save()
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json({ error: err.message }));
});

// Get all users
router.get('/', (req, res) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).json({ error: err.message }));
});

// Update user by ID
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    age: req.body.age,
    updatedAt: Date.now()
  }, { new: true })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json({ error: err.message }));
});

// Delete user by ID
router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ success: true }))
    .catch(err => res.status(400).json({ error: err.message }));
});

module.exports = router;
