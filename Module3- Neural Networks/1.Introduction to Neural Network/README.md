Simple Neural Network with the same idea we will be using for our Self Driving Car.

Weights are numerical values associated with the connections between neurons in different layers of a neural network.
Each connection between two neurons has a weight that represents the strength of that connection. So, theycontrol the contribution of input values to the final prediction. 

Weights are random from -1 to 1.
Biases are random from 0 to 1.

When input*weight>bias, output is 1 (Activate)
Else, input*weight<bias, output is 0 (Deactivate)

Our self Driving Car will be pressing one of the 4 keys(Forward,left,right,reverse) according to; if some sum is greater than bias or not, as well.

The weights and biases are randomly initialized initially. BUT,

When a value is input into the neural network after it has been created, the calculation for prediction involves the fixed weight and bias values. Since these values remain constant, the output prediction for the same input will also remain constant.

In practical neural network applications, we typically aim for consistent behavior, and fixed initialization is used  to ensure that the network learns from same point during training.