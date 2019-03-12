let SHORT = (function() {

    // Global Variables; For calculation and multipliers
    let result, totalPremium, premium;

    let main = {
        form: '.form',
        quote: '.quote'
    }

    // INNER HTML Creation Object for classes and id's simplicity
    let innerHTML = {
        demo: '#demo',
        demo2: '#demo2',
        demo3: '#demo3',
        demo4: '#demo4',
        demo5: '#demo5',
        // Options Inner HTML
        um: '#inner_um',
        e1: '#inner_e1',
        e2: '#inner_e2',
        wl: '#inner_wl',
        bu: '#inner_bu',
        v: '#inner_v',
        // Territory Inner HTML Plans
        a: '#inner_a',
        b: '#inner_b',
        baja: '#inner_baja',
        type: ".coverage__type"
    };

    // Option Object for classes and id's
    let optionalCoverage = {
        um: '#uninsured_motorist',
        wl: '#watercraft_liability',
        e1: '#excess_1',
        e2: '#excess_2',
        // This is a query Selector All class
        cl: '.excess_liability'
    }

    // Term Object for classes and id's
    let dates = {
        eff:'#eff_date',
        ex:'#ex_date',
        dateError: '.dateError',
        dateError2: '.dateError2',
    }

    // Vehicle Object for classes and id's
    let vehicle = {
        value: '#vehicle_value'
    }

    let coverage = {
        full: '#full_coverage',
        liability: "#liability_only"
    }

    let misc = {
        btn: '#calc',
        vip: '#vip',
        bu: '#business_use',
        mc: '#multi_car',
        baja: '#baja',
        regular: '#regular',
        base: '#base',
        tax: '#tax',
        fee: '#fee',
        ops: '#ops',
        totalNet: '#totalNet',
    }


    // Varialbes
    // =========================================================================
    // Variables

    // Quote and form
    let form = document.querySelector(main.form);
    let quote = document.querySelector(main.quote);

    // Inner HTML Variables
    let demo = document.querySelector(innerHTML.demo);
    let demo2 = document.querySelector(innerHTML.demo2);
    let demo3 = document.querySelector(innerHTML.demo3);
    let demo4 = document.querySelector(innerHTML.demo4);
    let demo5 = document.querySelector(innerHTML.demo5);
    let coverage_type = document.querySelector(innerHTML.type);

    // Optional Coverage Variables
    let uninsured_motorist = document.querySelector(optionalCoverage.um);
    let watercraft_liability = document.querySelector(optionalCoverage.wl);
    let excess_liability_1 = document.querySelector(optionalCoverage.e1);
    let excess_liability_2 = document.querySelector(optionalCoverage.e2);
    let calc_liability = document.querySelectorAll(optionalCoverage.cl);

    // Term for policies
    let a = document.querySelector(dates.eff);
    let b = document.querySelector(dates.ex);
    let dateError = document.querySelector(dates.dateError);
    let dateError2 = document.querySelector(dates.dateError2);

    // Vehicle value variable   
    let cash_value = document.querySelector(vehicle.value);

    // HELPER Variables - Concerning Scope
    let extra = cash_value.value - 35000; // cash_value is now defined
    let multiplier = extra / 5000;
    // HELPER Variables - Concerning Scope

    // Full Coverage variable
    let full_coverage = document.querySelector(coverage.full);
    let liability_only = document.querySelector(coverage.liability);
    
    // MISC Variables
    let btn = document.querySelector(misc.btn);
    let vip = document.querySelector(misc.vip);
    let businessUse = document.querySelector(misc.bu);
    let multiCar = document.querySelector(misc.mc);
    let baja = document.querySelector(misc.baja);
    let regular = document.querySelector(misc.regular);
    let base = document.querySelector(misc.base);
    let tax = document.querySelector(misc.tax);
    let fee = document.querySelector(misc.fee);
    let ops = document.querySelector(misc.ops);
    let totalNet = document.querySelector(misc.totalNet);

    // End Varialbes
    // =========================================================================
    // End Variables





    // Date Functions
    // =========================================================================
    // Date Functions


    let d = (a, b) => { // d is for days singular and plural
        let effective = moment(a.value);
        let expiration = moment(b.value);
        return expiration.diff(effective, 'days');
    }




    // Optional Coverage Functions
    // =========================================================================
    // Optional Coverage Functions

    // UNINSURED MOTORIST

    let umCov = (days) => {
        if(uninsured_motorist.checked === true) {
            result = days * 1.16;
        } else {
            result = 0;
        }
        return result;
    }


    // UNINSURED MOTORIST

    // -------------------------------------------------------------------------

    // EXCESS LIABILITY

    let liabilityCov1 = (days) => {
        if(excess_liability_1.checked === true) {
            result = days * 1.26;
        } else {
            result = 0;
        }
        return result;
    }

    let liabilityCov2 = (days) => {
        if(excess_liability_2.checked === true) {
            result = days * 2.78;
      } else {
          result = 0;
      }
      return result;
    }

    // EXCESS LIABILITY

    // -------------------------------------------------------------------------

    // WATERCRAFT 

    let wtrCov = (days) =>  {
        if(watercraft_liability.checked === true) {
            result = days * 3.34;
        } else {
            result = 0;
        }
        return result;
    }


    // WATERCRAFT 

    // -------------------------------------------------------------------------

    // End Optional Coverage Functions
    // =========================================================================
    // End Optional Coverage Functions



    // BEGIN CALC RATES
    // =========================================================================
    // BEGIN CALC RATES

    let calcRates = (d) => {
        if(liability_only.checked === true) {
            result = d * 4.57;
            } else if((full_coverage.checked === true && cash_value.value >= 500 && cash_value.value <= 5000)) {
                result = d * 5.72;
            } else if((full_coverage.checked === true && cash_value.value >= 5001 && cash_value.value <= 10000)) {
                result = d * 7.37;
            } else if((full_coverage.checked === true && cash_value.value >= 10001 && cash_value.value <= 15000)) {
                result = d * 9.03;
            } else if((full_coverage.checked === true && cash_value.value >= 15001 && cash_value.value <= 20000)) {
                result = d * 9.74;
            } else if((full_coverage.checked === true && cash_value.value >= 20001 && cash_value.value <= 25000)) {
                result = d * 11.08;
            } else if((full_coverage.checked === true && cash_value.value >= 25001 && cash_value.value <= 30000)) {
                result = d * 11.40;
            } else if((full_coverage.checked === true && cash_value.value >= 30001 && cash_value.value <= 35000)) {
                result = d * 12.53;
            } else if((full_coverage.checked === true && cash_value.value >= 35001 && cash_value.value <= 40000)) {
                result = d * 13.68;;
            } else if((full_coverage.checked === true && cash_value.value >= 40001 && cash_value.value <= 45000)) {
                result = d * 15.08;
            } else if((full_coverage.checked === true && cash_value.value >= 45001 && cash_value.value <= 50000)) {
                result = d * 16.13;
            } else if((full_coverage.checked === true && cash_value.value >= 50001 && cash_value.value <= 55000)) {
                result = d * 17.27;
            } else if((full_coverage.checked === true && cash_value.value >= 55001 && cash_value.value <= 60000)) {
                result = d * 18.40;
            } else if((full_coverage.checked === true && cash_value.value >= 60001 && cash_value.value <= 65000)) {
                result = d * 19.54;
            } else if((full_coverage.checked === true && cash_value.value >= 65001 && cash_value.value <= 70000)) {
                result = d * 20.67;
            } else if((full_coverage.checked === true && cash_value.value >= 70001 && cash_value.value <= 75000)) {
                result = d * 21.81;
            } else if((full_coverage.checked === true && cash_value.value >= 75001 && cash_value.value <= 80000)) {
                result = d * 22.96;
            } else if(full_coverage.checked === true && (cash_value.value >= 80001 && cash_value.value <= 85000)) {
                result = d * 24.10;
            } else if((full_coverage.checked === true && cash_value.value >= 85001 && cash_value.value <= 90000)) {
                result = d * 25.25;
            } else if((full_coverage.checked === true && cash_value.value >= 90001 && cash_value.value <= 95000)) {
                result = d * 26.39;
            } else if((full_coverage.checked === true && cash_value.value >= 95001 && cash_value.value <= 100000)) {
                result = d * 27.54;
            } else {
                return null;
            }
            return result;
    }

    // END CALC RATES
    // =========================================================================
    // END  CALC RATES

        // FORM VALIDATION  
    // =========================================================================
    // FORM VALIDATION

    let validateFields = () => {
        for (let i = 0; i < calc_liability.length; i++) {
            calc_liability[i].addEventListener('click', function () {
                if (excess_liability_1.checked === true) {
                    excess_liability_2.parentNode.className = 'error';
                    excess_liability_2.disabled = true;
                } else if (excess_liability_2.checked === true) {
                    excess_liability_1.parentNode.className = 'error';
                    excess_liability_1.disabled = true;
                } else {
                    excess_liability_1.disabled = false;
                    excess_liability_1.parentNode.className = '';
                    excess_liability_2.disabled = false;
                    excess_liability_2.parentNode.className = '';
                }
            })
        }
        
        liability_only.addEventListener('click', function () {
            cash_value.disabled = true;
            vip.checked = false;
            vip.disabled = true;
            vip.parentNode.className = 'error';
            cash_value.classList.remove('error2');
        })
        
        full_coverage.addEventListener('click', function () {
            cash_value.disabled = false;
            vip.disabled = false;
            vip.parentNode.className = '';
        })
    }

    // END VALIDATION
    // =========================================================================
    // END VALIDATION

    // HELPER FUNCTIONS FOR OPTIONS
    // =========================================================================
    // HELPER FUNCTIONS FOR OPTIONS

    let v = () => {
        if (vip.checked === true) {
            // result = (calcRates(d(a, b)) * 0.15) + calcRates(d(a,b));
            result = calcRates(d(a, b)) * 0.15;
            // result = (calcRates(d(a, b)) + ((calcRates(d(a, b)) / 0.85) - calcRates(d(a, b)))) * 0.15;
            return result;
        } else {
            result = 0;
            return result;
        }
    }
    
    let bu = () => {
        if (businessUse.checked === true) {
            result = calcRates(d(a, b)) * 0.20;
            return result;
        } else {
            result = 0;
            return result;
        }
    }
    /*
    let m = () => {
        var result;
        if (multiCar.checked === true) {
            result = 0.10;
            return result;
        } else {
            return null;
        }
    }
*/

        Date.prototype.yyyymmdd = function() {
            var mm = this.getMonth() + 1; // getMonth() is zero-based
            var dd = this.getDate();
        
            return [this.getFullYear(),
                    (mm>9 ? '' : '0') + mm,
                    (dd>9 ? '' : '0') + dd
                ].join('-');
        };


    let determineCov = () => {
        if (full_coverage.checked === true || liability_only.checked === true){
            coverage_type.innerHTML = '';
            return true;
        } else if (full_coverage.checked !== true && liability_only.checked !== true) {
            coverage_type.innerHTML = 'Please select full coverage OR liability only';
            coverage_type.style.color = '#980000';
            return false;
        }
    }

    let determineFull = () => {
        if(cash_value.value <= 100000 && cash_value.value >= 500) {
            cash_value.classList.remove('error2');
            cash_value.disabled = false;
            vip.disabled = false;
            vip.parentNode.className = '';
            return true;
        } else if(full_coverage.checked === true && (cash_value.value > 100000 || cash_value.value < 500 || cash_value.value === null)) {
            cash_value.classList.add('error2');
            return false;
        }
    }

    let determineLiability = () => {
        if(liability_only.checked === true) {
            vip.checked = false;
            return true;
        } else {
            return false;
        }
    }



    let determineEff = () => {
          let date = new Date();
          date.yyyymmdd();
          let now = date.yyyymmdd()
            if(a.value >= now) {
                dateError.innerHTML = '';
                return true;
            } else {
                dateError.style.color = '#980000';
                dateError.innerHTML = 'Please enter a date no earlier than today';
                return false;
            }
        }

        let determineExp = () => {
              let date = new Date();
              date.yyyymmdd();
              let now = date.yyyymmdd()
        
                if(b.value > now && b.value !== a.value) {
                    dateError2.innerHTML = '';
                    return true;
                } else {
                    dateError2.style.color = '#980000';
                    dateError2.innerHTML = 'Please enter a date at least one day in the future';
                    return false;
                }
            }

    // END HELPER FUNCTIONS FOR OPTIONS
    // =========================================================================
    // END HELPER FUNCTIONS FOR OPTIONS

    let loadQuote = () => {
        let coverage, territory, term;
        let options = [];
        form.style.display = 'none';
        quote.style.display = 'block';

        if(full_coverage.checked === true) {
            coverage = `Full Coverage with a vehicle value of $${cash_value.value}`;
        } else if(liability_only.checked === true) {
            coverage = `Liability Only`;
        } else {
            return null;
        }


        if(uninsured_motorist.checked === true) {
            let phrase = 'Uninsured Motorist';
            options.push(phrase);
        }
        
        if(excess_liability_1.checked === true) {
            let phrase2 ='$750,000 Excess Liability';
            options.push(phrase2);
        }
        
        if(excess_liability_2.checked === true) {
            let phrase3 = '$1,000,000 Excess Liability';
            options.push(phrase3);
        }
        
        if(watercraft_liability.checked === true) {
            let phrase4 = 'Watercraft Liability';
            options.push(phrase4);
        }
        
        if(businessUse.checked === true) {
            let phrase5 = 'Business Use';
            options.push(phrase5);
        } 
        
        if(vip.checked === true) {
            let phrase6 = 'VIP';
            options.push(phrase6);
        }

        demo3.innerHTML = coverage;
        demo5.innerHTML = options;
        demo4.innerHTML = moment(a.value).format('MM-DD-YYYY') + ' - ' + moment(b.value).format('MM-DD-YYYY');
        demo.innerHTML = "$" + totalPremium.toFixed(2);
    }


    // Final Function to fun and fire all functions!
    let execute = () => {
        validateFields();
        btn.addEventListener('click', function (e) {
            validateFields();
                if(determineCov() === true && determineEff() === true && determineExp() === true && (determineFull() === true || determineLiability() === true)) {
                let basePremium = calcRates(d(a, b)) + umCov(d(a, b)) + wtrCov(d(a, b)) + liabilityCov1(d(a, b)) + liabilityCov2(d(a, b)) + v() + bu();
                basePremium = basePremium * 0.16 + basePremium;
                basePremium = basePremium + 12;
                totalPremium = basePremium;
                loadQuote();
                return true;
                } else {
                    e.preventDefault();
                    determineCov();
                    determineFull();
                    determineEff();
                    determineExp();
                    return false;
                }
            });
        }

return {
    init: function() {
        window.onload = function() {
            form.style.display = 'block';
            quote.style.display = 'none';
        }
        execute();
    }
}

}());

SHORT.init();