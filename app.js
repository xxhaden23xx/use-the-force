var oReqPeople = new XMLHttpRequest();

oReqPeople.addEventListener('load',getPeopleData,);
oReqPeople.open('GET', 'https://swapi.co/api/people/1/')
oReqPeople.send();

function getPeopleData(){
    var data = JSON.parse(this.responseText)
    for(var i = 0; i<4; i++){
        var person = document.createElement('ul');
        person.innerHTML = data.results[i].name;
        peopleResult.appendChild(person);

        var height = document.createElement('li');
        height.innerHTML = data.results[i].height;
        peopleResult.appendChild(height);

        var mass = document.createElement('li');
        mass.innerHTML = data.results[i].mass;
        peopleResult.appendChild(mass);

        var birthyear = document.createElement('li');
        birthyear.innerHTML = data.results[i].birthyear;
        peopleResult.appendChild(birthyear);

        var gender = document.createElement('li');
        gender.innerHTML = data.results[i].gender;
        peopleResult.appendChild(gender);

    }
    data.results[0].name;
}

var oReqPlanet = new XMLHttpRequest();

oReqPlanet.addEventListener('load', getPlanetData);
oReqPlanet.open('GET', 'https://swapi.co/api/planets/');
oReqPlanet.send();

function getPlanetData(){
    var data = JSON.parse(this.responseText);
    for(var i=0; i<10; i++){
        var name = document.createElement('ul');
        name.innerHTML = data.results[i].name;
        planetsResult.appendChild(name);

        var rotation = document.createElement('li');
        rotation.innerHTML ="Rotation Period: " + data.results[i].rotation_period;
        planetsResult.appendChild(rotation);

        var orbital = document.createElement('li');
        orbital.innerHTML = "Orbital Period: " + data.results[i].orbital_period;
        planetsResult.appendChild(orbital);
        
        var diameter = document.createElement('li');
        diameter.innerHTML = "Diameter: " + data.results[i].diameter;
        planetsResult.appendChild(diameter);

        var climate = document.createElement('li');
        climate.innerHTML = "Climate: " + data.results[i].climate;
        planetsResult.appendChild(climate);

        var gravity = document.createElement('li');
        gravity.innerHTML = "Gravity: " + data.results[i].gravity;
        planetsResult.appendChild(gravity);

        var terrain = document.createElement('li');
        terrain.innerHTML = "Terrain: " + data.results[i].terrain;
        planetsResult.appendChild(terrain);

        var water = document.createElement('li');
        water.innerHTML = "Surface Water: " + data.results[i].surface_water;
        planetsResult.appendChild(water);

        var population = document.createElement('li');
        population.innerHTML = "Population: " + data.results[i].population;
        planetsResult.appendChild(population);

    }

var oReqFilm = new XMLHttpRequest();

oReqFilm.addEventListener('load', getFilmData);
oReqFilm.open('GET', 'https://swapi.co/api/films/');
oReqFilm.send();

function getFilmData(){
    var data = JSON.parse(this.responseText);
    for(var i=0; i<6; i++){
        var title = document.createElement('ul');
        title.innerHTML = data.results[i].title;
        filmsResult.appendChild(title);

        var Id = document.createElement('li');
        Id.innerHTML = "Episode ID: " + data.results[i].episode_id;
        filmsResult.appendChild(Id);

        var director = document.createElement('li');
        director.innerHTML = "Director: " + data.results[i].director;
        filmsResult.appendChild(director);

    }
}
}

