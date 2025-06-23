# PromptTK SDK

Welcome to the PromptTK SDK! This SDK provides a simple and efficient way to interact with the PromptTK API, allowing you to make requests for prompts, training data and testing your fine tuned models.

## Getting Started

Please ensure you have visted the [PromptTK website](https://prompttk.com) to create an account and obtain your API key. The SDK is designed to work seamlessly with the PromptTK API, enabling you to leverage its capabilities in your applications.

## Installation

To install the PromptTK SDK, you can use npm:

```sh
npm install @devvle/ptk-api-sdk
```

## Features

- **Prompt Generation**: Easily generate and refine prompts using the API.
- **Training Data**: Request training data for your models.
- **Model Testing**: Test your fine-tuned models with ease.
- **Error Handling**: Built-in error handling for API requests.

## Usage

To use the PromptTK SDK, you need to import it into your project and initialize it with your API key. Here's a basic example:

```javascript
import { PromptTK } from '@devvle/ptk-api-sdk';

const promptTK = new PromptTK({
	userId: 'your-user-id',
	apiKey: 'your-api-key'
});
```

### Example: Generating a Prompt

```ts
async function generatePrompt() {
	try {
		const response: string = await promptTK.generatePrompt({
			mainPrompt: 'Create a prompt for a chatbot that can answer questions about space.',
			endUserDescription: 'This is aimed at space camp students.',
			hallucinationControl: 'factual'
		});
		console.log('Generated Prompt:', response);
	} catch (error) {
		console.error('Error generating prompt:', error);
	}
}
generatePrompt();
```

## Documentation

🚧 **Under construction** 🚧

For detailed documentation on how to use the PromptTK SDK, please refer to the [PromptTK Documentation](https://docs.prompttk.com).
