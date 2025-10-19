# PromptTK SDK

A TypeScript SDK for managing AI prompts, versions, and projects through the PromptTK API. Built for developers who need enterprise-grade prompt management with version control, usage analytics, and team collaboration.

## Installation

```bash
npm install @devvle/ptk-api-sdk
```

## Quick Start

Visit [PromptTK](https://prompttk.com) to create an account and obtain your API key.

```typescript
import { PromptTK } from '@devvle/ptk-api-sdk';

// Create a PromptTK client
const ptk = new PromptTK({
	userId: 'your-user-id',
	apiKey: 'your-api-key'
});

// Create a new project
const project = await ptk.createProject(
	'Black Mesa Research', // Name
	'Research on unusual materials properties' // Description
);

// Generate a prompt
const prompt = await ptk.generatePrompt(
	{
		mainPrompt: 'Create a system prompt for analyzing experimental data',
		endUserDescription: 'Research facility staff analyzing test results',
		hallucinationControl: 'factual',
		tone: 'professional'
	}, // Prompt Template
	'Anomalous Materials Analysis', // Prompt Name
	project.data.projectId // Project ID
);

// Create a new version
const version = await ptk.createPromptVersion(
	prompt.data.promptId, // Prompt ID
	{
		mainPrompt:
			'Create a system prompt for analyzing experimental data, with emphasis on safety protocols'
	}, // Updated Template
	'Add Safety' // Version Label
);
```

## Features

- **🗂️ Project Organization** - Organize prompts into projects
- **🎯 Prompt Management** - Create, update, retrieve, and delete AI prompts
- **📦 Version Control** - Track changes and manage prompt evolution
- **📊 Usage Analytics** - Monitor API usage and performance
- **🔐 API Key Management** - Secure authentication and validation

## Support

- Documentation: [docs.prompttk.com](http://docs.prompttk.com)
- Issues: [GitHub Issues](https://github.com/devvle/ptk-api-sdk/issues)
- Website: [prompttk.com](https://prompttk.com)

## License

Copyright (c) 2025 Devvle - All Rights Reserved
