// Display data
let periodOptionList = document.getElementsByName('period');

periodOptionList.forEach(periodOption => {
    periodOption.addEventListener('click', function() {
        if (periodOption.checked) {
            console.log(periodOption);
        }
    })
})