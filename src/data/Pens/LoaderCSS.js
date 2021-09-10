export const loaderCSS = {
    'id': 1,
    'name': 'Loader CSS',
    'owner': { 
        name: 'Cristian',
        lastName: 'Ortega',
        username: 'cristianortega'
    },
    'previewImage': 'pens/previewLoaderCSS.gif',
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
}