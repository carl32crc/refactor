

class Summary {
    constructor() {
        this.stats = {
            regionsWithMoreMen: 0,
            regionsWithMoreWomen: 0,
            totalRegions: 0,
            totalMen: 0,
            totalWomen: 0,
            totalPopulation: 0
        }
        this.entry = []
    }

    countTotalMen(regionMale) {
        this.stats.totalMen += Number(regionMale);
    }

    countTotalRegions() {
        this.stats.totalRegions++;
    }

    countTotalWomen(regionFemale) {
        this.stats.totalWomen += Number(regionFemale);
    }

    regionWithMoreGenderType(male, female) {
        male > female ? this.stats.regionsWithMoreMen++ : this.stats.regionsWithMoreWomen++;
    }

    setEntryStats (summaryRegion) {
        this.entry.push(summaryRegion);
    }

    totalPopulation() {
        this.stats.totalPopulation = this.stats.totalWomen + this.stats.totalMen;
    }
}

export default Summary