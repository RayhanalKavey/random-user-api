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
  const newInfo = req.body;
  const targetUser = users.find((user) => user?.id === newInfo?.id);
  if (targetUser) {
    // Find the index of the object with the matching id
    let indexToUpdate = users.findIndex((obj) => obj.id === newInfo.id);

    // Loop through the keys of updatedValue object
    for (let prop in newInfo) {
      // Check if the object in the array has the property
      if (prop in users[indexToUpdate]) {
        // Update the property with the new value
        users[indexToUpdate][prop] = newInfo[prop];
      }
    }
    res.send(users);
  } else {
    res.send("Update unsuccessful. No user found.");
  }
};

module.exports.updateBulkUser = (req, res) => {
  let updatedValues = req.body;
  ///
  console.log(updatedValues);

  for (let i = 0; i < updatedValues.length; i++) {
    let currentUpdate = updatedValues[i];
    let indexToUpdate = users.findIndex((obj) => obj.id === currentUpdate.id);

    if (indexToUpdate !== -1) {
      for (let prop in currentUpdate) {
        if (prop in users[indexToUpdate]) {
          users[indexToUpdate][prop] = currentUpdate[prop];
        }
      }
    }
  }
  res.send(users);
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.body;

  if (users.find((user) => user?.id === id)) {
    users = users.filter((user) => user.id !== id);
    res.send(users);
    // res.send("Delete Succssful.");
  } else {
    res.send("Delete unsuccessful. No user found.");
  }
};
