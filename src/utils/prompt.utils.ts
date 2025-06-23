/* Copyright (c) 2025 - Devvle - PromptTK */

import type { PromptTemplate } from '../types/prompt.types';

/**
 * Generates a prompt template based on the provided parameters.
 * @param {object} params - The parameters for the prompt template.
 * @returns {PromptTemplate} The generated prompt template.
 */
export function generatePromptTemplate({
	avoidElements,
	contextRequirements,
	endUserDescription,
	examplePrompts,
	hallucinationControl,
	lengthRequirements,
	mainPrompt,
	mustHaves,
	outputType,
	projectId,
	promptGoal,
	promptSenderDescription,
	relationship,
	responseFormat,
	styleAndTone
}: {
	[key: string]: string | string[] | null | undefined;
}): PromptTemplate {
	// Validate required fields
	if (!mainPrompt || typeof mainPrompt !== 'string' || mainPrompt.trim() === '') {
		throw new Error('Missing information, Please complete the required fields.');
	}

	// Ensure styleAndTone is an array
	if (!Array.isArray(styleAndTone)) {
		styleAndTone = [];
	}

	// Ensure everything else is a string and default to empty string if not provided
	endUserDescription = checkString(endUserDescription);
	mainPrompt = checkString(mainPrompt);
	promptSenderDescription = checkString(promptSenderDescription);
	relationship = checkString(relationship);
	mustHaves = checkString(mustHaves);
	contextRequirements = checkString(contextRequirements);
	lengthRequirements = checkString(lengthRequirements);
	avoidElements = checkString(avoidElements);
	examplePrompts = checkString(examplePrompts);
	outputType = checkString(outputType);
	responseFormat = checkString(responseFormat);
	promptGoal = checkString(promptGoal);
	hallucinationControl = checkString(hallucinationControl);
	projectId = checkString(projectId);

	return {
		endUserDescription,
		promptSenderDescription,
		relationship,
		mustHaves,
		contextRequirements,
		lengthRequirements,
		avoidElements,
		styleAndTone,
		examplePrompts,
		mainPrompt,
		outputType,
		responseFormat,
		promptGoal,
		hallucinationControl,
		projectId
	};
}

/**
 * Checks if the value is a string and returns it, or an empty string if not.
 * @param {string} value - The value to check.
 * @returns {string} The value if it's a string, or an empty string.
 */
function checkString(value: any): string {
	return typeof value === 'string' ? value : '';
}
