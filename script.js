//Composition from Keyboard 
document.body.addEventListener('keyup', (event)=>{ //Verifica qual tecla foi pressionada e adiciona um evento
    playSound(event.code.toLowerCase()); //Chama função playSound convertendo tecla pressionada para minúscula
    console.log(event.code.toLowerCase())
});

//Composition from input
document.querySelector('.composer button').addEventListener('click', () => { //Adc um event de click no botão "Tocar"
    let song = document.querySelector('#input').value; //Adc na var "song" o valor digitado no INPUT

    if (song !== ''){ //Verifica se a var "song" esta vazia
        let songArray = song.split('');//Transforma o valor digitado em song em uma ARRAY e manda para function playComposition
        playComposition(songArray);
    }
})
//Function responsible for audio
 function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`); //Seleciona o arquivo de audio da tecla digitada
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)//

    //Verifica se tem audio na tecla
    if(audioElement){ 
        audioElement.currentTime = 0; //Se tiver audio zera ele
        audioElement.play(); //Reproduza o audio novamente
    }

    //Reposta Gráfica
    if (keyElement){
        keyElement.classList.add('active');  //Adc o elemento do CSS
                setTimeout(()=>{ //Espera o tempo de milesegundos (LINHA 30) e apaga
            keyElement.classList.remove('active') //Remove o elemento vindo do CSS
        }, 150)
    }
}   

//Faz um looping e agente o tempo da cada uma das teclas que serão rodadas. 
function playComposition(songArray){
    let wait = 0;
    
    for(let songItem of songArray){ 
        setTimeout (()=> {
            playSound(`key${songItem}`);
        
        }, wait);
            wait += 250; 
    }
}