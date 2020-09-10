const darkButton= document.getElementById('dark');
const lightButton= document.getElementById('light');
const solarButton= document.getElementById('solar');
const body = document.body;

//button events handlers
darkButton.onclick=()=>{
    body.classList.replace('light','dark');
    body.classList.replace('solar','dark');
    localStorage.setItem('theme','dark');
}
lightButton.onclick=()=>{
    body.classList.replace('dark','light');
    body.classList.replace('solar','light');
    localStorage.setItem('theme','light');
}
solarButton.onclick=()=>{
    if(body.classList.contains('solar')){
        body.classList.remove('solar');
        solarButton.style.cssText=`--bg-solar: var(--yellow);`

        solarButton.innerText='solarize';
        localStorage.removeItem('isSolar');
    }else{
        solarButton.style.cssText=`--bg-solar: white;`
    }
    body.classList.add('solar');
}

//local Storage
const them= localStorage.getItem('theme');
const isSolar= localStorage.getItem('isSolar');
if(them){
    body.classList.add(them);
    isSolar && body.classList.add('solar');
}