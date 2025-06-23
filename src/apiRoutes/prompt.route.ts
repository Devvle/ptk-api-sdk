/* Copyright (c) 2025 - Devvle - PromptTK */

import type { PromptTemplate } from '../types/prompt.types';

/**
 * Sends a prompt template to the PromptTK API for processing.
 * The function validates the input parameters and makes a POST request to the API endpoint.
 * It returns the response from the API if successful, or throws an error if the request fails
 * @param {PromptTemplate} promptTemplate - The prompt template to be sent to the API.
 * @param {string} apiKey - The API key for authentication.
 * @param {string} userId - The user ID for tracking.
 * @returns {Promise<Response>} - A promise that resolves to the API response.
 * @throws {Error} If the promptTemplate, apiKey, or userId is invalid or missing; or if the API request fails.
 */
export async function requestPrompt(
	promptTemplate: PromptTemplate,
	apiKey: string,
	userId: string
): Promise<Response> {
	if (
		!promptTemplate ||
		typeof promptTemplate !== 'object' ||
		Object.keys(promptTemplate).length === 0
	) {
		throw new Error('Invalid or missing promptTemplate parameter.');
	}
	if (!apiKey || typeof apiKey !== 'string') {
		throw new Error('Invalid or missing apiKey parameter.');
	}
	if (apiKey.substring(0, 4) !== 'ptk-') {
		throw new Error('Invalid API key format. It should start with "ptk-".');
	}
	if (!userId || typeof userId !== 'string') {
		throw new Error('Invalid or missing userId parameter.');
	}

	try {
		const response = await fetch('https://api.prompttk.com/dev/prompt', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			},
			body: JSON.stringify({ prompt: promptTemplate })
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`API request failed with status ${response.status}: ${errorText}`);
		}

		return response;
	} catch (error: any) {
		throw new Error(`Failed to send prompt template: ${error.message}`);
	}
}
