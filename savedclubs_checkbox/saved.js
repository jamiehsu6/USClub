document.addEventListener('DOMContentLoaded', function() {

    // Retrieve the state of each checkbox from Local Storage
    let tmgState = localStorage.getItem('tmgState');
    let wvcState = localStorage.getItem('wvcState');
    let innodState = localStorage.getItem('innodState');
    let rdcState = localStorage.getItem('rdcState');
    let sparkState = localStorage.getItem('sparkState');
    let bsaState = localStorage.getItem('bsaState');

    // Get references to the checkboxes and corresponding divs
    let tmg = document.getElementById('tmg');
    let wvc = document.getElementById('wvc');
    let innod = document.getElementById('innod');
    let rdc = document.getElementById('rdc');
    let spark = document.getElementById('spark');
    let bsa = document.getElementById('bsa');

    // Function to toggle div visibility and update Local Storage
    function toggleDiv(checkbox, localStorageKey) {
        // Construct the ID of the corresponding div
        let divId = checkbox.id + '-saved';
        let div = document.getElementById(divId);
        console.log(divId)
        console.log(tmg)
        console.log(div)

        if (checkbox.checked) {
            console.log('Checkbox changed');
            div.style.display = 'block'; 
            localStorage.setItem(localStorageKey, 'checked');
        }else{
            console.log('Checkbox none');
            div.style.display = 'none';
            localStorage.setItem(localStorageKey, 'unchecked');
        }
    }

// Initialize checkboxes based on Local Storage
if (tmgState === 'checked') {
    console.log('tmg checked');
    tmg.checked = true;
    document.getElementById('tmg-saved').style.display = 'block';
} 
if (wvcState === 'checked') {
    console.log('wvc checked');
    wvc.checked = true;
    document.getElementById('wvc-saved').style.display = 'block';
}
if (innodState === 'checked') {
    innod.checked = true;
    document.getElementById('innod-saved').style.display = 'block';
}
if (rdcState === 'checked') {
    rdc.checked = true;
    document.getElementById('rdc-saved').style.display = 'block';
}
if (sparkState === 'checked') {
    spark.checked = true;
    document.getElementById('spark-saved').style.display = 'block';
}
if (bsaState === 'checked') {
    bsa.checked = true;
    document.getElementById('bsa-saved').style.display = 'block';
}

// Add event listeners to checkboxes to toggle div visibility and update Local Storage
tmg.addEventListener('change', function() {
    console.log('tmg toggle');
    toggleDiv(tmg, 'tmgState');
});
wvc.addEventListener('change', function() {
    console.log('wvc toggle');
    toggleDiv(wvc, 'wvcState');
});
innod.addEventListener('change', function() {
    console.log('innod toggle');
    toggleDiv(innod, 'innodState');
});
rdc.addEventListener('change', function() {
    console.log('rdc toggle');
    toggleDiv(rdc, 'rdcState');
});
spark.addEventListener('change', function() {
    console.log('spark toggle');
    toggleDiv(spark, 'sparkState');
});
bsa.addEventListener('change', function() {
    console.log('bsa toggle');
    toggleDiv(bsa, 'bsaState');
});

});
