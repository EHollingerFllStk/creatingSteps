//Assign variables
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
//use querySelectorAll to bring .circle in as a node list(array)
const circles = document.querySelectorAll('.circle')

//index represents whichever one is active (1 by default)
let currentActive = 1

next.addEventListener('click', () => {
  currentActive++
  //if statement prevents line from going past step 4
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  //console.log(currentActive) will stop at 4
  //add update function to update the DOM
  update()
})

prev.addEventListener('click', () => {
  currentActive--
  //if statement prevents line from going below 1
  if (currentActive < 1) {
    currentActive = 1
  }

  console.log(currentActive)
  //add update function to update the DOM
  update()
})

//update function

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
  //console.log(actives.length, circles.length) //will ret the number of actives and circles is always 4

  // to set the styling for the line: use -1 to seperate into 1/3s
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  //use if else statement to disable buttons when at their limits
  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
