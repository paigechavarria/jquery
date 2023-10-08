//1.
console.log('Lets get ready to party with JQuery!')

//2.
$('img a').addClass('image-center');

//3.
$('p').eq(5).remove();

//4.
$('h1').css('font-size', '50px');

//5.
$('ol').append('<li>puppies are cute</li>');

//6.
$('aside').empty().append("<p>I'm very sorry there was ever a list here</p>");

//7.
$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
});

//8.
$('img').on('click', function(){
    $(this).remove();
})
