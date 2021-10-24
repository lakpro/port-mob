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

let progress = document.getElementById('progressBar')
let totalHeight = document.body.scrollHeight - window.innerHeight
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100
    progress.style.height = progressHeight + '%'
}

//progress bar ends