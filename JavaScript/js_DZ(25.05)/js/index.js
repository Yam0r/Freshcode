class Worker{
    constructor(options){
        this.salary = options.salary,
        this.name = options.name,
        this.id = options.id
    }
}
const worker = new Worker({
    id:"117",
    name: "Vasya",
    salary:24000
})
console.log(worker);
console.log("Зарплата за месяц: ", worker.salary);
console.log("Зарплата за год: ", worker.salary*12);