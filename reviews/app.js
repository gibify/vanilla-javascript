const dataReviews = [
  {
    id: 1,
    name: 'Sara Jone',
    job: 'UX Designer',
    img: 'https://unsplash.com/photos/0Zx1bDv5BNY',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error amet quisquam in itaque quos eaque minus quod, impedit quas veritatis dolorem nam ipsa iusto saepe debitis earum nihil ratione doloremque.'
  },
  {
    id: 2,
    name: 'Jhone Don',
    job: 'Software Enginner',
    img: 'https://br.freepik.com/fotos-gratis/jovem-em-uma-camisa-trabalhando-no-laptop-roxo_9480201.htm#query=pessoas&position=0&from_view=keyword',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error amet quisquam in itaque quos eaque minus quod, impedit quas veritatis dolorem nam ipsa iusto saepe debitis earum nihil ratione doloremque.'
  },
  {
    id: 3,
    name: 'Eliza Ruth',
    job: 'Product Manager',
    img: 'https://br.freepik.com/fotos-gratis/mulher-de-negocios-loira-pensando-bonita-na-parede-branca_13411048.htm?query=pessoas',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error amhttps://br.freepik.com/fotos-gratis/mulher-de-negocios-loira-pensando-bonita-na-parede-branca_13411048.htm?query=pessoaset quisquam in itaque quos eaque minus quod, impedit quas veritatis dolorem nam ipsa iusto saepe debitis earum nihil ratione doloremque.'
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
  const item = dataReviews[currentItem];
  author.innerHTML = item.name;

  console.log(item)
});