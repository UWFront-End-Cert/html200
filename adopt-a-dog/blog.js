const blogentry1 = 
    {
        title: 'Traveling With Your Dog!',
        content: 'Lorem Ipsum'
    };

const blogentry2 =
    {
        title2: 'How To Walk Multiple Dogs',
        content2: 'Lorem Ipsum'
    };

const blogentry3 =
    {
        title3: 'Teach Your Dog to Fetch',
        content3: 'Lorem Ipsum'
    };

const title = document.createElement('h2');
title.innerHTML = blogentry1.title;
document.getElementById('dynamicblog').appendChild(title);
console.log(title);

const content = document.createElement('p');
content.innerHTML = blogentry1.content;
document.getElementById('dynamicblog').appendChild(content);

const dogimg1 = document.createElement('img');
dogimg1.src = './images/patrick-hendry-221863-unsplash.jpg';
dogimg1.style.width = '480px';
dogimg1.style.height = '360px';
dogimg1.style.float = 'left';
dogimg1.style.padding = '1rem';
document.getElementById('dynamicblog').appendChild(dogimg1);

const title2 = document.createElement('h2');
title2.innerHTML = blogentry2.title2;
document.getElementById('dynamicblog').appendChild(title2);

const content2 = document.createElement('p');
content2.innerHTML = blogentry2.content2;
document.getElementById('dynamicblog').appendChild(content2);

const dogimg2 = document.createElement('img');
dogimg2.src = './images/matt-nelson-259365-unsplash.jpg';
dogimg2.style.width = '480px';
dogimg2.style.height = '360px';
dogimg2.style.float = 'left';
dogimg2.style.padding = '1rem';
document.getElementById('dynamicblog').appendChild(dogimg2);

const title3 = document.createElement('h2');
title3.innerHTML = blogentry3.title3;
document.getElementById('dynamicblog').appendChild(title3);

const content3 = document.createElement('p');
content3.innerHTML = blogentry3.content3;
document.getElementById('dynamicblog').appendChild(content3);

const dogimg3 = document.createElement('img');
dogimg3.src = './images/wyatt-ryan-367017-unsplash.jpg';
dogimg3.style.width = '480px';
dogimg3.style.height = '360px';
dogimg3.style.float = 'left';
dogimg3.style.padding = '1rem';
document.getElementById('dynamicblog').appendChild(dogimg3);



$(function(){
    console.log("DOM is ready, script is loading!")
    $('img').hide().delay(500).show('slow')
})

$('img').mouseenter(function(){
        console.log("mouse has entered")
        $(this).css({border: '0 solid black'}).animate({
            borderwidth: 5
        }, 500);
    }).mouseleave(function(){
        console.log("mouse has left")
        $(this).animate({
            borderWidth: 0
        }, 500);
});