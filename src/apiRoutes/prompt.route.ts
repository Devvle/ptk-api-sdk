/**
 * Copyright (c) 2025 Devvle - All Rights Reserved
 */

import { API_ENDPOINT } from '../class/constants';
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
	userId: string,
	projectId?: string,
	promptName?: string
): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/prompts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			},
			body: JSON.stringify({ input: promptTemplate, projectId, promptName })
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

export async function fetchAllPrompts(apiKey: string, userId: string): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/prompts`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			}
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`API request failed with status ${response.status}: ${errorText}`);
		}

		return response;
	} catch (error: any) {
		throw new Error(`Failed to fetch prompts: ${error.message}`);
	}
}

export async function fetchPromptById(
	apiKey: string,
	userId: string,
	promptId: string
): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/prompts/byid/${promptId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			}
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`API request failed with status ${response.status}: ${errorText}`);
		}

		return response;
	} catch (error: any) {
		throw new Error(`Failed to fetch prompt: ${error.message}`);
	}
}

export async function updatePrompt(
	apiKey: string,
	userId: string,
	promptId: string,
	promptText: string
): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/prompts/update/${promptId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			},
			body: JSON.stringify({ promptText })
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`API request failed with status ${response.status}: ${errorText}`);
		}

		return response;
	} catch (error: any) {
		throw new Error(`Failed to update prompt: ${error.message}`);
	}
}
