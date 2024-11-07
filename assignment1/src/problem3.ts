{
  //

  function countWordOccurrences(sen: string, word: string): number {
    const words = sen.split(" ");

    let totalCount: number = 0;
    for (let w of words) {
      if (w === word) {
        totalCount++;
      }
    }
    return totalCount;
  }
  const sen: string = "I love typescript";
  const word: string = "typescript";

  //   console.log(countWordOccurrences(sen, word));

  //
}
