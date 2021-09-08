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

let weeklyTrafficData = {
  labels: [
    "16-17",
    "18-19",
    "20-21",
    "22-23",
    "24-25",
    "26-27",
    "28-29",
    "30-31",
    "32-33",
    "34-35",
    "36-37",
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
    duration: 200,
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

const trafficActions = [
  {
    name: "Randomize",
    handler(chart) {
      chart.data.datasets.forEach((dataset) => {
        dataset.data = Utils.numbers({
          count: chart.data.labels.length,
          min: -100,
          max: 100,
        })
      })
      chart.update()
    },
  },
]

let trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: weeklyTrafficData,
  options: trafficOptions,
  actions: trafficActions,
})

function randomNumberInRange(low, high) {
  return high - (high - low * Math.random())
}

function randomize(chart) {
  chart.data.datasets.forEach((dataset) => {
    dataset.data = dataset.data.map((x) => randomNumberInRange(500, 3000))
  })
  chart.update()
}

//Traffic Chart Time Modes & Cassette Buttons
function changeTrafficChartTimeModes(updateChart) {
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
      updateChart()
      console.log(e)
    })
  })
}

changeTrafficChartTimeModes(() => randomize(trafficChart))

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
    user.value = ""
    message.value = ""
  }
})
