
$(document).ready(function () {


  init({
    fade_in: 800,
    fade_out: 800,
    position: 'bottom-left'
  });
  document.getElementById("btnSm").addEventListener("click", function () {
    toast({
      title: 'Hi',
      description: 'Success message'
    });
  });
  document.getElementById("btnEm").addEventListener("click", function () {
    toast({
      title: 'Hi',
      description: 'Error message',
      type: 'error'
    });
  });
  document.getElementById("btnWm").addEventListener("click", function () {
    toast({
      title: 'Hi',
      description: 'Warning message',
      type: 'warning'
    });
  });
  document.getElementById("btnMt").addEventListener("click", function () {
    toast({
      title: 'Hi',
      description: 'Message with timeout',
      type: 'success',
      timeout: 1000
    });
  });
  document.getElementById("btnCt").addEventListener("click", function () {
    toast({
      title: 'Hi',
      description: 'Custom message',
      timeout: 0,
      type: 'custom',
      close_color: '#3498db',
      border_color: '#3498db',
      icon: 'url(https://img.icons8.com/flat_round/2x/info.png)'
    });
  });
  document.getElementById("btnCtNi").addEventListener("click", function () {
    toast({
      title: 'Hi',
      description: 'Custom message (whitout icon)',
      timeout: 0,
      type: 'custom',
      close_color: '#3498db',
      border_color: '#3498db'
    });
  });
  document.getElementById("btnHt").addEventListener("click", function () {
    toast({
      title: '<span style="color:red">Hi</span>',
      description: '<b>HTML</b> description'
    });
  });
  document.getElementById("btnDs").addEventListener("click", function () {
    toast({
      title: '<span style="color:#f9f9f9">Hi</span>',
      description: '<span style="color:#bdc3c7">Dark style toast notification</span>',
      close_color: '#f1c40f',
      border_color: '#f1c40f',
      color: '#212121',
      type: 'custom'
    });
  });

  function pposition() {
    init({
      position: 'top-center'
    });
    toast({
      title: 'Hi',
      description: 'Success message'
    });
  }

  document.getElementById("btnCp").addEventListener("click", function () {
    pposition();
  });
  $(".tag").click(function (e) {
    $('html').animate({
      scrollTop: $('#' + $(this).attr('target')).offset().top
    }, 1000);
  });
  $(document).scroll(function () {
    if ($(document).scrollTop() > 400) {
      $("#toTop")[0].style.opacity = '1.0';
    } else {
      $("#toTop")[0].style.opacity = '0.0';
    }
  });
});

function toTop() {
  $('html,body').animate({
    scrollTop: 0
  }, 'slow');
}
