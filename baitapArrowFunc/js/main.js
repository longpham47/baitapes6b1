const colorList  = ["pallet","viridian","pewter","cerulead","vermillion","lavender"
,"saffron","fuschia","cinnabar"];

let button = () => {
    let content = "";
    colorList.map((color,index) => {
     if(index == 0){
         content += `
             <button class="color-button ${color} active" onclick="Colorchang('${color}')" ></button>
         `;
     }else{
         content += `
             <button class="color-button ${color}" onclick="Colorchang('${color}')" ></button>
         `;
     }
         
 
 
     })
     document.querySelector("#colorContainer").innerHTML = content;
 }
 button();
 


 let Colorchang = (color) => {
 
     let btn = document.querySelectorAll(".color-button");
     for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
     }
 
     document.querySelector(`.${color}`).className = `color-button ${color} active`;
    
     document.getElementById("house").className = `house ${color}`;
         
    
     
 }