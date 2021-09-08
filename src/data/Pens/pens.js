export const pens = [
    {
        'id': 1,
        'name': 'Loader CSS',
        'owner': { 
            name: 'Cristian',
            lastName: 'Ortega',
            username: 'cristianortega'
        },
        'previewImage': 'previewLoaderCSS.gif',
        'html': `<div class="spinner-css">
    <span class="side sp_left">
        <span class="fill"></span>
    </span>
    <span class="side sp_right">
        <span class="fill"></span>
    </span>
</div>`,
        'css': `body {
    background-color: white;
}
.spinner-css {
    margin: -50px 0 0 -50px;
    height: 100px;
    width: 100px;
    top: 50%;
    left: 50%;
    position: absolute;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
}
.spinner-css:after {
    content: "";
    position: absolute;
    width: 87px;
    height: 87px;
    left: 0px;
    top: 0px;
    margin: 6.5px;
    background: #fff;
    opacity: 1;
    border-radius: 999px;
    -webkit-border-radius: 999px;
    -moz-border-radius: 999px;
}
.spinner-css .side {
    height: 100px;
    width: 50px;
    position: absolute;
    overflow: hidden;
    top: 0;
}
.spinner-css .side > .fill {
    position: absolute;
    width: 50px;
    height: 100px;
    background: #09c;
    border-radius: 999px;
    -webkit-border-radius: 999px;
    -moz-border-radius: 999px;
    animation: cssSpinnerRight 2s infinite linear;
    -webkit-animation: cssSpinnerRight 2s infinite linear;
    -moz-animation: cssSpinnerRight 2s infinite linear;
    -o-animation: cssSpinnerRight 2s infinite linear;
}
.spinner-css .side.sp_right {
    left: 50px;
    border-radius: 0px 999px 999px 0px;
    -webkit-border-radius: 0px 999px 999px 0px;
    -moz-border-radius: 0px 999px 999px 0px;
}
.spinner-css .side.sp_right > .fill {
    right: 0;
    border-right: 50px solid #fff;
}
.spinner-css .side.sp_left {
    left: 0;
    border-radius: 999px 0px 0px 999px;
    -webkit-border-radius: 999px 0px 0px 999px;
    -moz-border-radius: 999px 0px 0px 999px;
}
.spinner-css .side.sp_left > .fill {
    left: 0;
    border-left: 50px solid #fff;
    animation: cssSpinnerLeft 2s infinite linear;
    -webkit-animation: cssSpinnerLeft 2s infinite linear;
    -moz-animation: cssSpinnerLeft 2s infinite linear;
    -o-animation: cssSpinnerLeft 2s infinite linear;
}
@-webkit-keyframes cssSpinnerRight {
    0% {
        -webkit-transform: rotate(0deg);
    }
    20% {
        -webkit-transform: rotate(90deg);
    }
    25% {
        -webkit-transform: rotate(180deg);
    }
    50% {
        -webkit-transform: rotate(180deg);
    }
    70% {
        -webkit-transform: rotate(270deg);
    }
    75% {
        -webkit-transform: rotate(360deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}
@-webkit-keyframes cssSpinnerLeft {
    0% {
        -webkit-transform: rotate(0deg);
    }
    25% {
        -webkit-transform: rotate(0deg);
    }
    35% {
        -webkit-transform: rotate(90deg);
    }
    50% {
        -webkit-transform: rotate(180deg);
    }
    75% {
        -webkit-transform: rotate(180deg);
    }
    80% {
        -webkit-transform: rotate(270deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}
@-moz-keyframes cssSpinnerRight {
    0% {
        -moz-transform: rotate(0deg);
    }
    20% {
        -moz-transform: rotate(90deg);
    }
    25% {
        -moz-transform: rotate(180deg);
    }
    50% {
        -moz-transform: rotate(180deg);
    }
    70% {
        -moz-transform: rotate(270deg);
    }
    75% {
        -moz-transform: rotate(360deg);
    }
    100% {
        -moz-transform: rotate(360deg);
    }
}
@-moz-keyframes cssSpinnerLeft {
    0% {
        -moz-transform: rotate(0deg);
    }
    25% {
        -moz-transform: rotate(0deg);
    }
    35% {
        -moz-transform: rotate(90deg);
    }
    50% {
        -moz-transform: rotate(180deg);
    }
    75% {
        -moz-transform: rotate(180deg);
    }
    80% {
        -moz-transform: rotate(270deg);
    }
    100% {
        -moz-transform: rotate(360deg);
    }
}
@-o-keyframes cssSpinnerRight {
    0% {
        -o-transform: rotate(0deg);
    }
    20% {
        -o-transform: rotate(90deg);
    }
    25% {
        -o-transform: rotate(180deg);
    }
    50% {
        -o-transform: rotate(180deg);
    }
    70% {
        -o-transform: rotate(270deg);
    }
    75% {
        -o-transform: rotate(360deg);
    }
    100% {
        -o-transform: rotate(360deg);
    }
}
@-o-keyframes cssSpinnerLeft {
    0% {
        -o-transform: rotate(0deg);
    }
    25% {
        -o-transform: rotate(0deg);
    }
    35% {
        -o-transform: rotate(90deg);
    }
    50% {
        -o-transform: rotate(180deg);
    }
    75% {
        -o-transform: rotate(180deg);
    }
    80% {
        -o-transform: rotate(270deg);
    }
    100% {
        -o-transform: rotate(360deg);
    }
}
@keyframes cssSpinnerRight {
    0% {
        transform: rotate(0deg);
    }
    20% {
        transform: rotate(90deg);
    }
    25% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(180deg);
    }
    70% {
        transform: rotate(270deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes cssSpinnerLeft {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(0deg);
    }
    35% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(180deg);
    }
    80% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
}`,
        'js': '',
    },
    {
        'id': 2,
        'name': 'Media Card Glassmorphism',
        'owner': { 
            name: 'Cristian',
            lastName: 'Ortega',
            username: 'cristianortega'
        },
        'previewImage': 'previewMediaCardGlassmorphism.gif',
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
        'js': `
VanillaTilt.init(document.querySelector(".card"), {
    reverse: true,
    max: 20,
    speed: 5000
});

VanillaTilt.init(document.querySelectorAll(".card"));`
    },
    {
        'id': 3,
        'name': 'Codepen 3',
        'owner': { 
            name: 'Cristian',
            lastName: 'Ortega',
            username: 'cristianortega'
        },
        'previewImage': '',
        'component': 'LoaderCSS',
        'html': '',
        'css': '',
        'js': ''
    },
    {
        'id': 4,
        'name': 'Codepen 4',
        'owner': { 
            name: 'Cristian',
            lastName: 'Ortega',
            username: 'cristianortega'
        },
        'previewImage': '',
        'component': 'LoaderCSS',
        'html': '',
        'css': '',
        'js': ''
    },
    {
        'id': 5,
        'name': 'Codepen 5',
        'owner': { 
            name: 'Cristian',
            lastName: 'Ortega',
            username: 'cristianortega'
        },
        'previewImage': '',
        'component': 'LoaderCSS',
        'html': '',
        'css': '',
        'js': ''
    }
];