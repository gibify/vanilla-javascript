const dataReviews = [
  {
    id: 1,
    name: 'Sara Jone',
    job: 'UX Designer',
    img: 'https://github.com/gibify/vanilla-javascript/blob/main/reviews/images/person-1.jpeg',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error amet quisquam in itaque quos eaque minus quod, impedit quas veritatis dolorem nam ipsa iusto saepe debitis earum nihil ratione doloremque.'
  },
  {
    id: 2,
    name: 'Jhone Don',
    job: 'Software Enginner',
    img: 'https://github.com/gibify/vanilla-javascript/blob/main/reviews/images/person-1.jpeg',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error amet quisquam in itaque quos eaque minus quod, impedit quas veritatis dolorem nam ipsa iusto saepe debitis earum nihil ratione doloremque.'
  },
  {
    id: 3,
    name: 'Eliza Ruth',
    job: 'Product Manager',
    img: 'https://github.com/gibify/vanilla-javascript/blob/main/reviews/images/person-1.jpeg',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error set quisquam in itaque quos eaque minus quod, impedit quas veritatis dolorem nam ipsa iusto saepe debitis earum nihil ratione doloremque.'
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
  showPerson();
});

// show person based on item
function showPerson() {
  const item = dataReviews[currentItem];
  author.textContent = item.name;
  job.textContent = item.job
  info.textContent = item.bio;
};

// show next person
nextBtn.addEventListener("click", function() {
  currentItem++;
  if(currentItem > dataReviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person
prevBtn.addEventListener("click", function() {
  currentItem--;
  if(currentItem < 0) {
    currentItem = dataReviews.length - 1;
  }
  showPerson();
});

//show random person
randomBtn.addEventListener("click", function() {
  currentItem = Math.floor(Math.random() * dataReviews.length);
  showPerson();
});