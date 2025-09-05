hello(goodBye);
function hello(callback){
    setTimeout(function (){
        console.log("(after 2 seconds) Hello!!");
        callback();
    },2000);
}
function goodBye(){
    console.log("GoodBye");
}