const customers = [
  { name: "Amit Sharma", premium: 35000, renewalDate: "2026-11-20" },
  { name: "Neha Gupta", premium: 28500, renewalDate: "2026-12-30" },
  { name: "Rajeev Sinha", premium: 42000, renewalDate: "2026-11-25" },
  { name: "Priya Mehta", premium: 25000, renewalDate: "2027-02-10" },
];

console.log(customers);
console.log("Total customers:", customers.length);
const today = new Date("2026-11-11");
const renewal = new Date(customers[0].renewalDate);

const diffMs = renewal - today;
const diffDays = diffMs / (1000 * 60 * 60 * 24);

console.log("Amit ka renewal kitne din baad hai:", diffDays);

const bigPremium = customers.filter(function (c) {
  return c.premium > 30000;
});

console.log("Premium 30000 se zyada:", bigPremium);
function renewalsDueSoon(customers, days) {
  const today = new Date("2026-11-11");

  return customers.filter(function (c) {
    const renewal = new Date(c.renewalDate);
    const diffDays = (renewal - today) / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= days;
  });
}

const due = renewalsDueSoon(customers, 30);
console.log("Agle 30 din ke renewals:", due);