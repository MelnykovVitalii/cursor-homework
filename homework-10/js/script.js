const keys = document.querySelectorAll(".key");

function stopActiveAudio() {
	keys.forEach((key) => {
		const audio = document.querySelector(`audio.${key.id}`);

		key.classList.remove("active");
		audio.pause();
		audio.currentTime = 0;
	});
}

function play(keyIdentifier) {
	const key = document.getElementById(`${keyIdentifier}`);
	const audio = document.querySelector(`audio.${keyIdentifier}`);

	key.classList.add("active");
	audio.play();
}

document.addEventListener("keydown", (e) => {
	const keyIdentifier = e.code;
	const key = document.getElementById(`${keyIdentifier}`);

	if (!key) return;
	stopActiveAudio();
	play(keyIdentifier);
});

keys.forEach((key) => {
	key.addEventListener("click", () => {
		stopActiveAudio();
		play(key.id);
	});
});
