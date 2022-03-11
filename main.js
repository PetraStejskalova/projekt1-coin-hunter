// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

// globální proměnné

let boy = document.getElementById('panacek');
let boyX;
let boyY;
let boyHeight;
let boyWidth;

let coin = document.getElementById('mince');
let coinX;
let coinY;
let coinWidth;
let coinHeight;

let score = document.getElementById('score');

// při načtení stránky

function onLoad() {
	boyHeight = 64;
	boyWidth = 70;
	boyX = window.innerWidth * 0.5 - boyHeight / 2;
	boyY = window.innerHeight * 0.5 - boyWidth / 2;
	boyPosition();
	coinWidth = 36;
	coinHeight = 36;
	newCoin();
	score = 0;
}

function boyPosition() {
	boy.style.left = boyX + 'px';
	boy.style.top = boyY + 'px';
}

function newCoin() {
	coinX = Math.random() * (window.innerWidth - coinWidth);
	coinY = Math.random() * (window.innerHeight - coinHeight);
	coin.style.left = coinX + 'px';
	coin.style.top = coinY + 'px';
}

function move(event) {
	playMusic();
	if (event.key === 'ArrowDown') {
		boy.src = 'obrazky/panacek.png';
		if (boyY > window.innerHeight - boyHeight - 10) {
			boy.style.top = boyY + 'px';
		} else {
			boyY = boyY + 10;
			boy.style.top = boyY + 'px';
		}
	} else if (event.key === 'ArrowUp') {
		boy.src = 'obrazky/panacek-nahoru.png';
		if (boyY < 0) {
			boy.style.top = 0 + 'px';
		} else {
			boyY = boyY - 10;
			boy.style.top = boyY + 'px';
		}
	} else if (event.key === 'ArrowRight') {
		boy.src = 'obrazky/panacek-vpravo.png';
		if (boyX > window.innerWidth - boyWidth) {
			boy.style.left = boyX + 'px';
		} else {
			boyX = boyX + 10;
			boy.style.left = boyX + 'px';
		}
	} else if (event.key === 'ArrowLeft') {
		boy.src = 'obrazky/panacek-vlevo.png';
		if (boyX < 0) {
			boy.style.left = 0 + 'px';
		} else {
			boyX = boyX - 10;
			boy.style.left = boyX + 'px';
		}
	}
	testCollision();
}

function testCollision() {
	if (!(boyX + boyWidth < coinX || coinX + coinWidth < boyX || boyY + boyHeight < coinY || coinY + coinHeight < boyY)) {
		newCoin();
		coinSound();
		scorePlus();
		victory();
	}
}

function playMusic() {
	let music = document.getElementById('hudba');
	music.play();
	music.volume = 0.2;
}

function coinSound() {
	let coinSound = document.getElementById('zvukmince');
	coinSound.play();
	coinSound.volume = 0.4;
}

function scorePlus() {
	score++;
	document.getElementById('score').innerHTML = score;
}

function victory() {
	let fanfare = document.getElementById('zvukfanfara');
	if (score === 5) {
		fanfare.play();
		fanfare.volume = 0.4;
		alert('Gratuluji. Vyhrál jsi!');
	}
}
