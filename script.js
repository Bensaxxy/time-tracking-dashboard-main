let data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const buttons = document.querySelectorAll(".activity-tracker-option");

const activateClickedButton = (button) => {
  buttons.forEach((b) => b.classList.remove("active"));
  button.classList.add("active");
};

// Clear previous activities
const clearActivities = () => {
  const activities = document.querySelectorAll(".activity-tracker-activity");
  activities.forEach((a) => a.remove());
};
const renderCards = (clickedOption) => {
  clearActivities();
  const activityTracker = document.querySelector("section.activity-tracker");

  const calcTimeFrame = (option) => {
    if (option === "daily") {
      return "Yesterday";
    } else if (option === "weekly") {
      return "Last Week";
    } else if (option === "monthly") {
      return "Last Month";
    }
  };

  data.forEach((activity) => {
    const name = activity.title;
    const activityClass = name.toLowerCase().replace(/\s/g, "-");
    const timeframes = activity.timeframes[clickedOption];
    const previousTimeFrames = calcTimeFrame(clickedOption);
    const section = document.createElement("section");
    section.classList.add("activity-tracker-activity", activityClass);
    const stringToObject = `<div class="activity-bg">
    <img src="/images//icon-${activityClass}.svg" alt="work">
  </div>
  <div class="activity-info">
    <header class="activity-header">
      <h2 class="activity-name">
        ${name}
      </h2>
      <div class="activity-options">
        <img src="./images//icon-ellipsis.svg" alt="">
      </div>
    </header>
    <div class="activity-timeframes">
      <h3 class="activity-current-timeframes">${timeframes.current}hrs</h3>
      <div class="activity-previous-timeframes">
        <p class="time-window">${previousTimeFrames} </p>
        <p> - </p>
        <p class="time">${timeframes.previous}hrs</p>
      </div>
    </div>
  </div>`;

    section.innerHTML = stringToObject;
    activityTracker.append(section);
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    activateClickedButton(button);
    const clickedOption = button.dataset.option; //? daily, weekly, monthly
    renderCards(clickedOption);
  });
});

buttons[1].click();
