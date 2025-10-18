import { validateApiKey } from './keys.route';
import {
	deletePrompt,
	fetchAllPrompts,
	fetchPromptById,
	requestPrompt,
	updatePrompt
} from './prompt.route';

export { deletePrompt, fetchAllPrompts, fetchPromptById, requestPrompt, updatePrompt, validateApiKey };
