let map;
let directionsService;
let directionsRenderer;

function initMap() {
  // Definir los iconos para los marcadores
  let ambulanceIcon = {
    url: "./img/hospital.png",
    scaledSize: new google.maps.Size(50, 50),
  };
  let userIcon = {
    url: "./img/emergency.png",
    scaledSize: new google.maps.Size(50, 50),
  };
  let geolocationIcon = {
    url: "./img/ambulance.png",
    scaledSize: new google.maps.Size(50, 50),
  };

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 6.2193724219356685, lng: -75.58339605807475 }, // Centro en la dirección proporcionada
    zoom: 12,
  });

  // Crear un marcador en el centro del mapa
  const centerMarker = new google.maps.Marker({
    position: { lat: 6.2193724219356685, lng: -75.58339605807475 },
    map: map,
    title: "riwi",
    scaledSize: new google.maps.Size(10, 10),
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);

  const geocoder = new google.maps.Geocoder();

  let selectedPoints = [];

  // Función para colocar marcadores
  function placeMarker(location, typeService) {
    let icon;
    if (typeService === "user") {
      icon = userIcon;
    } else if (typeService === "geolocation") {
      icon = geolocationIcon;
    } else {
      icon = ambulanceIcon;
    }

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: icon,
    });
  }

  // Función para calcular y mostrar la ruta
  function calculateAndDisplayRoute() {
    if (selectedPoints.length === 2) {
      directionsService.route(
        {
          origin: selectedPoints[0],
          destination: selectedPoints[1],
          travelMode: google.maps.TravelMode.DRIVING, // Ruta en carro
        },
        (response, status) => {
          if (status === "OK") {
            directionsRenderer.setDirections(response);
            directionsRenderer.setOptions({
              polylineOptions: {
                strokeColor: "#D00000",
                strokeWeight: 8,
              },
            });
          } else {
            window.alert("La solicitud de ruta ha fallado debido a: " + status);
          }
        }
      );
    } else {
      window.alert("Por favor selecciona dos puntos en el mapa.");
    }
  }

  // Capturar ubicación del usuario automáticamente
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        placeMarker(userLatLng, "geolocation"); // Colocar marcador en la ubicación del usuario con icono de geolocalización
      },
      () => {
        alert(
          "No se pudo obtener tu ubicación automáticamente. Por favor, inténtalo de nuevo o proporciona tu ubicación manualmente."
        );
      }
    );
  } else {
    alert("Tu navegador no admite la geolocalización.");
  }

  // Evento al hacer clic en el mapa
  map.addListener("click", (event) => {
    if (selectedPoints.length < 2) {
      placeMarker(event.latLng, "user"); // Colocar marcador en el punto seleccionado por el usuario con icono de usuario
      selectedPoints.push(event.latLng); // Agregar punto seleccionado a los puntos seleccionados
      calculateAndDisplayRoute(); // Calcular y mostrar la ruta entre los dos puntos seleccionados
    } else {
      alert("Ya has seleccionado dos puntos.");
    }
  });
}
