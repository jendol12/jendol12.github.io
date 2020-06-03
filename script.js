$(window).bind('load', function () {

  $("#menulis").delay(2000).fadeOut(0);
  $("#status").delay(2000).fadeIn(0);

  $(".c1").delay(2000).animate({opacity: "1"},0);
  var notif = document.getElementById("my_audio"); setTimeout(function() { notif.play(); }, 2000);

  $("#menulis").delay(1000).fadeIn(0);
  $("#status").delay(1000).fadeOut(0);

  $("#menulis").delay(3000).fadeOut(0);
  $("#status").delay(3000).fadeIn(0);

  $(".c2").delay(6000).animate({opacity: "1"},0);
  var notiff = document.getElementById("my_audio"); setTimeout(function() { notiff.play(); }, 6000);

});

$('#pesan').focus(function(){
  $('#wafield .field div.option').fadeIn();
  $('html, body').animate({scrollTop: $('#option').offset().top}, 500);
});

$('a.kirimwa').click(function(){
  if ($('#layanan').val() == 'pilihLayanan'){
    alert('Silahkan "Pilih Layanan" sebelum mengirim pesan...');
    $('#pesan').focus();
    return false;
  } else if ($('#perusahaan').val() == '') {
    $(this).attr('href','https://api.whatsapp.com/send?phone=' + $('#tel').val() + '&text=  Hai Ka saya mau Order ' + $('#layanan').val());

    $(this).attr('target','_blank');
  } else {
    $(this).attr('href','https://api.whatsapp.com/send?phone=' + $('#tel').val() + '&text=  Hai Ka saya mau Order ' + $('#layanan').val());
    $(this).attr('target','_blank');
  }
});

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes('ms');
var dateTime = date + ' ' + time;

document.getElementById('dateTime').innerHTML = dateTime;
document.getElementById('chatTime').innerHTML = time;