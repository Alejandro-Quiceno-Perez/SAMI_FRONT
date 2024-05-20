// Función para generar el navbar
function generateNavbar() {
    const navContainer = document.querySelector('#nav-container');
    navContainer.innerHTML = `
      <ul class="nav">
        <li>
          <img src="./img/logo3BG.png" alt="" class="img-logo-header">
        </li>
        <li class="nav-item">
          <a class="nav-link text-danger" aria-current="page" href="index.html" data-key="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-danger" href="userPage.html" data-key="service">Your Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-danger" href="aboutUs.html" data-key="about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-whit" aria-disabled="true" href="admin.html" data-key="admin">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-whit" aria-disabled="true" href="ambulance.html" data-key="ambulance">Ambulance</a>
        </li>
      </ul>
      <ul class="nav">
        <li class="nav-item"><a href="" class="nav-link text-dark"><i class="bi bi-person-circle">Cuchumfulo</i></a></li>
        <li class="nav-item d-flex me-5">
          <a href="" class="nav-link text-danger" data-lang="es" data-key="spanish">ES</a>
          <span class="nav-link text-danger" data-lang="en">/</span>
          <a href="" class="nav-link text-danger" data-key="english">EN</a>
        </li>
        <li class="nav-item">
          <a class="btn btn-danger" href="login.html" data-key="login">Login</a>
        </li>
        <li class="nav-item d-none">
          <a class="btn btn-danger" href="login.html" data-key="logout">Log out</a>
        </li>
      </ul>
    `;
  }
  
  // Llamar a la función para generar el navbar
  generateNavbar();
  