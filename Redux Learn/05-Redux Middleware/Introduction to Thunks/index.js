const remindMeTo = task => {
  return `Remember to ${task}!!!`;
}

const remindMeLater = task => {
  return () => {
    return remindMeTo(task)
  }
}

const reminder = remindMeLater("lol")
console.log(reminder)