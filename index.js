let germany = {name: "Germany", score: 0}; let england = {name: "England", score: 0}; let iceland = {name: "Iceland", score: 0}; let greenland = {name: "Greenland", score: 0}; 
let norway = {name: "Norway", score: 0}; let sweden = {name: "Sweden", score: 0}; let finland = {name: "Finland", score: 0}; let ireland = {name: "Ireland", score: 0}; let portugal = {name: "Portugal", score: 0}; let spain = {name: "Spain", score: 0};
let france = {name: "France", score: 0}; let andorra = {name: "Andorra", score: 0}; let belgium = {name: "Belgium", score: 0}; let switzerland = {name: "Switzerland", score: 0}; 
let italy = {name: "Italy", score: 0}; let romania = {name: "Romania", score: 0}; let serbia = {name: "Serbia", score: 0}; let bulgaria = {name: "Serbia", score: 0}; let hungary = {name: "Hungary", score: 0}; let austria = {name: "Austria", score: 0}; 
let poland = {name: "Poland", score: 0}; let estonia = {name: "Estonia", score: 0}; let moldova = {name: "Moldova", score: 0}; let greece = {name: "Greece", score: 0}; let turkiye = {name: "Turkiye", score: 0}; let netherlands = {name: "Netherlands", score: 0}; 
let egypt = {name: "Egypt", score: 0}; let tunisia = {name: "Tunisia", score: 0}; let canada = {name: "Canada", score: 0}; let usa = {name: "United States of America", score: 0}; let mexico = {name: "Mexico", score: 0}; 
let brazil = {name: "Brazil", score: 0}; let argentina = {name: "Argentina", score: 0}; let uae = {name: "United Arab Emirates", score: 0}; let china = {name: "China", score: 0}; 
let india = {name: "India", score: 0}; let korea = {name: "South Korea", score: 0}; let thailand = {name: "Thailand", score: 0}; let pakistan = {name: "Pakistan", score: 0}; 
let japan = {name: "Japan", score: 0}; let australia = {name: "Australia", score: 0}; let south_africa = {name: "South Africa", score: 0}; let nigeria = {name: "Nigeria", score: 0}; let indonesia = {name: "Indonesia", score: 0}; let kuweit = {name: "Kuweit", score: 0}; 

let all_countries = [germany, england, iceland, greenland, norway, sweden, finland, ireland, portugal, spain, france, andorra, belgium, switzerland, italy, romania, serbia, bulgaria, hungary, austria, poland, estonia, moldova, greece, turkiye, netherlands, egypt, tunisia, canada, usa, mexico, brazil, argentina, uae, china, korea, japan, thailand, india, pakistan, australia, south_africa, kuweit, indonesia, nigeria]

const varToString = obj => Object.keys(obj)[0]

Economic = [portugal, romania, serbia, bulgaria, hungary, estonia, greece, tunisia, turkiye, brazil, argentina, thailand, pakistan, nigeria, mexico, indonesia, moldova]
Wealthy = [germany, england, iceland, greenland, norway, sweden, finland, ireland, spain, france, belgium, italy, austria, usa, china, india, korea, japan, south_africa]
Luxurious = [kuweit, uae, australia, switzerland, andorra]
Nature = [iceland, greece, norway, sweden, finland, portugal, italy, switzerland, greece, turkiye, canada, usa, brazil, argentina, china, japan, australia, south_africa, pakistan, tunisia]
Historical = [germany, england, spain, france, switzerland, italy, serbia, bulgaria, hungary, austria, poland, moldova, greece, turkiye, egypt, australia]
Entertainment = [england, germany, ireland, spain, portugal, france, andorra, belgium, italy, usa, canada, uae, korea, thailand, japan, australia, south_africa, kuweit]
Calm = [iceland, greenland, norway, finland, andorra, switzerland, estonia, canada, belgium, austria, greece]
Adventerous = [ireland, portugal, romania, turkiye, tunisia, usa, mexico, brazil, argentina, china, india, thailand, pakistan, australia, south_africa, nigeria, indonesia]
Cuisine = [spain, portugal, france, belgium, italy, hungary, greece, turkiye, mexico, china, india, korea, thailand, japan]
People = [spain, portugal, italy, greece, turkiye, netherlands, tunisia, canada, mexico, korea, thailand, australia]
Culture = [germany, england, iceland, greenland, finland, france, italy, austria, greece, turkiye, netherlands, egypt, tunisia, canada, usa, mexico, brazil, china, india, japan, pakistan, kuweit, nigeria]
Cold = [iceland, greenland, norway, finland, switzerland, moldova, canada, sweden]
Warm = [germany, france, andorra, belgium, serbia, bulgaria, hungary, austria, poland, estonia, netherlands, usa, china, korea]
Sunny = [portugal, spain, italy, greece, turkiye, egypt ,tunisia, mexico, brazil, argentina, uae, india, thailand, pakistan, japan, australia, south_africa, nigeria, indonesia, kuweit]
Rainy = [england, germany, ireland, romania, austria, estonia, moldova, china, india, indonesia]
Sincere = [portugal, spain, italy ,romania, bulgaria, hungary, moldova, greece, turkiye, netherlands, tunisia, usa, mexico, brazil, argentina, india, thailand, pakistan, australia, south_africa, nigeria, indonesia, kuweit, uae]
Respectful = [germany, england, iceland, greenland, norway, finland, ireland, france, andorra, belgium, switzerland, serbia, austria, poland, estonia, canada, china, korea, japan]


const economic_button = document.getElementById("ec")
economic_button.addEventListener('click', ()=>{for(let i=0; i<(Economic).length; i++){Economic[i].score += 1; }})
const wealthy_button = document.getElementById("we")
wealthy_button.addEventListener('click', ()=>{for(let i=0; i<(Wealthy).length; i++){Wealthy[i].score += 1;}})
const luxurious_button = document.getElementById("lu")
luxurious_button.addEventListener('click', ()=>{for(let i=0; i<(Luxurious).length; i++){Luxurious[i].score += 1;}})

const nature_button = document.getElementById("na")
nature_button.addEventListener('click', ()=>{for(let i=0; i<(Nature).length; i++){Nature[i].score += 1;}})
const historical_button = document.getElementById("hi")
historical_button.addEventListener('click', ()=>{for(let i=0; i<(Historical).length; i++){Historical[i].score += 1;}})
const entertainment_button = document.getElementById("en")
entertainment_button.addEventListener('click', ()=>{for(let i=0; i<(Entertainment).length; i++){Entertainment[i].score += 1;}})

const calm_button = document.getElementById("ca")
calm_button.addEventListener('click', ()=>{for(let i=0; i<(Calm).length; i++){Calm[i].score += 1;}})
const adventurous_button = document.getElementById("ad")
adventurous_button.addEventListener('click', ()=>{for(let i=0; i<(Adventerous).length; i++){Adventerous[i].score += 1;}})

const cuisine_button = document.getElementById("cu")
cuisine_button.addEventListener('click', ()=>{for(let i=0; i<(Cuisine).length; i++){Cuisine[i].score += 1;}})
const people_button = document.getElementById("pe")
people_button.addEventListener('click', ()=>{for(let i=0; i<(People).length; i++){People[i].score += 1;}})
const culture_button = document.getElementById("cult")
culture_button.addEventListener('click', ()=>{for(let i=0; i<(Culture).length; i++){Culture[i].score += 1;}})

const cold_button = document.getElementById("cold")
cold_button.addEventListener('click', ()=>{for(let i=0; i<(Cold).length; i++){Cold[i].score += 1;}})
const warm_button = document.getElementById("warm")
warm_button.addEventListener('click', ()=>{for(let i=0; i<(Warm).length; i++){Warm[i].score += 1;}})
const sunny_button = document.getElementById("sunny")
sunny_button.addEventListener('click', ()=>{for(let i=0; i<(Sunny).length; i++){Sunny[i].score += 1;}})
const rainy_button = document.getElementById("rainy")
rainy_button.addEventListener('click', ()=>{for(let i=0; i<(Rainy).length; i++){Rainy[i].score += 1;}})

const sincere_button = document.getElementById("sin")
sincere_button.addEventListener('click', ()=>{for(let i=0; i<(Sincere).length; i++){Sincere[i].score += 1;}})
const respectful_button = document.getElementById("respect")
respectful_button.addEventListener('click', ()=>{for(let i=0; i<(Respectful).length; i++){Respectful[i].score += 1;}})

let resulting_array = []
let suggestions = []

const resulting_element = document.getElementById('result')
const suggestion_list = document.getElementById('ordered_list')
let each_element = ""

const submit_button = document.getElementById('submit')
submit_button.addEventListener('click', ()=>{
    resulting_array = all_countries.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0)) 
    suggestions = resulting_array.slice(0,10); 
    resulting_element.style.visibility = 'visible';
    for (let k=0; k< suggestions.length; k++){
        each_element = each_element + "<li>" + suggestions[k].name+ "</li>"
    }
    suggestion_list.innerHTML = each_element

})


