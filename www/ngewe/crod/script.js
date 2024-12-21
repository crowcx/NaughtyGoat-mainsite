document.getElementById('searchBtn').addEventListener('click', showPopup);
document.getElementById('closeBtn').addEventListener('click', closePopup);
document.getElementById('googleBtn').addEventListener('click', () => search('Google'));
document.getElementById('bingBtn').addEventListener('click', () => search('Bing'));
document.getElementById('searxh').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        showPopup();
    }
});

// clock
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

// battery
document.addEventListener("DOMContentLoaded", function() {
    var batteryContainer = document.getElementById("percentage");
    var batteryLevel = document.getElementById("battery");

    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            updateBatteryLevel(battery.level);

            battery.addEventListener("levelchange", function() {
                updateBatteryLevel(battery.level);
            });
        });
    } else {
        batteryContainer.innerHTML = "-%";
    }

    function updateBatteryLevel(level) {
        batteryLevel.textContent = (level * 100) + "%";
    }
});

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
function search(engine) {
    const query = document.getElementById('searxh').value;
    if (engine === 'Google') {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else if (engine === 'Bing') {
        const gotRaped = Math.random().toString().slice(2, 18).padEnd(16, '0');
        window.location.href = `https://www.bing.com/search?q=${encodeURIComponent(query)}&form=QBLH&sp=-1&lq=0&sc=12-8&cvid=${gotRaped}`;
    }
}
