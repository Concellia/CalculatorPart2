class Calculator{
     constructor(array){
         this.array = [];
     }
    Add(){
        let result = 0;
    
        for(let i = 0; i<arguments.length; i++){
            result += parseFloat(arguments[i]);
            this.last = result;
            
        };
        return result;
    }

    Multiply(){
        let result = 1;
    
        for(let i = 0; i<arguments.length; i++){
            result *= parseFloat(arguments[i]);
       this.last = result;
        }
        return result;
    } 

     getLast(){
        return this.last;
    
    };
    setSlot(i){
        this.array.push(this.last);
        return this.array[i-1];
    } 
    
    getSlot(i){
         
        return this.array[i-1];
    }
};
let cal = new Calculator();
console.log(cal.Add(1,5));
console.log(cal.setSlot(1));

//console.log(cal.Add(9,5));

//console.log(cal.getLast());
//console.log(cal.Multiply(1,4));
//console.log(cal.getLast());
//console.log(cal.Add(cal.getLast(),4)); 
//console.log(cal.getSlot(1));
//console.log(cal.Add(cal.getSlot(2),2));
