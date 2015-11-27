function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

function repintar(){
  var index = 0;
  $('.frases').text("");
  phrases.forEach(function(element){
    var nueva = "<li>" + element + "<img src='https://image.freepik.com/iconos-gratis/eliminar-cruz_318-79505.png' height=20px class='eliminar' id="+index+"></li><br>";
    $('.frases').append(nueva);
    index += 1;
  });
};

var phrases = [
  'Esta es la frase numero 0',
  'Esta es la frase numero 1',
  'Esta es la frase numero 2',
  'Esta es la frase numero 3',
  'Esta es la frase numero 4',
  'Esta es la frase numero 5',
  'Esta es la frase numero 6',
  'Esta es la frase numero 7',
  'Esta es la frase numero 8',
  'Esta es la frase numero 9'
];

$(document).on('ready', function(){
  var frase = phrases[Math.floor(getRandomArbitrary(0, phrases.length))];
  $('h1').append(frase);
  var index = 0;
  phrases.forEach(function(element){
    var nueva = "<li>" + element + "<img src='https://image.freepik.com/iconos-gratis/eliminar-cruz_318-79505.png' height=20px class='eliminar' id="+index+"></li><br>";
    $('.frases').append(nueva);
    index += 1;
  });        
});

$('.refresh').on('click', function(){
  var frase = phrases[Math.floor(getRandomArbitrary(0, phrases.length))];
  $('h1').text(frase);
});

$('#formu').on('submit', function(event){
  phrases.push(document.getElementById("add").value);
  var nueva = "<li>" + document.getElementById("add").value + "<img src='https://image.freepik.com/iconos-gratis/eliminar-cruz_318-79505.png' height=20px class='eliminar' id=" + (phrases.length - 1) + "></li><br>";
  
  $('.frases').append(nueva);
  document.formu.add.value = "";

  event.preventDefault();        
});

$('a').on('click', function(event){

  $('.frases').toggle();
  event.preventDefault();        
});

$('ul').on('click', '.eliminar', function(event){
    
  var ind = $(event.currentTarget).attr('id'); 
  console.log(ind);         
  phrases.splice(ind,1);
  repintar();
     
});