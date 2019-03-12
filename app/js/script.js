function calc_uninsured_motorist() {
  var uninsured_motorist = document.getElementById('uninsured_motorist');
  var term_select = document.getElementById('policy_term').value;
  var result;
  if (term_select === 'one_month' && uninsured_motorist.checked === true) {
    result = 19;
  } else if (term_select === 'three_month' && uninsured_motorist.checked === true) {
    result = 21;
  } else if (term_select === 'six_month' && uninsured_motorist.checked === true) {
    result = 24;
  } else if (term_select === 'twelve_month' && uninsured_motorist.checked === true) {
    result = 28;
  } else {
    result = 0;
  }
  return result;
}

function calc_excess_liability() {
  var excess_liability_1 = document.getElementById('excess_liability_1');
  var excess_liability_2 = document.getElementById('excess_liability_2');
  var term_select = document.getElementById('policy_term').value;
  var result;
  if (term_select === 'one_month' && excess_liability_1.checked === true) {
    result = 37;
  } else if (term_select === 'three_month' && excess_liability_1.checked === true) {
    result = 41;
  } else if (term_select === 'six_month' && excess_liability_1.checked === true) {
    result = 46;
  } else if (term_select === 'twelve_month' && excess_liability_1.checked === true) {
    result = 54;
  }  else if (term_select === 'one_month' && excess_liability_2.checked === true) {
    result = 87;
  } else if (term_select === 'three_month' && excess_liability_2.checked === true) {
    result = 97;
  } else if (term_select === 'six_month' && excess_liability_2.checked === true) {
    result = 107;
  } else if (term_select === 'twelve_month' && excess_liability_2.checked === true) {
    result = 120;
  } else {
    result = 0;
  }
  return result;
}

function calc_watercraft_liability() {
  var watercraft_liability = document.getElementById('watercraft_liability');
  var term_select = document.getElementById('policy_term').value;
  var result;
  if (term_select === 'one_month' && watercraft_liability.checked === true) {
    result = 97;
  } else if (term_select === 'three_month' && watercraft_liability.checked === true) {
    result = 107;
  } else if (term_select === 'six_month' && watercraft_liability.checked === true) {
    result = 120;
  } else if (term_select === 'twelve_month' && watercraft_liability.checked === true) {
    result = 138;
  } else {
    result = 0;
  }
  return result;
}

function calc_plan_a_liability() {
  var planA = document.getElementById('planA');
  var term_select = document.getElementById('policy_term').value;
  var liability_only = document.getElementById('liability_only');
  var result;
  if (term_select === 'one_month' && planA.checked === true && liability_only.checked === true) {
    result = 107.27;
  } else if (term_select === 'three_month' && planA.checked === true && liability_only.checked === true) {
    result = 122.02;
  } else if (term_select === 'six_month' && planA.checked === true && liability_only.checked === true) {
    result = 142.44;
  } else if (term_select === 'twelve_month' && planA.checked === true && liability_only.checked === true) {
    result = 168.25;
  } else {
    result = 0;
  }
  return result;
}

function calc_plan_b_liability() {
  var planB = document.getElementById('planB');
  var term_select = document.getElementById('policy_term').value;
  var liability_only = document.getElementById('liability_only');
  var result;
  if (term_select === 'one_month' && planB.checked === true && liability_only.checked === true) {
    result = 126.83;
  } else if (term_select === 'three_month' && planB.checked === true && liability_only.checked === true) {
    result = 143.46;
  } else if (term_select === 'six_month' && planB.checked === true && liability_only.checked === true) {
    result = 167.39;
  } else if (term_select === 'twelve_month' && planB.checked === true && liability_only.checked === true) {
    result = 204.92;
  } else {
    result = 0;
  }
  return result;
}

function one_liability_option_1() {
  var x_1 = document.getElementById('excess_liability_1');
  var x_2 = document.getElementById('excess_liability_2');
  if (x_1.checked === true) {
      x_2.disabled = true;
  } else if (x_1.checked === false) {
      x_2.disabled = false;
  } else if (x_2.checked === true) {
      x_1.disabled = true;
  } else if (x_2.checked === false) {
     x_1.disabled = false;
  } else {
    return null;
  }
}

function one_liability_option_2() {
  var x_1 = document.getElementById('excess_liability_1');
  var x_2 = document.getElementById('excess_liability_2');
  if (x_2.checked === true) {
      x_1.disabled = true;
  } else if (x_2.checked === false) {
      x_1.disabled = false;
  } else if (x_1.checked === true) {
      x_2.disabled = true;
  } else if (x_2.checked === false) {
     x_2.disabled = false;
  } else {
    return null;
  }
}

function vehicle_value_null() {
  var liability = document.getElementById('liability_only');
  var vehicle_value = document.getElementById('vehicle_value');
  var full_coverage = document.getElementById('full_coverage');
  var result;
  if (liability.checked === true) {
      vehicle_value.disabled = true;
  } else if (full_coverage.checked === true) {
      vehicle_value.disabled = false;
  } else if (full_coverage.checked === true && vehicle_value.value === null) {
      alert('You must select a value for your vehicle when choosing Full Coverage');
  } else {
    return null;
  }
  return null;
}


// Plan A Terms and their respective values

function calc_full_coverage_plan_a_one_month() {
  var cash_value = document.getElementById('vehicle_value').value;
  var term_select = document.getElementById('policy_term').value;
  var full_coverage = document.getElementById('full_coverage');
  var planA = document.getElementById('planA');
  var policy_cost = 0;
  if (planA.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 500 && cash_value <= 4999) {
      policy_cost = 152.53;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 5000 && cash_value <= 9999) {
      policy_cost = 189.01;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 10000 && cash_value <= 14999) {
      policy_cost = 225.50;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 15000 && cash_value <= 19999) {
      policy_cost = 263.34;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 20000 && cash_value <= 24999) {
      policy_cost = 284.77;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 25000 && cash_value <= 29999) {
      policy_cost = 294.12;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 30000 && cash_value <= 34999) {
      policy_cost = 311.13;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 35000) {
      var extra = cash_value - 35000;
      var multiplier = extra / 5000;
			multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
			policy_cost = 311.13 + (multiplier * 22.00);
  }
  return policy_cost;
}

function calc_full_coverage_plan_a_three_month() {
  var cash_value = document.getElementById('vehicle_value').value;
  var term_select = document.getElementById('policy_term').value;
  var full_coverage = document.getElementById('full_coverage');
  var planA = document.getElementById('planA');
  var policy_cost = 0;
  if (planA.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 500 && cash_value <= 4999) {
      policy_cost = 172.48;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 5000 && cash_value <= 9999) {
      policy_cost = 215.41;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 10000 && cash_value <= 14999) {
      policy_cost = 255.94;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 15000 && cash_value <= 19999) {
      policy_cost = 296.48;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 20000 && cash_value <= 24999) {
      policy_cost = 316.62;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 25000 && cash_value <= 29999) {
      policy_cost = 327.01;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 30000 && cash_value <= 34999) {
      policy_cost = 345.91;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 35000) {
      var extra = cash_value - 35000;
      var multiplier = extra / 5000;
			multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
			policy_cost = 345.91 + (multiplier * 23.00);
  }
  return policy_cost;
}

function calc_full_coverage_plan_a_six_month() {
  var cash_value = document.getElementById('vehicle_value').value;
  var term_select = document.getElementById('policy_term').value;
  var full_coverage = document.getElementById('full_coverage');
  var planA = document.getElementById('planA');
  var policy_cost = 0;
  if (planA.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 500 && cash_value <= 4999) {
      policy_cost = 200.98;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 5000 && cash_value <= 9999) {
      policy_cost = 244.23;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 10000 && cash_value <= 14999) {
      policy_cost = 288.81;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 15000 && cash_value <= 19999) {
      policy_cost = 330.84;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 20000 && cash_value <= 24999) {
      policy_cost = 351.72;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 25000 && cash_value <= 29999) {
      policy_cost = 363.78;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 30000 && cash_value <= 34999) {
      policy_cost = 375.76;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 35000) {
      var extra = cash_value - 35000;
      var multiplier = extra / 5000;
			multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
			policy_cost = 375.76 + (multiplier * 25.00);
  }
  return policy_cost;
}

function calc_full_coverage_plan_a_annual() {
  var cash_value = document.getElementById('vehicle_value').value;
  var term_select = document.getElementById('policy_term').value;
  var full_coverage = document.getElementById('full_coverage');
  var planA = document.getElementById('planA');
  var policy_cost = 0;
  if (planA.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 500 && cash_value <= 4999) {
      policy_cost = 237.11;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 5000 && cash_value <= 9999) {
      policy_cost = 284.19;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 10000 && cash_value <= 14999) {
      policy_cost = 331.26;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 15000 && cash_value <= 19999) {
      policy_cost = 378.33;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 20000 && cash_value <= 24999) {
      policy_cost = 425.41;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 25000 && cash_value <= 29999) {
      policy_cost = 472.48;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 30000 && cash_value <= 34999) {
      policy_cost = 497.95;
  } else if (planA.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 35000) {
      var extra = cash_value - 35000;
      var multiplier = extra / 5000;
			multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
			policy_cost = 497.95 + (multiplier * 32.00);
  }
  return policy_cost;
}

// Plan B Terms and their respective values

function calc_full_coverage_plan_b_annual() {
  var cash_value = document.getElementById('vehicle_value').value;
  var term_select = document.getElementById('policy_term').value;
  var full_coverage = document.getElementById('full_coverage');
  var planB = document.getElementById('planB');
  var policy_cost = 0;
  if (planB.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 500 && cash_value <= 4999) {
      policy_cost = 279.56;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 5000 && cash_value <= 9999) {
      policy_cost = 334.21;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 10000 && cash_value <= 14999) {
      policy_cost = 390.06;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 15000 && cash_value <= 19999) {
      policy_cost = 445.90;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 20000 && cash_value <= 24999) {
      policy_cost = 501.75;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 25000 && cash_value <= 29999) {
      policy_cost = 557.58;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 30000 && cash_value <= 34999) {
      policy_cost = 613.43;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'twelve_month' && cash_value >= 35000) {
      var extra = cash_value - 35000;
      var multiplier = extra / 5000;
			multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
			policy_cost = 613.43 + (multiplier * 32.00);
  }
  return policy_cost;
}

function calc_full_coverage_plan_b_six_month() {
  var cash_value = document.getElementById('vehicle_value').value;
  var term_select = document.getElementById('policy_term').value;
  var full_coverage = document.getElementById('full_coverage');
  var planB = document.getElementById('planB');
  var policy_cost = 0;
  if (planB.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 500 && cash_value <= 4999) {
      policy_cost = 231.71;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 5000 && cash_value <= 9999) {
      policy_cost = 281.61;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 10000 && cash_value <= 14999) {
      policy_cost = 332.70;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 15000 && cash_value <= 19999) {
      policy_cost = 383.79;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 20000 && cash_value <= 24999) {
      policy_cost = 434.88;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 25000 && cash_value <= 29999) {
      policy_cost = 483.59;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 30000 && cash_value <= 34999) {
      policy_cost = 534.69;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'six_month' && cash_value >= 35000) {
      var extra = cash_value - 35000;
      var multiplier = extra / 5000;
			multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
			policy_cost = 534.69 + (multiplier * 25.00);
  }
  return policy_cost;
}

function calc_full_coverage_plan_b_three_month() {
  var cash_value = document.getElementById('vehicle_value').value;
  var term_select = document.getElementById('policy_term').value;
  var full_coverage = document.getElementById('full_coverage');
  var planB = document.getElementById('planB');
  var policy_cost = 0;
  if (planB.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 500 && cash_value <= 4999) {
      policy_cost = 202.58;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 5000 && cash_value <= 9999) {
      policy_cost = 248.92;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 10000 && cash_value <= 14999) {
      policy_cost = 295.25;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 15000 && cash_value <= 19999) {
      policy_cost = 341.59;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 20000 && cash_value <= 24999) {
      policy_cost = 387.93;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 25000 && cash_value <= 29999) {
      policy_cost = 434.27;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 30000 && cash_value <= 34999) {
      policy_cost = 480.60;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'three_month' && cash_value >= 35000) {
      var extra = cash_value - 35000;
      var multiplier = extra / 5000;
			multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
			policy_cost = 480.60 + (multiplier * 23.00);
  }
  return policy_cost;
}

function calc_full_coverage_plan_b_one_month() {
  var cash_value = document.getElementById('vehicle_value').value;
  var term_select = document.getElementById('policy_term').value;
  var full_coverage = document.getElementById('full_coverage');
  var planB = document.getElementById('planB');
  var policy_cost = 0;
  if (planB.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 500 && cash_value <= 4999) {
      policy_cost = 178.03;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 5000 && cash_value <= 9999) {
      policy_cost = 219.61;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 10000 && cash_value <= 14999) {
      policy_cost = 261.20;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 15000 && cash_value <= 19999) {
      policy_cost = 303.98;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 20000 && cash_value <= 24999) {
      policy_cost = 347.93;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 25000 && cash_value <= 29999) {
      policy_cost = 390.70;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 30000 && cash_value <= 34999) {
      policy_cost = 435.85;
  } else if (planB.checked === true && full_coverage.checked === true && term_select === 'one_month' && cash_value >= 35000) {
      var extra = cash_value - 35000;
      var multiplier = extra / 5000;
			multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
			policy_cost = 435.85 + (multiplier * 22.00);
  }
  return policy_cost;
}

function disable_VIP() {
  var liability_only = document.getElementById('liability_only');
  var full_coverage = document.getElementById('full_coverage');
  var vip = document.getElementById('vip');
  if (liability_only.checked === true) {
     ((vip.disabled = true) & (vip.checked = false));
  } else if (full_coverage.checked === true) {
       vip.disabled = false;
  } else {
    return null;
  }
}

function add_cov() {
  var total_cov_price = calc_uninsured_motorist() + calc_excess_liability() + calc_watercraft_liability();
  return total_cov_price;
}

function vip() {
  var vip = document.getElementById('vip');
  var result;
  if (vip.checked === true) {
      result = 0.15;
  } else {
      result = null;
  }
  return result;
}

function business_use() {
  var business_use = document.getElementById('business_use');
  var result;
  if (business_use.checked === true) {
    result = 0.20;
  } else {
    result = null;
  }
  return result;
}

function term_and_plan() {
  var terms = calc_plan_b_liability() + calc_plan_a_liability() + calc_full_coverage_plan_a_annual() + calc_full_coverage_plan_a_six_month() + calc_full_coverage_plan_a_three_month() + calc_full_coverage_plan_a_one_month() /* Now the Plan B Coverage */ + calc_full_coverage_plan_b_annual() + calc_full_coverage_plan_b_six_month() + calc_full_coverage_plan_b_three_month() + calc_full_coverage_plan_b_one_month();
  return terms;
}

function calc_total_cost() {
  var total_cost = add_cov() + term_and_plan() + return_vip() + return_business_use() - (add_cov() + term_and_plan() + return_vip() + return_business_use()) * multi_car();
  var result = document.getElementById('demo');
  result.innerHTML = '$' + total_cost.toFixed(2);
}

function return_vip() {
  var vip_cost = term_and_plan() * vip();
  return vip_cost;
}

function return_business_use() {
  var business_use_cost = term_and_plan() * business_use();
  return business_use_cost;
}

function full_cov_and_vehicle() {
  var full_coverage = document.getElementById('full_coverage');
  var vehicle_value = document.getElementById('vehicle_value');
  var planA = document.getElementById('planA');
  var planB = document.getElementById('planB');
  if (full_coverage.checked === true && vehicle_value.value === "") {
      alert('Please enter a value for your vehicle if you want to select Full Coverage');
  } else if (full_coverage.checked === true && planA.checked === true && vehicle_value.value === "") {
     alert('Please enter a value for your vehicle if you want to select Full Coverage');
  } else if (full_coverage.checked === true && planB.checked === true && vehicle_value.value === "") {
     alert('Please enter a value for your vehicle if you want to select Full Coverage');
  } else {
    return false;
  }
  return null;
}

function multi_car() {
  var multi_car = document.getElementById('multi_car');
  var result = 0.10;
  if (multi_car.checked === true) {
    return result;
  } else {
    return null;
  }
}

function determine_policy_term() {
  var term_select = document.getElementById('policy_term');
  if (policy_term.value === 'one_month') {
      window.location.href = ('https://secure.mexicanautoinsurance.com/buy/30-day-mexican-auto-insurance/30-day-mexican-auto-insurance.lasso');
} else if (policy_term.value === 'three_month') {
      window.location.href = ('https://secure.mexicanautoinsurance.com/buy/90-day-mexican-auto-insurance/90-day-mexican-auto-insurance.lasso');
} else if (policy_term.value === 'six_month') {
      window.location.href = ('https://secure.mexicanautoinsurance.com/buy/six-month-mexican-auto-insurance/six-month-mexican-auto-insurance.lasso');
} else if (policy_term.value === 'twelve_month') {
      window.location.href = ('https://secure.mexicanautoinsurance.com/buy/annual-mexican-auto-insurance/annual-mexican-auto-insurance.lasso');
} else {
  return false;
  }
}