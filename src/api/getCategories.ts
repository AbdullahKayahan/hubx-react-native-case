import { API_HOST } from './constants';
import { ApiResponse } from './types';

type CategoryImageDto = {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: any;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
};

export type CategoryDto = {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    rank: number;
    image: CategoryImageDto;
};

const ENDPOINT = 'getCategories';

export const getCategories = async (): Promise<ApiResponse<CategoryDto[]>> => {
    try {
        const response = await fetch(`${API_HOST}/${ENDPOINT}`);
        if (!response.ok) {
            return {
                isSuccess: false,
                error: `Failed to fetch categories: ${response.statusText}`,
            };
        }
        const json = await response.json();
        if (json && Array.isArray(json.data)) {
            return {
                isSuccess: true,
                data: json.data as CategoryDto[],
            };
        } else {
            return {
                isSuccess: false,
                error: 'Invalid data format received from API',
            };
        }
    } catch (error: any) {
        return {
            isSuccess: false,
            error: error?.message || 'Unknown error occurred',
        };
    }
};
