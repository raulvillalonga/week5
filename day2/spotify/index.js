function onSubmit (event) {
  event.preventDefault();
  $('.js-character-list').text(""); 
  var request = $.get('https://api.spotify.com/v1/search?type=artist&query=queen');
//var request = $.get('https://api.spotify.com/v1/search?type=artist&query=' + $('#name').val());

  function handleCharacters (data) {
    data = data['artists'];
    data = data['items'];

  
    data.forEach(function appendLi (chr){
      var html = '<li>' + chr.name + '</li>';
      $('.js-character-list').append(html);

      if (chr['images'].length == 0) {
        var html = '<img src="http://www.eurofarms.com/assets/img/noimage.jpg" height=150px hspace=20px>';
        $('.js-character-list').append(html);
      } 
      else{
        var html = '<img src="' + chr['images'][0].url + '" height=150px hspace=20px>';
        $('.js-character-list').append(html); 
      };
    });   
    console.log(data);
   }


  function handleError (err1, err2, err3) {
    console.error('OH NO!!', err1, err2, err3);
  }

  request.done(handleCharacters);
  request.fail(handleError);
}

$('.js-submit').on('click', onSubmit);