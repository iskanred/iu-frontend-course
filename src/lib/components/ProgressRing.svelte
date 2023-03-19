<div class="outer-circle">
    <div class="inner-circle">
    </div>
</div>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .outer-circle {
        width: 5rem;
        height: 5rem;
        background-color: #F2F2F2;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
    }

    .inner-circle {
        border-radius: inherit;
        background-image: conic-gradient(#F2F2F2, rgb(62, 62, 62), rgb(30, 29, 28));
        position: absolute;
        z-index: -1;
        margin: auto;
        top: -0.8rem;
        bottom: -0.8rem;
        left: -0.8rem;
        right: -0.8rem;
        animation: circle-anim 0.6s linear infinite;
    }

    @keyframes circle-anim {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
