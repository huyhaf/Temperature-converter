const inputElement = document.querySelector('#InputField');
const typeElement= document.querySelector('#Temptype');
const resultvalue=document.querySelector('#Result');
const convert=document.querySelector('#convert')

var inputvalue,typevalue;

inputElement.oninput= function(e){
    inputvalue=e.target.value;
}

typeElement.onchange = function(e){
    typevalue=e.target.value;
}

convert.addEventListener('click',(e) => {
    e.preventDefault();
    converttoC();
})

function converttoC(){
    if(typevalue==='F degree'){
        resultvalue.innerHTML = `${((Number.parseInt(inputvalue)-32)*(5/9)).toFixed(2)}`;
    }
    else if(typevalue==='K degree'){
        resultvalue.innerHTML = `${(Number.parseInt(inputvalue)-273.15).toFixed(2)}`;
    }
}


