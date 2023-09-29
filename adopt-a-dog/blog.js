const blogentry1 = [
    {
        title: 'Traveling With Your Dog!',
        content: 'Lorem Ipsum'
    }
];

const title = document.createElement('h2');
title.innerHTML = blogentry1.title;
document.body.appendChild(title);

const blge1 = document.getElementById('blogentry1');
console.log(blge1.innerText)

document.getElementById("title").innerHTML = "Traveling With Your Dog!";
document.getElementById("title").style.color = "darkblue";
document.getElementById("content").innerHTML = "Lorem Ipsum";
document.getElementById("content").style.color = "black";