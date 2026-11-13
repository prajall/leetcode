var minTimeToVisitAllPoints = function (points) {
  let res = 0;
  const node = points.pop();
  let x1 = node[0];
  let y1 = node[1];
  while (points.length > 0) {
    const node2 = points.pop();
    let x2 = node2[0];
    let y2 = node2[1];

    const maxDiff = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
    res += maxDiff;

    ((x1 = x2), (y1 = y2));
  }
  return res;
};

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ]),
);
