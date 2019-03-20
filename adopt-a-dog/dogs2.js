let dogs = [
{name:'Murphy', breed: 'Lab', price: 123.45, pic:'images/alex-lacayo-756508-unsplash.jpg'}
,{name:'Poppy', breed: 'Maltese', price: 123.45, pic:'images/nikolay-tchaouchev-785309-unsplash.jpg'}
,{name:'Jack', breed: 'Jack Russell', price: 123.45, pic:'images/marcus-wallis-471438-unsplash.jpg'}
,{name:'Duffy', breed: 'Pitbull', price: 123.45, pic:'images/duffy-brook-350225-unsplash.jpg'}
,{name:'Lucas', breed: 'Lab', price: 123.45, pic:'images/tucker-good-589776-unsplash.jpg'}
,{name:'Jake', breed: 'Lab', price: 123.45, pic:'images/mitchell-orr-237216-unsplash.jpg'}
,{name:'Piper', breed: 'Long Hair dachshund', price: 123.45, pic:'images/jamie-street-562280-unsplash.jpg'}
,{name:'Max', breed: 'Terrier', price: 123.45, pic:'images/jisu-lee-55400-unsplash.jpg'}
,{name:'Luna', breed: 'Lab', price: 123.45, pic:'images/jonathan-daniels-416786-unsplash.jpg'}
,{name:'Stella', breed: 'Chihuahua', price: 123.45, pic:'images/alicia-gauthier-253619-unsplash.jpg'}
];


tileContainer = document.getElementsByClassName('tile-container')[0]

for ( let i=0; i < dogs.length; i++){
  const dogTile = document.createElement('div');
  dogTile.className= 'dog-tile';

  const tileImage= document.createElement('img');
  tileImage.className= 'small-dog-picture'
  tileImage.setAttribute('src',dogs[i].pic)

  const dogTileBody = document.createElement('div');
  dogTileBody.className= 'tile-body';

  const dogHeader = document.createElement('h3');
  dogHeader.textContent = dogs[i].name;

  const dogText = document.createElement('p');
  dogText.innerHTML = '<p><strong>Cost to adopt:</strong>$'+dogs[i].price+'<br>'+'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'+'</p>';

  const dogButton = document.createElement('button');
  dogButton.setAttribute('onclick',"runningTotal()");
  dogButton.className = 'adopt';
  dogButton.textContent='Adopt'

  tileContainer.appendChild(dogTile);
  dogTile.appendChild(tileImage);
  dogTile.appendChild(dogTileBody);
  dogTileBody.appendChild(dogHeader);
  dogTileBody.appendChild(dogText);
  dogTileBody.appendChild(dogButton);
}
