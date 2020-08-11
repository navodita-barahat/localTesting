class Base{
    constructor(){}
    loopTest(){
        for (let i=0; i<5; i++){
            console.log('test');
        }
    }
}

let baseObj = new Base();
baseObj.loopTest();