function globalCounter(initialVal){
    let count = initialVal;
    this.increment = function() 
    {
        count+=1;
        console.log(count);
    }
    this.decrement = function() 
    {
        count-=1;
        console.log(count);
    }
}

var counter = new globalCounter(-1);
counter.increment();
counter.decrement();