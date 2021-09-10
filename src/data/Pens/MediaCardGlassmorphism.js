export const mediaCardGlassmorphism = {
    'id': 2,
    'name': 'Media Card Glassmorphism',
    'owner': { 
        name: 'Cristian',
        lastName: 'Ortega',
        username: 'cristianortega',
    },
    'previewImage': 'pens/previewMediaCardGlassmorphism.gif',
    'html': `<div class="container">
    <div class='card'>
        <div class='content'>
            <h2>01</h2>
            <h3>Card one</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis purus eros.</p>
            <a href="/">Read More</a>
        </div>
    </div>
</div>`,
    'css': `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    flex-wrap: wrap;
    z-index: 1;
    width: fit-content !important;
    padding: 0 !important;
    margin: 0 !important;
    background: none !important;
    border-radius: 0 !important;
    color: inherit !important;
}

.container .card {
    position: relative;
    width: 280px;
    height: 400px;
    margin: 30px;
    box-shadow: 10px 14px 20px rgb(0 0 0 / 50%);
    border-radius: 15px;
    background: rgba(255,255,255,0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    backdrop-filter: blur(5px);
}

.container .card .content {
    padding: 20px;
    text-align: center;
    transform: translateY(100px);
    opacity: 0;
    transition: 0.5s;
}

.container .card:hover .content {
    transform: translateY(0px);
    opacity: 1;
}

.container .card .content h2 {
    position: absolute;
    top: -80px;
    right: 30px;
    font-size: 8em;
    color: rgba(255, 255, 255, 0.05);
    pointer-events: none;
}

.container .card .content h3 {
    font-size: 1.8em;
    color: #fff;
    z-index: 1;
}

.container .card .content p {
    font-size: 1em;
    color: #fff;
    font-weight: 300;
}

.container .card .content a {
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    margin-top: 15px;
    background: #fff;
    color: #000;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 500;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}`,
    'js': `VanillaTilt.init(document.querySelector(".card"), {
    reverse: true,
    max: 20,
    speed: 5000
});

VanillaTilt.init(document.querySelectorAll(".card"));`
};