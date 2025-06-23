/**
 * Copyright (c) 2025 Devvle - All Rights Reserved
 */

import { API_ENDPOINT } from '../class/constants';

export async function validateApiKey(apiKey: string, userId: string): Promise<Response> {
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
		const response = await fetch(`${API_ENDPOINT}/dev/validate/key`, {
			method: 'POST',
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
		throw new Error(`Failed to validate api key: ${error.message}`);
	}
}
