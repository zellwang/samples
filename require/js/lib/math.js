define(function (){
    var add = function (x,y){     //每个函数都以变量的形式定义
        return x+y;
    };
    var minus = function (x,y){
        return x-y;
    };
    return {
        add: add,       // 第一个add表示对外暴露的方法名，第二个add表示该方法对应于第二行定义的add方法
        minus: minus
    };
});