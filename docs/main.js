function sound(){
    var web_audio = document.getElementById('audio')
    if(web_audio.paused){
        audio.play()
        playSound.innerHTML = 'Focus: On'
    }
    else{
        audio.pause()
        playSound.innerHTML = 'Focus: Off'
    }
}

let dynamicStyles = null;



function erase(){
    
    const txt = document.getElementById('txt')
    const sub = document.getElementById('sub')
    const fa = document.getElementById('fa')
    const end = document.getElementById('end')
  //  var web_audioplay = document.getElementById('audio_play')
    if(txt.value === '' || txt.value == null){
        txt.innerHTML = "Write it out instead of bottling up";
        txt.style.fontStyle = 'italic'
    }
    else{
        txt.value = "That's better. I'm proud of you :)"
      
      //  if(web_audioplay.paused){
       //     web_audioplay.play()
       // }
       // else{
         //   web_audioplay.pause()
          
        //}
    }
}

function toggle(){
    
    var blurred = document.getElementById('blurred');
    blurred.classList.toggle('active')   
    var popup = document.getElementById('popup');
    popup.classList.toggle('active'); 

    var web_audioplay = document.getElementById('audio_play')
    if(web_audioplay.paused){
        web_audioplay.play()
    }
    else{
        web_audioplay.pause()
      
    }

    
    

}

