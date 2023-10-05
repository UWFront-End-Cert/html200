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

function displayImage(src, width, height) {
    const img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    document.body.appendChild(img);
   }
displayImage('images/patrick-hendry-221863-unsplash.jpg', 480, 360);

const title2 = document.createElement('h2');
title2.innerHTML = blogentry2.title2;
document.getElementById('dynamicblog').appendChild(title2);

const content2 = document.createElement('p');
content2.innerHTML = blogentry2.content2;
document.getElementById('dynamicblog').appendChild(content2);

const title3 = document.createElement('h2');
title3.innerHTML = blogentry3.title3;
document.getElementById('dynamicblog').appendChild(title3);

const content3 = document.createElement('p');
content3.innerHTML = blogentry3.content3;
document.getElementById('dynamicblog').appendChild(content3);

// function show_image(src, width, height, alt);
// const img = document.createElement("img");
// document.body.appendChild(img);

// For Styling
// const blge1 = document.getElementById('blogentry1');
// console.log(blge1.innerText)

// document.getElementById("title").innerHTML = "Traveling With Your Dog!";
// document.getElementById("title").style.color = "darkblue";
// document.getElementById("content").innerHTML = "Lorem Ipsum";
// document.getElementById("content").style.color = "black";