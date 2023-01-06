function render(data) {
    const pre = document.querySelector("pre")
    var x = 0
    setInterval(function () {
        if (!(data[x] == undefined)){
            pre.innerHTML = data[x]
            x++
        }
    }, 1000/30)
}

let xhr = new XMLHttpRequest();
const url = `./output.json`
xhr.open("GET", url)
xhr.send()
xhr.onload = function() {
    var json_out = JSON.parse(xhr.responseText)
    render(json_out)
}