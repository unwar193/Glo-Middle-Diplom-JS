"use strict";

const timer = () => {
    document.addEventListener("DOMContentLoaded", () => {

        const endDate = new Date("2026-05-31T23:59:59");

        const countdowns = document.querySelectorAll(".countdown");

        function updateCountdown() {
            const now = new Date();
            const diff = endDate - now;

            if (diff <= 0) {
                countdowns.forEach(cd => {
                    cd.querySelector(".count_1 span").textContent = "00";
                    cd.querySelector(".count_2 span").textContent = "00";
                    cd.querySelector(".count_3 span").textContent = "00";
                    cd.querySelector(".count_4 span").textContent = "00";
                });
                clearInterval(timer);
                return;
            }


            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);


            countdowns.forEach(cd => {
                cd.querySelector(".count_1 span").textContent = String(days).padStart(2, "0");
                cd.querySelector(".count_2 span").textContent = String(hours).padStart(2, "0");
                cd.querySelector(".count_3 span").textContent = String(minutes).padStart(2, "0");
                cd.querySelector(".count_4 span").textContent = String(seconds).padStart(2, "0");
            });
        }


        updateCountdown();
        const timer = setInterval(updateCountdown, 1000);
    });
}


export default timer
