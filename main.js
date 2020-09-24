
const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiBin = document.querySelector("#emoji-container")


for (let i = 0; i < myEmojis.length; i++) {
  const emoji = document.createElement("span")
  emoji.textContent = myEmojis[i]
  emojiBin.append(emoji)
}