const body = document.getElementById('bud');
const background_image_list = ["url('background_images/bgi6.jpg')", "url('background_images/bgi5.jpg')", "url('background_images/bgi7.jpg')", "url('background_images/bgi4.jpg')", "url('background_images/bgi3.jpg')", "url('background_images/bgi2.jpg')", "url('background_images/bgi1.jpg')"]
image_index = Math.floor(Math.random()*6);
body.style.backgroundImage = background_image_list[image_index];

let Manchester = {name:'Manchester', country:'United Kingdom', score:0, cost:150, people:'respectful', climate:'oceanic', attraction:['Culture', 'Architecture'], activities:['cycling', 'sightseeing'], safety:'safe', preference:['Culture', 'Pubs', 'Museums', 'Libraries' ], photo:"url(city_images/Manchester.jpg)"};
let London = {name:'London', country:'United Kingdom', score:0, cost:240, people:'respectful', climate:'continental', attraction:['Culture', 'Architecture'], activities:['sightseeing', 'shopping', 'cruise'], safety:'medium', preference:['Culture', 'Museums', 'Pubs', 'Art', 'Museums' ], photo:"url(city_images/London.jpg)" };
let Edinburgh = {name:'Edinburgh', country:'United Kingdom', score:0, cost:180, people:'respectful', climate:'oceanic', attraction:['Culture', 'Architecture', 'Special Events'], activities:['sightseeing', 'hiking', 'cycling'], safety:'medium', preference:['Culture', 'Museums', 'Oceans','Art','Festivals', 'Museums', 'Libraries', 'Parks'], photo:"url(city_images/Edinburgh.jpg)" };
let Cardiff  = {name:'Cardiff', country:'United Kingdom', score:0, cost:130, people:'respectful', climate:'oceanic', attraction:['Culture', 'Architecture'], activities:['sightseeing', 'rafting'], safety:'medium', preference:['Culture', 'Museums', 'Oceans', 'Parks'], photo:"url(city_images/Cardiff.jpg)" };
let Birmingham = {name:'Birmingham', country:'United Kingdom', score:0, cost:110, people:'respectful', climate:'oceanic', attraction:[], activities:['chilling'], safety:'safe', preference:['Pubs', 'Parks'], photo:"url(city_images/Birmingham.jpg)" };
let Glasgow = {name:'Glasgow', country:'United Kingdom', score:0, cost:160, people:'respectful', climate:'oceanic', attraction:['Culture', 'Architecture'], activities:['sightseeing', 'hiking', 'cycling', 'cruise'], safety:'safe', preference:['Culture', 'Museums', 'Art','Pubs', 'Festivals' ], photo:"url(city_images/Glasgow.jpg)" };
let Liverpool = {name:'Liverpool', country:'United Kingdom', score:0, cost:160, people:'sincere', climate:'oceanic', attraction:['Culture', 'Architecture'], activities:['sightseeing', 'shopping'], safety:'safe', preference:['Culture', 'Art', 'Museums', 'Ocean', 'Pubs'] , photo:"url(city_images/Liverpool.jpg)"};
let Oxford = {name:'Oxford', country:'United Kingdom', score:0, cost:160, people:'respectful', climate:'continental', attraction:['Culture', 'Architecture'], activities:['sightseeing', 'kayaking', 'chilling'], safety:'safe', preference:['Culture', 'Museums', 'Art', 'Libraries'], photo:"url(city_images/Oxford.jpg)" };
let Bristol = {name:'Bristol', country:'United Kingdom', score:0, cost:160, people:'respectful', climate:'oceanic', attraction:['Architecture'], activities:['sightseeing', 'cycling', 'cruise', 'ballooning'], safety:'dangerous', preference:['Art', 'Festivals'] , photo:"url(city_images/Bristol.jpg)"};
let Cambridge = {name:'Cambridge', country:'United Kingdom', score:0, cost:190, people:'respectful', climate:'continental', attraction:['Culture', 'Architecture', 'Cuisine'], activities:['sightseeing','cruise', 'cycling'], safety:'medium', preference:['Libraries', 'Museums'], photo:"url(city_images/Cambridge.jpg)" };
let Brighton = {name:'Brighton', country:'United Kingdom', score:0, cost:150, people:'respectful', climate:'oceanic', attraction:['Cuisine', 'Architecture'], activities:['sightseeing', 'cycling'], safety:'safe', preference:['Oceans', 'Festivals', 'Parks'] , photo:"url(city_images/Brighton.jpg)"};

let Berlin = {name:'Berlin', country:'Germany', score:0, cost:140, people:'respectful', climate:'continental', attraction:['Culture', 'Architecture'], activities:['sightseeing', 'shopping', 'cycling'], safety:'safe', preference:['Culture', 'Museums', 'Parks'] , photo:"url(city_images/Berlin.jpg)"};
let Munich = {name:'Munich', country:'Germany', score:0, cost:190, people:'respectful', climate:'oceanic', attraction:['Culture', 'Architecture'], activities:['sightseeing', 'cycling', 'shopping'], safety:'safe', preference:['Culture', 'Parks', 'Art'] , photo:"url(city_images/Munich.jpg)"};
let Frankfurt = {name:'Frankfurt', country:'Germany', score:0, cost:120, people:'respectful', climate:'oceanic', attraction:['Culture', 'Cuisine'], activities:['sightseeing', 'shopping'], safety:'safe', preference:['Museums', 'Parks', 'Forests'], photo:"url(city_images/Frankfurt.jpg)" };
let Hamburg = {name:'Hamburg', country:'Germany', score:0, cost:140, people:'respectful', climate:'oceanic', attraction:['Culture', 'Cuisine', 'Special'], activities:['sightseeing', 'shopping', 'kayaking'], safety:'safe', preference:['Oceans', 'Festivals'], photo:"url(city_images/Hamburg.jpg)" };
let Dresden = {name:'Dresden', country:'Germany', score:0, cost:120, people:'respectful', climate:'oceanic', attraction:['Culture', 'Architecture'], activities:['sightseeing', 'kayaking'], safety:'safe', preference:['Culture', 'Parks'], photo:"url(city_images/Dresden.jpg)" };
let Leipzig = {name:'Leipzig', country:'Germany', score:0, cost:130, people:'respectful', climate:'oceanic', attraction:['Culture'], activities:['sightseeing', 'kayaking', 'shopping'], safety:'safe', preference:['Culture', 'Museums'], photo:"url(city_images/Leipzig.jpg)" };
let Heidelberg = {name:'Heidelberg', country:'Germany', score:0, cost:150, people:'respectful', climate:'oceanic', attraction:['Culture', 'Natural'], activities:['sightseeing', 'chilling', 'kayaking'], safety:'safe', preference:['Culture', 'Forests'], photo:"url(city_images/Heidelberg.jpg)" };
let Stuttgart = {name:'Stuttgart', country:'Germany', score:0, cost:130, people:'respectful', climate:'continental', attraction:['Culture'], activities:['sightseeing'], safety:'safe', preference:['Culture', 'Museums', 'Art', 'Libraries'], photo:"url(city_images/Stuttgart.jpg)" };
let Koln = {name:'Köln', country:'Germany', score:0, cost:130, people:'respectful', climate:'oceanic', attraction:['Architecture'], activities:['sightseeing', 'shopping'], safety:'safe', preference:['Culture', 'Spiritual places'], photo:"url(city_images/Koln.jpg)" };

let Rome = {name:'Rome', country:'Italy', score:0, cost:140, people:'sincere', climate:'mediterranean', attraction:['Culture', 'Cuisine', 'Special', 'Architecture'], activities:['sightseeing', 'shopping', 'cycling' ], safety:'safe', preference:['Museums', 'Libraries', 'Ancient', 'Art', 'Pubs', 'Oceans', 'Festivals'], photo:"url(city_images/Rome.jpg)" };
let Venice = {name:'Venice', country:'Italy', score:0, cost:150, people:'sincere', climate:'oceanic', attraction:['Culture', 'Cuisine', 'Special', 'Architecture'], activities:['sightseeing', 'shopping', 'cycling'], safety:'safe', preference:['Museums', 'Libraries', 'Art', 'Oceans', 'Festivals'] , photo:"url(city_images/Venice.jpg)"};
let Florence = {name:'Florence', country:'Italy', score:0, cost:130, people:'sincere', climate:'mediterranean', attraction:['Culture', 'Cuisine', 'Special', 'Natural', 'Architecture'], activities:['sightseeing', 'shopping', 'cycling'], safety:'safe', preference:['Museums', 'Art', 'Parks', ] , photo:"url(city_images/Florence.jpg)"};
let Milano = {name:'Milano', country:'Italy', score:0, cost:130, people:'sincere', climate:'continental', attraction:['Culture', 'Cuisine', 'Special', 'Natural', 'Architecture'], activities:['sightseeing', 'shopping', 'cycling'], safety:'safe', preference:['Museums', 'Art'], photo:"url(city_images/Milano.jpg)" };
let Napoli = {name:'Napoli', country:'Italy', score:0, cost:120, people:'sincere', climate:'mediterranean', attraction:['Culture', 'Cuisine', 'Special', 'Natural', 'Architecture'], activities:['sightseeing', 'shopping', 'cycling'], safety:'safe', preference:['Museums', 'Oceans', 'Mountains', 'Ancient', 'Parks'], photo:"url(city_images/Napoli.jpg)" };

let Tokyo = {name:'Tokyo', country:'Japan', score:0, cost:150, people:'respectful', climate:'monsoon', attraction:['Culture', 'Cuisine', 'Special', 'Natural', 'Architecture'], activities:['sightseeing', 'shopping', 'cycling'], safety:'safe', preference:['Oceans', 'Parks', 'Museums', 'Ancient', 'Pubs', 'Art', 'Festivals', 'Theme'] , photo:"url(city_images/Tokyo.jpg)"};
let Osaka = {name:'Osaka', country:'Japan', score:0, cost:70, people:'respectful', climate:'continental', attraction:['Culture', 'Cuisine', 'Special', 'Natural', 'Architecture'], activities:['sightseeing', 'shopping', 'cycling'], safety:'safe', preference:['Oceans', 'Museums', 'Art', 'Theme', 'Pubs', 'Festivals', 'Spiritual' ] , photo:"url(city_images/Osaka.jpg)"};
let Okinawa = {name:'Okinawa', country:'Japan', score:0, cost:160, people:'respectful', climate:'monsoon', attraction:['Culture', 'Cuisine', 'Special', 'Natural', 'Architecture'], activities:['sightseeing', 'shopping', 'cycling', 'scuba', 'surfing', 'staycation', 'cruise'], safety:'safe', preference:['Oceans', 'Mountains','Pubs' ] , photo:"url(city_images/Okinawa.jpg)"};
let Kyoto = {name:'Kyoto', country:'Japan', score:0, cost:150, people:'respectful', climate:'dry', attraction:['Culture', 'Cuisine', 'Special', 'Natural', 'Architecture'], activities:['sightseeing', 'shopping', 'cycling', 'hiking', 'staycation'], safety:'safe', preference:['Oceans', 'Parks', 'Forests', 'Spiritual', 'Museums', 'Mountains', 'Art' ], photo:"url(city_images/Kyoto.jpg)" };
let Nara= {name:'Nara', country:'Japan', score:0, cost:130, people:'respectful', climate:'monsoon', attraction:['Culture', 'Cuisine', 'Special', 'Natural', 'Architecture'], activities:['sightseeing', 'shopping', 'cycling'], safety:'safe', preference:['Parks', 'Museums', 'Mountains', 'Spiritual'], photo:"url(city_images/Nara.jpg)" };
let Sapporo= {name:'Sapporo', country:'Japan', score:0, cost:110, people:'respectful', climate:'arctic', attraction:['Culture', 'Cuisine', 'Special', 'Natural', 'Architecture'], activities:['sightseeing', 'shopping', 'cycling', 'skiing', 'hiking', 'climbing'], safety:'safe', preference:['Mountains', 'Forests', 'Parks', 'Festivals'], photo:"url(city_images/Sapporo.jpg)" };



let all_destinations = [Manchester, London, Edinburgh, Cardiff, Birmingham, Glasgow, Liverpool, Oxford, Bristol, Cambridge, Brighton, 
Berlin, Munich, Frankfurt, Hamburg, Dresden, Leipzig, Heidelberg, Stuttgart, Koln,
Rome, Venice, Florence, Milano, Napoli,
Tokyo, Osaka, Okinawa, Kyoto, Nara, Sapporo]

let temp_array = all_destinations;

//BUDGET SECTION
const sliderreader = document.getElementById('myRange');
const money_display = document.getElementById('slidernumber');
sliderreader.oninput = function(){money_display.innerText = sliderreader.value + '$';
temp_array = [];
for(let i=0; i<all_destinations.length; i++){
    if(sliderreader.value>= all_destinations[i].cost){
        temp_array.push(all_destinations[i])
}}}
//BUDGET SECTION ENDS HERE

//ATTRACTIONS SECTION
const cuisine = document.getElementById('cu'); let cuisine_counter = document.getElementById('text_cu'); let cuisine_number=0;
const culture = document.getElementById('cult'); let culture_counter = document.getElementById('text_cult'); let culture_number=0;
const special_events = document.getElementById('sp'); let special_events_counter = document.getElementById('text_sp'); let special_events_number=0;
const natural_sig = document.getElementById('na'); let natural_sig_counter = document.getElementById('text_na'); let natural_sig_number=0;
const arch_sig = document.getElementById('as'); let arch_sig_counter = document.getElementById('text_as'); let arch_sig_number=0;

cuisine.addEventListener('click', ()=>{if(cuisine_counter.innerText<5){cuisine_number+=1; cuisine_counter.innerText = cuisine_number; cuisine_counter.style.visibility='visible'; 
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].attraction.includes('Cuisine')){all_destinations[i].score += 1;} } }
else{cuisine_counter.innerText = '0'; cuisine_counter.style.visibility='hidden'; cuisine_number=0;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].attraction.includes('Cuisine')){all_destinations[i].score -= 5;} }} })

culture.addEventListener('click', ()=>{if(culture_counter.innerText<5){culture_number+=1; culture_counter.innerText = culture_number; culture_counter.style.visibility='visible';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].attraction.includes('Culture')){all_destinations[i].score += 1;} }}
else{culture_counter.innerText = '0'; culture_counter.style.visibility='hidden'; culture_number=0;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].attraction.includes('Culture')){all_destinations[i].score -= 5;} }} })

special_events.addEventListener('click', ()=>{if(special_events_counter.innerText<5){special_events_number+=1; special_events_counter.innerText = special_events_number; special_events_counter.style.visibility='visible';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].attraction.includes('Special')){all_destinations[i].score += 1;} }}
else{special_events_counter.innerText = '0'; special_events_counter.style.visibility='hidden'; special_events_number=0;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].attraction.includes('Special')){all_destinations[i].score -= 5;} }} })

natural_sig.addEventListener('click', ()=>{if(natural_sig_counter.innerText<5){natural_sig_number+=1; natural_sig_counter.innerText = natural_sig_number; natural_sig_counter.style.visibility='visible';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].attraction.includes('Natural')){all_destinations[i].score += 1;} }}
else{natural_sig_counter.innerText = '0'; natural_sig_counter.style.visibility='hidden'; natural_sig_number=0;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].attraction.includes('Natural')){all_destinations[i].score -= 5;} }} })

arch_sig.addEventListener('click', ()=>{if(arch_sig_counter.innerText<5){arch_sig_number+=1; arch_sig_counter.innerText = arch_sig_number; arch_sig_counter.style.visibility='visible';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].attraction.includes('Architecture')){all_destinations[i].score += 1;} }}
else{arch_sig_counter.innerText = '0'; arch_sig_counter.style.visibility='hidden'; arch_sig_number=0;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].attraction.includes('Architecture')){all_destinations[i].score -= 5;} }} })
//ATTRACTIONS ENDS HERE


//TRAVEL PREFERENCE SECTION
const forests = document.getElementById('forestsbutton'); let is_forest=false; const oceans = document.getElementById('oceansbutton'); let is_oceans=false; 
const parks = document.getElementById('parksbutton'); let is_parks=false; 
const mountains = document.getElementById('mountainsbutton'); let is_mountains=false; const wilderness = document.getElementById('wildernessbutton'); let is_wilderness=false; 
const ancient = document.getElementById('ancientbutton'); let is_ancient=false; const museums = document.getElementById('museumsbutton'); let is_museums=false;
const spiritual = document.getElementById('spiritualbutton'); let is_spiritual=false; const art = document.getElementById('artbutton'); let is_art=false;
const libraries = document.getElementById('librariesbutton'); let is_libraries=false; 
const festivals = document.getElementById('festivalsbutton'); let is_festivals=false; const pubss = document.getElementById('pubsbutton'); let is_pubs=false;
const conventions = document.getElementById('conventionsbutton'); let is_conventions=false; const theme = document.getElementById('themebutton'); let is_theme=false;
const seafood = document.getElementById('seafoodbutton'); let is_seafood=false; const signature = document.getElementById('signaturebutton');let is_signature=false;
const beverages = document.getElementById('beveragesbutton'); let is_beverage=false; const dessert= document.getElementById('dessertsbutton'); let is_dessert=false;
const street = document.getElementById('streetsbutton'); let is_street=false; const exotic = document.getElementById('exoticbutton'); let is_exotic = false;

function forestfunction(){if(is_forest == true){is_forest=false; forests.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Forests')){all_destinations[i].score += 3;} }} 
else if(is_forest == false){is_forest=true; forests.style.borderStyle='solid'; forests.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Forests')){all_destinations[i].score -= 3;} }}; forests.style.borderWidth='0.198vh';}

function oceanfunction(){if(is_oceans == true){is_oceans=false; oceans.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Oceans')){all_destinations[i].score += 3;} }} 
else if(is_oceans == false){is_oceans=true; oceans.style.borderStyle='solid'; oceans.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Oceans')){all_destinations[i].score -= 3;} }}; oceans.style.borderWidth='0.198vh';}

function mountainfunction(){if(is_mountains == true){is_mountains=false; mountains.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Mountains')){all_destinations[i].score += 3;} }} 
else if(is_mountains == false){is_mountains=true; mountains.style.borderStyle='solid'; mountains.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Mountains')){all_destinations[i].score -= 3;} }}; mountains.style.borderWidth='0.198vh';}

function wildernessfunction(){if(is_wilderness == true){is_wilderness=false; wilderness.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Wilderness')){all_destinations[i].score += 3;} }} 
else if(is_wilderness == false){is_wilderness=true; wilderness.style.borderStyle='solid'; wilderness.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Wilderness')){all_destinations[i].score -= 3;} }}; wilderness.style.borderWidth='0.198vh';}

function parksfunction(){if(is_parks == true){is_parks=false; parks.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Parks')){all_destinations[i].score += 3;} }} 
else if(is_parks == false){is_parks=true; parks.style.borderStyle='solid'; parks.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Parks')){all_destinations[i].score -= 3;} }}; parks.style.borderWidth='0.198vh';}

function ancientfunction(){if(is_ancient == true){is_ancient=false; ancient.style.borderColor='rgba(0,0,0,0)'; 
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Ancient')){all_destinations[i].score += 3;} }} 
else if(is_ancient == false){is_ancient=true; ancient.style.borderStyle='solid'; ancient.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Ancient')){all_destinations[i].score -= 3;} }}; ancient.style.borderWidth='0.198vh';}

function museumfunction(){if(is_museums == true){is_museums=false; museums.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Museums')){all_destinations[i].score += 3;} }}
else if(is_museums == false){is_museums=true; museums.style.borderStyle='solid'; museums.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Museums')){all_destinations[i].score -= 3;} }}; museums.style.borderWidth='0.198vh';}

function artfunction(){if(is_art == true){is_art=false; art.style.borderColor='rgba(0,0,0,0)'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Art')){all_destinations[i].score += 3;} }} 
else if(is_art == false){is_art=true; art.style.borderStyle='solid'; art.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Art')){all_destinations[i].score -= 3;} }}; art.style.borderWidth='0.198vh';}

function spirituelfunction(){if(is_spiritual == true){is_spiritual=false; spiritual.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Spiritual')){all_destinations[i].score += 3;} }} 
else if(is_spiritual == false){is_spiritual=true; spiritual.style.borderStyle='solid'; spiritual.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Spiritual')){all_destinations[i].score -= 3;} }}; spiritual.style.borderWidth='0.198vh';}

function librariesfunction(){if(is_libraries == true){is_libraries=false; libraries.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Libraries')){all_destinations[i].score += 3;} }} 
else if(is_libraries == false){is_libraries=true; libraries.style.borderStyle='solid'; libraries.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Libraries')){all_destinations[i].score -= 3;} }}; libraries.style.borderWidth='0.198vh';}

function festivalfunction(){if(is_festivals == true){is_festivals=false; festivals.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Festivals')){all_destinations[i].score += 3;} }} 
else if(is_festivals == false){is_festivals=true; festivals.style.borderStyle='solid'; festivals.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Festivals')){all_destinations[i].score -= 3;} }}; festivals.style.borderWidth='0.198vh';}

function pubfunction(){if(is_pubs == true){is_pubs=false; pubss.style.borderColor='rgba(0,0,0,0)'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Pubs')){all_destinations[i].score += 3;} }} 
else if(is_pubs == false){is_pubs=true; pubss.style.borderStyle='solid'; pubss.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Pubs')){all_destinations[i].score -= 3;} }}; pubss.style.borderWidth='0.198vh';}

function conventionfunction(){if(is_conventions == true){is_conventions=false; conventions.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Conventions')){all_destinations[i].score += 3;} }} 
else if(is_conventions == false){is_conventions=true; conventions.style.borderStyle='solid'; conventions.style.borderColor='snow';for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Conventions')){all_destinations[i].score -= 3;} }}; conventions.style.borderWidth='0.198vh';}

function themefunction(){if(is_theme == true){is_theme=false; theme.style.borderColor='rgba(0,0,0,0)'; 
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Theme')){all_destinations[i].score += 3;} }} 
else if(is_theme == false){is_theme=true; theme.style.borderStyle='solid'; theme.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Theme')){all_destinations[i].score -= 3;} }}; theme.style.borderWidth='0.198vh';}

function seafoodfunction(){if(is_seafood == true){is_seafood=false; seafood.style.borderColor='rgba(0,0,0,0)'; 
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Seafood')){all_destinations[i].score += 3;} }} 
else if(is_seafood == false){is_seafood=true; seafood.style.borderStyle='solid'; seafood.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Seafood')){all_destinations[i].score -= 3;} }}; seafood.style.borderWidth='0.198vh';}

function dessertfunction(){if(is_dessert == true){is_dessert=false; dessert.style.borderColor='rgba(0,0,0,0)'; 
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Dessert')){all_destinations[i].score += 3;} }} 
else if(is_dessert == false){is_dessert=true; dessert.style.borderStyle='solid'; dessert.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Dessert')){all_destinations[i].score -= 3;} }}; dessert.style.borderWidth='0.198vh';}

function signaturefunction(){if(is_signature == true){is_signature=false; signature.style.borderColor='rgba(0,0,0,0)'; 
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Signature')){all_destinations[i].score += 3;} }} 
else if(is_signature == false){is_signature=true; signature.style.borderStyle='solid'; signature.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Signature')){all_destinations[i].score -= 3;} }}; signature.style.borderWidth='0.198vh';}

function beveragesfunction(){if(is_beverage == true){is_beverage=false; beverages.style.borderColor='rgba(0,0,0,0)'; 
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Beverage')){all_destinations[i].score += 3;} }} 
else if(is_beverage == false){is_beverage=true; beverages.style.borderStyle='solid'; beverages.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Beverage')){all_destinations[i].score -= 3;} }}; beverages.style.borderWidth='0.198vh';}

function streetfunction(){if(is_street == true){is_street=false; street.style.borderColor='rgba(0,0,0,0)'; 
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Street')){all_destinations[i].score += 3;} }} 
else if(is_street == false){is_street=true; street.style.borderStyle='solid'; street.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Street')){all_destinations[i].score -= 3;} }}; street.style.borderWidth='0.198vh';}

function exoticfunction(){if(is_exotic == true){is_exotic=false; exotic.style.borderColor='rgba(0,0,0,0)'; 
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Exotic')){all_destinations[i].score += 3;} }} 
else if(is_exotic == false){is_exotic=true; exotic.style.borderStyle='solid'; exotic.style.borderColor='snow'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].preference.includes('Exotic')){all_destinations[i].score -= 3;} }}; exotic.style.borderWidth='0.198vh';}

const natureelements = document.getElementById('natureelements');
const naturetitle = document.getElementById('nature');
let is_nature_clicked = false;
function natureclick(){
    if (natureelements.style.display === "block") {natureelements.style.display = "none";  naturetitle.style.backgroundColor = 'rgba(0,0,0,0.0)'; is_nature_clicked=false;} 
    else {natureelements.style.display = "block"; natureelements.style.backgroundColor = 'rgba(0,0,0,0.6)'; naturetitle.style.backgroundColor = 'rgba(0,0,0,0.6)'; is_nature_clicked=true;}
}
naturetitle.addEventListener('mouseenter', ()=>{naturetitle.style.backgroundColor = 'rgba(0,0,0,0.6)';})
naturetitle.addEventListener('mouseleave', ()=>{if(is_nature_clicked == false){naturetitle.style.backgroundColor = 'rgba(0,0,0,0.0)';}})

const culturetitle = document.getElementById('culture');
const cultureelements = document.getElementById('cultureelements');
let is_culture_clicked = false;
function cultureclick(){
    if (cultureelements.style.display === "block") {cultureelements.style.display = "none"; culturetitle.style.backgroundColor = 'rgba(0,0,0,0.0)'; is_culture_clicked=false;} 
    else {cultureelements.style.display = "block"; culturetitle.style.backgroundColor = 'rgba(0,0,0,0.6)'; cultureelements.style.backgroundColor = 'rgba(0,0,0,0.6)'; is_culture_clicked=true;}
}
culturetitle.addEventListener('mouseenter', ()=>{culturetitle.style.backgroundColor='rgba(0,0,0,0.6)';})
culturetitle.addEventListener('mouseleave', ()=>{if(is_culture_clicked == false){culturetitle.style.backgroundColor = 'rgba(0,0,0,0.0)';}})

const entertainmenttitle = document.getElementById('entertainment');
const entertainmentelements = document.getElementById('entertainmentelements');
let is_entertainment_clicked = false
function entertainmentclick(){
    if (entertainmentelements.style.display === "block") {entertainmentelements.style.display = "none"; entertainmenttitle.style.backgroundColor = 'rgba(0,0,0,0.0)'; is_entertainment_clicked=false;} 
    else {entertainmentelements.style.display = "block"; entertainmenttitle.style.backgroundColor = 'rgba(0,0,0,0.6)'; entertainmentelements.style.backgroundColor = 'rgba(0,0,0,0.6)'; is_entertainment_clicked=true;}
}
entertainmenttitle.addEventListener('mouseenter', ()=>{entertainmenttitle.style.backgroundColor='rgba(0,0,0,0.6)';})
entertainmenttitle.addEventListener('mouseleave', ()=>{if(is_entertainment_clicked == false){entertainmenttitle.style.backgroundColor = 'rgba(0,0,0,0.0)';}})

const cuisinetitle = document.getElementById('cuisine');
const cuisineelements = document.getElementById('cuisineelements');
let is_cuisine_clicked = false
function cuisineclick(){
    if (cuisineelements.style.display === "block") {cuisineelements.style.display = "none"; cuisinetitle.style.backgroundColor = 'rgba(0,0,0,0.0)'; is_cuisine_clicked=false;} 
    else {cuisineelements.style.display = "block"; cuisinetitle.style.backgroundColor = 'rgba(0,0,0,0.6)'; cuisineelements.style.backgroundColor = 'rgba(0,0,0,0.6)'; is_cuisine_clicked=true;}
}
cuisinetitle.addEventListener('mouseenter', ()=>{cuisinetitle.style.backgroundColor='rgba(0,0,0,0.6)';})
cuisinetitle.addEventListener('mouseleave', ()=>{if(is_cuisine_clicked == false){cuisinetitle.style.backgroundColor = 'rgba(0,0,0,0.0)';}})


let all_preferences = [forests, parks, oceans, mountains, wilderness, ancient, museums, spiritual, art, libraries, festivals, pubss, conventions, theme, seafood, street, beverages, dessert, signature, exotic];
let all_preferences_bool = [is_forest, is_parks, is_oceans, is_mountains, is_wilderness, is_ancient, is_museums, is_spiritual, is_art, is_libraries, is_festivals, is_pubs, is_conventions, is_theme, is_seafood, is_street, is_beverage, is_dessert, is_signature, is_exotic];
let all_preference_titles = [natureelements, cultureelements, entertainmentelements, cuisineelements];
let all_preference_titles_bool = [is_nature_clicked, is_culture_clicked, is_entertainment_clicked, is_cuisine_clicked];
let real_titles = [naturetitle, culturetitle, entertainmenttitle, cuisinetitle];
//TRAVEL PREFERENCE ENDS HERE


//PEOPLE SECTION
const sincere = document.getElementById('sin'); let sincere_counter = document.getElementById('text_sin'); let sincere_number=0;
const respect = document.getElementById('respect'); let respect_counter = document.getElementById('text_respect'); let respect_number=0;

sincere.addEventListener('click', ()=>{if(sincere_counter.innerText<5){sincere_number+=1; sincere_counter.innerText = sincere_number; sincere_counter.style.visibility='visible';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].people == 'sincere'){all_destinations[i].score += 1;} }}
else{sincere_counter.innerText = '0'; sincere_counter.style.visibility='hidden'; sincere_number=0;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].people == 'sincere'){all_destinations[i].score -= 5;} }} })

respect.addEventListener('click', ()=>{if(respect_counter.innerText<5){respect_number+=1; respect_counter.innerText = respect_number; respect_counter.style.visibility='visible';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].people == 'respectful'){all_destinations[i].score += 1;} }}
else{respect_counter.innerText = '0'; respect_counter.style.visibility='hidden'; respect_number=0;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].people == 'respectful'){all_destinations[i].score -= 5;} }} })
//PEOPLE ENDS HERE

//SAFETY SECTION
const safetysliderreader = document.getElementById('newRange');
const safety_display = document.getElementById('newslidernumber');
let new_temp_array = all_destinations;
safetysliderreader.oninput = function(){new_temp_array = [];

    if(safetysliderreader.value == 5){safety_display.innerText = 'Totally Safe';
        for(let i=0; i<all_destinations.length; i++){
            if(all_destinations[i].safety == 'safe'){
                new_temp_array.push(all_destinations[i])}
}}

    if(safetysliderreader.value == 4){safety_display.innerText = 'Mostly Safe';
        for(let i=0; i<all_destinations.length; i++){
            if(all_destinations[i].safety == 'safe'){
                new_temp_array.push(all_destinations[i])}
}}

    if(safetysliderreader.value == 3){safety_display.innerText = 'Usually Safe';
        for(let i=0; i<all_destinations.length; i++){
            if(all_destinations[i].safety == 'safe' || all_destinations[i].safety == 'medium'){
                new_temp_array.push(all_destinations[i])}
}}
    if(safetysliderreader.value == 2){safety_display.innerText = 'Travelers Should Be Cautious';
        for(let i=0; i<all_destinations.length; i++){
            if(all_destinations[i].safety == 'safe' || all_destinations[i].safety == 'medium'){
                new_temp_array.push(all_destinations[i])}
}}
    if(safetysliderreader.value == 1){safety_display.innerText = 'Travelers Must Be Extremely Cautious';
        for(let i=0; i<all_destinations.length; i++){
                new_temp_array.push(all_destinations[i])
}}
}
//SAFETY ENDS HERE

let deez;
//ACTIVITIES SECTION 
const hiking = document.getElementById('hiking'); let is_hiking = false;
hiking.addEventListener('click', ()=>{deez=hiking; if(is_hiking ==false){deez.style.borderColor='snow'; is_hiking=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('hiking')){all_destinations[i].score += 2;} }} 
else if(is_hiking==true){is_hiking=false; deez.style.borderColor='rgba(0,0,0,0)'; for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('hiking')){all_destinations[i].score -= 2;} }}})

const climbing = document.getElementById('climbing'); let is_climbing = false;
climbing.addEventListener('click', ()=>{deez=climbing; if(is_climbing ==false){deez.style.borderColor='snow'; is_climbing=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('climbing')){all_destinations[i].score += 2;} }} 
else if(is_climbing==true){is_climbing=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('climbing')){all_destinations[i].score -= 2;} }}})

const parachuting = document.getElementById('parachuting'); let is_parachuting = false;
parachuting.addEventListener('click', ()=>{deez=parachuting; if(is_parachuting ==false){deez.style.borderColor='snow'; is_parachuting=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('parachuting')){all_destinations[i].score += 2;} }} 
else if(is_parachuting==true){is_parachuting=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('parachuting')){all_destinations[i].score -= 2;} }}})

const scuba = document.getElementById('scuba'); let is_scuba = false;
scuba.addEventListener('click', ()=>{deez=scuba; if(is_scuba ==false){deez.style.borderColor='snow'; is_scuba=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('scuba')){all_destinations[i].score += 2;} }} 
else if(is_scuba==true){is_scuba=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('scuba')){all_destinations[i].score -= 2;} }}})

const surfing = document.getElementById('surfing'); let is_surfing = false;
surfing.addEventListener('click', ()=>{deez=surfing; if(is_surfing ==false){deez.style.borderColor='snow'; is_surfing=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('surfing')){all_destinations[i].score += 2;} }} 
else if(is_surfing==true){is_surfing=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('surfing')){all_destinations[i].score -= 2;} }}})

const balloon = document.getElementById('balloon'); let is_balloon = false;
balloon.addEventListener('click', ()=>{deez=balloon; if(is_balloon ==false){deez.style.borderColor='snow'; is_balloon=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('ballooning')){all_destinations[i].score -= 2;} }} 
else if(is_balloon==true){is_balloon=false; deez.style.borderColor='rgba(0,0,0,0)'; 
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('ballooning')){all_destinations[i].score -= 2;} }}})

const horse = document.getElementById('horse'); let is_horse = false;
horse.addEventListener('click', ()=>{deez=horse; if(is_horse ==false){deez.style.borderColor='snow'; is_horse=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('horse')){all_destinations[i].score += 2;} }} 
else if(is_horse==true){is_horse=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('horse')){all_destinations[i].score -= 2;} }}})

const skiing = document.getElementById('skiing'); let is_skiing = false;
skiing.addEventListener('click', ()=>{deez=skiing; if(is_skiing ==false){deez.style.borderColor='snow'; is_skiing=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('skiing')){all_destinations[i].score += 2;} }} 
else if(is_skiing==true){is_skiing=false; deez.style.borderColor='rgba(0,0,0,0)'; 
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('skiing')){all_destinations[i].score -= 2;} }}})

const camping = document.getElementById('camping'); let is_camping = false;
camping.addEventListener('click', ()=>{deez=camping; if(is_camping ==false){deez.style.borderColor='snow'; is_camping=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('camping')){all_destinations[i].score += 2;} }} 
else if(is_camping==true){is_camping=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('camping')){all_destinations[i].score -= 2;} }}})

const star = document.getElementById('star'); let is_star = false;
star.addEventListener('click', ()=>{deez=star; if(is_star ==false){deez.style.borderColor='snow'; is_star=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('star')){all_destinations[i].score += 2;} }} 
else if(is_star==true){is_star=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('star')){all_destinations[i].score -= 2;} }}})

const cycling = document.getElementById('cycling'); let is_cycling = false;
cycling.addEventListener('click', ()=>{deez=cycling; if(is_cycling ==false){deez.style.borderColor='snow'; is_cycling=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('cycling')){all_destinations[i].score += 2;} }} 
else if(is_cycling==true){is_cycling=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('cycling')){all_destinations[i].score -= 2;} }}})

const bird = document.getElementById('bird'); let is_bird = false;
bird.addEventListener('click', ()=>{deez=bird; if(is_bird ==false){deez.style.borderColor='snow'; is_bird=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('bird')){all_destinations[i].score += 2;} }} 
else if(is_bird==true){is_bird=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('bird')){all_destinations[i].score -= 2;} }}})

const staycation = document.getElementById('staycation'); let is_staycation = false;
staycation.addEventListener('click', ()=>{deez=staycation; if(is_staycation ==false){deez.style.borderColor='snow'; is_staycation=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('staycation')){all_destinations[i].score += 2;} }} 
else if(is_staycation==true){is_staycation=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('staycation')){all_destinations[i].score -= 2;} }}})

const sightseeing = document.getElementById('sightseeing'); let is_sightseeing = false;
sightseeing.addEventListener('click', ()=>{deez=sightseeing; if(is_sightseeing ==false){deez.style.borderColor='snow'; is_sightseeing=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('sightseeing')){all_destinations[i].score += 2;} }} 
else if(is_sightseeing==true){is_sightseeing=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('sightseeing')){all_destinations[i].score -= 2;} }}})

const chilling = document.getElementById('chilling'); let is_chilling = false;
chilling.addEventListener('click', ()=>{deez=chilling; if(is_chilling ==false){deez.style.borderColor='snow'; is_chilling=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('chilling')){all_destinations[i].score += 2;} }} 
else if(is_chilling==true){is_chilling=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('chilling')){all_destinations[i].score -= 2;} }}})

const rafting = document.getElementById('rafting'); let is_rafting = false;
rafting.addEventListener('click', ()=>{deez=rafting; if(is_rafting ==false){deez.style.borderColor='snow'; is_rafting=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('rafting')){all_destinations[i].score += 2;} }} 
else if(is_rafting==true){is_rafting=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('rafting')){all_destinations[i].score -= 2;} }}})

const kayaking = document.getElementById('kayaking'); let is_kayaking = false;
kayaking.addEventListener('click', ()=>{deez=kayaking; if(is_kayaking ==false){deez.style.borderColor='snow'; is_kayaking=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('kayaking')){all_destinations[i].score += 2;} }} 
else if(is_kayaking==true){is_kayaking=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('kayaking')){all_destinations[i].score -= 2;} }}})

const shopping = document.getElementById('shopping'); let is_shopping = false;
shopping.addEventListener('click', ()=>{deez=shopping; if(is_shopping ==false){deez.style.borderColor='snow'; is_shopping=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('shopping')){all_destinations[i].score += 2;} }} 
else if(is_shopping==true){is_shopping=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('shopping')){all_destinations[i].score -= 2;} }}})

const cruise = document.getElementById('cruise'); let is_cruise = false;
cruise.addEventListener('click', ()=>{deez=cruise; if(is_cruise ==false){deez.style.borderColor='snow'; is_cruise=true;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('cruise')){all_destinations[i].score += 2;} }} 
else if(is_cruise==true){is_cruise=false; deez.style.borderColor='rgba(0,0,0,0)';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].activities.includes('cruise')){all_destinations[i].score -= 2;} }}})

let all_activities = [hiking, climbing, parachuting, scuba, surfing, balloon, horse, skiing, camping, star, cycling, bird, staycation, sightseeing, chilling, rafting, shopping, kayaking, cruise];
let all_activities_bool = [is_hiking, is_climbing, is_parachuting, is_scuba, is_scuba, is_surfing, is_balloon, is_horse, is_skiing, is_camping, is_star, is_cycling, is_bird, is_staycation, is_sightseeing, is_chilling, is_rafting, is_shopping, is_kayaking, is_cruise];
//ACTIVITIES ENDS HERE


//CLIMATE SECTION
const equa = document.getElementById('equa'); let equa_counter = document.getElementById('text_equa'); let equa_number=0;
const arctic = document.getElementById('arctic'); let arctic_counter = document.getElementById('text_arctic'); let arctic_number=0;
const monsoon = document.getElementById('monsoon'); let monsoon_counter = document.getElementById('text_monsoon'); let monsoon_number=0;
const dry = document.getElementById('dry'); let dry_counter = document.getElementById('text_dry'); let dry_number=0;
const mediter = document.getElementById('mediter'); let mediter_counter = document.getElementById('text_mediter'); let mediter_number=0;
const maritime = document.getElementById('maritime'); let maritime_counter = document.getElementById('text_maritime'); let maritime_number=0;
const continental = document.getElementById('continental'); let continental_counter = document.getElementById('text_continental'); let continental_number=0;

equa.addEventListener('click', ()=>{if(equa_counter.innerText<5){equa_number+=1; equa_counter.innerText = equa_number; equa_counter.style.visibility='visible';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].climate == 'equa'){all_destinations[i].score += 1;} }}
else{equa_counter.innerText = '0'; equa_counter.style.visibility='hidden'; equa_number=0;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].climate == 'equa'){all_destinations[i].score -= 5;} }} })

arctic.addEventListener('click', ()=>{if(arctic_counter.innerText<5){arctic_number+=1; arctic_counter.innerText = arctic_number; arctic_counter.style.visibility='visible';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].climate == 'arctic'){all_destinations[i].score += 1;} }}
else{arctic_counter.innerText = '0'; arctic_counter.style.visibility='hidden'; arctic_number=0;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].climate == 'arctic'){all_destinations[i].score -= 5;} }} })

monsoon.addEventListener('click', ()=>{if(monsoon_counter.innerText<5){monsoon_number+=1; monsoon_counter.innerText = monsoon_number; monsoon_counter.style.visibility='visible';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].climate == 'monsoon'){all_destinations[i].score += 1;} }}
else{monsoon_counter.innerText = '0'; monsoon_counter.style.visibility='hidden'; monsoon_number=0;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].climate == 'monsoon'){all_destinations[i].score -= 5;} }} })

dry.addEventListener('click', ()=>{if(dry_counter.innerText<5){dry_number+=1; dry_counter.innerText = dry_number; dry_counter.style.visibility='visible';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].climate == 'dry'){all_destinations[i].score += 1;} }}
else{dry_counter.innerText = '0'; dry_counter.style.visibility='hidden'; dry_number=0;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].climate == 'dry'){all_destinations[i].score -= 5;} }} })

mediter.addEventListener('click', ()=>{if(mediter_counter.innerText<5){mediter_number+=1; mediter_counter.innerText = mediter_number; mediter_counter.style.visibility='visible';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].climate == 'mediterranen'){all_destinations[i].score += 1;} }}
else{mediter_counter.innerText = '0'; mediter_counter.style.visibility='hidden'; mediter_number=0;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].climate == 'mediterranen'){all_destinations[i].score -= 5;} }} })

maritime.addEventListener('click', ()=>{if(maritime_counter.innerText<5){maritime_number+=1; maritime_counter.innerText = maritime_number; maritime_counter.style.visibility='visible';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].climate == 'oceanic'){all_destinations[i].score += 1;} }}
else{maritime_counter.innerText = '0'; maritime_counter.style.visibility='hidden'; maritime_number=0;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].climate == 'oceanic'){all_destinations[i].score -= 5;} }} })

continental.addEventListener('click', ()=>{if(continental_counter.innerText<5){continental_number+=1; continental_counter.innerText = continental_number; continental_counter.style.visibility='visible';
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].climate == 'continental'){all_destinations[i].score += 1;} }}
else{continental_counter.innerText = '0'; continental_counter.style.visibility='hidden'; continental_number=0;
for(let i=0; i<all_destinations.length; i++){if(all_destinations[i].climate == 'continental'){all_destinations[i].score -= 5;} }} })

//CLIMATE ENDS HERE
let all_counters = [cuisine_counter, culture_counter, special_events_counter, natural_sig_counter, arch_sig_counter, sincere_counter, respect_counter, equa_counter, arctic_counter, monsoon_counter, dry_counter, mediter_counter, maritime_counter, continental_counter];
let resulting_array = [];
let suggestions = [];

const first_suggestion = document.getElementById('firstsuggestion');
const second_suggestion = document.getElementById('secondsuggestion');
const third_suggestion = document.getElementById('thirdsuggestion');
const fourth_suggestion = document.getElementById('fourthsuggestion');
const fifth_suggestion = document.getElementById('fifthsuggestion');
const sixth_suggestion = document.getElementById('sixthsuggestion');
const seventh_suggestion = document.getElementById('seventhsuggestion');
const eigth_suggestion = document.getElementById('eigthsuggestion');
const nine_suggestion = document.getElementById('ninethsuggestion');
let each_suggestion = [first_suggestion, second_suggestion, third_suggestion, fourth_suggestion, fifth_suggestion, sixth_suggestion, seventh_suggestion, eigth_suggestion, nine_suggestion];

const ultimate_result = document.getElementById('ultimateresult');
const main_part = document.getElementById('main');

const loading_screen = document.getElementById('loading_screen');
const loading_text = document.getElementById('loading_message1');
const submit_button = document.getElementById('submit');

submit_button.addEventListener('click', ()=>{
    main_part.style.display = 'none';
    ultimate_result.style.display = 'flex';
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
     });
    resulting_array = temp_array.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0)) 
    if(resulting_array.length >=9){
    suggestions = resulting_array.slice(0,9);}else{suggestions=resulting_array;}
    for (let k=0; k< suggestions.length; k++){
        each_suggestion[k].innerText = suggestions[k].name + ", " + suggestions[k].country;
        each_suggestion[k].style.backgroundImage = suggestions[k].photo; 
        each_suggestion[k].style.borderColor = 'black';
    }
    loading_text.innerText = "We're preparing a suggestion list";
    loading_screen.style.display = 'block';
    
    if(window.innerWidth < 1200){setTimeout(()=>{document.getElementById('bud').style.backgroundColor = 'black'; loading_screen.style.display='none'; }, 9600);}
    else{setTimeout(()=>{loading_screen.style.display='none'; }, 7200);}
    image_index = Math.floor(Math.random()*6);
        body.style.backgroundImage = background_image_list[image_index];
})


const reset_button = document.getElementById('reset');
reset_button.addEventListener('click', ()=>{
    ultimate_result.style.display = 'none';
    loading_text.innerText = "Resetting the system";
    main_part.style.display = 'flex';
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
     });

    loading_screen.style.display = 'block';

    money_display.innerText = '240$'; sliderreader.value = 240;
    safetysliderreader.value = 3; safety_display.innerText='Usually Safe';

        cuisine_number=0; culture_number=0; special_events_number=0; natural_sig_number=0; arch_sig_number=0; sincere_number=0; respect_number=0; equa_number=0; arctic_number=0; monsoon_number=0; dry_number=0; mediter_number=0;maritime_number=0; continental_number=0;
        for (let p=0; p<all_destinations.length; p++){
            all_destinations[p].score = 0;}

        for(let h=0; h<all_activities.length; h++){all_activities[h].style.borderColor ='rgba(0,0,0,0)'; all_activities_bool[h]=false;}
        for(let y=0; y<all_preferences.length; y++){all_preferences[y].style.borderColor = 'rgba(0,0,0,0)'; all_preference_titles_bool[y]=false;}
        for(let t=0; t<all_preference_titles.length; t++){all_preference_titles[t].style.display='none'; real_titles[t].style.backgroundColor='rgba(0,0,0,0)'; all_preference_titles_bool[t]=false;}

        for (let p=0; p<all_counters.length; p++){
            all_counters[p].style.visibility = 'hidden';
            all_counters[p].innerText = "0";
        }
        image_index = Math.floor(Math.random()*6);
        body.style.backgroundImage = background_image_list[image_index];
        setTimeout(()=>{loading_screen.style.display='none'; }, 1800);

})

let climate_read_less = document.getElementById('climate_read_less');
let all_climate_explanations = [];
all_climate_explanations = document.getElementsByClassName('climate_advanced_explanation');
let climate_more_button = document.getElementById('climate_more_info');
const mother_climate_container = document.getElementById('climate_advanced_explanation_container');
const all_climate_buttons = document.getElementById('all_climate_buttons');

climate_more_button.addEventListener('click', ()=>{
    
    if(window.innerWidth < 1200){
        for(let p=0; p<all_climate_explanations.length; p++){all_climate_explanations[p].style.visibility = 'visible';}
        mother_climate_container.style.visibility = 'visible';
        all_climate_buttons.style.visibility = 'hidden';
        climate_more_button.style.visibility = 'hidden';
        climate_read_less.style.visibility = 'visible';
    }

    else{
    for(let p=0; p<all_climate_explanations.length; p++){
        all_climate_explanations[p].style.visibility = 'visible';
    }
    climate_more_button.style.visibility = 'hidden';
    climate_read_less.style.visibility = 'visible';
}
})

climate_read_less.addEventListener('click', ()=>{

    if(window.innerWidth < 1200){
        for(let p=0; p<all_climate_explanations.length; p++){all_climate_explanations[p].style.visibility = 'hidden';}
        mother_climate_container.style.visibility = 'hidden';
        all_climate_buttons.style.visibility = 'visible';
        climate_more_button.style.visibility = 'visible';
        climate_read_less.style.visibility = 'hidden';
    }

    else{for(let p=0; p<all_climate_explanations.length; p++){ all_climate_explanations[p].style.visibility = 'hidden';}
    climate_more_button.style.visibility='visible';
    climate_read_less.style.visibility='hidden';
}
})



let attraction_read_less = document.getElementById('attraction_read_less');
let all_attraction_explanations = [];
all_attraction_explanations = document.getElementsByClassName('attractions_advanced_explanation');
let attraction_more_button = document.getElementById('attraction_more_info');
const mother_container = document.getElementById('attractions_advanced_explanation_container');
const attraction_button_container = document.getElementById('attraction_buttons');

attraction_more_button.addEventListener('click', ()=>{
    
    if(window.innerWidth < 1200){
    mother_container.style.visibility = 'visible';
    attraction_more_button.style.visibility = 'hidden';
    attraction_read_less.style.visibility = 'visible';
    attraction_button_container.style.visibility = 'hidden';
}
else{
    for(let p=0; p<all_attraction_explanations.length; p++){
        all_attraction_explanations[p].style.visibility = 'visible';}
    attraction_more_button.style.visibility = 'hidden';
    attraction_read_less.style.visibility = 'visible';
}

})

attraction_read_less.addEventListener('click', ()=>{

    if(window.innerWidth < 1200){
    mother_container.style.visibility = 'hidden';
    attraction_more_button.style.visibility = 'visible';
    attraction_read_less.style.visibility = 'hidden';
    attraction_button_container.style.visibility = 'visible';
    }

    else{for(let p=0; p<all_attraction_explanations.length; p++){
        all_attraction_explanations[p].style.visibility = 'hidden';
    }
    attraction_more_button.style.visibility='visible';
    attraction_read_less.style.visibility='hidden';
}
})


const menu_button = document.getElementById('menu_button');
const nav_bar = document.getElementById('nav_bar');

menu_button.addEventListener('click', ()=>{
    if(nav_bar.style.display == 'none'){
        nav_bar.style.display = 'flex';
        menu_button.style.borderColor='snow';
        }
    else{nav_bar.style.display = 'none'; menu_button.style.borderColor='black';}
})
