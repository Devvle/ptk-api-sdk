/**
 * Copyright (c) Devvle - All Rights Reserved
 *2025
 */

/**
 * Copyright (c) 2025-present Devvle, PromptTK.
 */

export type PromptTemplate = {
	endUserDescription?: string;
	promptSenderDescription?: string;
	relationship?: string;
	mustHaves?: string;
	contextRequirements?: string;
	lengthRequirements?: string;
	avoidElements?: string;
	styleAndTone?: string[];
	examplePrompts?: string;
	mainPrompt: string;
	outputType?: string;
	responseFormat?: string;
	promptGoal?: string;
	hallucinationControl?: string;
	projectId?: string;
};
