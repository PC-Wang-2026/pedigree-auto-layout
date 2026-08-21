class Person {
    constructor({
        fatherId = null,
        motherId = null,
        spouseIds = [],
        sex = 0,
        siblingSequence = null,
        phenotype1 = 0,
        phenotype2 = 0,
        phenotype3 = 0,
        phenotype4 = 0,
        deceased = false,
        age = "",
        notes = ""
    }) {
        this.individualId = null;
        this.fatherId = fatherId;
        this.motherId = motherId;
        this.spouseIds = spouseIds;
        this.sex = sex;
        this.siblingSequence = siblingSequence;

        this.phenotype1 = phenotype1;
        this.phenotype2 = phenotype2;
        this.phenotype3 = phenotype3;
        this.phenotype4 = phenotype4;

        this.deceased = deceased;
        this.age = age;
        this.notes = notes;
    }
}