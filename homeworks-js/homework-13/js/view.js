const btn = document.querySelector(".get-people");
const select = document.querySelector(".films-list");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const contentContainer = document.querySelector(".content");
const getPlanetsBtn = document.querySelector(".get-planets");

async function showPeople(url) {
	contentContainer.innerHTML = "";
	const peopleUrlList = await getPeople(url);

	peopleUrlList.forEach((link) => {
		getData(link).then((people) => {
			const peopleImage = imagesByNames[people.name];
			const humanCard = `
			<div class="people">
				<div class="human-card">
					<div class="human-photo">
						<img
							src="${peopleImage}"
								alt="${people.name}"
							/>
					</div>
					<div class="human-info">
						<p class="human-name">${people.name}</p>
						<p class="human-birth-year">Birth year: ${people.birth_year}</p>
						<p class="human-gander">${getGenderImage(people.gender)}</p>
					</div>
				</div>
			</div>
			`;
			contentContainer.innerHTML += humanCard;
		});
	});
}

btn.addEventListener("click", () => {
	showPeople(`https://swapi.dev/api/films/${select.value}`);
	next.classList.add("disabled");
	prev.classList.add("disabled");
});

function showPlanets(url) {
	contentContainer.innerHTML = "";
	getPlanets(url).then((planets) => {
		planets.forEach((name) => {
			planetBlock = `
        <div class="planet">
          <div class="planet-name">
            <span>${name}</span>
          </div>
        </div>`;
			contentContainer.innerHTML += planetBlock;
		});
	});
}

getPlanetsBtn.addEventListener("click", () => {
	showPlanets("https://swapi.dev/api/planets/");
	next.classList.remove("disabled");
	prev.classList.remove("disabled");
});

let page = 1;
next.addEventListener("click", () => {
	if (page < 6) {
		page += 1;
		showPlanets(`https://swapi.dev/api/planets/?page=${page}`);
	}
});

prev.addEventListener("click", () => {
	if (page > 1) {
		page -= 1;
		showPlanets(`https://swapi.dev/api/planets/?page=${page}`);
	}
});
