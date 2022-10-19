import { Component } from './component';

describe('Given the class Component', () => {
    test('when we call the function render,if we dont give them parameters, then we get false', () => {
        // Arrange
        const component = new Component();
        //ACT
        const result = component.render('', '');
        const expectedResult = false;

        // Assert
        expect(result).toBe(expectedResult);
    });
});
