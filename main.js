// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let boy = document.getElementById('panacek');

let x = window.innerWidth * 0.5 - 32;
let y = window.innerHeight * 0.5 - 35;

let boyHeight = 64;
let boyWidth = 70;

boy.style.left = x + 'px';
boy.style.top = y + 'px';

function move(event) {
	if (event.key === 'ArrowDown') {
		if (y > windowHeight - boyHeight - 10) {
			boy.style.top = y + 'px';
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
			boy.style.left = x + 'px';
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

let coin = document.getElementById('mince');

let coinWidth = 36;
let coinHeight = 36;

let coinX = Math.random() * (window.innerWidth - coinWidth);
let coinY = Math.random() * (window.innerHeight - coinHeight);

coin.style.left = coinX + 'px';
coin.style.top = coinY + 'px';
