const user = {"name":"name","age":12};
str = JSON.stringify(user);
console.log(JSON.parse(str));

class Animal{
    constructor(name, type, voice){
        this.name = name;
        this.type = type;
        this.voice = voice;
    }
    printStr(){
        console.log("name:"+this.name+" type:"+this.type+" voice:"+this.voice);
    }
}

cat = new Animal('kitty','mammal','meoww');
dog = new Animal('moti','mammal','bhoww');

cat.printStr();
