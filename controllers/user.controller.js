let users = require("../randomUser.json");
// console.log(users);
module.exports.getRandomUser = (req, res) => {
  // Generate a random index number
  const randomIndex = Math.floor(Math.random() * users.length);
  // Return the user object at the random index
  res.json(users[randomIndex]);
};

module.exports.getAllUser = (req, res) => {
  res.send(users);
};
module.exports.saveUser = (req, res) => {
  res.json("Save user");
};

module.exports.updateAUser = (req, res) => {
  res.send("Update users.");
};

module.exports.updateBulkUser = (req, res) => {
  res.send("Update multiple user.");
};

module.exports.deleteUser = (req, res) => {
  res.send("Delete a user.");
};
