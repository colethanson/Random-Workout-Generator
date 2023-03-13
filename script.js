const pushList = [
  {
    name: 'Bench Press',
    sets: '5',
    reps: '5',
    number: '1',
    day: 'push',
  },
  {
    name: 'Overhead Press',
    sets: '5',
    reps: '5',
    number: '2',
    day: 'push',
  },
  {
    name: 'Lateral Raise',
    sets: '5',
    reps: '15',
    number: '3',
    day: 'push',
  },
  {
    name: 'Tricep Pushdown',
    sets: '3',
    reps: '8',
    number: '4',
    day: 'push',
  },
  {
    name: 'Incline Bench Press',
    sets: '3',
    reps: '8',
    number: '5',
    day: 'push',
  },
  {
    name: 'Svend Press',
    sets: '3',
    reps: '12',
    number: '6',
    day: 'push',
  },
  {
    name: 'Cable Flyes',
    sets: '3',
    reps: '8',
    number: '7',
    day: 'push',
  },
  {
    name: 'Reverse Flyes',
    sets: '3',
    reps: '12',
    number: '8',
    day: 'push',
  },
  {
    name: 'Arnold Press',
    sets: '3',
    reps: '12',
    number: '9',
    day: 'push',
  },
  {
    name: 'Front Raise',
    sets: '3',
    reps: '15',
    number: '10',
    day: 'push',
  },
  {
    name: 'Dips',
    sets: '3',
    reps: '8',
    number: '11',
    day: 'push',
  },
  {
    name: 'Skull Crushers',
    sets: '3',
    reps: '8',
    number: '12',
    day: 'push',
  },
  {
    name: 'Overhead Tricep Extension',
    sets: '3',
    reps: '8',
    number: '13',
    day: 'push',
  },
  {
    name: 'Close Grip Bench Press',
    sets: '5',
    reps: '5',
    number: '14',
    day: 'push',
  },
  {
    name: 'Pushups',
    sets: '5',
    reps: '15',
    number: '15',
    day: 'push',
  }
]

const pullList = [
  {
    name: 'Deadlift',
    sets: '1',
    reps: '5',
    number: '1',
    day: 'pull',
  },
  {
    name: 'Barbell Rows',
    sets: '3',
    reps: '5',
    number: '2',
    day: 'pull',
  },
  {
    name: 'Pull-ups',
    sets: '3',
    reps: '5',
    number: '3',
    day: 'pull',
  },
  {
    name: 'Romanian Deadlift',
    sets: '3',
    reps: '8',
    number: '4',
    day: 'pull',
  },
  {
    name: 'Bicep Curls',
    sets: '4',
    reps: '8',
    number: '5',
    day: 'pull',
  },
  {
    name: 'Hammer Curls',
    sets: '4',
    reps: '8',
    number: '6',
    day: 'pull',
  },
  {
    name: 'Preacher Curls',
    sets: '4',
    reps: '8',
    number: '7',
    day: 'pull',
  },
  {
    name: 'Spider Curls',
    sets: '4',
    reps: '8',
    number: '8',
    day: 'pull',
  },
  {
    name: 'Face Pulls',
    sets: '5',
    reps: '15',
    number: '9',
    day: 'pull',
  },
  {
    name: 'Shrugs',
    sets: '5',
    reps: '15',
    number: '10',
    day: 'pull',
  },
  {
    name: 'Lat Pulldown',
    sets: '3',
    reps: '8',
    number: '11',
    day: 'pull',
  },
  {
    name: 'Seated Cable Row',
    sets: '3',
    reps: '8',
    number: '12',
    day: 'pull',
  },
  {
    name: 'Chest Supported Row',
    sets: '3',
    reps: '8',
    number: '13',
    day: 'pull',
  },
  {
    name: 'Renegade Row',
    sets: '3',
    reps: '8',
    number: '14',
    day: 'pull',
  },
  {
    name: 'Dumbbell Pullovers',
    sets: '3',
    reps: '8',
    number: '15',
    day: 'pull',
  }
]

const legList = [
  {
    name: 'Squat',
    sets: '5',
    reps: '5',
    number: '1',
    day: 'legs',
  },
  {
    name: 'Hack Squat',
    sets: '5',
    reps: '5',
    number: '2',
    day: 'legs',
  },
  {
    name: 'Leg Press',
    sets: '3',
    reps: '8',
    number: '3',
    day: 'legs',
  },
  {
    name: 'Leg Curls',
    sets: '3',
    reps: '8',
    number: '4',
    day: 'legs',
  },
  {
    name: 'Leg Extensions',
    sets: '3',
    reps: '8',
    number: '5',
    day: 'legs',
  },
  {
    name: 'Bulgarian Split Squat',
    sets: '3',
    reps: '8',
    number: '6',
    day: 'legs',
  },
  {
    name: 'Barbell Hip Thrust',
    sets: '3',
    reps: '12',
    number: '7',
    day: 'legs',
  },
  {
    name: 'Box Jumps',
    sets: '5',
    reps: '15',
    number: '8',
    day: 'legs',
  },
  {
    name: 'Kettlebell Lunge',
    sets: '4',
    reps: '10',
    number: '9',
    day: 'legs',
  },
  {
    name: 'Calf Raises ',
    sets: '5',
    reps: '15',
    number: '10',
    day: 'legs',
  },
  {
    name: 'Front Squat',
    sets: '5',
    reps: '5',
    number: '11',
    day: 'legs',
  },
  {
    name: 'Good Mornings',
    sets: '3',
    reps: '8',
    number: '12',
    day: 'legs',
  },
  {
    name: 'Reverse Kettlebell Lunge',
    sets: '4',
    reps: '10',
    number: '13',
    day: 'legs',
  },
  {
    name: 'Pistol Squat',
    sets: '1',
    reps: '5',
    number: '14',
    day: 'legs',
  },
  {
    name: 'Single Leg Kettlebell Deadlift',
    sets: '4',
    reps: '10',
    number: '15',
    day: 'legs',
  }
]

const completedBtn = document.getElementById('completed');
const failedBtn = document.getElementById('failed');
const card = document.getElementById("card");
const push = document.getElementById('push');
const pull = document.getElementById('pull');
const legs = document.getElementById('legs');
const light = document.getElementById('light');
const moderate = document.getElementById('moderate');
const vigorous = document.getElementById('vigorous');
const submitBtn = document.getElementById('submit');
const liftContainer = document.getElementById('lift-container');

function createCard() {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  if(push.checked) {
    randomPush = pushList[Math.floor(Math.random() * 15)];
    newCard.innerHTML = `
    <h3>${randomPush.name}</h3>
    <p><span id="sets">${randomPush.sets}</span> sets of <span id="reps">${randomPush.reps}</span></p>
    <input class="weight" type="text">
  `
  } else if(pull.checked) {
    randomPull = pullList[Math.floor(Math.random() * 15)];
    newCard.innerHTML = `
    <h3>${randomPull.name}</h3>
    <p><span id="sets">${randomPull.sets}</span> sets of <span id="reps">${randomPull.reps}</span></p>
    <input class="weight" type="text">
  `
  } else if(legs.checked) {
    randomLegs = legList[Math.floor(Math.random() * 15)];
    newCard.innerHTML = `
    <h3>${randomLegs.name}</h3>
    <p><span id="sets">${randomLegs.sets}</span> sets of <span id="reps">${randomLegs.reps}</span></p>
    <input class="weight" type="text">
  `
  }
  liftContainer.appendChild(newCard);
}

function removeCard() {
  liftContainer.innerHTML = '';
}

function intensitySubmit() {
  submitBtn.addEventListener('click', () => {
    removeCard();
    if(light.checked) {
      for (let i = 0; i < 4; i++) createCard(i);
    } else if(moderate.checked) {
      for (let i = 0; i < 6; i++) createCard(i);
    } else if(vigorous.checked) {
      for (let i = 0; i < 8; i++) createCard(i);
    }
  })
}

function workoutTypeSubmit() {
  submitBtn.addEventListener('click', () => {
    if(push.checked) {
      function randomPushLift() {
        randomPush = pushList[Math.floor(Math.random() * 10)];
        console.log(randomPush.name, randomPush.sets, randomPush.reps);
      }
      randomPushLift()
    } else if(pull.checked) {
      function randomPullLift() {
        randomPull = legList[Math.floor(Math.random() * 12)];
        console.log(randomPull.name, randomPull.sets, randomPull.reps);
      }
      randomPullLift()
    } else if(legs.checked) {
      function randomLegLift() {
        randomLeg = legList[Math.floor(Math.random() * 12)];
        console.log(randomLeg.name, randomLeg.sets, randomLeg.reps);
      }
      randomLegLift()
    }
  })
}

workoutTypeSubmit()
intensitySubmit()