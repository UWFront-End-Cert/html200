
const blogContainer = document.getElementsByClassName('blog-grid-container');

const blogPosts = [
  {
    imgSrc: 'images/patrick-hendry-221863-unsplash.jpg',
    imgAlt: 'woman with her dog overlooking a canyon',
    headline: 'Traveling with your dog',
    p1: 'Traveling with your dog, lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    p2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    imgSrc: 'images/matt-nelson-259365-unsplash.jpg',
    imgAlt: 'four dogs each on a leash looking at dog walker',
    headline: 'How to walk multiple dogs',
    p1: 'How to walk multiple dogs, lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    p2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    imgSrc: 'images/wyatt-ryan-367017-unsplash.jpg',
    imgAlt: 'woman playing with dog at sunset',
    headline: 'Teach your dog to fetch!',
    p1: 'Teach your dog to fetch, lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    p2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

for (let i = 0; i < blogPosts.length; i++) {
  let article = document.createElement('article');
  article.className = "blog-post";

  let image = document.createElement('img');
  let h2 = document.createElement('h2');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');

  blogContainer[0].appendChild(article);

  let blogArticle = document.getElementsByClassName('blog-post');

  blogArticle[i].appendChild(image);
  blogArticle[i].appendChild(h2);
  blogArticle[i].appendChild(p1);
  blogArticle[i].appendChild(p2);

  image.src = blogPosts[i].imgSrc;
  image.alt = blogPosts[i].imgAlt;
  h2.textContent = blogPosts[i].headline;
  p1.textContent = blogPosts[i].p1;
  p2.textContent = blogPosts[i].p2;
}
