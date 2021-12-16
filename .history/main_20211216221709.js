// Display data
let periodOptionList = document.getElementsByName('period');
console.log(periodOptionList);
periodOptionList.forEach(periodOption => {
    periodOption.addEventListener('click', function() {
        if (periodOption.checked) {
            console.log('checked!');
        }
    })
})