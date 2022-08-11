// $(document).ready(function(e) {

//
//
//     if (screen.width >= 568) {
//
//         window.location = "https://lakpro.github.io/portfolio/";
//
//     }
// });

// for progress bar

let progress = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};

//progress bar ends

// if (window.innerWidth >= 768) {
//   document.getElementById("contactId").classList.add("big");
//   document.getElementById("contactId").classList.remove("small");
// } else {
//   document.getElementById("contactId").classList.add("small");
//   document.getElementById("contactId").classList.remove("big");
// }

var cols = document.getElementsByClassName("pro-div");
for (i = 0; i < cols.length; i++) {
  cols[i].style.height = max(
    getElementById("p1").height,
    getElementById("p2").height,
    getElementById("p3").height
  );
}
