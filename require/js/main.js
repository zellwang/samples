require.config({
    paths: {
        "jquery": "lib/jquery-2.1.4.min",       // js文件与路径的对应
        "math": "lib/math",
    }
});

require(['jquery', 'math'],                 // 依赖的js文件
    function ($, math){                     // 这两个js文件将以对象的形式被使用，对象名分别是$和math
        $("div").html("magic number:" 
                    + math.magicNumber      // math.js中定义的magicNumber变量
                    + ";  1+1=" 
                    + math.add(1,1));       // math.js中定义的add方法
    }
);