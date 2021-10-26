function sortWords(strings) {
    const stringsArray = JSON.parse(strings.toString());
    let wordsMap = stringsArray.map(function(element, index) {
    return { index: index, value: element.toLowerCase() };
    });
    
    wordsMap.sort(function(a, b) {
      if (a.value > b.value) {
        return 1; }
      if (a.value < b.value) {
        return -1; }
      return 0;
    });
    
    return JSON.stringify(wordsMap.map(function(element) {
      return stringsArray[element.index];
    }));
}
module.exports = sortWords;