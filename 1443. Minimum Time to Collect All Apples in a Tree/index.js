var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    console.log(left, right, mid);
    if (arr[mid] < arr[mid + 1]) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};
