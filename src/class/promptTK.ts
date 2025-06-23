/**
 * Copyright (c) 2025-present Devvle, PromptTK.
 */

import { requestPrompt } from '../apiRoutes/prompt.route';
import { PromptTemplate } from '../types/prompt.types';

export interface PromptTKOptions {
	userId: string;
	apiKey: string;
}

export class PromptTK {
	private apiKey: string;
	private userId: string;

	constructor(options: PromptTKOptions) {
		this.apiKey = options.apiKey;
		this.userId = options.userId;
	}

	async generatePrompt(options: { [key: string]: any }): Promise<string> {
		const response = await requestPrompt(options as PromptTemplate, this.apiKey, this.userId);
		return await response.json();
	}
}
