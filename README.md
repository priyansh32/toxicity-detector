# Text Toxicity Detection

This project uses the TensorFlow.js toxicity model to classify text according to whether it exhibits offensive attributes or not. The toxicity model detects whether text contains toxic content such as threatening language, insults, obscenities, identity-based hate, or any explicit language.

The toxicity model used in this project provides a percentage that represents the likelihood that text contains toxic content. However, it's important to note that a higher percentage doesn't necessarily mean higher toxicity. The model is not perfect and may make mistakes, so it's important to use your own judgement when interpreting the results.

![image](https://user-images.githubusercontent.com/75668169/229852883-67e92838-9a0f-4bdd-8800-0615cc0360e5.png)

## Getting Started

To get started with this project, you'll need to install Node.js and npm. You can download Node.js from the official website [here](https://nodejs.org/en/).

Once you have Node.js installed, you can clone this repository and install the dependencies by running the following commands:

```bash
git clone https://github.com/priyansh32/toxicity-detector.git
```

```bash
cd toxicity-detector
```

```bash
npm install
```

## Usage

To run this project locally, you can use the following command:

```
npm run dev
```

This will start a development server at [http://localhost:3000](http://localhost:3000).

## Credits

This project was built using Next.js and Tailwind CSS. The TensorFlow.js toxicity model was used for text classification.

## Contact

If you have any questions about this project, feel free to reach out to me on Twitter [@priyanshh32](https://twitter.com/priyanshh32).
