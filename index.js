const receipt = [21.99, 10.67, 18.50];

function getCents(price) {
  const splitPrice = price.toString().split(".");
  return splitPrice[1];
}

function getsDiscount(rec) {
  let total = 0;
  for (let i = 0; i < rec.length; i++) {
    total += rec[i];
  }
  if (total > 50) {
    return true;
  } else {
    return false;
  }
}

function findDiscount(price) {
  const cents = getCents(price);
  if (cents === "67") {
    return 0.3;
  } else if (cents === "95") {
    return 0.4;
  } else if (cents === "99") {
    return 0.5;
  } else {
    return 0;
  }
}

function calculateTotal(receipt) {
  let total = 0;
  let totalSavings = 0;
  for (let i = 0; i < receipt.length; i++) {
    const originalPrice = receipt[i];
    if (getsDiscount(receipt) === true) {
      const discountRate = findDiscount(originalPrice);
      const savings = originalPrice * discountRate;
      totalSavings = totalSavings + savings;
      const discountPrice = originalPrice - savings;
      total += discountPrice;
      if (discountRate !== 0) {
        console.log("Item " + receipt[i] + ": " + savings.toFixed(2));
      }
    } else {
      total = total + originalPrice;
      
    }
  }
  console.log("Total Saved: " + totalSavings.toFixed(2));
  console.log("Total Post-Discount: " + total.toFixed(2));
  return total;
  
}

calculateTotal(receipt);