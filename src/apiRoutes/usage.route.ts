/**
 * Copyright (c) 2025 Devvle - All Rights Reserved
 */

import { API_ENDPOINT } from '../class/constants';

/**
 * Get usage summary for a specific date range
 */
export async function getUsageSummary(
	apiKey: string,
	userId: string,
	startDate?: Date | string | number
): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/usage/summary`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			},
			body: JSON.stringify({ startDate: startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) })
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`API request failed with status ${response.status}: ${errorText}`);
		}

		return response;
	} catch (error: any) {
		throw new Error(`Failed to get usage summary: ${error.message}`);
	}
}

/**
 * Get 90 days usage records
 */
export async function get90DaysUsage(
	apiKey: string,
	userId: string
): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/usage/90Days`, {
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
		throw new Error(`Failed to get 90 days usage: ${error.message}`);
	}
}
