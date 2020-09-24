
const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiBin = document.querySelector("#emojiContainer")


for (let i = 0; i < myEmojis.length; i++) {
  var newSpan = document.createElement("span")
  newSpan.textContent = myEmojis[i]
  emojiContainer.append(newSpan)
}