// eslint-disable-next-line no-undef
var network = new brain.NeuralNetwork();

//cases for training the neural network
network.train([
    //if input is equal to black the output is white
    { input: { valRed: 0, valGreen: 0, valBlue: 0 }, output: { color: 1 } },
    //if input is equal to white the output is black
    { input: { valRed: 1, valGreen: 1, valBlue: 1 }, output: { color: 0 } },
    //if input is equal to green the output is black
    { input: { valRed: 0, valGreen: 1, valBlue: 0 }, output: { color: 0 } },
    //if input is equal to blue the output is white
    { input: { valRed: 0, valGreen: .43, valBlue: 1 }, output: { color: 1 } },
    //if input is equal to red the output is black
    { input: { valRed: 1, valGreen: 0, valBlue: 0 }, output: { color: 1 } },
])

export const neuralNetwork = (valRed, valGreen, valBlue) => {

    // prediction color is 1 = white and 0 = black
    var predictionColor;

    //input gets the field values from the color picker
    const input = {
        valvalRed: valRed / 255,
        valGreen: valGreen / 255,
        valBlue: valBlue / 255
    }

    //run the neural network with the input values
    predictionColor = network.run(input)

    //return the prediction color
    return predictionColor.color > 0.5 ? "white" : "black";
}