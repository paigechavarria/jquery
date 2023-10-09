$('.sbmBtn').on('click', function(e){
    e.preventDefault();
    let title = $('.title').val()
    let rating = $('.rating').val();
    let newDiv = $('<div>').append(title + ': ' + rating)
        .append('<button>remove</button>');
    $('.mvratings').append($(newDiv))
    $('input').val('');
    $('div button').on('click', function(e){
        e.preventDefault();
        e.target.parentElement.remove();
    })
});