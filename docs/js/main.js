window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
            navbarCollapsible.classList.remove('bg-black');
            navbarCollapsible.classList.add('bg-transparent');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
            navbarCollapsible.classList.add('bg-black');
            navbarCollapsible.classList.remove('bg-transparent');
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // change page cover based on viewport width
    function changePageCoverResponsive() {
        let rowNode = document.getElementById("header-content");
        let width = window.innerWidth;

        let newNode = document.createElement('div');
        newNode.id = "header-content";
        newNode.classList.add("row", "gx-0", "d-flex");

        if (width < 768) {
            newNode.innerHTML = 
                `
                <div class="col-md-6 col-12 d-flex align-items-end">
                    <img id="cover-image" class="position-relative start-0 bottom-0" style="z-index: 0; height: 50vh;" src="./img/main_monkeys_fade.png" alt="">
                </div>
                <div class="col-md-6 col-12 align-self-center" style="z-index: 1;">
                    <div class="d-flex justify-content-between align-items-center w-100" style="z-index: 100;">
                        <div class="d-flex flex-column text-center">
                            <img class="w-100" src="./img/shiny_logo.png" alt="">
                            <div class="text-orange-text" style="font-family: 'league_spartanbold';font-size: x-large; margin-top: -30px;">THE FIRST MONKEYS METAVERSE</span>
                        </div>
                        <div class="d-block mt-5">
                            <a href="#" class="btn btn-play-button text-orange-text border-white w-30" style="font-family: 'league_spartanbold';">PLAY GAME</a>
                            <div class="d-flex text-white justify-content-center mt-5">
                                <a href="https://discord.io/CryptoMonkeys" class="social-buttons" target="_blank" rel="noopener noreferrer"><i class="fab fa-discord fa-2x me-4"></i></a>
                                <a href="https://t.me/cryptomonkeysgame" class="social-buttons" target="_blank" rel="noopener noreferrer"><i class="fab fa-telegram-plane fa-2x me-4"></i></a>
                                <a href="https://twitter.com/_CryptoMonkeys" class="social-buttons" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                `
        } else {
            newNode.innerHTML = 
                `
                <div class="col-md-6 col-12 d-flex align-items-end">
                    <img id="cover-image" class="position-relative start-0 bottom-0" style="z-index: 0; height: 100vh;" src="./img/main_monkeys_fade.png" alt="">
                </div>
                <div class="col-md-6 col-12 align-self-center" style="z-index: 1;">
                    <div class="d-flex justify-content-between align-items-center w-100" style="z-index: 100;">
                        <div class="d-flex flex-column text-center">
                            <img class="w-100" src="./img/shiny_logo.png" alt="">
                            <div class="text-orange-text" style="font-family: 'league_spartanbold';font-size: x-large; margin-top: -30px;">THE FIRST MONKEYS METAVERSE</span>
                        </div>
                        <div class="d-block mt-5">
                            <a href="#" class="btn btn-play-button text-orange-text border-white w-30" style="font-family: 'league_spartanbold';">PLAY GAME</a>
                            <div class="d-flex text-white justify-content-center mt-5">
                                <a href="https://discord.io/CryptoMonkeys" class="social-buttons" target="_blank" rel="noopener noreferrer"><i class="fab fa-discord fa-2x me-4"></i></a>
                                <a href="https://t.me/cryptomonkeysgame" class="social-buttons" target="_blank" rel="noopener noreferrer"><i class="fab fa-telegram-plane fa-2x me-4"></i></a>
                                <a href="https://twitter.com/_CryptoMonkeys" class="social-buttons" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                `
        }
        rowNode.parentNode.replaceChild(newNode, rowNode);
    }
    window.addEventListener('resize', changePageCoverResponsive);
    changePageCoverResponsive();


    //change video playback ratio
    document.querySelectorAll('video').forEach(element => {
        element.playbackRate = 0.75;
    })

    //add function to change text in carousel
    function carouselTextChange (event) {

        let textBox = document.getElementById("carousel-desc");
        let activeElement = event.to;

        if (activeElement == 0) {
            textBox.innerHTML =
                `
                <div class="d-flex justify-content-center align-items-center">
                    <button class="mb-1 btn bg-transparent border-0" type="button" data-bs-target="#carousel-monkeys" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <h5 class="text-orange-text fw-bold p-1">Cave monkey <span class="badge bg-grey-text text-black p-1 mb-1">Commom</span></h5>
                    <button class="mb-1 btn bg-transparent border-0" type="button" data-bs-target="#carousel-monkeys" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <p class="text-center text-white text-box-sizing">
                    Cave monkey is not particulary bright, but what he lacks in brains, he makes do with
                    brute force and instincts. He can smell bananas from a 2 mile distance.
                </p>
                `
        } else if (activeElement == 1) {
            textBox.innerHTML = 
                `
                <div class="d-flex justify-content-center align-items-center">
                    <button class="mb-1 btn bg-transparent border-0" type="button" data-bs-target="#carousel-monkeys" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <h5 class="text-orange-text fw-bold p-1" >Knight monkey <span class="badge bg-orange-text text-black p-1 mb-1">Rare</span></h5>
                    <button class="mb-1 btn bg-transparent border-0" type="button" data-bs-target="#carousel-monkeys" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <p class="text-center text-white text-box-sizing">
                    Evolution made this monkey a true war machine. Knight monkey is stronger, fiercer 
                    and more athletic than any other monkey. With him by your side there is no way
                    someone will try to steal your bananas.
                </p>
                `
        } else if (activeElement == 2) {
            textBox.innerHTML = 
                `
                <div class="d-flex justify-content-center align-items-center">
                    <button class="mb-1 btn bg-transparent border-0" type="button" data-bs-target="#carousel-monkeys" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <h5 class="text-orange-text fw-bold p-1">Meta Monkey <span class="badge bg-secondary text-black p-1 mb-1">Legendary</span> </h5> 
                    <button class="mb-1 btn bg-transparent border-0" type="button" data-bs-target="#carousel-monkeys" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <p class="text-center text-white text-box-sizing">
                    The apex of intelligence and inventiveness, Meta Monkey is no longer bound by the physical
                    world. He is a brilliant entrepeuneur and can find ways to become a banana millionaire both online
                    and in real life.
                </p>
                `
        } else if (activeElement == 3) {
            textBox.innerHTML = 
                `
                <div class="d-flex justify-content-center align-items-center">
                    <button class="btn bg-transparent border-0" type="button" data-bs-target="#carousel-monkeys" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <h5 class="text-orange-text fw-bold p-1">Coming Soon</h5>
                    <button class="btn bg-transparent border-0" type="button" data-bs-target="#carousel-monkeys" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <p class="text-center text-white text-box-sizing">
                    The full collection will have 11 unique monkey types from all ages. We'll be releasing new
                    monkeys every week until the game launch date!
                </p>
                `
        }

    }

    let myCarousel = document.getElementById('carousel-monkeys');

    myCarousel.addEventListener('slide.bs.carousel', carouselTextChange);
    carouselTextChange({to: 0});
});
