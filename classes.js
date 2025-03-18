class Passenger{
    constructor(Id,Name){
        this.Id=Id;
        this.Name=Name;
    }
}

let pax1 = new Passenger(1001,'Charly');
let pax2 = new Passenger(1002,'Tom');
console.log(pax1.Id);
console.log(pax1.Name);
console.log(pax2.Id);
console.log(pax2.Name);