import React from 'react';
import '../css/footer.css';

function Footer() {
     /* el componente debe retornar un sólo elemento */
    return(
        <>
        <div class="container py-3 my-4">
            <footer  class="py-2 my-4">
            <p>en un futuro
                podremos estar en las redes</p>
                <p>&copy 2024</p>
            
        <ul className="nav justify-content-center border-bottom pb-3 mb-2">
                    <li class="nav-item"><a href="https://utn.edu.ar/es/" class="nav-link px-2 text-body-secondary">Home</a></li>
                    <li class="nav-item"><a href="https://utn.edu.ar/es/" class="nav-link px-2 text-body-secondary">Features</a></li>
                    <li class="nav-item"><a href="https://utn.edu.ar/es/" class="nav-link px-2 text-body-secondary">Pricing</a></li>
                    <li class="nav-item"><a href="https://utn.edu.ar/es/" class="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li class="nav-item"><a href="https://utn.edu.ar/es/" class="nav-link px-2 text-body-secondary">About</a></li>
                    </ul>

                    <p class="text-center text-body-secondary">&copy; 2024 copiright, MJCP </p>

                    </footer>
                    </div>
        </>
    )
}

export default Footer;