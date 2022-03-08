function moveMonkeys(centerNumber) {
    var allElem = document.getElementsByClassName("carousel__item");
    console.log(allElem);

    var list = document.getElementsByClassName("events");
    for (let element of allElem) {
        element.classList.remove("position0");
        element.classList.remove("position1");
        element.classList.remove("position2");
        element.classList.remove("position3");
        element.classList.remove("position4");
        element.classList.add("positionNone");
    }

    var lastChar = centerNumber - 2 <= 0 ? 11 - (centerNumber - 2) :  centerNumber - 2;
    var semiLast = centerNumber - 1 <= 0 ? 11 - (centerNumber - 1) :  centerNumber - 1;
    var centerChar = centerNumber
    var semifirstChar = centerNumber + 1 > 11 ? (centerNumber + 1) - 11 :  centerNumber + 1;
    var firstChar = centerNumber + 2 > 11 ? (centerNumber + 2) - 11 :  centerNumber + 2;

    document.getElementById(`item-${firstChar}`).classList.add("position0");
    document.getElementById(`item-${semifirstChar}`).classList.add("position1");
    document.getElementById(`item-${centerChar}`).classList.add("position2");
    document.getElementById(`item-${semiLast}`).classList.add("position3");
    document.getElementById(`item-${lastChar}`).classList.add("position4");

    document.getElementById(`item-${firstChar}`).classList.remove("positionNone");
    document.getElementById(`item-${semifirstChar}`).classList.remove("positionNone");
    document.getElementById(`item-${centerChar}`).classList.remove("positionNone");
    document.getElementById(`item-${semiLast}`).classList.remove("positionNone");
    document.getElementById(`item-${lastChar}`).classList.remove("positionNone");

}

var baseMonkey = 3;
document.getElementById("left-char").addEventListener("click", _ => {
    baseMonkey = baseMonkey + 1 > 11 ? 1 : baseMonkey + 1;
    moveMonkeys(baseMonkey);
});

document.getElementById("right-char").addEventListener("click", _ => {
    baseMonkey = baseMonkey - 1 == 0 ? 11 : baseMonkey - 1;
    moveMonkeys(baseMonkey);
});