export interface Delivery {
    id: number;
    image: string;
    title: string;
    price: number;
    description: string;
    isDelete: boolean;
}

export interface DeliveryListResponse {
    payload: Delivery[];
    count: number;
    call_id: number;
}

export interface DeliveryCardResponse {
    payload: DeliveryItem
}

export interface DeliveryItem {
    id: number;
    image: string;
    title: string;
    price: number;
    description: string;
}