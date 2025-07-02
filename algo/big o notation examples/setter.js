class Person {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        if (typeof newName === "string" && newName.length > 0){
            this._name = newName;
        }else {
            console.log("invalid name")
        }
    }
}