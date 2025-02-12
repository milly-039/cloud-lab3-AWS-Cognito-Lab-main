
// import images as relative image path won’t work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

// Select sushi items using the correct class
const sushiItems = document.querySelectorAll(".trending-sushi");

sushiItems.forEach(item => {
    item.addEventListener("click", () => {
        // Remove active class from all sushi items
        sushiItems.forEach(sushi => sushi.classList.remove("active"));

        // Add active class to the clicked sushi
        item.classList.add("active");
    });
});
