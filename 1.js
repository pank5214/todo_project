console.log("start");
setTimeout(() => {
  console.log("Timer");
}, 0);
console.log("end");
const a = () => {
  for (let i = 0; i < 999999; i++) {
    console.log(i);
  }
};
a();
