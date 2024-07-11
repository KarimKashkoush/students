function openCloseSidebar() {
    let sidebar = document.getElementById("sidebar")
    let sidebarSpans = document.querySelectorAll(".contact span")
    let openIcon = document.getElementById("openIcon")

    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")
        sidebarSpans.forEach((ele) => {
            ele.style.display = "none";
        })
        if (openIcon.classList.contains("fa-circle-xmark")) {
            openIcon.classList.remove("fa-circle-xmark")
            openIcon.classList.add("fa-circle-left")
        }
    } else {
        sidebar.classList.add("active")
        sidebarSpans.forEach((ele) => {
            ele.style.display = "block";
        })
        openIcon.classList.add("fa-circle-xmark")
        openIcon.classList.remove("fa-circle-left")
    }
}

// Form Validate

function nationalityChange() {
    let nationalitySelect = document.getElementById("nationality");
    let nationalityInput = document.getElementById("nationalityInput")
    if (nationalitySelect.value == "سعودي") {
        nationalityInput.style.display = "none";
        nationalityInput.value = "سعودي";
    } else {
        nationalityInput.value = "";
        nationalityInput.style.display = "block";
    }
}

function healthyChange() {
    let healthySelect = document.getElementById("healthy");
    let healthyInput = document.getElementById("healthyInput")
    if (healthySelect.value == "لا") {
        healthyInput.style.display = "none";
        healthyInput.value = "لا";
    } else {
        healthyInput.value = "";
        healthyInput.style.display = "block";
    }
}

function printPage() {
    print();
}



function updateTime() {
    const timeElement = document.getElementById('time');
    const currentTime = moment().format('ss : mm : hh A');
    const arabicTime = currentTime.replace('AM', 'ص').replace('PM', 'م');
    timeElement.innerText = arabicTime;

    const arabicDateElement = document.getElementById('dateM');
    const dateTable = document.getElementById('dateTableM');
    const currentDate = moment().format('YYYY / MM / DD');
    const arabicDate = moment().locale('ar-sa').format('DD / MM / YYYY');
    arabicDateElement.innerText = arabicDate;
    dateTable.innerText = arabicDate;

    const dayElement = document.getElementById('day');
    const dayTable = document.getElementById('dayTable');
    dayElement.innerText = moment().format('dddd');
    dayTable.innerText = moment().format('dddd');

}

setInterval(updateTime, 1000);
updateTime();