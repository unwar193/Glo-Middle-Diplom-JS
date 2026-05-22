"use strict";

// import { animate , blockBody , unBlockBody} from "./helpers.js";

const modal = () => {

    const headerModal = document.querySelector(".header-modal");
    const overlay = document.querySelector(".overlay");
    const callBackBtn = document.querySelector('#header .button .btn')
    const headerModalClsBtn = document.querySelector(".header-modal__close");

    callBackBtn.addEventListener('click', (e) => {
        
        overlay.style.display = "block";
        headerModal.style.display = "block";

    })

    headerModalClsBtn.addEventListener('click', (e) => {
        
        overlay.style.display = "none";
        headerModal.style.display = "none";
    })
 
    overlay.addEventListener("click", () => {
        headerModal.style.display = "none";
        overlay.style.display = "none";
    });




    // const popup = document.querySelector(".popup"),
    // popupBtn = document.querySelectorAll(".popup-btn"),
    // popupContent = popup.querySelector(".popup-content")

//   popupBtn.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       popup.style.display = "block";
//       if (screen.width > 768) {
//         animate({
//           duration: 400,
//           timing(timeFraction) {
//               return Math.pow(timeFraction, 3)
//           },
//           draw(progress) {
//             popupContent.style.top = 25 * progress  + '%';
//             blockBody();
//           },
//         });
//       }
//     });
//   });

//   popup.addEventListener("click", (e) => {
//     if (
//       !e.target.closest(".popup-content") ||
//       e.target.classList.contains("popup-close")
//     ) {
//       popup.style.display = "none";
//       unBlockBody();
//     }
//   });
};

export default modal;