{
  //
  const arrayOfNumber: number[] = [1, 2, 3, 1, 4, 5, 3, 6, 7, 8, 10, 5, 8, 4];
  const removeDuplicates = (arrayOfNumber: number[]): number[] => {
    return [...new Set(arrayOfNumber)];
  };

  const newArray = removeDuplicates(arrayOfNumber);
  //   console.log(newArray);

  //
}
