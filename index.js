function firstSingleCharacter(word) {
  if(word.length === 0) return null;
  const wordMap = new Map();
  for(let letter of word.split('')){
    if(!wordMap.has(letter)) wordMap.set(letter, 1);
    else{
      wordMap.set(letter, (wordMap.get(letter)) + 1);
    }
  }
  console.log(wordMap);
  for(let charac of word.split('')){
		console.log(wordMap.get(charac));
    if(wordMap.get(charac) === 1){
			console.log(charac, ' matches');
			return charac;
			}
  }
	return null;
}


firstSingleCharacter('abadczbdabc');