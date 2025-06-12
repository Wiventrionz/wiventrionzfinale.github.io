const characterList = ['Shiori', 'Biboo', 'Nerissa', 'Fuwawa', 'Mococo', 'ERB', 'Gigi', 'Ceci', 'Raora'];

const sounds = {};
characterList.forEach(name => {
    sounds[name] = [
        `${name}_1.wav`,
        `${name}_2.wav`,
        `${name}_3.wav`
    ];
});
function playSound(name) {
    const soundOptions = sounds[name];
    const randomFile = soundOptions[Math.floor(Math.random() * soundOptions.length)];
    const audio = new Audio(`./sounds/${randomFile}`);
    audio.play();
}