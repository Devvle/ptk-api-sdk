/**
 * Copyright (c) 2025 Devvle - All Rights Reserved
 */

import * as routes from '../apiRoutes';
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

	/** ---- Api Keys ---- */
	async validateApiKey(): Promise<Response> {
		const response = await routes.validateApiKey(this.apiKey, this.userId);
		if (!response.ok) {
			throw new Error(`API key validation failed: ${response.statusText}`);
		}
		return await response.json();
	}

	/** ---- Prompts ---- */

	async fetchAllPrompts(): Promise<string[]> {
		const response = await routes.fetchAllPrompts(this.apiKey, this.userId);
		return await response.json();
	}

	async fetchPromptById(promptId: string): Promise<string> {
		const response = await routes.fetchPromptById(this.apiKey, this.userId, promptId);
		return await response.json();
	}

	async updatePrompt(promptId: string, promptText: string): Promise<string> {
		const response = await routes.updatePrompt(this.apiKey, this.userId, promptId, promptText);
		return await response.json();
	}

	async deletePrompt(promptId: string): Promise<string> {
		const response = await routes.deletePrompt(this.apiKey, this.userId, promptId);
		return await response.json();
	}

	/** ---- Prompt Versions ---- */

	async createPromptVersion(
		promptId: string,
		input: any,
		source?: string,
		label?: string,
		parentVersionId?: string
	): Promise<string> {
		const response = await routes.createPromptVersion(
			this.apiKey,
			this.userId,
			promptId,
			input,
			source,
			label,
			parentVersionId
		);
		return await response.json();
	}

	async listPromptVersions(promptId: string): Promise<string> {
		const response = await routes.listPromptVersions(this.apiKey, this.userId, promptId);
		return await response.json();
	}

	async activatePromptVersion(promptId: string, versionId: string): Promise<string> {
		const response = await routes.activatePromptVersion(
			this.apiKey,
			this.userId,
			promptId,
			versionId
		);
		return await response.json();
	}

	async updatePromptVersion(
		promptId: string,
		versionId: string,
		updateData: { output?: string; label?: string }
	): Promise<string> {
		const response = await routes.updatePromptVersion(
			this.apiKey,
			this.userId,
			promptId,
			versionId,
			updateData
		);
		return await response.json();
	}

	async deletePromptVersion(promptId: string, versionId: string): Promise<string> {
		const response = await routes.deletePromptVersion(
			this.apiKey,
			this.userId,
			promptId,
			versionId
		);
		return await response.json();
	}

	/** ---- Usage & Analytics ---- */

	async getUsageSummary(startDate?: Date | string | number): Promise<string> {
		const response = await routes.getUsageSummary(this.apiKey, this.userId, startDate);
		return await response.json();
	}

	async get90DaysUsage(): Promise<string> {
		const response = await routes.get90DaysUsage(this.apiKey, this.userId);
		return await response.json();
	}

	/** ---- Projects ---- */

	async getAllProjects(): Promise<string> {
		const response = await routes.getAllProjects(this.apiKey, this.userId);
		return await response.json();
	}

	async getProjectsWithLimit(limit: number): Promise<string> {
		const response = await routes.getProjectsWithLimit(this.apiKey, this.userId, limit);
		return await response.json();
	}

	async getRecentProjects(limit: number): Promise<string> {
		const response = await routes.getRecentProjects(this.apiKey, this.userId, limit);
		return await response.json();
	}

	async createProject(name: string, description?: string): Promise<string> {
		const response = await routes.createProject(this.apiKey, this.userId, {
			name,
			description
		});
		return await response.json();
	}

	async getProjectById(projectId: string): Promise<string> {
		const response = await routes.getProjectById(this.apiKey, this.userId, projectId);
		return await response.json();
	}

	async updateProject(
		projectId: string,
		updateData: { name?: string; description?: string }
	): Promise<string> {
		const response = await routes.updateProject(
			this.apiKey,
			this.userId,
			projectId,
			updateData
		);
		return await response.json();
	}

	async deleteProject(projectId: string, transferToProjectId?: string): Promise<string> {
		const response = await routes.deleteProject(
			this.apiKey,
			this.userId,
			projectId,
			transferToProjectId
		);
		return await response.json();
	}

	async generatePrompt(
		options: { [key: string]: any },
		promptName?: string,
		projectId?: string
	): Promise<string> {
		const promptTemplate: PromptTemplate = generatePromptTemplate(options);
		const response = await routes.requestPrompt(
			{ ...promptTemplate },
			this.apiKey,
			this.userId,
			projectId,
			promptName
		);
		return await response.json();
	}

	/* ---- Projects ---- */
}
