export default class Team {
  constructor() {
    this.members = new Set();
    this.from = 0;
    this.to = this.members.size;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    if (this.from <= this.to) {
      return {
        value: this.toArray()[this.from++],
        done: false,
      };
    }
    return {
      done: true,
    };
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`character ${character?.name}[${character.type}] is already in the team`);
    }
    this.members.add(character);
    this.to = this.members.size - 1;
  }

  addAll(...args) {
    args.forEach((character) => {
      this.members.add(character);
      this.to = this.members.size - 1;
    });
  }

  toArray() {
    return [...this.members];
  }
}
