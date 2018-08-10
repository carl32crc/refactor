
const percentage = (value, total) => {
  return parseFloat(Number(value) / Number(total) *100).toFixed(2);
};

const regionWithMoreGenderType = (male, female, summary) => {
    return male > female ? summary.stats.regionsWithMoreMen++ : summary.stats.regionsWithMoreWomen++;
}

export {
    percentage,
    regionWithMoreGenderType
};