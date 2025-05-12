$(document).ready(function() {
  let isOpen = false;

  $('#dropdownButton').click(function() {
    const menu = $('#dropdownMenu');

    if (!isOpen) {
      menu.stop(true, true).css({ display: 'block' }).animate({
        opacity: 1,
        height: '100px' // adjust height based on content
      }, 300);
    } else {
      menu.stop(true, true).animate({
        opacity: 0,
        height: 0
      }, 300, function() {
        menu.css('display', 'none');
      });
    }

    isOpen = !isOpen;
  });
});

$(document).ready(function() {
  $('#fadeToButton').click(function() {
    $('#linksContainer a').each(function(index) {
      $(this)
        .delay(index * 300)             // Stagger each by 300ms
        .fadeTo(500, 1.0);              // Fade in to full opacity
    });
  });
});