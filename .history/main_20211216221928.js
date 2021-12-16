// Display data
let periodOptionList = document.getElementsByName('period');

function displayData(period) {{
    console.log(period);
}}
periodOptionList.forEach(periodOption => {
    periodOption.addEventListener('click', function() {
        if (periodOption.checked) {
            displayData(periodOption.value);
        }
    })
})