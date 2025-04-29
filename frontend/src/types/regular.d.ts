export type ShopItemsProps={
    title:string;
    image:string;
    description:string;
    price:number;
    category:string;
    info?:boolean
}

export type TripInfoTypes={
    image:string;
    location:string;
    date:string;
    rooms: number;
    soldOut:boolean;
}

export type ItenaryTypes={
    image:string | null ;
    day:number;
    place:string | null;
    description: string;
    meals:boolean;
    meal_description:string;
}

export type InclusionContentProps = {
    title: string;
    items: string[];
    link?: string;
  };

  export interface Guide {
    id?:number;
    name?:string;
    bio?:string;
    image: string | null;
  }
  
  export interface AllExperienceProps {
    id: number ;
    title: string ;
    place_name: string | null;
    main_image: string | null;
    description?: string;
    guide?: Guide | null;
    duration_days?: number | null;
    duration_nights?: number | null;
    base_price_per_person?: string;  
    is_reverse_season?: boolean;
    season_note?: string | null;
  }
  

  export interface PageProps {
    params: {
      location: string;
    }
  }

  export type RecommendationProps = {
    name:string;
    message:string;
    experience: AllExperienceProps
  }


  export interface ItineraryProps{
    experience: AllExperienceProps;
    day_number:number;
    title:string;
    description:string;
    image:string | null;
    meal_included:boolean;
    meal_description:string;
  }

  export type LocationProps = Pick<
  AllExperienceProps,
   'place_name' | 'description' | 'duration_days' | 'duration_nights'>
