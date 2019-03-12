
'use strict';

const LONG = (function() {

    // Global Variables; For calculation and multipliers
    let result, premium;

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
        type: ".coverage__type",
        term: ".coverage__term",
        plan: '.coverage__plan',
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

    // Plan A and B Object for clases and id's
    let plan = {
        a: '#planA',
        b: '#planB',
        baja: '#baja'
    }

    // Term Object for classes and id's
    let term = {
        policy: '#policy_term'
    }

    // Vehicle Object for classes and id's
    let vehicle = {
        value: '#vehicle_value'
    }

    let coverage = {
        full: '#full_coverage'
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
    let innerUM = document.querySelector(innerHTML.um);
    let coverage_type = document.querySelector(innerHTML.type);
    let coverage_term = document.querySelector(innerHTML.term);
    let coverage_plan = document.querySelector(innerHTML.plan);

    // Optional Coverage Variables
    let uninsured_motorist = document.querySelector(optionalCoverage.um);
    let watercraft_liability = document.querySelector(optionalCoverage.wl);
    let excess_liability_1 = document.querySelector(optionalCoverage.e1);
    let excess_liability_2 = document.querySelector(optionalCoverage.e2);
    let calc_liability = document.querySelectorAll(optionalCoverage.cl);

    // Plans both A && B
    let planA = document.querySelector(plan.a);
    let planB = document.querySelector(plan.b);

    // Term for policies
    let term_select = document.querySelector(term.policy);

    // Vehicle value variable   
    let cash_value = document.querySelector(vehicle.value);

    // HELPER Variables - Concerning Scope
    let extra = cash_value.value - 35000; // cash_value is now defined
    let multiplier = extra / 5000;
    // HELPER Variables - Concerning Scope

    // Full Coverage variable
    let full_coverage = document.querySelector(coverage.full);
    
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



    // Optional Coverage Functions
    // =========================================================================
    // Optional Coverage Functions

    // UNINSURED MOTORIST

    let umCov = () => {
        if (term_select.value === 'one_month' && uninsured_motorist.checked === true) {
            result = 20;
        } else if (term_select.value === 'three_month' && uninsured_motorist.checked === true) {
            result = 22;
        } else if (term_select.value === 'six_month' && uninsured_motorist.checked === true) {
            result = 24;
        } else if (term_select.value === 'twelve_month' && uninsured_motorist.checked === true) {
            result = 28;
        } else {
            result = 0;
        }
        return result;
    }

    // UNINSURED MOTORIST

    // -------------------------------------------------------------------------

    // EXCESS LIABILITY

    let liabilityCov = () => {

        if (term_select.value === 'one_month' && excess_liability_1.checked === true) {
            result = 37;
        } else if (term_select.value === 'three_month' && excess_liability_1.checked === true) {
            result = 41;
        } else if (term_select.value === 'six_month' && excess_liability_1.checked === true) {
            result = 46;
        } else if (term_select.value === 'twelve_month' && excess_liability_1.checked === true) {
            result = 54;
        } else if (term_select.value === 'one_month' && excess_liability_2.checked === true) {
            result = 87;
        } else if (term_select.value === 'three_month' && excess_liability_2.checked === true) {
            result = 97;
        } else if (term_select.value === 'six_month' && excess_liability_2.checked === true) {
            result = 107;
        } else if (term_select.value === 'twelve_month' && excess_liability_2.checked === true) {
            result = 120;
        } else {
            result = 0;
        }
        return result;
    }

    // EXCESS LIABILITY

    // -------------------------------------------------------------------------

    // WATERCRAFT 

    let  wtrCov = () => {
        if (term_select.value === 'one_month' && watercraft_liability.checked === true) {
            result = 97;
        } else if (term_select.value === 'three_month' && watercraft_liability.checked === true) {
            result = 107;
        } else if (term_select.value === 'six_month' && watercraft_liability.checked === true) {
            result = 120;
        } else if (term_select.value === 'twelve_month' && watercraft_liability.checked === true) {
            result = 138;
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



    // BEGIN CALC RATES!
    // =========================================================================
    // BEGIN CALC RATES!

    let calcRates = () => {

        
        // BAJA AND SONORAL ONLY LIABILITY ONLY

    
        if (term_select.value === 'one_month' && planA.checked === true && liability_only.checked === true) {
            result = 107.27;
        } else if (term_select.value === 'three_month' && planA.checked === true && liability_only.checked === true) {
            result = 122.02;
        } else if (term_select.value === 'six_month' && planA.checked === true && liability_only.checked === true) {
            result = 142.44;
        } else if (term_select.value === 'twelve_month' && planA.checked === true && liability_only.checked === true) {
            result = 168.25;
        } else if (term_select.value === 'one_month' && planB.checked === true && liability_only.checked === true) {
            result = 126.83;
        } else if (term_select.value === 'three_month' && planB.checked === true && liability_only.checked === true) {
            result = 143.46;
        } else if (term_select.value === 'six_month' && planB.checked === true && liability_only.checked === true) {
            result = 167.39;
        } else if (term_select.value === 'twelve_month' && planB.checked === true && liability_only.checked === true) {
            result = 204.92;
        } else if (term_select.value === 'one_month' && baja.checked === true && liability_only.checked === true) {
            result = 107.27 - (0.15 * 107.27)
        } else if (term_select.value === 'three_month' && baja.checked === true && liability_only.checked === true) {
            result = 122.02 - (0.15 * 122.02)
        } else if (term_select.value === 'six_month' && baja.checked === true && liability_only.checked === true) {
            result = 142.44 - (0.15 * 142.44);
        } else if (term_select.value === 'twelve_month' && baja.checked === true && liability_only.checked === true) {
            result = 168.25 - (0.15 * 168.25);
    
    
            // BAJA SONORA ONLY FULL COVERAGE ONE MONTH
    
    
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 500 && cash_value.value <= 4999) {
            result = 152.53 - (0.15 * 152.53);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 5000 && cash_value.value <= 9999) {
            result = 189.01 - (0.15 * 189.01);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 10000 && cash_value.value <= 14999) {
            result = 225.50 - (0.15 * 225.50);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 15000 && cash_value.value <= 19999) {
            result = 263.34 - (0.15 * 263.34);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 20000 && cash_value.value <= 24999) {
            result = 284.77 - (0.15 * 284.77);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 25000 && cash_value.value <= 29999) {
            result = 294.12 - (0.15 * 294.12);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 30000 && cash_value.value <= 34999) {
            result = 311.13 - (0.15 * 311.13);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 35000) {
            var extra = cash_value.value - 35000;
            var multiplier = extra / 5000;
            multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
            result = 311.13 + (multiplier * 22.00);
            result = result - (0.15 * result);
    
    
            // BAJA AND SONORA FULL COVERAGE THREE MONTH
    
    
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 500 && cash_value.value <= 4999) {
            result = 172.48 - (0.15 * 172.48);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 5000 && cash_value.value <= 9999) {
            result = 215.41 - (0.15 * 215.41);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 10000 && cash_value.value <= 14999) {
            result = 255.94 - (0.15 * 255.94);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 15000 && cash_value.value <= 19999) {
            result = 296.48 - (0.15 * 296.48);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 20000 && cash_value.value <= 24999) {
            result = 316.62 - (0.15 * 316.62);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 25000 && cash_value.value <= 29999) {
            result = 327.01 - (0.15 * 327.01);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 30000 && cash_value.value <= 34999) {
            result = 345.91 - (0.15 * 345.91);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 35000) {
            var extra = cash_value.value - 35000;
            var multiplier = extra / 5000;
            multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
            result = 345.91 + (multiplier * 23.00);
            result = result - (0.15 * result);
    
    
    
            // BAJA AND SONORA FULL COVERAGE SIX MONTHS
    
    
    
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 500 && cash_value.value <= 4999) {
            result = 200.98 - (0.15 * 200.98);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 5000 && cash_value.value <= 9999) {
            result = 244.23 - (0.15 * 244.23);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 10000 && cash_value.value <= 14999) {
            result = 288.81 - (0.15 * 288.81);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 15000 && cash_value.value <= 19999) {
            result = 330.84 - (0.15 * 330.84);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 20000 && cash_value.value <= 24999) {
            result = 351.72 - (0.15 * 351.72);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 25000 && cash_value.value <= 29999) {
            result = 363.78 - (0.15 & 363.78);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 30000 && cash_value.value <= 34999) {
            result = 375.76 - (0.15 * 375.76);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 35000) {
            var extra = cash_value.value - 35000;
            var multiplier = extra / 5000;
            multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
            result = 375.76 + (multiplier * 25.00);
            result = result - (0.15 * result);
    
    
            // BAJA AND SONORA ONLY ANNUAL
    
    
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 500 && cash_value.value <= 4999) {
            result = 237.11 - (0.15 * 237.11);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 5000 && cash_value.value <= 9999) {
            result = 284.19 - (0.15 * 284.19);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 10000 && cash_value.value <= 14999) {
            result = 331.26 - (0.15 * 331.26);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 15000 && cash_value.value <= 19999) {
            result = 378.33 - (0.15 * 378.33);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 20000 && cash_value.value <= 24999) {
            result = 425.41 - (0.15 * 425.41);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 25000 && cash_value.value <= 29999) {
            result = 472.48 - (0.15 * 472.48);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 30000 && cash_value.value <= 34999) {
            result = 497.95 - (0.15 * 497.95);
        } else if (baja.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 35000) {
            var extra = cash_value.value - 35000;
            var multiplier = extra / 5000;
            multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
            result = 497.95 + (multiplier * 32.00);
            result = result - (0.15 * result);
    

            // PLAN A COVERAGE ONE MONTH
    
    
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 500 && cash_value.value <= 4999) {
            result = 152.53;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 5000 && cash_value.value <= 9999) {
            result = 189.01;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 10000 && cash_value.value <= 14999) {
            result = 225.50;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 15000 && cash_value.value <= 19999) {
            result = 263.34;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 20000 && cash_value.value <= 24999) {
            result = 284.77;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 25000 && cash_value.value <= 29999) {
            result = 294.12;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 30000 && cash_value.value <= 34999) {
            result = 311.13;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 35000) {
            var extra = cash_value.value - 35000;
            var multiplier = extra / 5000;
            multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
            result = 311.13 + (multiplier * 22.00);
    
    
            // PLAN A COVERAGE THREE MONTH
    
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 500 && cash_value.value <= 4999) {
            result = 172.48;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 5000 && cash_value.value <= 9999) {
            result = 215.41;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 10000 && cash_value.value <= 14999) {
            result = 255.94;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 15000 && cash_value.value <= 19999) {
            result = 296.48;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 20000 && cash_value.value <= 24999) {
            result = 316.62;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 25000 && cash_value.value <= 29999) {
            result = 327.01;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 30000 && cash_value.value <= 34999) {
            result = 345.91;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 35000) {
            var extra = cash_value.value - 35000;
            var multiplier = extra / 5000;
            multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
            result = 345.91 + (multiplier * 23.00);
    
    
    
            // PLAN A FULL COVERAGE SIX MONTHS
    
    
    
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 500 && cash_value.value <= 4999) {
            result = 200.98;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 5000 && cash_value.value <= 9999) {
            result = 244.23;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 10000 && cash_value.value <= 14999) {
            result = 288.81;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 15000 && cash_value.value <= 19999) {
            result = 330.84;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 20000 && cash_value.value <= 24999) {
            result = 351.72;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 25000 && cash_value.value <= 29999) {
            result = 363.78;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 30000 && cash_value.value <= 34999) {
            result = 375.76;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 35000) {
            var extra = cash_value.value - 35000;
            var multiplier = extra / 5000;
            multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
            result = 375.76 + (multiplier * 25.00);
    
    
            // PLAN A FULL COVERAGE ANNUAL
    
    
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 500 && cash_value.value <= 4999) {
            result = 237.11;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 5000 && cash_value.value <= 9999) {
            result = 284.19;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 10000 && cash_value.value <= 14999) {
            result = 331.26;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 15000 && cash_value.value <= 19999) {
            result = 378.33;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 20000 && cash_value.value <= 24999) {
            result = 425.41;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 25000 && cash_value.value <= 29999) {
            result = 472.48;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 30000 && cash_value.value <= 34999) {
            result = 497.95;
        } else if (planA.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 35000) {
            var extra = cash_value.value - 35000;
            var multiplier = extra / 5000;
            multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
            result = 497.95 + (multiplier * 32.00);
        }
    
    
    
        //----------------------------------------------------------------
        // PLAN B FULL COVERAGE ONE MONTH
        //----------------------------------------------------------------
        else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 500 && cash_value.value <= 4999) {
            result = 178.03;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 5000 && cash_value.value <= 9999) {
            result = 219.61;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 10000 && cash_value.value <= 14999) {
            result = 261.20;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 15000 && cash_value.value <= 19999) {
            result = 303.98;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 20000 && cash_value.value <= 24999) {
            result = 347.93;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 25000 && cash_value.value <= 29999) {
            result = 390.70;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 30000 && cash_value.value <= 34999) {
            result = 435.85;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'one_month' && cash_value.value >= 35000) {
            var extra = cash_value.value - 35000;
            var multiplier = extra / 5000;
            multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
            result = 435.85 + (multiplier * 22.00);
        }
    
    
    
        //----------------------------------------------------------------
        // PLAN B FULL COVERAGE THREE MONTH
        //----------------------------------------------------------------\
        else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 500 && cash_value.value <= 4999) {
            result = 202.58;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 5000 && cash_value.value <= 9999) {
            result = 248.92;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 10000 && cash_value.value <= 14999) {
            result = 295.25;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 15000 && cash_value.value <= 19999) {
            result = 341.59;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 20000 && cash_value.value <= 24999) {
            result = 387.93;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 25000 && cash_value.value <= 29999) {
            result = 434.27;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 30000 && cash_value.value <= 34999) {
            result = 480.60;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'three_month' && cash_value.value >= 35000) {
            var extra = cash_value.value - 35000;
            var multiplier = extra / 5000;
            multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
            result = 480.60 + (multiplier * 23.00);
        }
    
    
    
        //----------------------------------------------------------------
        // PLAN B FULL COVERAGE SIX MONTH
        //----------------------------------------------------------------
        else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 500 && cash_value.value <= 4999) {
            result = 231.71;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 5000 && cash_value.value <= 9999) {
            result = 281.61;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 10000 && cash_value.value <= 14999) {
            result = 332.70;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 15000 && cash_value.value <= 19999) {
            result = 383.79;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 20000 && cash_value.value <= 24999) {
            result = 434.88;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 25000 && cash_value.value <= 29999) {
            result = 483.59;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 30000 && cash_value.value <= 34999) {
            result = 534.69;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'six_month' && cash_value.value >= 35000) {
            var extra = cash_value.value - 35000;
            var multiplier = extra / 5000;
            multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
            result = 534.69 + (multiplier * 25.00);
        }
    
    
    
        //----------------------------------------------------------------
        // PLAN B FULL COVERAGE TWELVE MONTH
        //----------------------------------------------------------------
        else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 500 && cash_value.value <= 4999) {
            result = 279.56;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 5000 && cash_value.value <= 9999) {
            result = 334.21;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 10000 && cash_value.value <= 14999) {
            result = 390.06;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 15000 && cash_value.value <= 19999) {
            result = 445.90;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 20000 && cash_value.value <= 24999) {
            result = 501.75;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 25000 && cash_value.value <= 29999) {
            result = 557.58;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 30000 && cash_value.value <= 34999) {
            result = 613.43;
        } else if (planB.checked === true && full_coverage.checked === true && term_select.value === 'twelve_month' && cash_value.value >= 35000) {
            var extra = cash_value.value - 35000;
            var multiplier = extra / 5000;
            multiplier = ((multiplier - parseInt(multiplier)) > 0) ? parseInt(multiplier) + 1 : multiplier;
            result = 613.43 + (multiplier * 32.00);
        }
        return result;
    }

    // END CALC RATES
    // =========================================================================
    // END CALC RATES





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
            if (vehicle_value) {
                vehicle_value.disabled = true;
            }
        
            vip.disabled = true;
            vip.parentNode.className = 'error';
        })
        
        full_coverage.addEventListener('click', function () {
            if (vehicle_value) {
                vehicle_value.disabled = false;
            }
        
            vip.disabled = false;
            vip.parentNode.className = '';
        })
    }

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
        if(cash_value.value <= 300000 && cash_value.value >= 500) {
            cash_value.classList.remove('error2');
            cash_value.disabled = false;
            vip.disabled = false;
            vip.parentNode.className = '';
            return true;
        } else if(full_coverage.checked === true && (cash_value.value > 300000 || cash_value.value < 500 || cash_value.value === null)) {
            cash_value.classList.add('error2');
            return false;
        }
    }

    let determinePlan = () => {
        if(planA.checked === true || planB.checked === true || baja.checked === true) {
            coverage_plan.innerHTML = '';
            return true;
        } else {
            coverage_plan.innerHTML = 'Please select a territory in Mexico';
            coverage_plan.style.color = '#980000';
            return false;
        }
    }

    let determineTerm = () => {
        if(term_select.value === 'one_month' || term_select.value === 'three_month' || term_select.value === 'six_month' || term_select.value === 'twelve_month') {
            coverage_term.innerHTML = '';
            return true;
        } else {
            coverage_term.innerHTML = 'Please select a term of insurance';
            coverage_term.style.color = '#980000';
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

    // END VALIDATION
    // =========================================================================
    // END VALIDATION

    // HELPER FUNCTIONS FOR OPTIONS
    // =========================================================================
    // HELPER FUNCTIONS FOR OPTIONS

    let v = () => {
        if (vip.checked === true) {
            result = calcRates() * 0.15;
            if(baja.checked === true) {
               result = ((calcRates() + ((calcRates() / 0.85) - calcRates())) * 0.15)
            } else {
                result = calcRates() * 0.15;
            }
            return result;
        }
        return result;
    }
    
    let b = () => {
        if (businessUse.checked === true) {
            result = calcRates() * 0.20;
            return result;
        } else {
            return null;
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
    // END HELPER FUNCTIONS FOR OPTIONS
    // =========================================================================
    // END HELPER FUNCTIONS FOR OPTIONS

    let loadQuote = () => {
        let coverage, territory, term;
        let options = [];
        form.style.display = 'none';
        quote.style.display = 'block';
        if(baja.checked === true) {
            territory = `Baja North, Baja South and Sonora`;
        } else if(planA.checked === true) {
            territory = `Baja California Norte, Baja California Sur, Sonora, Sinaloa, Chihuahua, Durango, Coahuila, Nuevo Leon, Tamaulipas, San Luis Potosi, Zacatecas, Nayarit, Jalisco, Aguascalientes, Colima, Guanajuato, Queretaro and Michoacán`
        } else if(planB.checked === true) {
            territory = `Entire Republic of Mexico`;
        } else {
            return null;
        }

        if(full_coverage.checked === true) {
            coverage = `Full Coverage with a vehicle value of $${vehicle_value.value}`;
        } else if(liability_only.checked === true) {
            coverage = `Liability Only`;
        } else {
            return null;
        }

        if(term_select.value === 'one_month') {
            term = 'One Month';
        } else if(term_select.value === 'three_month') {
            term = 'Three Months';
        } else if(term_select.value === 'six_month') {
            term = 'Six Months';
        } else if(term_select.value ==='twelve_month') {
            term = 'Annual'
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

        demo2.innerHTML = territory;
        demo3.innerHTML = coverage;
        demo4.innerHTML = term;
        demo5.innerHTML = options;
        demo.innerHTML = "$" + premium.toFixed(2);
    }

    // Final Function to fun and fire all functions!
    let execute = () => {
        validateFields();
        btn.addEventListener('click', function (e) {
            // let multiCarDiscount = niko(); //* m();
            if(determineCov() === true && determinePlan() === true && determineTerm() === true && (determineFull() === true || determineLiability() === true)) {
                premium = calcRates() + umCov() + wtrCov() + liabilityCov() + v() + b();
                loadQuote();
                return true;
            } else {
                e.preventDefault();
                determineCov();
                determineFull();
                determinePlan();
                determineTerm();
                determineLiability();
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

LONG.init();