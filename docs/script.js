// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Conversion History
const historyList = document.getElementById("history");
let history = [];

function addHistory(entry) {
  history.unshift(entry);
  if (history.length > 10) history.pop(); // Keep only last 10
  historyList.innerHTML = history.map(item => `<li>${item}</li>`).join("");
}

// Temperature Conversion
const tempInput = document.getElementById("tempInput");
const tempUnit = document.getElementById("tempUnit");
const tempResult = document.getElementById("tempResult");

function convertTemp() {
  const val = parseFloat(tempInput.value);
  if (isNaN(val)) return tempResult.textContent = "";
  let c, f, k;

  if (tempUnit.value === "C") { c = val; f = (val * 9/5) + 32; k = val + 273.15; }
  else if (tempUnit.value === "F") { c = (val - 32) * 5/9; f = val; k = c + 273.15; }
  else { c = val - 273.15; f = (c * 9/5) + 32; k = val; }

  tempResult.textContent = `Converted: ${c.toFixed(2)} °C | ${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
  addHistory(`Temp: ${val} ${tempUnit.value} → ${c.toFixed(2)}°C, ${f.toFixed(2)}°F, ${k.toFixed(2)}K`);
}
tempInput.addEventListener("input", convertTemp);
tempUnit.addEventListener("change", convertTemp);

// Length Conversion
const lengthInput = document.getElementById("lengthInput");
const lengthUnit = document.getElementById("lengthUnit");
const lengthResult = document.getElementById("lengthResult");

function convertLength() {
  const val = parseFloat(lengthInput.value);
  if (isNaN(val)) return lengthResult.textContent = "";
  let meters;

  if (lengthUnit.value === "m") meters = val;
  else if (lengthUnit.value === "km") meters = val * 1000;
  else if (lengthUnit.value === "cm") meters = val / 100;
  else if (lengthUnit.value === "ft") meters = val * 0.3048;
  else meters = val * 0.0254;

  lengthResult.textContent = `Converted: ${meters.toFixed(2)} m | ${(meters/1000).toFixed(2)} km | ${(meters*100).toFixed(2)} cm | ${(meters*3.281).toFixed(2)} ft | ${(meters*39.37).toFixed(2)} in`;
  addHistory(`Length: ${val} ${lengthUnit.value} → ${meters.toFixed(2)}m`);
}
lengthInput.addEventListener("input", convertLength);
lengthUnit.addEventListener("change", convertLength);

// Weight Conversion
const weightInput = document.getElementById("weightInput");
const weightUnit = document.getElementById("weightUnit");
const weightResult = document.getElementById("weightResult");

function convertWeight() {
  const val = parseFloat(weightInput.value);
  if (isNaN(val)) return weightResult.textContent = "";
  let kg;

  if (weightUnit.value === "kg") kg = val;
  else if (weightUnit.value === "g") kg = val / 1000;
  else kg = val * 0.4536;

  weightResult.textContent = `Converted: ${kg.toFixed(2)} kg | ${(kg*1000).toFixed(2)} g | ${(kg*2.205).toFixed(2)} lb`;
  addHistory(`Weight: ${val} ${weightUnit.value} → ${kg.toFixed(2)}kg`);
}
weightInput.addEventListener("input", convertWeight);
weightUnit.addEventListener("change", convertWeight);

// Time Conversion
const timeInput = document.getElementById("timeInput");
const timeUnit = document.getElementById("timeUnit");
const timeResult = document.getElementById("timeResult");

function convertTime() {
  const val = parseFloat(timeInput.value);
  if (isNaN(val)) return timeResult.textContent = "";
  let seconds;

  if (timeUnit.value === "s") seconds = val;
  else if (timeUnit.value === "min") seconds = val * 60;
  else seconds = val * 3600;

  timeResult.textContent = `Converted: ${seconds.toFixed(2)} s | ${(seconds/60).toFixed(2)} min | ${(seconds/3600).toFixed(2)} hr`;
  addHistory(`Time: ${val} ${timeUnit.value} → ${seconds.toFixed(2)}s`);
}
timeInput.addEventListener("input", convertTime);
timeUnit.addEventListener("change", convertTime);
