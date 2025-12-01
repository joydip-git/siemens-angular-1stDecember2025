//every inner function has access to its outer scope variables, not vice versa

let xdata = 100 //outer scope variable w.r.t inner method and callMe method

function callMe() {
    console.log(xdata);
    let y = 200//outer scope variable w.r.t inner method
    function inner() {
        let z = 300
        console.log(xdata);
        console.log(y);
        console.log(z);
    }
    inner()
}

callMe()