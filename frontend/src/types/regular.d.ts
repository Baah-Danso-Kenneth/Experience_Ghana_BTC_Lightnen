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

export interface AccomodationProps{
  experience: AllExperienceProps;
  name:string;
  description: string;
  location: string;
  image: string;
}

export interface MapContentTypes{
  experience: AllExperienceProps;
  region_map:string;
  best_time_title:string;
  best_time_des:string;
  weather_time_title:string;
  weather_time_des:string;
}

export type BestTimeProps = Pick<
  MapContentTypes, 'region_map'| 'best_time_des'|'best_time_title' | 'weather_time_des' | 'weather_time_title'
>

export interface BestTimeHolderProps {
  experienceId: number;
}


export interface IncludedProps{
  experience: AllExperienceProps;
  text:string;
}


export interface EXcludedProps{
  experience: AllExperienceProps;
  text:string;
}

export interface ProductCategoryTypes{
  name:string;
  slug:string;
  description:string;
  image:string;
}

export interface ProductTypes{
  category:ProductCategoryTypes;
  name:string;
  slug:string;
  price_in_sats:number;
  is_active:boolean;
  stock_quantity:number;
  description:string;
  image:string;
}


export interface ProductImageTypes{
  product: ProductTypes;
  image:string;
  alt_text:string;
  order:number;
}

export type MinimizeShopProps = Pick<
  ProductImageTypes, 'image'|'price_in_sats'|'description'|'product'
>