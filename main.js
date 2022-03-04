// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let boy = document.getElementById('panacek');

let x = window.innerWidth * 0.5 - 32;
let y = window.innerHeight * 0.5 - 35;

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let boyHeight = 64;
let boyWidth = 70;

console.log(windowHeight);
console.log(windowHeight - boyHeight);

boy.style.left = x + 'px';
boy.style.top = y + 'px';

function move(event) {
	console.log(boy.style.left);
	if (event.key === 'ArrowDown') {
		if (y > windowHeight - boyHeight - 10) {
			boy.style.top = windowHeight - boyHeight - 10 + 'px';
		} else {
			y = y + 10;
			boy.style.top = y + 'px';
		}
	} else if (event.key === 'ArrowUp') {
		if (y < 0) {
			boy.style.top = 0 + 'px';
		} else {
			y = y - 10;
			boy.style.top = y + 'px';
		}
	} else if (event.key === 'ArrowRight') {
		if (x > windowWidth - boyWidth) {
			boy.style.left = windowWidth - boyWidth + 'px';
		} else {
			x = x + 10;
			boy.style.left = x + 'px';
		}
	} else if (event.key === 'ArrowLeft') {
		if (x < 0) {
			boy.style.left = 0 + 'px';
		} else {
			x = x - 10;
			boy.style.left = x + 'px';
		}
	}
}
