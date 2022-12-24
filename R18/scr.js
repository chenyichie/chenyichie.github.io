function rick(){
    $("body").innerHTML = `<video controls="" autoplay="" name="media"><source src="./Rick.mp4" type="video/mp4"></video>`
    $("body").style = ""
    var elem = $("video")
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { 
        elem.msRequestFullscreen();
      }
}

const $ = document.querySelector.bind(document)
window.addEventListener("DOMContentLoaded",function(){
    $("#yes").addEventListener("click", rick)
    $("#no").addEventListener("click", rick)
})