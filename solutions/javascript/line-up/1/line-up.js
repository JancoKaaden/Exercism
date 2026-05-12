//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 export function format(name, number) {
    // set extension of the number
    let extension = 'th';

     // return the last digit(s)
        const lastDigit = Math.floor(number % 10);
        const lastTwoDigits = Math.floor(number % 100);

        if (lastDigit == 1 && lastTwoDigits != 11) {
          extension = 'st';
        } else if (lastDigit == 2 && lastTwoDigits != 12){
          extension = 'nd';       
        } else if (lastDigit == 3 && lastTwoDigits != 13){
          extension = 'rd';
        }
    
    return name + ', you are the ' + number + extension + ' customer we serve today. Thank you!';
  };
