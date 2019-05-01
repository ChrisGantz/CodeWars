'use strict';

var stringToNumObj = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'eleven': 11,
  'twelve': 12,
  'thirteen': 13,
  'fourteen': 14,
  'fifteen': 15,
  'sixteen': 16,
  'seventeen': 17,
  'eighteen': 18,
  'nineteen': 19,
  'twenty': 20,
  'thirty': 30,
  'forty': 40,
  'fifty': 50,
  'sixty': 60,
  'seventy': 70,
  'eighty': 80,
  'ninety': 90,
  'hundred': 100,
  'thousand': 1000,
  'million': 1000000
};

function parseInt2(string) {
  // TODO: it's your task now
  const newString = specialCharToSpace(string);
  let strngArr = newString.split(' ');
  let temp = 0,
    expandedForm = [],
    total = 0;
  for (let i=0,len=strngArr.length; i < len; i++) {
    let word = strngArr[i];
    if(!stringToNumObj[word]) {
      continue;
    }
    if(word === 'thousand' || word === 'million') {
      temp *= stringToNumObj[word];
      expandedForm.push(temp);
      total += temp;
      temp = 0;
    } else if (word === 'hundred') {
      temp *= stringToNumObj[word];
    }
    else {
      temp += stringToNumObj[word];
    }
  }
  expandedForm.push(temp);
  console.log('total:', total + temp);
  // console.log('expandedForm:', expandedForm);
  return total + temp;
}

const specialCharToSpace = stringToChange => {
  // string = string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,' ')
  return stringToChange.replace(/[^a-zA-Z0-9]/g, ' ');
};

parseInt2('one');  // => 1;
parseInt2('twenty'); // => 20;
parseInt2('ninety-five'); // => 95;
parseInt2('two hundred forty-six'); // => 246;
parseInt2('seven hundred eighty-three thousand nine hundred and nineteen'); // => 783919;
parseInt2('one million two hundred and eighty-three thousand five hundred and twenty-one'); // => 1283521;
