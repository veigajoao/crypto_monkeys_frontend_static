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
        console.log(rowNode)
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
                                <a href="https://discord.io/CryptoMonkeys" target="_blank" rel="noopener noreferrer"><i class="fab fa-discord fa-2x me-4"></i></a>
                                <a href="https://t.me/cryptomonkeysgame" target="_blank" rel="noopener noreferrer"></a><i class="fab fa-telegram-plane fa-2x me-4"></i></a>
                                <a href="https://twitter.com/_CryptoMonkeys" target="_blank" rel="noopener noreferrer"></a><i class="fab fa-twitter fa-2x"></i></a>
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
                                <a href="https://discord.io/CryptoMonkeys" target="_blank" rel="noopener noreferrer"><i class="fab fa-discord fa-2x me-4"></i></a>
                                <a href="https://t.me/cryptomonkeysgame" target="_blank" rel="noopener noreferrer"></a><i class="fab fa-telegram-plane fa-2x me-4"></i></a>
                                <a href="https://twitter.com/_CryptoMonkeys" target="_blank" rel="noopener noreferrer"></a><i class="fab fa-twitter fa-2x"></i></a>
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

});
