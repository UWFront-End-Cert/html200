const blogPosts = [
{
  headline: 'Thing about a thing',
  body: 'some words'
},
{
  headline: 'another blog post',
  body: 'words have many letters'

}
];

console.log('hello world');
console.log(blogPosts[0].headline);

// let blogPost = document.querySelector('article');
//
// console.log(blogPost);

  document.getElementsByClassName('blogPost h2').innerHTML = 'hihihi';

// for (let i = 0; i < blogPost.length; i++){
//   document.getElementsByClassName('blogPost').innerHTML= '<h2>' + blogPosts[i].headline + '</h2><p>' + blogPosts[i].body + '</p>'
// }


let formElement = document.querySelector('form');
console.log(formElement);

formElement.addEventListener('submit',function(e){
  e.preventDefault();

  const inputValue = formElement.elements[0].value;
  const dogName = formElement.elements[1].value;
  //do code//
  const dataToSubmit = {
  name: inputValue,
  dog: dogName
};

  console.log(dataToSubmit);
})
