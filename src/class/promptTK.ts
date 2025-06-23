/**
 * Copyright (c) 2025 Devvle - All Rights Reserved
 */

import { requestPrompt } from '../apiRoutes/prompt.route';
import { PromptTemplate } from '../types/prompt.types';
import { generatePromptTemplate } from '../utils/prompt.utils';

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
		const promptTemplate: PromptTemplate = generatePromptTemplate(options);
		const response = await requestPrompt(promptTemplate, this.apiKey, this.userId);
		return await response.json();
	}
}
