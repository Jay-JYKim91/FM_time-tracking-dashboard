
let dailyCurrentList   = [];
let dailyPreviousList  = [];
let weeklyCurrentList  = [];
let weeklyPreviousList = [];
let monthlyCurrentList = [];
let monthlyPreviousList = [];
// Get data
fetch('./data.json')
.then(response => response.json())
.then(json_data =>  {
  json_data.forEach(element => {
    // console.log(element);
    dailyCurrentList.push(element.timeframes.daily.current);
    dailyPreviousList.push(element.timeframes.daily.previous);
    weeklyCurrentList.push(element.timeframes.weekly.current);
    weeklyPreviousList.push(element.timeframes.weekly.previous);
    monthlyCurrentList.push(element.timeframes.monthly.current);
    monthlyPreviousList.push(element.timeframes.monthly.previous);
  })
})
.then(result => {
    // const def_current = document.getElementsByClassName("hours");
    // const def_previous = document.getElementsByClassName("previous-hours"); 
    // for (let i = 0; i < 6; i++){
    //     def_current[i].innerHTML = daily_current[i] + "hrs";
    //     def_previous[i].innerHTML = "Yesterday " + " - " + daily_previous[i] + "hrs";
    // }}
    const defaultCurrent = document.getElementsByClassName('time');
    const defaultPrevious = document.getElementsByClassName('previous-time');
    for (let i = 0; i < daily_current.length; i++ {
        defaultCurrent[i].innerText = dailyCurrentList[i] + 'hrs';
        defaultPrevious[i].innerHext = 'Yesterday' + dailyPreviousList[i] + 'hrs';
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