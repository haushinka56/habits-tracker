//alert("Have a Nice One!")
const form = document.querySelector("#form-habits")
const habitsSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = habitsSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já adicionado")
    return
  }
  alert("Adicionado com sucesso")
  habitsSetup.addDay(today)
}

function save() {
  localStorage.setItem("myHabitsSetup", JSON.stringify(habitsSetup.data))
}

const data = JSON.parse(localStorage.getItem("myHabitsSetup")) || {}

habitsSetup.setData(data)
habitsSetup.load()
