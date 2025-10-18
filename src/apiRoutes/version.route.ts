/**
 * Copyright (c) 2025 Devvle - All Rights Reserved
 */

import { API_ENDPOINT } from '../class/constants';

/**
 * Creates a new version of a prompt with AI generation
 */
export async function createPromptVersion(
	apiKey: string,
	userId: string,
	promptId: string,
	input: any,
	source?: string,
	label?: string,
	parentVersionId?: string
): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/prompts/${promptId}/version/new`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			},
			body: JSON.stringify({
				input,
				source,
				label,
				parentVersionId
			})
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`API request failed with status ${response.status}: ${errorText}`);
		}

		return response;
	} catch (error: any) {
		throw new Error(`Failed to create prompt version: ${error.message}`);
	}
}

/**
 * Lists all versions of a prompt
 */
export async function listPromptVersions(
	apiKey: string,
	userId: string,
	promptId: string
): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/prompts/${promptId}/version/list`, {
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
		throw new Error(`Failed to list prompt versions: ${error.message}`);
	}
}

/**
 * Activates a specific version of a prompt
 */
export async function activatePromptVersion(
	apiKey: string,
	userId: string,
	promptId: string,
	versionId: string
): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/prompts/${promptId}/version/activate`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			},
			body: JSON.stringify({ versionId })
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`API request failed with status ${response.status}: ${errorText}`);
		}

		return response;
	} catch (error: any) {
		throw new Error(`Failed to activate prompt version: ${error.message}`);
	}
}

/**
 * Updates metadata of a specific version
 */
export async function updatePromptVersion(
	apiKey: string,
	userId: string,
	promptId: string,
	versionId: string,
	updateData: { output?: string; label?: string }
): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/prompts/${promptId}/version/update`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			},
			body: JSON.stringify({ versionId, updateData })
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`API request failed with status ${response.status}: ${errorText}`);
		}

		return response;
	} catch (error: any) {
		throw new Error(`Failed to update prompt version: ${error.message}`);
	}
}

/**
 * Deletes a specific version of a prompt
 */
export async function deletePromptVersion(
	apiKey: string,
	userId: string,
	promptId: string,
	versionId: string
): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/prompts/${promptId}/version/delete`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			},
			body: JSON.stringify({ versionId })
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`API request failed with status ${response.status}: ${errorText}`);
		}

		return response;
	} catch (error: any) {
		throw new Error(`Failed to delete prompt version: ${error.message}`);
	}
}
