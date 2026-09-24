const carouselImages = [
    {
        src: "photos/winter2026.jpg",
        caption: "Hey, it's all of us again!"
    },
    {
        src: "photos/tronSocial1.jpg",
        caption: "Stream 8 Sports Social in 1B"
    },
    {
        src: "photos/2022Nassar.png",
        caption: "A lil Caleb selfie with Nassar - April 2022"
    },
    {
        src: "photos/december2022.jpg",
        caption: "A Stream 8 class picture following the last exam of 2A - December 2022"
    },
    {
        src: "photos/Nassar.jpg",
        caption: "A cheeky little pic with Nassar - December 2022"
    },
    {
        src: "photos/tronfiresummer2023.jpg",
        caption: "Summer 2023 Tronfire! 2B was Stream 8's only summer term."
    },
    {
        src: "photos/august2023.jpg",
        caption: "Stream 8 post-exams picture - August 2023"
    },
    {
        src: "photos/april2024.jpg",
        caption: "Stream 8 post-exams picture - April 2024"
    },
    {
        src: "photos/engday.jpg",
        caption: "Stream 4 @ Eng Day 2024"
    },
    {
        src: "photos/tronfire.jpg",
        caption: "Tronfire - September 2025"
    },
    {
        src: "photos/trontron.jpg",
        caption: "Tron seeing the new Tron. Hey, that's kind of funny if you think about it"
    },
    {
        src: "photos/post484.jpg",
        caption: "A class picture after our final universal exam, the beloved MTE 484 - December 2025"
    },
    {
        src: "photos/finaltronfire.jpg",
        caption: "The last Tronfire - April 2026, murdered by discord compression"
    },
];

let currentSlide = 0;

function showSlide(index) {

    if (index >= carouselImages.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = carouselImages.length - 1;
    } else {
        currentSlide = index;
    }

    const image = document.getElementById("carousel-image");
    const caption = document.getElementById("carousel-caption");

    image.src = carouselImages[currentSlide].src;
    image.alt = carouselImages[currentSlide].caption;
    caption.textContent = carouselImages[currentSlide].caption;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}