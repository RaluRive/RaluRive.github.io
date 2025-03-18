<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Noticias y récords de speedrunning en videojuegos.">
    <meta name="author" content="Raúl Rivero Rodriguez">
    <title>Index</title>
    <script src="./js/hora.js"></script>
    <script src="./js/galeria.js"></script>
    <script src="./js/controlMenu.js"></script>
    <script src="./js/tema.js"></script>
    <script src="./js/idioma.js"></script>
    <link rel="stylesheet" href="./css/indice.css" id="tema">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
</head>
<!-- La primera mejora seria cambiar las imagenes de los articulos por videos sobre esas noticias y la segunda seria 
 tener una base de datos para almacenar los videos y noticias sobre los speedruns. Tambien podria finalizar la 
 traduccion de todos los sitios y añadir otros idiomas o incluir mas funcionalidad a la pagina -->
<body>
    <?php
echo "Hola";
    ?>
    <nav class="menu">
        <img class="menu__list__img" src="./img/Logo.jpg" alt="logo de la pagina">
        <ul class="menu__list">
            <li class="menu__list__item" onclick="location.href='./categorias.html'">Categorias</li>
            <li class="menu__list__item" onclick="location.href='./juegos.html'">Juegos</li>
            <li class="menu__list__item" onclick="location.href='./subirRun.html'">Subir Run</li>
            <li class="menu__list__item" onclick="location.href='./nosotros.html'">Nosotros</li>
            <div class="menu__list__div">
                <img class="list__div__img" src="./img/perfil.png" alt="placeholder">
                <div class="list__div__container__button">
                    <button class="list__div__button" type="button">Iniciar Sesion</button>
                    <button class="list__div__button" type="button"
                        onclick="location.href='./registro.html'">Registrarse</button>
                </div>
            </div>
            <li class="menu__list__item__icon">
                <div>
                    <i class="fa-solid fa-circle-half-stroke"></i>
                </div>
                <div>
                    <i class="fa-solid fa-language" onclick="cambiarIdioma('index')"></i>
                </div>
            </li>
        </ul>
        <div class="menu__icon"><i class="fa-solid fa-bars"></i></div>
    </nav>
    <aside class="aside">
        <div class="aside__div"><img class="aside__div__img1" src="./img/SuperMario64.webp" alt="logo de la pagina">Un
            jugador ha
            logrado un nuevo récord mundial en Super Mario 64, completando el juego en 1 hora, 37 minutos y 35 segundos
            en la categoría 120 estrellas. Este increíble logro fue posible gracias a nuevas estrategias de movimiento y
            optimización de rutas.</div>
        <div class="aside__div"><img class="aside__div__img2" src="./img/LoZOoT.jpg" alt="logo de la pagina">Un nuevo
            glitch descubierto en The Legend of Zelda: Ocarina of Time permite a los speedrunners saltarse varias
            secciones clave del juego, reduciendo el tiempo de finalización en más de tres minutos. La comunidad ya está
            explorando cómo explotarlo al máximo.</div>
        <div class="aside__div"><img class="aside__div__img1" src="./img/GDQ.jpg" alt="logo de la pagina">El evento
            Awesome Games Done Quick 2025 concluyó con éxito, recaudando más de $3.2 millones para la Fundación Prevent
            Cancer. Durante el maratón, speedrunners completaron juegos clásicos y modernos a velocidades
            impresionantes, impresionando a miles de espectadores en todo el mundo.</div>
        <div class="aside__div"><img class="aside__div__img2" src="./img/DarkSoulsRemastered.jpg"
                alt="logo de la pagina">Un jugador ha
            completado Dark Souls en solo 25 minutos, estableciendo un nuevo récord en la categoría Any%. Utilizando
            glitches como el "wrong warp" y el "fall control skip", evitó gran parte del juego y derrotó al jefe final
            en tiempo récord. La comunidad ya estudia mejoras para bajar aún más el tiempo.</div>
    </aside>
    <main class="main">
        <div class="main__left" id="izquierda"></div>
        <div class="main__movable" id="main">
            <div class="main__div" id="galeria1">
                <div class="main__div__text"><img class="main__div__img" src="./img/SuperMario64.webp"
                        alt="logo de la pagina">
                    <div>
                        <h1>Nuevo Récord Mundial en Super Mario 64</h1>
                        <p>El speedrunner conocido como Suigi ha logrado un nuevo récord mundial en Super
                            Mario 64, completando la categoría de 120 estrellas en un impresionante tiempo de 1 hora, 37
                            minutos y 35 segundos. Este tiempo mejora la marca anterior en varios segundos, lo que en la
                            comunidad de speedruns representa una diferencia considerable.</p>
                        <p>El récord se logró gracias a la ejecución perfecta de varios trucos avanzados, como el BLJ
                            (Backwards Long Jump) para atravesar ciertas áreas más rápido y la optimización de
                            movimientos en niveles complejos como Rainbow Ride y Tick Tock Clock. Además, el jugador
                            refinó su ruta para reducir tiempos de carga y mejorar la eficiencia de cada estrella
                            recolectada.</p>
                        <p>La comunidad de speedrunners sigue atenta a posibles mejoras en esta categoría, con algunos
                            jugadores explorando estrategias aún más agresivas para optimizar los tiempos.</p>
                    </div>
                </div>
                <div class="main__div__video">
                    <!-- <video src=""></video> -->
                    <img class="main__div__img" src="./img/Logo.jpg" alt="placeholder para el  video">
                </div>
            </div>
            <div class="main__div" id="galeria2">
                <div class="main__div__text"><img class="main__div__img" src="./img/LoZOoT.jpg" alt="logo de la pagina">
                    <div>
                        <h1>Nuevo Glitch en The Legend of Zelda: Ocarina of Time</h1>
                        <p>La comunidad de speedrunners de The Legend of Zelda: Ocarina of Time ha descubierto un nuevo
                            glitch que permite a los jugadores saltarse secciones enteras del juego, reduciendo los
                            tiempos de finalización en más de tres minutos en la categoría Any%.</p>
                        <p>El glitch, denominado "Void Warp Skip", permite a los jugadores teletransportarse a
                            diferentes áreas del juego al manipular la física del motor gráfico en ciertas zonas. Esta
                            técnica se activa al realizar un conjunto preciso de acciones en el Templo del Espíritu,
                            causando que Link atraviese el mapa de forma inesperada.</p>
                        <p>Este descubrimiento podría redefinir el récord mundial de la categoría Any%, ya que los
                            runners ahora están optimizando el uso del glitch para reducir aún más sus tiempos. Con la
                            comunidad trabajando en nuevas estrategias, es solo cuestión de tiempo antes de que veamos
                            otro récord caer.</p>
                    </div>
                </div>
                <div class="main__div__video">
                    <!-- <video src=""></video> -->
                    <img class="main__div__img" src="./img/Logo.jpg" alt="placeholder para el  video">
                </div>
            </div>
            <div class="main__div" id="galeria3">
                <div class="main__div__text"><img class="main__div__img" src="./img/GDQ.jpg" alt="logo de la pagina">
                    <div>
                        <h1>Games Done Quick 2025 Recauda Más de 3.2 Millones de dolares</h1>
                        <p>El evento benéfico Awesome Games Done Quick 2025 (AGDQ) concluyó con gran éxito, logrando una
                            recaudación récord de más de $3.2 millones para la Fundación Prevent Cancer. Durante una
                            semana, speedrunners de todo el mundo mostraron su talento al completar videojuegos de todas
                            las épocas a velocidades impresionantes, mientras los espectadores donaban en apoyo a la
                            causa.</p>
                        <p>El evento fue transmitido en vivo a través de Twitch, con miles de espectadores apoyando con
                            sus donaciones y comentarios en tiempo real. La comunidad de speedrunners ya se prepara para
                            Summer Games Done Quick 2025, que se celebrará a mediados de año con otra serie de carreras
                            y récords impresionantes.</p>
                    </div>
                </div>
                <div class="main__div__video">
                    <!-- <video src=""></video> -->
                    <img class="main__div__img" src="./img/Logo.jpg" alt="placeholder para el  video">
                </div>
            </div>
        </div>
        <div class="main__right" id="derecha"></div>
    </main>
    <footer class="footer">
        <div>Raúl Rivero Rodriguez</div>
        <div id="fecha">Fecha y hora</div>
        <div>
            <a href="https://twitter.com"><img src="./img/logoTwitter.webp" alt="Logo de twitter"></a>
            <a href="https://google.com"><img src="./img/google.png" alt="Logo de google"></a>
            <a href="https://gmail.com"><img src="./img/gmail.png" alt="Logo de gmail"></a>
        </div>
        <div>
            <i class="fa-solid fa-circle-half-stroke"></i>
        </div>
        <div>
            <i class="fa-solid fa-language" onclick="cambiarIdioma('index')"></i>
        </div>
    </footer>
    <script>
        cambiarIdioma('index');
    </script>
</body>

</html>
