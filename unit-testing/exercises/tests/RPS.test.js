const whoWon = require('../RPS.js');

describe('Winner tester', function(){
    test('If there is a tie, should retunr: TIE!', function(){
        expect(whoWon('sameChoice', 'sameChoice')).toBe('TIE!');
    })
    test('Rock vs Paper', function(){
        expect(whoWon('rock', 'paper')).toBe('Player 2 wins!');
    })
    test('Paper vs Sciccors', function(){
        expect(whoWon('paper', 'scissors')).toBe('Player 2 wins!');
    })
    test('scissors vs rock', function(){
        expect(whoWon('scissors', 'rock')).toBe('Player 2 wins!');
    })
    test('Invalid input should return an error. Player 2 wrong choice check.', function(){
        expect(whoWon('rock', 'lizard')).toBe('Invalid weapon choice. Please choose rock, paper or scissors.');
    })
    test('When player1 chooses an invalid weapon, an error should return.', function(){
        expect(whoWon('lizard', 'rock')).toBe('Invalid weapon choice. Please choose rock, paper or scissors.');
    })
});