class Eats {
    eat(){
        console.log("eat method called");
    }
}

class Plays {
    play(){
        console.log("play method called");
    }
}

class Codes {
    code(){
        console.log("code method called");
    }
}

class MixinClass implements Eats,Plays,Codes {
    constructor(){

    }
    eat:()=>{};
    play:()=>{};
    code:()=>{};
}