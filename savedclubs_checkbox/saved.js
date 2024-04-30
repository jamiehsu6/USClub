document.addEventListener('DOMContentLoaded', function() {

    // Define an array of checkbox IDs and corresponding localStorage keys
    const checkboxes = [
        { id: 'tmg', localStorageKey: 'tmgState' },
        { id: 'wvc', localStorageKey: 'wvcState' },
        { id: 'innod', localStorageKey: 'innodState' },
        { id: 'rdc', localStorageKey: 'rdcState' },
        { id: 'spark', localStorageKey: 'sparkState' },
        { id: 'bsa', localStorageKey: 'bsaState' }
    ];

    // Function to toggle div visibility and update Local Storage
    function toggleDiv(checkbox, localStorageKey) {
        let divId = checkbox.id + '-saved';
        let div = document.getElementById(divId);

        if (checkbox.checked) {
            div.style.display = 'block'; 
            localStorage.setItem(localStorageKey, 'checked');
        } else {
            div.style.display = 'none';
            localStorage.setItem(localStorageKey, 'unchecked');
        }
    }

    // Initialize checkboxes based on Local Storage
    checkboxes.forEach(({ id, localStorageKey }) => {
        let checkbox = document.getElementById(id);
        let checkboxState = localStorage.getItem(localStorageKey);
        
        if (checkboxState === 'checked') {
            checkbox.checked = true;
            document.getElementById(`${id}-saved`).style.display = 'block';
        }
    });

    // Add event listeners to checkboxes to toggle div visibility and update Local Storage
    checkboxes.forEach(({ id, localStorageKey }) => {
        let checkbox = document.getElementById(id);
        checkbox.addEventListener('change', function() {
            toggleDiv(checkbox, localStorageKey);
        });
    });

});