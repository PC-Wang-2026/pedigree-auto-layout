class Pedigree {
    constructor({
        familyId = "",
        probandId = null,
        phenotype1Label = "",
        phenotype2Label = "",
        phenotype3Label = "",
        phenotype4Label = "",
        legendNotes = ""
    } = {}) {
        this.familyId = familyId;
        this.probandId = probandId;

        this.phenotype1Label = phenotype1Label;
        this.phenotype2Label = phenotype2Label;
        this.phenotype3Label = phenotype3Label;
        this.phenotype4Label = phenotype4Label;

        this.legendNotes = legendNotes;

        this.persons = [];
        this.lastId = 0;
    }

    addPerson(person) {
        this.lastId += 1;
        person.individualId = String(this.lastId).padStart(3, "0");
        this.persons.push(person);
    }

}