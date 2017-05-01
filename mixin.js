var Eats = (function () {
    function Eats() {
    }
    Eats.prototype.eat = function () {
        console.log("eat method called");
    };
    return Eats;
}());
var Plays = (function () {
    function Plays() {
    }
    Plays.prototype.play = function () {
        console.log("play method called");
    };
    return Plays;
}());
var Codes = (function () {
    function Codes() {
    }
    Codes.prototype.code = function () {
        console.log("code method called");
    };
    return Codes;
}());
var MixinClass = (function () {
    function MixinClass() {
    }
    return MixinClass;
}());
