function convertLength() {
    const meters = document.getElementById('length').value;
    const feet = meters * 3.28084;
    document.getElementById('length-output').innerText = `${feet.toFixed(2)} feet`;
}

function convertWeight() {
    const kilograms = document.getElementById('weight').value;
    const pounds = kilograms * 2.20462;
    document.getElementById('weight-output').innerText = `${pounds.toFixed(2)} lbs`;
}

function convertTemperature() {
    const celsius = document.getElementById('temperature').value;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('temperature-output').innerText = `${fahrenheit.toFixed(2)} °F`;
}

function convertVolume() {
    const liters = document.getElementById('volume').value;
    const gallons = liters * 0.264172;
    document.getElementById('volume-output').innerText = `${gallons.toFixed(2)} gallons`;
}

function convertArea() {
    const squareMeters = document.getElementById('area').value;
    const squareFeet = squareMeters * 10.7639;
    document.getElementById('area-output').innerText = `${squareFeet.toFixed(2)} sq ft`;
}

function convertSpeed() {
    const kmh = document.getElementById('speed').value;
    const mph = kmh * 0.621371;
    document.getElementById('speed-output').innerText = `${mph.toFixed(2)} mph`;
}

function convertTime() {
    const seconds = document.getElementById('time').value;
    const minutes = seconds / 60;
    document.getElementById('time-output').innerText = `${minutes.toFixed(2)} minutes`;
}

function convertCurrency() {
    const usd = document.getElementById('currency').value;
    const eur = usd * 0.85; // Example conversion rate
    document.getElementById('currency-output').innerText = `${eur.toFixed(2)} EUR`;
}

function convertData() {
    const bytes = document.getElementById('data').value;
    const kilobytes = bytes / 1024;
    document.getElementById('data-output').innerText = `${kilobytes.toFixed(2)} KB`;
}

function convertPower() {
    const watts = document.getElementById('power').value;
    const horsepower = watts / 745.7;
    document.getElementById('power-output').innerText = `${horsepower.toFixed(2)} hp`;
}
