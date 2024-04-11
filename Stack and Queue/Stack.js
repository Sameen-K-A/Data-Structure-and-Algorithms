class stack{
    constructor(){
        this.values = [];
    }
    unshift(value){
        this.values.unshift(value)
    }
    shift(){
        this.values.shift()
    }
    push(value){
        this.values.push(value)
    }
    pop(){
        this.values.pop()
    }
    print(){
        if(this.values.length === 0){
            console.log("No values founded");
        } else{
            let result = '';
            for(let i=0 ; i<this.values.length ; i++){
                result += `${this.values[i]} `
            }
            console.log(result);
        }
    }
}

const stackArray = new stack();