const plates = document.querySelectorAll(".plate");

const area = document.getElementById("selectedArea");

const bar = document.getElementById("barFill");

const percent = document.getElementById("percent");

let selected=[];

plates.forEach((plate)=>{

plate.addEventListener("click",()=>{

const text=plate.innerText;

if(plate.classList.contains("selected")){

plate.classList.remove("selected");

selected=selected.filter(item=>item!==text);

}else{

if(selected.length>=3){

alert("3枚までです🍣");

return;

}

plate.classList.add("selected");

selected.push(text);

}

update();

});

});

function update(){

area.innerHTML="";

if(selected.length==0){

area.innerHTML="<p class='empty'>まだ選択されていません</p>";

bar.style.width="0%";

percent.innerHTML="0%";

return;

}

selected.forEach(item=>{

const div=document.createElement("div");

div.className="selectedPlate";

div.innerHTML=item;

area.appendChild(div);

});

let match=selected.length*32;

if(match>95){

match=95;

}

bar.style.width=match+"%";

percent.innerHTML=match+"%";

}