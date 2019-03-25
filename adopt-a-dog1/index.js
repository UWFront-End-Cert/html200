// function vistPage() {
//     window.location.='dogs.html';
// }

function adoptMurphy() {
    alert('Adopt: Murphy, $50, Chihuahua');
}

function adopt() {
    alert('Adopt: Violet, $50, German Shepard');
}

// let button = document.getElementById("adopt"),
//     count = 0;
// let button.onclick = function total() {
//     count += 1;
//     alert('Total: $', (count*50));
// }
let sum = 0;
function total() {
    sum = sum + 50;
    alert('Total: $' + sum);
}


// $('img').addClass('item').hover(
//     function() {
//         $(this).append($("<span>asdf</span>"));
//     }
    
// )

$(document).ready(function() {
    $('.item').hover(function() {
        $('.item').addClass('hover');
    }, function() {
        $('.item').removeClass('hover');
    })
});