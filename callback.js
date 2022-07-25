function parent(arg, argCB) {
    console.log("I'm the parent");
    
    let arg1 = arg + 1;
    console.log(arg1);

    argCB(arg1);
}

function callback(x) {
    console.log("I'm the callback");

    console.log(10 * x);
}


parent(10 ,callback);

