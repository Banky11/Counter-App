const c1 = document.getElementById("counter");
let count = 0;


function increament(){
    count = count + 1;
    c1.innerText = count;
}
function decreament() {
    count = count - 1;
    c1.innerText = count;
}
function reset() {
    count = 0;
    c1.innerText = 0;
}
function saved() {
    alert("count saved: " + count)
}