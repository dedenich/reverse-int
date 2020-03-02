module.exports = function reverse (n) {
  let nArr = String(n).split("");
  let nRes = [];
    let k = 0;
  for (let i = nArr.length - 1; i >= 0; i--){
    nRes[k] = nArr[i];
    k++;
  }
  return parseInt(nRes.join(""));
}
