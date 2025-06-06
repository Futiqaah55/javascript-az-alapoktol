/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük
le róla azt.
*/

/*
 - element  JS reprezentácioja: document.getElementById('element-one')
 - esemény kiválasztása: onclick
 - funkcionalitás leirása: function () {...}
*/

// belső állapot: state

var isBlurred = false;

document.getElementById('element-one').onclick = function () {document.getElementById('element-one').classList.toggle('blur')};
isBlurred = !isBlurred;
if(isBlurred) {console.dir(document.getElementById('element-one'));} else {document.getElementById('element-one').classList.remove('blur')}

/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/

// State
var isHoveredOver = false;

// action
document.getElementById('element-two').onmouseover = function () {
  // state change
  isHoveredOver = ture;
  // render
  renderSecondBox();
}

// Action
document.getElementById('element-two').onmouseout = function () {
  // state change
  isHoveredOver = false;
  // render
  renderSecondBox();
}

function renderSecondBox() {
  if (isHoveredOver) {
    document.getElementById('element-two').style.backgroundColor = 'red';
  } else {
    document.getElementById('element-two').style.backgroundColor = '';
  }
}


/*
3. doboz:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát. 
*/

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
document.getElementById('element-three').ondblclick = function () {
  document.getElementById('element-three').firstElementChild.innerHTML = getRandomNumber(1, 20);
}

/*
4. doboz:
Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/

document.getElementById('element-four').onclick = function () {
  document.getElementById('element-four').classList.add('hidden');
  setTimeout(function() {
    document.getElementById('element-four').classList.remove('hidden');
  }, 1000);
}

/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/

document.getElementById('element-five').onclick = function () {
  var boxes = document.querySelectorAll('.shape');

  for(var box of boxes){
    box.style.borderRadius = '50%';
  }
}

/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/

document.getElementById('box-6').onsubmit = function (event) {
  event.preventDefault(); // Megakadályozzuk az alapértelmezett form submit viselkedést
  var inputValue = document.getElementById('input-6').value; // Lekérjük az input mező értékét
  document.getElementById('box-6').firstElementChild.innerHTML = inputValue; // Beírjuk a dobozba
}  

/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/

document.getElementById('box-7-input').onkeypress = function (event) {
  var character = event.key; // Lekérjük a leütött karaktert
  document.getElementById('box-7').firstElementChild.innerHTML += character; // Hozzáadjuk a doboz tartalmához
}

/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/

document.onmousemove = function (event) {
 var coordinataer = "X: "+event.clientX+", Y: "+event.clientY;
 document.getElementById('box-8').firstElementChild.innerHTML = coordinataer; // Beírjuk a dobozba
}






/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő, 
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.

Az előállt végeredményt tároljuk el új state-ként!

Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9

  Operáció: 9 * 5
  
  Dobozba és state-be beírandó érték: 45
*/
