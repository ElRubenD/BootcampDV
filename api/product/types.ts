type filterByPrice = "lower" | "higher";

export interface ISearchParams {
    category?: string;
    brand?: string;
    size?: string;
    salersId?: string;
    filterByPrice?: filterByPrice;
    priceRange?: string;
    page?: string;
    limit?: string;
}