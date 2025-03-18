class RandomSet {
    constructor() {
        this.values = new Map(); // Store values with index reference
        this.list = []; // Array to support random access
    }

    insert(val) {
        if (this.values.has(val)) return false; // No duplicates
        this.values.set(val, this.list.length);
        this.list.push(val);
        return true;
    }

    remove(val) {
        if (!this.values.has(val)) return false;

        let index = this.values.get(val);
        let lastElement = this.list[this.list.length - 1];

        // Swap the element to remove with the last element
        this.list[index] = lastElement;
        this.values.set(lastElement, index);

        // Remove last element
        this.list.pop();
        this.values.delete(val);
        
        return true;
    }

    getRandom() {
        if (this.list.length === 0) return null;
        let randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }
}

// Example usage:
const rs = new RandomSet();
console.log(rs.insert(10)); // true
console.log(rs.insert(20)); // true
console.log(rs.insert(30)); // true
console.log(rs.insert(10)); // false (duplicate)

console.log(rs.getRandom()); // Random value from {10, 20, 30}

console.log(rs.remove(20)); // true
console.log(rs.getRandom()); // Random value from {10, 30}
console.log(rs.remove(50)); // false (not in set)
