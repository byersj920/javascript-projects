   const checkFive = require('../checkFive.js');



   describe("testing checkFive", function(){
      test('A number less than 5 will return with "number is less than 5."', function(){
         let output = checkFive(2);
         expect(output).toBe("2 is less than 5.");
      });
   });

   