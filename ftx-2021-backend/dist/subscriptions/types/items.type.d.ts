export declare type Item = {
    name: string;
    quantity: number;
};
export declare type Items = {
    restaurant: string;
    list: Record<number, Item>;
    total: number;
};
