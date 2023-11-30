let arr = ["color_red", "color_orange", "color_yellow"];
let item = document.querySelector("button");
let item2 = document.querySelector("body");

let sp1 = 0;
let sp2 = 0;
let sp3 = 0;
function getRandomInt(max) {
  for (i of arr) {
    if (item2.classList.contains(i) == true) {
      item2.classList.remove(i);
    }
  }
  let itm = Math.floor(Math.random() * max);
  if (itm == 0) {
    sp1++;
    document.getElementsByClassName("sp1")[0].innerText = `${sp1}`;
  } else if (itm == 1) {
    sp2++;
    document.getElementsByClassName("sp2")[0].innerText = `${sp2}`;
  } else if (itm == 2) {
    sp3++;
    document.getElementsByClassName("sp3")[0].innerText = `${sp3}`;
  }
  return itm;
}

item.addEventListener("click", function () {
  item2.classList.add(arr[getRandomInt(3)]);
});
