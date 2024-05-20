document.addEventListener("DOMContentLoaded", function () {
    const requestButton = document.getElementById("btn-request");
    const requestContainer = document.querySelector(".request-container");
    const mapContainer = document.querySelector(".map-container");
    const serviceContainer = document.querySelector(".service-container");
    const sectionMap = document.querySelector(".section-map");
    requestButton.addEventListener("click", function () {



        // Oculta el contenedor de solicitud y muestra el mapa y el servicio al hacer clic en el botón de solicitud
        requestContainer.classList = "d-none";
        mapContainer.style.display = "block";
        serviceContainer.style.display = "block";
        sectionMap.style.display = "flex";
    });

    const requestForm = document.querySelector('.container-form');

    requestForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Captura los valores de los campos del formulario
        const fullName = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const phoneNumber = document.getElementById('phone').value;
        const age = document.getElementById('age').value;
        const numberOfPatients = document.getElementById('patients').value;
        const emergencyDegree = document.getElementById('emergency').value;
        const emergencyDescription = document.getElementById('emerg-description').value;

        //imprime la información en el service-container
        const serviceContainer = document.querySelector(".service-container");
        serviceContainer.innerHTML = `
        <h3>Time: 00:00:00</h3>
        <p>Full Name: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Age: ${age}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Address: ${address}</p>
        <p>Number of Patients: ${numberOfPatients}</p>
        <p>Emergency Degree: ${emergencyDegree}</p>
        <p>Description of the Emergency: ${emergencyDescription}</p>
        <button type="button" class="btn btn-danger" id="cancelService" data-key="cancel">Cancel Service</button>
        `;

        // Muestra el contenedor de servicio al enviar el formulario
        serviceContainer.style.display = "flex";
        console.log("Imprime algo esta mierda");

        // Oculta el formulario de solicitud
        const requestContainer = document.querySelector(".request-container");
        requestContainer.style.display = "block";
    });

    // Captura el botón de cancelar servicio
    document.addEventListener('click', function (event) {
        if (event.target && event.target.id === 'cancelService') {
            const serviceContainer = document.querySelector(".service-container");
            const mapContainer = document.querySelector(".map-container");

            serviceContainer.style.display = "none";
            mapContainer.style.display = "none";
            sectionMap.style.display = "none";

            requestContainer.classList = "request-container w-75 d-flex justify-content-center align-items-center pt-5";
        }
    });
});
