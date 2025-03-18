class passenger{
    setPassengerDetails(PaxID,Name,Phone){
     this.PaxID = PaxID;
     this.Name = Name;
     this.Phone = Phone;
    }
    getPaxName(){
        // Debugging the code by Console.log
        console.log("Name variable value :", this.Name)
     
        return this.Name;
    }

    getPaxID(){
        return this.PaxID;

    }

    getPhone(){
        return this.Phone;
    }
}

let pax = new passenger();
pax.setPassengerDetails(1001,'Mona',234886998);

console.log(pax.getPaxName());
