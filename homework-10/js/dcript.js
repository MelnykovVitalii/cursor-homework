const keys = document.querySelectorAll(".key");
const audio = document.querySelectorAll(".audio");

function removeClassStopAudio() {
	keys.forEach((key) => {
		key.classList.remove("active");
		stop(key.id);
	});
}

function stop(id) {
	audio.forEach((audio) => {
		if (audio.id === id) {
			audio.pause();
			audio.currentTime = 0;
		}
	});
}

function play(id) {
	audio.forEach((audio) => {
		if (audio.id === id) {
			audio.play();
		}
	});
}

document.addEventListener("keydown", (e) => {
	const keyCode = e.code;
	const key = document.getElementById(`${keyCode}`);
	if (!key) return;
	removeClassStopAudio();
	key.classList.add("active");
	play(keyCode);
});

keys.forEach((key) => {
	key.addEventListener("click", () => {
		removeClassStopAudio();
		key.classList.add("active");
		play(key.id);
	});
});
