const mapper = new Map(
    [
        ["a", ["drum-a", ".clap-player"]],
        ["s", ["drum-s", ".hihat-player"]],
        ["d", ["drum-d", ".kick-player"]],
        ["f", ["drum-f", ".openhat-player"]],
        ["g", ["drum-g", ".boom-player"]],
        ["h", ["drum-h", ".ride-player"]],
        ["j", ["drum-j", ".snare-player"]],
        ["k", ["drum-k", ".tom-player"]],
        ["l", ["drum-l", ".tink-player"]],
    ]
);

addEventListener('keydown', (event) => {
    let letter = event.key
    if (mapper.has(letter)) {
        playSound(letter)
    }
})

const playSound = (letter) => {
    const drum_sound = mapper.get(letter)[1];
    const drum_letter = mapper.get(letter)[0];

    const player = document.querySelector(drum_sound)
    player.currentTime = 0

    const playerParent = document.getElementById(drum_letter).parentElement
    playerParent.classList.add("playing")

    player.play()
}

const removeTransition = (e) => {
    e.srcElement.classList.remove("playing")
}

const boxes = document.querySelectorAll(".box")
boxes.forEach(box => box.addEventListener("transitionend", removeTransition))
