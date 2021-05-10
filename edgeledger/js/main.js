let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 55.43764685549499, lng: -4.935076113262928 },
    zoom: 9,
  });
}

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
