// Function to update the current time
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Function to display a random fact
function displayRandomFact() {
    const facts = [
        "Addlyn is a project first created in 2017 by Paul Limpin in a 3rd year PLTW HS Class.",
        "Addlyn's name comes from a spinoff of Adenylyl Cyclase, a enzyme learned about in Human Physiology.",
        "OpenAI, in addition to other 3rd party programs and homemade models, power this model.",
        "Check out Paul's other projects in BidenBlast and BroVisitedHisFriendLmao on Github.",
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const factElement = document.getElementById('random-fact');
    factElement.textContent = randomFact;
}

// Update the time every second
setInterval(updateTime, 1000);

// Display a random fact on page load
window.onload = function() {
    updateTime();
    displayRandomFact();
};
