let users = require("../randomUser.json");
module.exports.getRandomUser = (req, res) => {
  const randomIndex = Math.floor(Math.random() * users.length);
  res.json(users[randomIndex]);
};

module.exports.getAllUser = (req, res) => {
  const { limit } = req.query;
  res.json(users.slice(0, limit));
};
module.exports.saveUser = (req, res) => {
  const newUser = req.body;
  if (!Object.keys(newUser).length) {
    res.send("No information found.");
  } else if (!newUser?.id) {
    res.send("Please provide ID");
  } else if (!newUser?.gender) {
    res.send("Please provide gender");
  } else if (!newUser?.name) {
    res.send("Please provide name");
  } else if (!newUser?.contact) {
    res.send("Please provide contact");
  } else if (!newUser?.address) {
    res.send("Please provide address");
  } else if (!newUser?.photoUrl) {
    res.send("Please provide address");
  } else {
    users.push(newUser);
    res.send(users);
    console.log("Saved user successfully");
  }
};

module.exports.updateAUser = (req, res) => {
  res.send("Update users.");
};

module.exports.updateBulkUser = (req, res) => {
  res.send("Update multiple user.");
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.body;

  if (users.find((user) => user?.id === id)) {
    users = users.filter((user) => user.id !== id);
    res.send(users);
  } else {
    res.send("Delete unsuccessful. No user found.");
  }
};
