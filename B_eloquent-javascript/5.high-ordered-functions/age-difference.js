const tableOfNames = (data) => {
  const result = {};
  data.forEach(persone => result[persone["name"]] = persone);
  return result;
};

const ageDifference = (data) => {
  const persons = tableOfNames(data);
  const ageStorage = [];
  data.forEach(child => {
    if (persons[child["mother"]]) {
      let mother = persons[child["mother"]];
      ageStorage.push(child["born"] - mother["born"]);
    };
  });
  return ageStorage.reduce((sum, item) => sum + item) / ageStorage.length;
};

export { tableOfNames, ageDifference }