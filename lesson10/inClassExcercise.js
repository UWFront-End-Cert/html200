
// $('h1').addClass('large-headline');

$('button').click(function(e){
  console.log('clicked')
  $('img').toggleClass('red-border')
})

$('img').hover(function(e){
  console.log('hovered')
  $('p').toggleClass('hide')
  $('article').append("<p>Laser Cats Unite!</p>")
})
