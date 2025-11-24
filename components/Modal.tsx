import React from 'react'
import AdModal from './AdModal'
import { fetchAdvertisements } from '@/app/lib/action'

export default async function Modal() {
    const ads = await fetchAdvertisements();

    return (
        <div>
            <AdModal ads={ads?.filter(ad => ad?.isActive)} />
        </div>
    )
}
