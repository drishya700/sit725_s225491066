const submitReview = () => {
    let formData = {};
    formData.book_title = $('#book_title').val();
    formData.book_author = $('#book_author').val();
    formData.reviewer_name = $('#reviewer_name').val();
    formData.review_text = $('#review_text').val();
    console.log("Review Submitted: ", formData);
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.description + ' <br><em>By ' + item.author + '</em></p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

const loadBooks = () => {
    // Fetch dynamic book data from our GET REST endpoint
    $.get('/api/books', (data) => {
        addCards(data);
    }).fail((err) => {
        console.error("Failed to load books: ", err);
    });
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('.modal').modal();

    $('#reviewSubmit').click(() => {
        submitReview();
    })

    loadBooks();
});