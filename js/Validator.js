class Validator {
    validate(pedigree) {
        const errors = [];
        const seenIds = new Set();

        for (const person of pedigree.persons) {
            if (seenIds.has(person.individualId)) {
                errors.push(
                    `Duplicate individualId: ${person.individualId}`
                );
            } else {
                seenIds.add(person.individualId);
            }
        }

        return errors;
    }
}