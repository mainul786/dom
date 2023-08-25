const mainSection = document.getElementById('main-section');
const section = document.createElement('section');
const heading = document.createElement('h2');
heading.innerText = 'My Visiting place!';
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText='Puri sumodrasoukat';
const li2 = document.createElement('li');
li2.innerText='Derjeeling';
const li3 = document.createElement('li');
li3.innerText='Bhutan';

mainSection.appendChild(section);
section.appendChild(heading);
section.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

console.log(mainSection);


const newSection = document.createElement('section');
newSection.innerHTML =`
    <h2>Favarite Friend list</h2>
    <ul>
        <li>Bablu Murari</li>
        <li>Saddam Hossain</li>
        <li>Dip Haldar</li> 
        <li>Swapon Murari</li> 
    </ul>
` ;

mainSection.appendChild(newSection);
console.log(mainSection);