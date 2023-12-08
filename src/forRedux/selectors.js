import { createSelector } from "@reduxjs/toolkit";

export const selectorAdverts = state => state.advert.adverts.items
export const selectorIsLoading = state => state.advert.adverts.isLoading
export const selectorError = state => state.advert.adverts.error
export const selectorFilter = state => state.advert.filter

export const choiceVisibleArray = createSelector(
    [selectorAdverts, selectorFilter],
    (adverts, filter) => {
        if(filter !== ''){
            return adverts.filter(advert =>
                advert.name.toLowerCase().includes(filter.toLowerCase())
              ); 
            }
        return adverts;
    }
)