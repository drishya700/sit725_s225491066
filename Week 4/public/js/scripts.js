const getBooks = () => {
  $.get('/api/books', (response) => {
    if (response.statusCode === 200) {
      $('#cardContainer').empty();
      addCards(response.data);
    }
  });
};

const addCards = (books) => {
  books.forEach((book) => {
    const cardHtml = `
      <div class="col s12 m6 l4">
        <div class="card book-card">
          <div class="card-image">
            <img src="${book.coverImage}" onerror="this.src='images/placeholder.jpg'">
          </div>
          <div class="card-content">
            <span class="card-title"><strong>${book.title}</strong></span>
            <p>by ${book.author}</p>
            <p><em>${book.genre}</em> &middot; ${book.yearPublished}</p>
            <span class="chip rating-chip">Rating: ${book.rating ?? 'N/A'}</span>
            <p>${book.description}</p>
          </div>
        </div>
      </div>
    `;
    $('#cardContainer').append(cardHtml);
  });
};

const submitForm = () => {
  const newBook = {
    title: $('#title').val(),
    author: $('#author').val(),
    genre: $('#genre').val(),
    coverImage: $('#coverImage').val(),
    yearPublished: Number($('#yearPublished').val()),
    rating: Number($('#rating').val()) || 0,
    description: $('#description').val()
  };

  $.ajax({
    url: '/api/books',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(newBook),
    success: (response) => {
      if (response.statusCode === 201) {
        getBooks();
        $('#addBookForm')[0].reset();
      }
    },
    error: (xhr) => {
      alert('Could not add book: ' + xhr.responseJSON.message);
    }
  });
};

$(document).ready(function () {
  $('#formSubmit').click(() => {
    submitForm();
  });
  getBooks();
  $('.modal').modal();
});
