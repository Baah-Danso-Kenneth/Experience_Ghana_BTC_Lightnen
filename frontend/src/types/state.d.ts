import { AccomodationProps, AllExperienceProps, ItineraryProps, RecommendationProps } from "./regular";

export type ExperienceStateProps = {
    experiences: AllExperienceProps[];
    loading: boolean;
    error: string | null
}

export type RecommendationState = {
    recommendations: RecommendationProps[];
}

export type ItineraryState={
    itineraries: ItineraryProps[];
    loading:boolean;
    error: string | null;
}

export type AccommodationState={
    accommodations: AccomodationProps[];
    loading:boolean;
    error: string | null;
}