console.log(document.getElementById('header-title').innerText);
console.log(document.getElementById('header-title').innerHTML);

// console.log(document.getElementsByClassName('turist-place'));
const turistCollection = document.getElementsByClassName('turist-place');
for (const turist of turistCollection){
    console.log(turist.innerText);
}

const querySelector = document.querySelectorAll('.turist-place');
console.log(querySelector);
for (const query of querySelector){
    console.log(query.innerText)
}

const styling = document.getElementById('header-title').style.backgroundColor='red';
console.log(styling);

const element = document.getElementById('header-title');
console.log(element);
// class remove by classList.remove(')
element.classList.remove('some-add');
// add class by classList.add()
 element.classList.add('amitomake-valobasi');
console.log(element);

// appendChild();

const foods = document.getElementById('food');
const list = document.createElement('li');
list.innerText = 'i like watermelian juice';
foods.appendChild(list);


// Node List ---> parentNode, childNode, nextSibling, previosSibling;