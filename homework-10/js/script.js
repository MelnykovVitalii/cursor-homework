const keys = document.querySelectorAll(".key");

function stopActiveAudio() {
	keys.forEach((key) => {
		key.classList.remove("active");
		const audio = document.querySelector(`.${key.id}`);
		audio.pause();
		audio.currentTime = 0;
	});
}

function play(keyIdentifier) {
	const audio = document.querySelector(`.${keyIdentifier}`);
	audio.play();
}

document.addEventListener("keydown", (e) => {
	const keyIdentifier = e.code;
	const key = document.getElementById(`${keyIdentifier}`);
	if (!key) return;
	stopActiveAudio();
	key.classList.add("active");
	play(keyIdentifier);
});

keys.forEach((key) => {
	key.addEventListener("click", () => {
		stopActiveAudio();
		key.classList.add("active");
		play(key.id);
	});
});
