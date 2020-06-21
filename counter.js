

let val = document.getElementById("field").innerHTML;


document.querySelector("#Increment").addEventListener("click", function () {
    val++;
    document.querySelector("#field").textContent = val;
})

document.querySelector("#Decrement").addEventListener("click", function () {
    val--;
    document.querySelector("#field").textContent = val;
})

document.querySelector("#reset").addEventListener("click", function () {
    val = 0;
    document.querySelector("#field").textContent = val;
})

document.querySelector("#start").addEventListener("click", function () {

    var x = setInterval(function () {
        document.querySelector("#field").textContent = val;
        val--;
        if (val == -1) {
            console.log("winner")
            clearInterval(x);
        }
    }, 500)
}
);

document.querySelector("#reset").addEventListener("click",
    function () {
        val = 25;
        document.querySelector("#field").textContent = val;
    })

