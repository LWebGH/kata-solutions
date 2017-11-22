// Math.ceil(person.died / 100)
import { tableOfNames } from './age-difference';

const lifeExpectancy = (data) => {

  const table = {};
  const century = (person) => Math.ceil(person.died / 100);

  data.forEach((person) => {
    let group = century(person);
    let yearsOfLive = person['died'] - person['born'];
    if (table[group]) table[group].push(yearsOfLive);
    else table[group] = [yearsOfLive];
  });
  for (let group in table) {
    console.log(group);
    let length = table[group].length;
    table[group] = +(table[group].reduce((sum, ages) => sum + ages) / length).toFixed(2);
  }
  return table;
};

export { lifeExpectancy };