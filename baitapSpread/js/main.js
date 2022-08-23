let hover = () => {
    let hv = "Hover Me!"
    let content = "";
    let hv2 = [...hv];
    hv2.map((zoom) => { 
        content +=`
            <span>${zoom}</span>
        `
    });
   document.querySelector(".heading").innerHTML = content;

}
hover();