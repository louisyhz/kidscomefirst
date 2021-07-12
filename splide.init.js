(function () {
    new Splide('#splide-priorities', {
        perPage: 3,
        breakpoints: {
            768: {
                perPage: 2,
            },
            960: {
                perPage: 2,
            }
        },
        rewind: true,
        type        : 'loop',
        autoplay    : true,
        pauseOnHover: false,
    }).mount();
})();
