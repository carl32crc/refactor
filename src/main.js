import { getRegions } from './services/regions';
import Summary from './classes/Summary';
import { percentage } from './utilities';

const regions = getRegions();

const summary = new Summary()

regions.forEach(region => {
    const population = region['cross:DataSet']['cross:Section']['cross:Obs'];
    const regionTotal = population.find( population => population.SEX === 'T').OBS_VALUE
    const regionFemale = population.find( population => population.SEX === 'F').OBS_VALUE
    const regionMale = population.find( population => population.SEX === 'M').OBS_VALUE
    const malePercent = percentage(regionMale, regionTotal);
    const femalePercent = percentage(regionFemale, regionTotal);
    const summaryRegion = {
        name: region.title,
        malePercent,
        femalePercent
    }

    summary.regionWithMoreGenderType(malePercent, femalePercent);
    summary.setEntryStats(summaryRegion);
    summary.countTotalRegions();
    summary.countTotalMen(regionMale);
    summary.countTotalWomen(regionFemale);
    summary.totalPopulation();  
});

console.log(summary);