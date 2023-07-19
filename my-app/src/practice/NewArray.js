import React from "react";

const NewArray = () => {
  const myArray = [
    54321, 98765, 12345, 67890, 79735, 24680, 13579, 86420, 87963, 96549, 11176,
    9876, 5567, 764532, 54324, 8768, 98767, 45323, 56754, 22322, 33211, 44444,
    73477, 13436, 76980, 234678, 54647, 98664, 43532, 8768, 98767, 45323, 56754,
    22322, 33211, 44444, 73477, 13436, 76980, 234678, 54647, 98664,
  ];

  myArray.sort((a, b) => b - a);
  const first = 0;
  const last = myArray.length - 1;
  const mid = Math.ceil((first + last) / 2);
  const afterFirstAndMid = Math.ceil((first + mid) / 2);
  const afterMidAndLast = Math.ceil((mid + last) / 2);
  const firstMid = Math.ceil((afterFirstAndMid + mid) / 2);
  console.log(afterFirstAndMid);
  console.log(firstMid);
  console.log(mid);
  console.log(afterMidAndLast);
  console.log(last);
  console.log(myArray);

  const ranges = [[], [], [], [], []];
  const rangeIndices = [
    0,
    afterFirstAndMid,
    firstMid,
    mid,
    afterMidAndLast,
    last + 1,
  ];

  for (let i = 0; i < rangeIndices.length - 1; i++) {
    for (let j = rangeIndices[i]; j < rangeIndices[i + 1]; j++) {
      ranges[i].push(myArray[j]);
    }
    console.log(ranges[i]);
  }

  const arrayRanges = [
    [0, myArray[afterFirstAndMid]],
    [myArray[afterFirstAndMid + 1], myArray[firstMid]],
    [myArray[firstMid + 1], myArray[mid]],
    [myArray[mid + 1], myArray[afterMidAndLast]],
    [myArray[afterMidAndLast+1],myArray[last]]
  ];
  console.log(arrayRanges)

  const percentages = ranges.map(
    (subarray) => (subarray.length / myArray.length) * 100
  );
  const percentagesArray = Array.from(percentages); // Convert percentages to an array
  console.log(percentagesArray);

  return (
    <div>
      {percentagesArray.map((percentage, index) => (
        <p key={index}>
          Subarray {index + 1} percentage: {percentage.toFixed(2)}%
        </p>
      ))}
    </div>
  );
};

export default NewArray;

//   const ranges = [[], [], [], [], []];

//     for(let j = 0; j<afterFirstAndMid;j++){
//         ranges[0].push(myArray[j])
//     }console.log(ranges[0])

//     for(let j = afterFirstAndMid; j<firstMid;j++){
//         ranges[1].push(myArray[j])
//     }console.log(ranges[1])

//     for(let j = firstMid; j<mid;j++){
//         ranges[2].push(myArray[j])
//     }console.log(ranges[2])

//     for(let j = mid; j<afterMidAndLast;j++){
//         ranges[3].push(myArray[j])
//     }console.log(ranges[3])

//     for(let j = afterMidAndLast; j<last;j++){
//         ranges[4].push(myArray[j])
//     }console.log(ranges[4])
