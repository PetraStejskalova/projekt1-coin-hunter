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

boy.style.left = x + 'px';
boy.style.top = y + 'px';

function move(event) {
	if (event.key === 'ArrowDown') {
		y = y + 50;
		boy.style.top = y + 'px';
	} else if (event.key === 'ArrowUp') {
		y = y - 50;
		boy.style.top = y + 'px';
	} else if (event.key === 'ArrowRight') {
		x = x + 50;
		boy.style.left = x + 'px';
	} else if (event.key === 'ArrowLeft') {
		x = x - 50;
		boy.style.left = x + 'px';
	}
}
