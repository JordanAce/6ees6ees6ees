class ForagerBee extends Bee{

  constructor (props) {
    super (props);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
  // TODO..
};
