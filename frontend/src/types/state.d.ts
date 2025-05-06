import { AccomodationProps, AllExperienceProps, EXcludedProps, IncludedProps, ItineraryProps, MapContentTypes, ProductCategoryTypes, ProductTypes, RecommendationProps } from "./regular";

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

export type MapContentState={
    mapcontents: MapContentTypes[];
    loading:boolean;
    error: string | null;
}

export type IncludedState={
    includedItems: IncludedProps[];
    loading:boolean;
    error: string | null
}

export type ExcludedState={
    excludedItems: EXcludedProps[];
    loading:boolean;
    error: string | null
}

export type ProductState={
    products: ProductImageTypes[];
    loading:boolean;
    error: string | null
}

export type CategoryState={
    categories: ProductCategoryTypes[];
    selected:string;
    loading:boolean;
    error: string | null
}