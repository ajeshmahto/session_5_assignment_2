function ClassDecoratorWithoutParam(target:Function){
    console.log(" class decorator without param");
}

function ClassDecoratorWithParams(num:number,name:string){
    return function(target:Function){
        console.log("class decorator with params , " + "num = "+num, + " name="+name );
    }
}
@ClassDecoratorWithoutParam
class ClassDecoratorExampleWithNoParam{

}

@ClassDecoratorWithParams(1,"test")
class ClassDecoratorExampleWithParams{

}