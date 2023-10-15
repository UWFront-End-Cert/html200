$(function(){
    console.log("DOM is ready, javascript is loading!")
    $('h1').hide().delay(500).show('slow')
    $('hide').click(function(){
        $('img').hide()
    })

    $('show').click(function(){
        $('img').show()
    })

    $('img').mouseenter(function(){
        console.log("mouse has entered")
        $(this).fadeTo('slow', .75)
    }).mouseleave(function(){
        console.log("mouse has left")
        $(this).fadeTo('fast', 1)
    })
})