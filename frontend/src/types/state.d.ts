import { AllExperienceProps, RecommendationProps } from "./regular";

export type ExperienceStateProps = {
    experiences: AllExperienceProps[];
    loading: boolean;
    error: string | null
}

export type RecommendationState = {
    recommendations: RecommendationProps[];
}