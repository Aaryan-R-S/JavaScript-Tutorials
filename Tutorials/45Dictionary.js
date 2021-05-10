let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')
btn.addEventListener('click',get)
btn2.addEventListener('click', hide)

function get(){
    setTimeout(()=>{
        let str =''
        example.forEach((element)=>{
            str += ` <li class='vis'><div class="txt">${element.definition} | ${element.partOfSpeech} | ${element.synonyms}
            <br>e.g. : ${element.examples} </div></li><br>`
            document.getElementById('list').innerHTML= str
        })
    },200)
}

function hide(){    
    setTimeout(()=>{
    let str =''
    document.getElementById('list').innerHTML= str
   },200)

}

let search = document.getElementById('search');
search.addEventListener('input', function(){
    let inputval= search.value ;
    
    let vis =document.getElementsByClassName('vis')
    Array.from(vis).forEach(function(element){
        let txt = element.getElementsByClassName("txt")[0].innerText ;
        
        if(txt.includes(inputval)){
            element.style.display =''
        }
        else{
            element.style.display ='none'
        }
    })
})



const example = [
    {
        "definition": "a representative form or pattern",
        "partOfSpeech": "noun",
        "synonyms": [
            "model"
        ],
        "typeOf": [
            "representation",
            "internal representation",
            "mental representation"
        ],
        "hasTypes": [
            "prefiguration",
            "archetype",
            "epitome",
            "guide",
            "holotype",
            "image",
            "loadstar",
            "lodestar",
            "microcosm",
            "original",
            "paradigm",
            "pilot",
            "prototype",
            "template",
            "templet",
            "type specimen"
        ],
        "derivation": [
            "exemplify"
        ],
        "examples": [
            "I profited from his example"
        ]
    },
    {
        "definition": "something to be imitated",
        "partOfSpeech": "noun",
        "synonyms": [
            "exemplar",
            "good example",
            "model"
        ],
        "typeOf": [
            "ideal"
        ],
        "hasTypes": [
            "pacemaker",
            "pattern",
            "beauty",
            "prodigy",
            "beaut",
            "pacesetter"
        ],
        "derivation": [
            "exemplify",
            "exemplary"
        ]
    },
    {
        "definition": "an occurrence of something",
        "partOfSpeech": "noun",
        "synonyms": [
            "case",
            "instance"
        ],
        "typeOf": [
            "happening",
            "natural event",
            "occurrence",
            "occurrent"
        ],
        "hasTypes": [
            "clip",
            "mortification",
            "piece",
            "time",
            "humiliation",
            "bit"
        ],
        "derivation": [
            "exemplify"
        ],
        "examples": [
            "but there is always the famous example of the Smiths"
        ]
    },
    {
        "definition": "an item of information that is typical of a class or group",
        "partOfSpeech": "noun",
        "synonyms": [
            "illustration",
            "instance",
            "representative"
        ],
        "typeOf": [
            "information"
        ],
        "hasTypes": [
            "excuse",
            "apology",
            "specimen",
            "case in point",
            "sample",
            "exception",
            "quintessence",
            "precedent"
        ],
        "derivation": [
            "exemplify",
            "exemplary"
        ],
        "examples": [
            "this patient provides a typical example of the syndrome",
            "there is an example on page 10"
        ]
    },
    {
        "definition": "punishment intended as a warning to others",
        "partOfSpeech": "noun",
        "synonyms": [
            "deterrent example",
            "lesson",
            "object lesson"
        ],
        "typeOf": [
            "monition",
            "admonition",
            "word of advice",
            "warning"
        ],
        "derivation": [
            "exemplary"
        ],
        "examples": [
            "they decided to make an example of him"
        ]
    },
    {
        "definition": "a task performed or problem solved in order to develop skill or understanding",
        "partOfSpeech": "noun",
        "synonyms": [
            "exercise"
        ],
        "typeOf": [
            "lesson"
        ],
        "examples": [
            "you must work the examples at the end of each chapter in the textbook"
        ]
    }
] 

