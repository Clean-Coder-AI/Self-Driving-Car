class NeuralNetwork {
  constructor() {
    // math.random() gives value between 0 and 1
    // so multiplying that by 2 gives value between 0 and 2
    // substracting 1 gives values between -1 and 1
    this.weight = Math.random()*2-1;
    this.bias = Math.random();
  }

  // Make a prediction
  predict(input) {
    const sum = input * this.weight; // Calculate sum of input and weight
    const output = sum > this.bias ? 1 : 0; // Activate output if sum > bias
    return output;
  }
}

const neuralNetwork = new NeuralNetwork();

const predictButton = document.getElementById("predictButton");
const inputElement = document.getElementById("input");
const predictionResult = document.getElementById("predictionResult");

predictButton.addEventListener("click", () => {
  const input = parseFloat(inputElement.value);
  const prediction = neuralNetwork.predict(input);
  predictionResult.textContent = `Input: ${input}\nPrediction: ${prediction}`;
});
