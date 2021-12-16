const defaultCurrent = document.getElementsByClassName('time');
const defaultPrevious = document.getElementsByClassName('previous-time');
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
    dailyCurrentList.push(element.timeframes.daily.current);
    dailyPreviousList.push(element.timeframes.daily.previous);
    weeklyCurrentList.push(element.timeframes.weekly.current);
    weeklyPreviousList.push(element.timeframes.weekly.previous);
    monthlyCurrentList.push(element.timeframes.monthly.current);
    monthlyPreviousList.push(element.timeframes.monthly.previous);
  })
})
.then(() => {
    for (let i = 0; i < dailyCurrentList.length; i++) {
        defaultCurrent[i].innerText = dailyCurrentList[i] + 'hrs';
        defaultPrevious[i].innerText = 'Yesterday - ' + dailyPreviousList[i] + 'hrs';
    }
})

// Display data
let periodOptionList = document.getElementsByName('period');

periodOptionList.forEach(periodOption => {
    periodOption.addEventListener('click', function() {
        if (periodOption.checked) {
            displayData(periodOption.value);
        }
    })
})

//
function displayData(period) {{
    let curList;
    let prevList;
    let detailText;

    switch (period) {
        case 'daily':
            curList = dailyCurrentList;
            prevList = dailyPreviousList;
            detailText = "Yesterday";
            break;
        case 'weekly':
            curList = weeklyCurrentList;
            prevList = weeklyPreviousList;
            detailText = "Last week";
            break;
        case 'monthly':
            curList = monthlyCurrentList;
            prevList = monthlyPreviousList;
            detailText = "Last month";
            break;
    }
    // console.log(curList);
    // console.log(detailText);
    for (let i = 0; i < dailyPreviousList.length; i++) {
        // console.log(curList[i]);
        defaultCurrent[i].innerText = curList[i] + 'hrs';
        defaultPrevious[i].innerText = detailText + '-' + prevList[i] + 'hrs';
    }
}}