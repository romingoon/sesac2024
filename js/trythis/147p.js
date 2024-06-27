const dog = {
  name: 'Maxx',

  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(() => this.showMyName(), 1000);
  },
};

dog.whatsYourName();
