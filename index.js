function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const list = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for (let i = 0, len = list.length; i < len; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}
// pulls out the most deeply nested child from div#grand-node
function deepestChild() {
  return document.querySelector("div#grand-node div div div div")
}

/*
function find(array, criteriaFn) {
  let current = array;
  let next = [];

  while(current) {
    if (criteriaFn(current)) {
      return current;
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i]);
      }
    }
    current = next.shift();
  }
  return null;
}
*/
