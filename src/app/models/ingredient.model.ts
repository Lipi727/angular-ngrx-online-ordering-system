export class Ingredient {
    
    public id: string;
    public name: string;
    public amount: number;

    constructor(id:string, name:string, amount: number){
        this.id = id,
        this.name = name,
        this.amount = amount
    }
}