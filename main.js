import "./libraries/css-toggle-switch-master/dist/toggle-switch.css"
import "./normalize.css"
import "./styles.css"

// document.querySelector("#app").innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `;

function addNotification() {
  const alertBanner = document.getElementById("alert")
  alertBanner.innerHTML = `<div class="alert-banner">
      <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
  to complete</p>
      <p class="alert-banner-close">x</p>
    </div>`
  alertBanner.addEventListener("click", (e) => {
    const element = e.target
    if (element.classList.contains("alert-banner-close")) {
      alertBanner.style.display = "none"
      document.getElementById("bell-notification").style.display = "none"
    }
    let msg = new SpeechSynthesisUtterance()
    msg.text = "Alert deleted."
    speechSynthesis.speak(msg)
  })
}

addNotification()

// CHART WIDGETS
// Traffic Chart
let trafficCanvas = document.getElementById("traffic-chart")

let trafficData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 1,
      fill: true,
      tension: 0.4,
    },
  ],
}

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0,
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}

let trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: trafficData,
  options: trafficOptions,
})

//Traffic Chart Time Modes & Cassette Buttons
function changeTrafficChartTimeModes() {
  const trafficLinks = document.getElementsByClassName("traffic-nav-link")
  const trafficLinksArray = Array.from(trafficLinks)

  function removeActiveClass() {
    const activeTrafficButton = document.querySelectorAll(".active")
    activeTrafficButton.forEach((button) => {
      button.classList.remove("active")
    })
  }

  trafficLinksArray.forEach((button) => {
    button.addEventListener("click", (e) => {
      removeActiveClass()
      e.target.classList.add("active")
      console.log(e)
    })
  })
}

changeTrafficChartTimeModes()

// Daily Traffic
const dailyCanvas = document.getElementById("daily-chart")

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "# of Hits",
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: "#7477BF",
      borderWidth: 1,
    },
  ],
}
const dailyOptions = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}
let dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: dailyData,
  options: dailyOptions,
})

// Mobile Users
const mobileCanvas = document.getElementById("mobile-chart")
const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [
    {
      label: "# of Users",
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
    },
  ],
}
const mobileOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      labels: {
        boxWidth: 20,
        fontStyle: "bold",
      },
    },
  },
}
let mobileChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
})

// MESSAGE USER SECTION
const user = document.getElementById("userField")
const message = document.getElementById("messageField")
const send = document.getElementById("send")

send.addEventListener("click", (e) => {
  // ensure user and message fields are filled out
  console.log(e)
  e.preventDefault()
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending")
  } else if (user.value === "") {
    alert("Please fill out user field before sending")
  } else if (message.value === "") {
    alert("Please fill out message field before sending")
  } else {
    alert(`Message successfully sent to: ${user.value}`)
  }
})
