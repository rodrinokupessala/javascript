const data = [
  { phone: 92899999 },
  { phone: 345656 },
  { phone: 3334566 },
];

const result = data.map((item) => item.phone).join(",");
console.log(result); // "92899999,345656,3334566"
