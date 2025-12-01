var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var value = 100; //type inference
//value = 'joydip'
value = 20;
console.log(value);
var nameValue = 'joydip';
console.log(nameValue);
//function declaration
function subtract(a, b) {
    return a - b;
}
//function expression in arrow function style
var divide = function (a, b) { return a / b; };
console.log(typeof (20));
console.log(typeof ('joydip'));
console.log(typeof (true));
/*
//constructor function
function person(idValue: number, nameVal: string, salaryVal: number) {
    //local variables of the function
    var x = 100
    let y = 200
    const z = 300

    //object data of the function (declared with this keyword)
    //value properties
    this.id = idValue;
    this.name = nameVal;
    this.salary = salaryVal;

    //functional property
    this.print = function () {
        return `Id=${this.id}, Name=${this.name}, salary=${this.salary}`;
    }
}

const p = new person(100, 'joydip', 10000)
console.log(p.name);
*/
var Person = /** @class */ (function () {
    function Person(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Object.defineProperty(Person.prototype, "Id", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Salary", {
        get: function () {
            return this.salary;
        },
        set: function (salary) {
            this.salary = salary;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.print = function () {
        return "Id=".concat(this.id, ", Name=").concat(this.name, ", salary=").concat(this.salary);
    };
    return Person;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(id, name, salary, subject) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.subject = subject;
        return _this;
    }
    Object.defineProperty(Trainer.prototype, "Subject", {
        get: function () {
            return this.subject;
        },
        set: function (subject) {
            this.subject = subject;
        },
        enumerable: false,
        configurable: true
    });
    Trainer.prototype.print = function () {
        return "".concat(_super.prototype.print.call(this), ", Subject=").concat(this.subject);
    };
    return Trainer;
}(Person));
//const p = new Person(100, 'joydip', 10000)
//console.log(p.print());
var joydipTrainer = new Trainer(100, 'Joydip', 1000, 'Angular');
console.log(joydipTrainer.print());
