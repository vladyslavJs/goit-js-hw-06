// Задача 3. Конструктор рядків
// Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється.

class StringBuilder {
    #value = 'initialValue';

    constructor(value) {
        this.#value = value;
    }
    
    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#value += str;
    }

    padStart(str) {
        this.#value = str + this.#value;

    }

    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

