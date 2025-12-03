const divide = async (a, b) => {
  const res = a / b;
  if (res === Infinity) {
    throw new Error("divisor should NOT be zero");
  }
  return res;
};
const add = (a, b) => a + b;

async function callDivide() {
  try {
    const data = await divide(12, 3);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

callDivide();
// try {
//   const data = await divide(12, 3);
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

console.log(add(12, 3));
