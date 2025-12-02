import React from 'react'
import AdModal from './AdModal'
import { fetchAdvertisements } from '@/app/lib/action'

export default async function Modal() {
    const ads = await fetchAdvertisements();

    const filteredAds = ads
        .filter(ad => {
            if (!ad.endDate) return false;

            const end = new Date(ad.endDate);
            const now = new Date();

            end.setHours(0, 0, 0, 0);
            now.setHours(0, 0, 0, 0);

            return end >= now; 
        })
        .filter(ad => ad?.isActive);

    return (
        <div>
            <AdModal ads={filteredAds} />
        </div>
    )
}
