export type ShopItemsProps={
    title:string;
    image:string;
    description:string;
    price:number;
    category:string;
}

export type TripInfoTypes={
    image:string;
    location:string;
    date:string;
    rooms: number;
    soldOut:boolean;
}

export type ItenaryTypes={
    image:string;
    day:string;
    place:string;
    description: string;
    meals:boolean;
}

export type InclusionContentProps = {
    title: string;
    items: string[];
    link?: string;
  };