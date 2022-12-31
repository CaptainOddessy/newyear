console.clear();

Splitting();
console.log("working")


let user = prompt("please enter your name");
document.getElementById("name").innerHTML = user;

function initparticles() {
    lines();
    hearts();
    fire();
 }
function lines() {
    $.each($(".particletext.lines"), function () {
        var linecount = ($(this).width() / 50) * 10;
        for (var i = 0; i <= linecount; i++) {
            $(this).append('<span class="particle" style="top:' + $.rnd(-30, 30) + '%; left:' + $.rnd(-10, 110) + '%;width:' + $.rnd(1, 3) + 'px; height:' + $.rnd(20, 80) + '%;animation-delay: -' + ($.rnd(0, 30) / 10) + 's;"></span>');
        }
    });
}
function hearts() {
    $.each($(".particletext.hearts"), function () {
        var heartcount = ($(this).width() / 50) * 5;
        for (var i = 0; i <= heartcount; i++) {
            var size = $.rnd(60, 120) / 10;
            $(this).append(
                '<span class="particle" style="top:' +
                $.rnd(20, 80) +
                "%; left:" +
                $.rnd(0, 95) +
                "%;width:" +
                size +
                "px; height:" +
                size +
                "px;animation-delay: " +
                $.rnd(0, 30) / 10 +
                's;"></span>'
            );
        }
    });
}

function fire() {
    $.each($(".particletext.fire"), function () {
       var firecount = ($(this).width() / 50) * 20;
       for (var i = 0; i <= firecount; i++) {
          var size = $.rnd(8, 12);
          $(this).append(
             '<span class="particle" style="top:' +
                $.rnd(40, 70) +
                "%; left:" +
                $.rnd(-10, 100) +
                "%;width:" +
                size +
                "px; height:" +
                size +
                "px;animation-delay: " +
                $.rnd(0, 20) / 10 +
                's;"></span>'
          );
       }
    });
 }
jQuery.rnd = function (m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
};
if (user === "israt" || user === "nur"|| user === "Israt" || user === "israt jahan nur") {
    document.getElementById("name").classList.add("hearts");
    document.getElementById("name").innerHTML = "israt";
}
else if(user === "mezbah" || user === "rafi" || user === "tazim"){
    document.getElementById("name").classList.add("fire");
}
else {
    document.getElementById("name").classList.add("lines");
 }
 initparticles();