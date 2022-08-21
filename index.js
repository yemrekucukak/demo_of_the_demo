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

const text_ec = document.getElementById('text_ec'); const text_we = document.getElementById('text_we'); const text_lu = document.getElementById('text_lu'); const text_na = document.getElementById('text_na'); const text_hi = document.getElementById('text_hi'); const text_en = document.getElementById('text_en');
const text_ca = document.getElementById('text_ca'); const text_ad = document.getElementById('text_ad'); const text_cu = document.getElementById('text_cu'); const text_pe = document.getElementById('text_pe'); const text_cult = document.getElementById('text_cult');
const text_cold = document.getElementById('text_cold'); const text_warm = document.getElementById('text_warm'); const text_sunny = document.getElementById('text_sunny'); const text_rainy = document.getElementById('text_rainy');
const text_sin = document.getElementById('text_sin'); const text_respect = document.getElementById('text_respect');

let all_counters = [text_ec, text_we, text_lu, text_na, text_hi, text_en, text_ca, text_ad, text_ad, text_cu, text_pe, text_cult, text_cold, text_sunny, text_warm, text_rainy, text_sin, text_respect]

const economic_button = document.getElementById("ec")
let ec_click = 0;
economic_button.addEventListener('click', ()=>{ec_click += 1; for(let i=0; i<(Economic).length; i++){Economic[i].score += 1; }; 
if(ec_click==6){ec_click=0; for(let i=0; i<(Economic).length; i++){Economic[i].score -= 6; text_ec.style.visibility = 'hidden';}}
else{
text_ec.innerText = ec_click;
text_ec.style.visibility = 'visible';}
})

const wealthy_button = document.getElementById("we")
let we_click = 0;
wealthy_button.addEventListener('click', ()=>{we_click += 1; for(let i=0; i<(Wealthy).length; i++){Wealthy[i].score += 1;}; 
if(we_click==6){we_click=0; for(let i=0; i<(Wealthy).length; i++){Wealthy[i].score -= 6; text_we.style.visibility = 'hidden';}}
else{
text_we.innerText = we_click;
text_we.style.visibility = 'visible';}
})

const luxurious_button = document.getElementById("lu")
let lu_click = 0;
luxurious_button.addEventListener('click', ()=>{lu_click += 1; for(let i=0; i<(Luxurious).length; i++){Luxurious[i].score += 1;}
if(lu_click==6){lu_click=0; for(let i=0; i<(Luxurious).length; i++){Luxurious[i].score -= 6; text_lu.style.visibility = 'hidden';}}
else{
text_lu.innerText = lu_click;
text_lu.style.visibility = 'visible';}
})

const nature_button = document.getElementById("na")
let na_click = 0;
nature_button.addEventListener('click', ()=>{na_click += 1; for(let i=0; i<(Nature).length; i++){Nature[i].score += 1;}
if(na_click==6){na_click=0; for(let i=0; i<(Nature).length; i++){Nature[i].score -= 6; text_na.style.visibility = 'hidden';}}
else{
text_na.innerText = na_click;
text_na.style.visibility = 'visible';}
})

const historical_button = document.getElementById("hi")
let hi_click = 0;
historical_button.addEventListener('click', ()=>{hi_click += 1; for(let i=0; i<(Historical).length; i++){Historical[i].score += 1;}
if(hi_click==6){hi_click=0; for(let i=0; i<(Historical).length; i++){Historical[i].score -= 6; text_hi.style.visibility = 'hidden';}}
else{
text_hi.innerText = hi_click;
text_hi.style.visibility = 'visible';}
})

const entertainment_button = document.getElementById("en")
en_click = 0;
entertainment_button.addEventListener('click', ()=>{en_click += 1; for(let i=0; i<(Entertainment).length; i++){Entertainment[i].score += 1;}
if(en_click==6){en_click=0; for(let i=0; i<(Entertainment).length; i++){Entertainment[i].score -= 6; text_en.style.visibility = 'hidden';}}
else{
text_en.innerText = en_click;
text_en.style.visibility = 'visible';}
})

const calm_button = document.getElementById("ca")
let ca_click = 0;
calm_button.addEventListener('click', ()=>{ca_click += 1; for(let i=0; i<(Calm).length; i++){Calm[i].score += 1;}
if(ca_click==6){ca_click=0; for(let i=0; i<(Calm).length; i++){Calm[i].score -= 6; text_ca.style.visibility = 'hidden';}}
else{
text_ca.innerText = ca_click;
text_ca.style.visibility = 'visible';}
})

const adventurous_button = document.getElementById("ad")
let ad_click = 0; 
adventurous_button.addEventListener('click', ()=>{ad_click += 1; for(let i=0; i<(Adventerous).length; i++){Adventerous[i].score += 1;}
if(ad_click==6){ad_click=0; for(let i=0; i<(Adventerous).length; i++){Adventerous[i].score -= 6; text_ad.style.visibility = 'hidden';}}
else{
text_ad.innerText = ad_click;
text_ad.style.visibility = 'visible';}
})

const cuisine_button = document.getElementById("cu")
let cu_click = 0;
cuisine_button.addEventListener('click', ()=>{cu_click += 1;for(let i=0; i<(Cuisine).length; i++){Cuisine[i].score += 1;}
if(cu_click==6){cu_click=0; for(let i=0; i<(Cuisine).length; i++){Cuisine[i].score -= 6; text_cu.style.visibility = 'hidden';}}
else{
text_cu.innerText = cu_click;
text_cu.style.visibility = 'visible';}
})

const people_button = document.getElementById("pe")
let pe_click=0;
people_button.addEventListener('click', ()=>{pe_click += 1; for(let i=0; i<(People).length; i++){People[i].score += 1;}
if(pe_click==6){pe_click=0; for(let i=0; i<(People).length; i++){People[i].score -= 6; text_pe.style.visibility = 'hidden';}}
else{
text_pe.innerText = pe_click;
text_pe.style.visibility = 'visible';}
})

const culture_button = document.getElementById("cult")
let cult_click = 0;
culture_button.addEventListener('click', ()=>{cult_click += 1; for(let i=0; i<(Culture).length; i++){Culture[i].score += 1;}
if(cult_click==6){cult_click=0; for(let i=0; i<(Culture).length; i++){Culture[i].score -= 6; text_cult.style.visibility = 'hidden';}}
else{
text_cult.innerText = cult_click;
text_cult.style.visibility = 'visible';}
})

const cold_button = document.getElementById("cold")
let cold_click = 0;
cold_button.addEventListener('click', ()=>{cold_click += 1; for(let i=0; i<(Cold).length; i++){Cold[i].score += 1;}
if(cold_click==6){cold_click=0; for(let i=0; i<(Cold).length; i++){Cold[i].score -= 6; text_cold.style.visibility = 'hidden';}}
else{
text_cold.innerText = cold_click;
text_cold.style.visibility = 'visible';}
})

const warm_button = document.getElementById("warm")
let warm_click = 0;
warm_button.addEventListener('click', ()=>{warm_click += 1; for(let i=0; i<(Warm).length; i++){Warm[i].score += 1;}
if(warm_click==6){warm_click=0; for(let i=0; i<(Warm).length; i++){Warm[i].score -= 6; text_warm.style.visibility = 'hidden';}}
else{
text_warm.innerText = warm_click;
text_warm.style.visibility = 'visible';}
})

const sunny_button = document.getElementById("sunny")
let sunny_click = 0; 
sunny_button.addEventListener('click', ()=>{sunny_click += 1; for(let i=0; i<(Sunny).length; i++){Sunny[i].score += 1;}
if(sunny_click==6){sunny_click=0; for(let i=0; i<(Sunny).length; i++){Sunny[i].score -= 6; text_sunny.style.visibility = 'hidden';}}
else{
text_sunny.innerText = sunny_click;
text_sunny.style.visibility = 'visible';}
})

const rainy_button = document.getElementById("rainy")
let rainy_click = 0; 
rainy_button.addEventListener('click', ()=>{rainy_click += 1; for(let i=0; i<(Rainy).length; i++){Rainy[i].score += 1;}
if(rainy_click==6){rainy_click=0; for(let i=0; i<(Rainy).length; i++){Rainy[i].score -= 6; text_rainy.style.visibility = 'hidden';}}
else{
text_rainy.innerText = rainy_click;
text_rainy.style.visibility = 'visible';}
})

const sincere_button = document.getElementById("sin")
let sin_click = 0; 
sincere_button.addEventListener('click', ()=>{sin_click += 1; for(let i=0; i<(Sincere).length; i++){Sincere[i].score += 1;}
if(sin_click==6){sin_click=0; for(let i=0; i<(Sincere).length; i++){Sincere[i].score -= 6; text_sin.style.visibility = 'hidden';}}
else{
text_sin.innerText = sin_click;
text_sin.style.visibility = 'visible';}
})

const respectful_button = document.getElementById("respect")
let respect_click = 0; 
respectful_button.addEventListener('click', ()=>{respect_click += 1; for(let i=0; i<(Respectful).length; i++){Respectful[i].score += 1;}
if(respect_click==6){respect_click=0; for(let i=0; i<(Respectful).length; i++){Respectful[i].score -= 6; text_respect.style.visibility = 'hidden';}}
else{
text_respect.innerText = respect_click;
text_respect.style.visibility = 'visible';}
})

let resulting_array = []
let suggestions = []

let resulting_element = document.getElementById('result')
let suggestion_list = document.getElementById('ordered_list')
let each_element = ""

const submit_button = document.getElementById('submit')

submit_button.addEventListener('click', ()=>{

    if (submit_button.innerText == "Reset"){
        ec_click=0; we_click=0; lu_click=0; na_click=0; hi_click=0; en_click=0; ca_click=0; ad_click=0; cu_click=0; pe_click=0; cult_click=0; cold_click=0; warm_click=0; rainy_click=0; sunny_click=0; sin_click=0; respect_click=0;
       
        for (let p=0; p<all_countries.length; p++){
            all_countries[p].score = 0;}
        submit_button.innerText = "Submit"

        while(suggestion_list.hasChildNodes()){suggestion_list.removeChild(suggestion_list.firstChild)}
        each_element = "";
        resulting_element.style.visibility = "hidden";

        for (let p=0; p<all_counters.length; p++){
            all_counters[p].style.visibility = 'hidden';
            all_counters[p].innerText = "";
        }
    }

    else if (submit_button.innerText == "Submit"){
    resulting_array = all_countries.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0)) 
    suggestions = resulting_array.slice(0,5); 
    resulting_element.style.visibility = 'visible';
    for (let k=0; k< suggestions.length; k++){
        each_element = each_element + "<li>" + suggestions[k].name+ "</li>"
    }
    suggestion_list.innerHTML = each_element;
    submit_button.innerText = "Reset";
}



})


