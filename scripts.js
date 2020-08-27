$(document).ready(function() {

    var quote;
    var author;

    function getNewQuote() {
        $.ajax({
            url: 'https://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp',
            },
            success: function(response) {
                quote = response.quoteText;
                author = response.quoteAuthor;
                console.log(response)
                $('.quote').text(quote);
                if (author) {
                    $('.author').text('- '+ author);
                } else {
                    $('.author').text('- Unknown');
                }
            }
        });
    }
    getNewQuote();

    $('#new-quote-btn').on('click', function(event) {
        event.preventDefault();
        getNewQuote();
    });

    $('.tweet-quote').on('click', function(event) {
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '- ' + author));
    });
});