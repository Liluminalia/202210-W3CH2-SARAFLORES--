import { Pet } from './pets';
describe('Given the class Pet', () => {
    test('when we instantiate the class, then we do have an object, we check for property values', () => {
        // Arrange
        const name = 'negan';
        const kind = 'cat';
        const race = 'street cat';
        const parents = 'sara';
        const isAdopted = false;
        const message = 'gracias por adoptar!';
        const pet = new Pet(name, kind, race, parents, message);
        const id = pet.id;
        const expectedResult = {
            name,
            kind,
            race,
            parents,
            message,
            isAdopted,
            id,
        };
        // Act
        // Assert
        expect(pet).toEqual(expectedResult);
    });
});
