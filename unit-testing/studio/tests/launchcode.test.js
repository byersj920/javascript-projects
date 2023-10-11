// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test('the following keys should return the correct values.', function(){
    expect(launchcode.organization).toEqual('non-profit');
    expect(launchcode.executiveDirector).toEqual('Jeff');
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });
  test('The programsOffered array should contain the three correct entries.', function(){
    expect(launchcode.programsOffered.includes('Web Development')).toBe(true);
    expect(launchcode.programsOffered.includes('Data Analysis')).toBe(true);
    expect(launchcode.programsOffered.includes('Liftoff')).toBe(true);
  });
  test('The programsOffered array should contain only 3 entries', function(){
    expect(launchcode.programsOffered.length).toBe(3);
  });
  //launchOutput tests:
  test('When passed a number divisible by ONLY 2, launchOutput() should return Launch!', function(){
    expect(launchcode.launchOutput(4)).toBe('Launch!');
  });
  test('When passed a number divisible by ONLY 3, launchOutput() should return Code!', function(){
    expect(launchcode.launchOutput(3)).toBe('Code!');
  });
  test('When passed a number divisible by ONLY 5, launchOutput() should return Rocks!', function(){
    expect(launchcode.launchOutput(3)).toBe('Code!');
  });
  test('When passed a number divisible by ONLY 2 AND 3, launchOutput() should return Launhcode!', function(){
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  });
  test('When passed a number divisible by ONLY 3 AND 5, launchOutput() should return Code Rocks!', function(){
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  });
  test('When passed a number divisible by ONLY 2 AND 5, launchOutput() should return Launch Rocks!', function(){
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!)');
  });
  test('When passed a number divisible by 2, 3 AND 5, launchOutput() should return Launhcode Rocks!', function(){
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  });
  test('When passed a number that is not divisible by 2, 3 AND 5, launchOutput() should return Rutabagas! That doesnt work :(', function(){
    expect(launchcode.launchOutput(13)).toBe("Rutabagas! That doesn't work :(");
  });
});