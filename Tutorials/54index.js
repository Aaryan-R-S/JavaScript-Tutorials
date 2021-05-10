const cvs = [
    {
        name: 'Bol Rai',
        age: 54,
        city: 'Raipur',
        lang: 'JavaScript',
        frame: 'Jquery',
        pic: 'https://randomuser.me/api/portraits/men/71.jpg'
    },
    {
        name: 'Lol Rai',
        age: 34,
        city: 'Delhi',
        lang: 'JavaScript',
        frame: 'Angular',
        pic: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Kol Rai',
        age: 25,
        city: 'Indore',
        lang: 'Python',
        frame: 'Django',
        pic: 'https://randomuser.me/api/portraits/men/72.jpg'
    },
    {
        name: 'Tol Rai',
        age: 24,
        city: 'Assam',
        lang: 'Python',
        frame: 'Flask',
        pic: 'https://randomuser.me/api/portraits/men/74.jpg'
    },
    {
        name: 'Pol Rai',
        age: 35,
        city: 'Mumbai',
        lang: 'JavaScript',
        frame: 'Go',
        pic: 'https://randomuser.me/api/portraits/men/73.jpg'
    },
    {
        name: 'Nol Rai',
        age: 56,
        city: 'Goa',
        lang: 'JavaScript',
        frame: false,
        pic: 'https://randomuser.me/api/portraits/men/78.jpg'
    }
]

function cvItr(prfl) {
    let i = 0;
    return {
        next: function () {
            return i < prfl.length ?
                { value: prfl[i++], done: false } :
                { done: true }
        }
    }
}

const candidates = cvItr(cvs)
nextCV()

const next = document.getElementById('next')
next.addEventListener('click', nextCV)

function nextCV() {
    const currentCandidate = candidates.next().value

    let image = document.getElementById('image')
    let profile = document.getElementById('profile')

    if(currentCandidate != undefined){
        image.innerHTML = `<img src='${currentCandidate.pic}'></img>`
        profile.innerHTML = `<ul class="list-group">
                                <li class="list-group-item">Name: ${currentCandidate.name}</li>
                                <li class="list-group-item">${currentCandidate.age} years old</li>
                                <li class="list-group-item">Works on ${currentCandidate.lang}</li>
                                <li class="list-group-item">Uses ${currentCandidate.frame}</li>
                                <li class="list-group-item">Lives in${currentCandidate.city}</li>
                            </ul>`
    }
    else{
        alert('You have visited through all the CV Profiles!')
        location.reload()
    }

}


