
const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiBin = document.querySelector("#emoji-container")
const inputBox = document.getElementById("emoji-input")

function renderEmojis(){
  emojiBin.innerHTML = ""
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement("span")
    emoji.textContent = myEmojis[i]
    emojiBin.append(emoji)
  }
}

renderEmojis()

const addBtn = document.getElementById("push-btn")
addBtn.addEventListener("click", handleAddBtn)

function handleAddBtn(){
  if(inputBox.value){
  myEmojis.push(inputBox.value)
  console.log(myEmojis)
  inputBox.value = ""
  renderEmojis();
  }
}

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", handleUnshiftBtn)

function handleUnshiftBtn(){
  if(inputBox.value){
    myEmojis.unshift(inputBox.value)
    console.log(myEmojis)
    inputBox.value = ""
    renderEmojis();
    }
}