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
  var id = document.getElementById("grand-node");
  var childNode = id.children[0];

  while(childNode) {
    id = childNode;
    childNode = id.children[0];
  }

  return id;
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
