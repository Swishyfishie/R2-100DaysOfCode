// INIt github
const gitHub = new GitHub();
//INIT UI
const ui = new UserInterface();

// Search input

const searchUser = document.getElementById("searchUser");

// Save Button

const saveButton = document.getElementById("saveBtn");

// Event listener

searchUser.addEventListener("keyup", e => {
  //get input text
  const userText = e.target.value;

  if (userText !== "") {
    // MAKE http call
    gitHub.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show Alert
        ui.showAlert("User not found");
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
