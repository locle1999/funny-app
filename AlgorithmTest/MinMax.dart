void main() {
  minMaxSum([1, 3, 5, 7, 9]);
}

void minMaxSum(List<int> listNumber) {
  var min = 0;
  var max = 0;
  var sum = 0;
  for (var i = 0; i < listNumber.length; i++) {
    sum += listNumber[i];
    min = sum - listNumber[listNumber.length - 1];
    max = sum - listNumber[0];
  }
  ;

  print([min, max]);
}
