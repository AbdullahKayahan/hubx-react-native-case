import { API_HOST } from './constants';
import { ApiResponse } from './types';

export type QuestionDto = {
    id: number;
    title: string;
    subtitle: string;
    image_uri: string;
    uri: string;
    order: number;
};

const ENDPOINT = 'getQuestions';

export const getQuestions = async (): Promise<ApiResponse<QuestionDto[]>> => {
    try {
        const response = await fetch(`${API_HOST}/${ENDPOINT}`);
        if (!response.ok) {
            return {
                isSuccess: false,
                error: `Failed to fetch questions: ${response.statusText}`,
            };
        }
        const data = await response.json();
        return {
            isSuccess: true,
            data: data as QuestionDto[],
        };
    } catch (error: any) {
        return {
            isSuccess: false,
            error: error?.message || 'Unknown error occurred',
        };
    }
};
