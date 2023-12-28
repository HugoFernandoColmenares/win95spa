const nombrePagina = 'Win95 SPA';
const queEsWinSPA = `Win95 SPA es una página web inspirada en Windows 95. El propositó de está página es poner en practica lo
que he aprendido en HTML, CSS y JavaScript, así como plantearme retos personales.`;
const acercaDeMi = `Mi nombre es Hugo Colmenares, soy dibujante, artista marcial, escritor, Trabajador Social y en el ambito 
de la programación, soy un programador full stack con experiencia en: C#, JavaScript, PHP, Java, MySQL, SQL, SQLite VBA y el 
uso de FrameWorks tales como: Angular, Vue, Entity Framework.`;

function loadHeading() {
    const heading = document.getElementById('heading');
    heading.innerHTML = nombrePagina;
}

function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2 class="content-header">Bienvenido a la página de inicio</h2>';
}

function loadBlog() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="card win-border">
            <h2 class="card-heading">Entrada de Blog</h2>
            <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat aliquet lectus, ut facilisis arcu fermentum at.</p>
                <a class="card-link">Ver más...</a>
            </div>
        </div>

        <div class="card win-border">
            <h2 class="card-heading">Entrada de Blog</h2>
            <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat aliquet lectus, ut facilisis arcu fermentum at.</p>
                <a class="card-link">Ver más...</a>
            </div>
        </div>
    `;
}

function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <div class="about win-border">
        <h2 class="about-heading">Acerca de...</h2>
        <div class="about-content win-border-alter">
            <div class="about-section">
                <h3 class="about-title">¿Qué es ` + nombrePagina +  ` ?</h3>
                <p class="about-text">` + queEsWinSPA +  `</p>
            </div>

            <div class="about-section">
                <h3 class="about-title">Sobre mí</h3>
                <p class="about-text">` + acercaDeMi +  `</p>
            </div>
            
        </div>
    </div>
    `;
}

// Cargar la página de inicio por defecto
loadHome();
