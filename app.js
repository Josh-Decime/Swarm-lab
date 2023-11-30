console.log('the sun has set')

const locations = [
    'estateID', 'churchID', 'hospitalID', 'cryptID', 
]

const people = [{
        name: 'Cathrine',
        picture: 'Cathrine.png',
        currentPlace: 'estateID',
    },
    {
        name: 'Hector',
        picture: 'Hector.png',
        currentPlace: 'estateID'
    },
    {
        name: 'Hyde',
        picture: 'Hyde.png',
        currentPlace: 'estateID'
    },
    {
        name: 'Jenny',
        picture: 'Jenny.png',
        currentPlace: 'churchID'
    },
    {
        name: 'Jim',
        picture: 'Jim.png',
        currentPlace: 'churchID',
    },
    {
        name: 'Julie',
        picture: 'Julie.png',
        currentPlace: 'churchID',
    },
    {
        name: 'Keith',
        picture: 'Keith.png',
        currentPlace: 'hospitalID',
    },
    {
        name: 'Margret',
        picture: 'Margret.png',
        currentPlace: 'hospitalID',
    },
    {
        name: 'Suzy',
        picture: 'Suzy.png',
        currentPlace: 'hospitalID',
    },
    {
        name: 'Tommy',
        picture: 'Tommy.png',
        currentPlace: 'cryptID',
    },
    {
        name: 'VanGogh',
        picture: 'VanGogh.png',
        currentPlace: 'cryptID',
    },
    {
        name: 'Victoria',
        picture: 'Victoria.png',
        currentPlace: 'cryptID',
    }
]

function drawPeople() {
    locations.forEach(location =>{
        console.log(location)
        let filteredPeople = people.filter(people => people.currentPlace == location)
        console.log('📦', filteredPeople)
        const locationElm = document.getElementById(location)
        console.log('🗺️', locationElm)
        let peopleIMG = filteredPeople.map(people => people.picture)
        console.log('😁', peopleIMG)

        let template = ''
        peopleIMG.forEach(image=>{
            // debugger
            template += `<img class="people-img" src="/${image}" alt="${image.slice(0,(image.length-4))}">` 
            locationElm.innerHTML =  template
        })

        // locationElm.innerText = peopleIMG.join(' ')
    })
}


function movePeople() {
    people.forEach(person=> {
        if (person.peopleIMG != '👻') { //👻 is a placeholder for my ghost that isn't written yet
            let newPlace = locations[Math.floor(Math.random()*locations.length)]
            console.log(newPlace)
            person.currentPlace = newPlace
     
        } 
    })
    drawPeople()
}
// NOTE this move people is outside of a function 
movePeople()

function attackButton(locationClicked){
    console.log('🔍', locationClicked)
    let peopleInRoom = people.filter(person => person.currentPlace == locationClicked)
    console.log(peopleInRoom)
    peopleInRoom.picture = ''
}

function reaping() {
    let reapedPlace = victimsLocation
}