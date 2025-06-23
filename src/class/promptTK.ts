/**
 * Copyright (c) 2025 Devvle - All Rights Reserved
 */

import { validateApiKey } from '../apiRoutes/keys.route';
import { requestPrompt } from '../apiRoutes/prompt.route';
import { PromptTemplate } from '../types/prompt.types';
import { generatePromptTemplate } from '../utils/prompt.utils';

export interface PromptTKOptions {
	userId: string;
	apiKey: string;
}

/**
 * The PromptTK class provides methods to interact with the PromptTK API.
 * It allows users to generate prompt templates and validate API keys.
 *
 * @class
 * @param {PromptTKOptions} options - An object containing the API key and user ID.
 * @property {string} apiKey - The API key for authentication.
 * @property {string} userId - The user ID for tracking.
 */
export class PromptTK {
	private apiKey: string;
	private userId: string;

	constructor(options: PromptTKOptions) {
		this.apiKey = options.apiKey;
		this.userId = options.userId;
	}

	/**
	 * Generates a prompt template based on the provided options.
	 * @param options - An object containing various parameters to generate a prompt template.
	 * The options must include a `mainPrompt` property, which is a string that serves as the main prompt for the template.
	 * The options object can include properties like:
	 * - endUserDescription: Description for the end user.
	 * - promptSenderDescription: Description for the sender of the prompt.
	 * - relationship: Relationship context for the prompt.
	 * - mustHaves: Must-have elements for the prompt.
	 * @returns {Promise<string>} - A promise that resolves to the generated prompt.
	 * @throws {Error} If the API request fails or if the API key is invalid.
	 */
	async generatePrompt(options: { [key: string]: any }): Promise<string> {
		const promptTemplate: PromptTemplate = generatePromptTemplate(options);
		const response = await requestPrompt(promptTemplate, this.apiKey, this.userId);
		return await response.json();
	}

	/**
	 *  Validates the API key by making a request to the PromptTK API.
	 *  This method checks if the API key is valid and associated with the provided user ID
	 * @returns {Promise<Response>} - A promise that resolves to the API response.
	 * @throws {Error} If the API key validation fails.
	 */
	async validateApiKey(): Promise<Response> {
		const response = await validateApiKey(this.apiKey, this.userId);
		if (!response.ok) {
			throw new Error(`API key validation failed: ${response.statusText}`);
		}
		return await response.json();
	}
}
