const text = document.getElementById("text")

for(let i=1; i<=30; i++){
    for(let j=1; j<=30; j++){
        if(j<=i){
            text.innerHTML += i
        }
    }
    text.innerHTML += '<br>'
}