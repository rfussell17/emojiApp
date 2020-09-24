
const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiBin = document.querySelector("#emoji-container")


for (let i = 0; i < myEmojis.length; i++) {
  const emoji = document.createElement("span")
  emoji.textContent = myEmojis[i]
  emojiBin.append(emoji)
}


const addBtn = document.getElementById("push-btn")
const inputBox = document.getElementById("emoji-input")

addBtn.addEventListener("click", handleAddBtn)

function handleAddBtn(){
  if(inputBox.value){
  myEmojis.push(inputBox.value)
  console.log(myEmojis)
  inputBox.value = ""
  } else {
    inputBox.value = ""
  }
}