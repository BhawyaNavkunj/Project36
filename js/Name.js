class Name{
    constructor(){

    }

    display(){
        var input = createInput("name your pet");
        var button = createButton("save");
        var greeting = createElement('h3');
        input.position(550,130);
        button.position(550,150);
        button.mousePressed(function(){
         input.hide();
         button.hide();
         var name = input.value();
         greeting.html(name);
         greeting.position(800,250);
        });
    }
}