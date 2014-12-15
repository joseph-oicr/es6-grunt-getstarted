var someFunc = function({ name: name = "Batman", pet: pet = "Bat" }) {
  console.log(name, pet);
}

someFunc({name: "Marc", pet: "Cat"});

someFunc({});