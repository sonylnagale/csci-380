const url = 'https://randomuser.me/api/';

const avatar = document.getElementById('avatar');
const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const city = document.getElementById('city');
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
  fetch(url)
    .then(handleErrors)
    .then(res => res.json())
    .then(updateProfile)
    .catch(err => {
      console.error(err)
    })
});

function handleErrors(res) {
  if (!res.ok) {
    throw error(res.status);
  }
  console.log(res);
  return res;
}

function updateProfile(profile) {
  avatar.src = profile.results[0].picture.medium;
  fullname.innerHTML = profile.results[0].name.first + " " + profile.results[0].name.last;
  username.innerHTML = profile.results[0].login.username;
  email.innerHTML = profile.results[0].email;
  city.innerHTML = profile.results[0].location.city;
  return 1;
}