const loader = document.querySelector(".loader");


function init() {
    // setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = 'block';
    //     setTimeout(() => (main.style.opacity = 1), 50);

    // }, 4000);
}

init();
