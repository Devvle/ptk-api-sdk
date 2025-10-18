import { validateApiKey } from './keys.route';
import {
	deletePrompt,
	fetchAllPrompts,
	fetchPromptById,
	requestPrompt,
	updatePrompt
} from './prompt.route';
import {
	activatePromptVersion,
	createPromptVersion,
	deletePromptVersion,
	listPromptVersions,
	updatePromptVersion
} from './version.route';

export {
	activatePromptVersion,
	createPromptVersion,
	deletePrompt,
	deletePromptVersion,
	fetchAllPrompts,
	fetchPromptById,
	listPromptVersions,
	requestPrompt,
	updatePrompt,
	updatePromptVersion,
	validateApiKey
};
