//'Name: ' + dogName + ' is ' + dogDescr + ' and ' + dogBreed + ' $ ' + dogPrice


let checkoutTotal = 0;
const dog1 = 'Name: Murphy, Cost: $123.45, Breed: Lab';
const dog2 = 'Name: Poppy, Cost: $123.45, Breed: Havanese';
const dog3 = 'Name: Jack, Cost: $123.45, Breed: Lab';
const dog4 = 'Name: Duffy, Cost: $123.45, Breed: lab';
const dog5 = 'Name: Lucas, Cost: $123.45, Breed: Unknown';
const dog6 = 'Name: Jake, Cost: $123.45, Breed: Golden Retriever';
const dog7 = 'Name: Angus, Cost: $123.45, Bred: Lab';
const dog8 = 'Name: Violet, Cost: $123.45, Breed: Chihuahua';
const dog9 = 'Name: Piper, Cost: $123.45, Breed: Terrier';
const dog10 = 'Name: Maximus, Cost: $123.45, Breed: Lab';
const dog11 = 'Name: Luna, Cost: $123.45, Breed: Pitbull';
const dog12 = 'Name: Stella, Cost: $123.45 Breed: Beagle?';


// button click alert 

function dogAdd(click_id) {
	checkoutTotal = dogPrice + checkoutTotal;
	alert('Your total cost is' + '$' + checkoutTotal);
}

//Alert - dog info

function dogInfo(dog) {
	console.log(dog)
	// alt = dogInfo;
	alert(dog);
}

// BLOG PAGE JS / JQUERY 

const blogMain = [
  {
		image: ' src="images/patrick-hendry-221863-unsplash.jpg" alt= "black dog and owner at a canyon"class = "blog-img"',
		headline: 'Traveling With Your Dog',
		p1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non ',
		p2: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreiumhillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non '
	},
	{
		image: ' src="images/matt-nelson-259365-unsplash.jpg" alt= "Group of dogs" class="blog-img"',
		headline: 'How To Walk Multiple Dogs',
		p1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeiumfaccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. ',
		p2: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeiumfaccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.'
	},

	{
		image: ' src="images/wyatt-ryan-367017-unsplash.jpg" alt= "Playing fetch" class="blog-img"',
		headline: 'Teach Your Dog To Fetch!',
		p1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeiumfaccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. ',
		p2: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeiumfaccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.'
	}

]

// const blogMainContainer = document.querySelector('.blog-main-container');

// console.log(blogPostContainer);


for (let i = 0; i < blogMain.length; i++) {

	const blog = document.createElement('article');
	blog.setAttribute('class', 'blog-content');
	document.querySelector('section').appendChild(blog);
	blog.innerHTML = `<img${blogMain[i].image}></img><h3>  ${blogMain[i].headline} </h3> <p> ${blogMain[i].p1} </p> <p> ${blogMain[i].p2} </p>`
}


// for (let i = 0; i < blogPosts.length; i++) {

// let blogPost = document.createElement('article');
// blogPost.innerHTML = '<h1 class="headliner">' + blogPosts[i].headline + '</h1>' + '<p>' + blogPosts[i].blogText + '</p>';
// blogPostContainer.appendChild(blogPost)

// }