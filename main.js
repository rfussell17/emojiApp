
const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiBin = document.querySelector("#emojiContainer")


for (let i = 0; i < myEmojis.length; i++) {
  const emoji = document.createElement("span")
  emoji.textContent = myEmojis[i]
  emojiContainer.append(emoji)
}