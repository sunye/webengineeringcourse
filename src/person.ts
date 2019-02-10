interface Person {
    firstName   : string;
    middleName? : string; // Optional Property
    lastName    : string;

}

let me : Person = {firstName : "Olivier", lastName : "Nicolas"}
console.log("First name: " + me.firstName + "Last name: " + me.lastName)

interface Identifiable {
    id : number;
}

let alice : Person & Identifiable;
alice.firstName = "Alice";
alice.id = 546376;