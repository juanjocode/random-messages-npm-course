const messages = [
    "Oscar",
    "Ana",
    "Yesica",
    "Diego",
    "Juan"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message)
};

module.exports = { randomMsg};