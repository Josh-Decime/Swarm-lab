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
        let peopleIMG = filteredPeople.map(people => people.name)
        console.log('😁', peopleIMG)

        locationElm.innerText = peopleIMG.join(' ')
    })
}
drawPeople()