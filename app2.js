function keyboardEntry(e){
    if(isNaN(e.key))return;
    currentScreen.textContent +=e.key
    }
  
    // window.addEventListener("keydown", keyboardEntry)