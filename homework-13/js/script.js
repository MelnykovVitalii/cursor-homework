function getData(url) {
	return fetch(url).then((response) => response.json());
}

function getGenderImage(gender) {
	let genderSrc = "";

	switch (gender) {
		case "n/a":
			genderSrc = `<span>${gender}</span>`;
			break;
		case "none":
			genderSrc = `<span>${gender}</span>`;
			break;
		case "hermaphrodite":
			genderSrc = `<img src="img/hermaphrodite.png"/>`;
			break;
		case "male":
			genderSrc = `<img src="img/male.png" />`;
			break;
		case "female":
			genderSrc = `<img src="img/female.png" />`;
			break;
	}
	return genderSrc;
}

async function getPeople(url) {
	const data = await getData(url);
	console.log(data);
	return data.characters;
}

async function getPlanets(url) {
	const data = await getData(url);
	const planets = data.results;
	const planetsName = [];
	planets.forEach((planet) => {
		planetsName.push(planet.name);
	});
	console.log(planetsName);
	return planetsName;
}
