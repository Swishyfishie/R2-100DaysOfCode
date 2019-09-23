const data = [
  {
    name: "Anna",
    age: "25",
    location: "UK",
    gender: "Woman",
    lookingfor: "Man",
    image: "https://randomuser.me/api/portraits/women/89.jpg"
  },
  {
    name: "Denise",
    age: "24",
    location: "Greece",
    gender: "Woman",
    lookingfor: "Man",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Dan",
    age: "32",
    location: "UK",
    gender: "Man",
    lookingfor: "Man",
    image: "https://randomuser.me/api/portraits/men/59.jpg"
  },
  {
    name: "Jose",
    age: "22",
    location: "Spain",
    gender: "Man",
    lookingfor: "Woman",
    image: "https://randomuser.me/api/portraits/men/79.jpg"
  }
];

const profiles = profileIterator(data);

// Call first profile manually
nextProfile(data);
// Next event

document.getElementById("next").addEventListener("click", nextProfile);

// next profile display

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById(
      "profileDisplay"
    ).innerHTML = `<ul class="list-group">
  <li class="list-group-item">Name: ${currentProfile.name}</li>
  <li class="list-group-item">Age: ${currentProfile.age}</li>
  <li class="list-group-item">Location: ${currentProfile.location}</li>
  <li class="list-group-item">Gender: ${currentProfile.gender}</li>
  <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
  </ul>`;

    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
