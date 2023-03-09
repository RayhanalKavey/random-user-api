const users = require("../randomUser.json");
// console.log(users);
module.exports.getRandomUser = (req, res) => {
  res.send("Get a random user.");
};

module.exports.getAllUser = (req, res) => {
  res.send(users);
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
