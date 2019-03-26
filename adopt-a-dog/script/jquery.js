/* Jquery*/

/******************* For dog Tiles ***************/
$(document).on('mouseenter', '.dog-img' ,function(e){
        $(this).css({opacity:'0.5'});
})

$(document).on('mouseleave', '.dog-img' ,function(e){
          $(this).css({opacity:'1'});
})

/* 2nd Method
$(document).on('mouseenter', '.dog-img' ,function(e){
        $(this).css({border : 2px solid red});
});

$(document).on('mouseleave', '.dog-img' ,function(e){
          $(this).css({border : none});
});
*/

/************** Click Event on Image Title ***********/

$(document).on('click', '.dog-img' ,function(e){
        /*alert ($(this).attr('id'));*/
        alert ('Meet '+ dogInfo[$(this).attr('id')].name + ', a ' + dogInfo[$(this).attr('id')].age + '-year-old ' + dogInfo[$(this).attr('id')].breed + ' !' + 'The adoption price is : $' + dogInfo[$(this).attr('id')].cost);

});

/************** Total Dog fee and Update Cart ***********/
$(document).on('click', '.checkout-button-tiles', function(){
    const i = ($(this).attr('id')).substr(6);
    checkoutCalculation(i);  /*function from file javascript.js ---> line 94*/
});
