// Get data
fetch('./data.json')
.then(response => response.json())
.then(json_data =>  {
  json_data.forEach(element => {
      console.log(element.title);
    // daily_current.push(element.timeframes.daily.current);
    // daily_previous.push(element.timeframes.daily.previous);
    // weekly_current.push(element.timeframes.weekly.current);
    // weekly_previous.push(element.timeframes.weekly.previous);
    // monthly_current.push(element.timeframes.monthly.current);
    // monthly_previous.push(element.timeframes.monthly.previous);
  })
})

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