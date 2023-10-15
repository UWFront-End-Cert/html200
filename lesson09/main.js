$(function(){
    console.log("DOM is ready, javascript is loading!")
    $('h1').hide().delay(500).show('slow')
    $('hide').click(function(){
        $('img').hide()
    })

    $('show').click(function(){
        $('img').show()
    })
})