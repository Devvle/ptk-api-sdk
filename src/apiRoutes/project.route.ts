/**
 * Copyright (c) 2025 Devvle - All Rights Reserved
 */

import { API_ENDPOINT } from '../class/constants';

/**
 * Get all projects for a user
 */
export async function getAllProjects(apiKey: string, userId: string): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/projects`, {
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
		throw new Error(`Failed to get all projects: ${error.message}`);
	}
}

/**
 * Get projects with a limit
 */
export async function getProjectsWithLimit(
	apiKey: string,
	userId: string,
	limit: number
): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/projects/limit`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			},
			body: JSON.stringify({ limit })
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`API request failed with status ${response.status}: ${errorText}`);
		}

		return response;
	} catch (error: any) {
		throw new Error(`Failed to get projects with limit: ${error.message}`);
	}
}

/**
 * Get most recent projects with a limit
 */
export async function getRecentProjects(
	apiKey: string,
	userId: string,
	limit: number
): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/projects/recent`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			},
			body: JSON.stringify({ limit })
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`API request failed with status ${response.status}: ${errorText}`);
		}

		return response;
	} catch (error: any) {
		throw new Error(`Failed to get recent projects: ${error.message}`);
	}
}

/**
 * Create a new project
 */
export async function createProject(
	apiKey: string,
	userId: string,
	projectData: { name: string; description?: string }
): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/projects/new`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			},
			body: JSON.stringify(projectData)
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`API request failed with status ${response.status}: ${errorText}`);
		}

		return response;
	} catch (error: any) {
		throw new Error(`Failed to create project: ${error.message}`);
	}
}

/**
 * Get a project by ID
 */
export async function getProjectById(
	apiKey: string,
	userId: string,
	projectId: string
): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/projects/byid`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			},
			body: JSON.stringify({ projectId })
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`API request failed with status ${response.status}: ${errorText}`);
		}

		return response;
	} catch (error: any) {
		throw new Error(`Failed to get project by ID: ${error.message}`);
	}
}

/**
 * Update a project
 */
export async function updateProject(
	apiKey: string,
	userId: string,
	projectId: string,
	updateData: { name?: string; description?: string }
): Promise<Response> {
	try {
		const response = await fetch(`${API_ENDPOINT}/v1/projects/update`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			},
			body: JSON.stringify({ projectId, ...updateData })
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`API request failed with status ${response.status}: ${errorText}`);
		}

		return response;
	} catch (error: any) {
		throw new Error(`Failed to update project: ${error.message}`);
	}
}

/**
 * Delete a project
 */
export async function deleteProject(
	apiKey: string,
	userId: string,
	projectId: string,
	transferToProjectId?: string
): Promise<Response> {
	try {
		const body: any = { projectId };
		if (transferToProjectId) {
			body.transferToProjectId = transferToProjectId;
		}

		const response = await fetch(`${API_ENDPOINT}/v1/projects/delete`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
				'x-user-id': userId
			},
			body: JSON.stringify(body)
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`API request failed with status ${response.status}: ${errorText}`);
		}

		return response;
	} catch (error: any) {
		throw new Error(`Failed to delete project: ${error.message}`);
	}
}
