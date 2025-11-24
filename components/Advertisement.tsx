"use client";

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Switch } from './ui/switch';
import { Button } from './ui/button';
import { addAd, deleteAd, updateAd } from '@/app/lib/action';
import { CldUploadWidget } from "next-cloudinary";
import { Oswald } from 'next/font/google';

const oswald = Oswald({
    weight: "400",
    subsets: ["latin"],
});

interface Advertisement {
    id: string;
    photoUrl: string;
    startDate: string | null;
    endDate: string | null;
    isActive: boolean;
}

export interface Form {
    photoUrl: string;
    startDate: string | null;
    endDate: string | null;
    isActive: boolean;
}

export default function Advertisement(ads: {
    ads: Advertisement[]
}) {
    const [img, setImg] = useState<any>();
    const [form, setForm] = useState({
        photoUrl: "",
        startDate: "",
        endDate: "",
        isActive: true,
    });

    console.log(ads)

    const handleSubmit = async (form: Form) => {
        try {
            await addAd(form, img?.secure_url || "");
            alert("Advertisement created!");
            setForm({
                photoUrl: "",
                startDate: "",
                endDate: "",
                isActive: true
            });
            setImg(null);
        }
        catch (err) {
            alert("Failed to create advertisement");
        }
    }

    const deleteAdvertisement = async (id: string) => {
        try {
            await deleteAd(id);
        }
        catch (err) {
            alert("Failed to delete advertisement");
        }
    }

    const updateAdvertisement = async (id: string, checked: boolean) => {
        try {
            await updateAd(id, checked);
        }
        catch (err) {
            alert("Failed to delete advertisement");
        }
    }

    return (
        <div>
            <Card className="shadow-lg max-w-xl mx-auto transition-all duration-300 hover:shadow-[#e63946]/40">
                <CardHeader>
                    <CardTitle className={`${oswald.className} text-center text-2xl md:text-3xl font-bold text-black p-2`}>
                        Create Advertisement
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 text-[#1c1c1c]">
                    <div>
                        <Label className='mb-1'>
                            IMAGE URL
                        </Label>

                        <CldUploadWidget
                            uploadPreset="liofitgym"
                            onSuccess={(result) => setImg(result.info)}
                        >
                            {({ open }) => (
                                <button
                                    className="w-full cursor-pointer p-2 rounded-none bg-gray-100 border border-gray-300 text-[#1c1c1c] font-medium hover:bg-gray-200 transition flex items-center gap-2"
                                    onClick={() => open()}
                                >
                                    <span className='w-full'>Upload Image</span>
                                </button>
                            )}
                        </CldUploadWidget>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <Label className='mb-1'>
                                START DATE
                            </Label>

                            <Input
                                type="date"
                                value={form.startDate}
                                onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                                className='rounded-none'
                            />
                        </div>

                        <div className="flex-1">
                            <Label className='mb-1'>
                                END DATE
                            </Label>

                            <Input
                                type="date"
                                value={form.endDate}
                                onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                                className='rounded-none'
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Switch
                            checked={form.isActive}
                            onCheckedChange={(checked) => setForm({ ...form, isActive: checked })}
                        />

                        <Label>
                            Active
                        </Label>
                    </div>

                    <Button
                        onClick={() => handleSubmit(form)}
                        className="w-full p-4 rounded-none cursor-pointer bg-[#e63946] text-white font-medium hover:bg-[#c92f3b] translate-y-0 transition-all duration-250 hover:translate-y-[-2px]"
                    >
                        <span className="text-md md:text-lg">
                            Create Advertisement
                        </span>
                    </Button>
                </CardContent>
            </Card>

            <div className='px-4 py-12 md:py-16'>
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mx-auto py-6">
                    {ads?.ads?.length === 0 ? (
                        <p className="text-center text-gray-400 col-span-full">
                            No advertisements found.
                        </p>
                    ) : (
                        ads?.ads?.map((ad) => (
                            <Card
                                key={ad.id}
                                className="group pb-0 bg-black text-white border-1 border-gray-700 rounded-none transition-all duration-300 hover:-translate-y-2"
                            >
                                <CardHeader>
                                    <img
                                        src={ad.photoUrl !== "" ? ad.photoUrl : '/muscles-wallpaper-5120x2880.jpg'}
                                        height={200}
                                        width={200}
                                        alt="Advertisement Image"
                                        className="w-full h-80 object-cover object-top overflow-hidden"
                                    />
                                </CardHeader>

                                <CardContent className="m-0 p-0">
                                    <div className="p-6 group-hover:bg-[#e63946] transition-colors duration-250">
                                        <p className="text-sm uppercase text-gray-200 leading-tight mb-2">
                                            Start: {ad.startDate ? new Date(ad.startDate).toLocaleDateString("en-GB") : "N/A"}
                                        </p>

                                        <p className="text-sm uppercase text-gray-200 leading-tight mb-4">
                                            End: {ad.endDate ? new Date(ad.endDate).toLocaleDateString("en-GB") : "N/A"}
                                        </p>

                                        <div className="flex items-center gap-3 mb-4">
                                            <Switch
                                                checked={ad.isActive}
                                                onCheckedChange={(checked) => updateAdvertisement(ad.id, checked)}
                                                className='cursor-pointer'
                                            />
                                            <span className={`text-sm uppercase ${ad.isActive ? "text-green-500" : "text-[#e63946] group-hover:text-white"}`}>
                                                {ad.isActive ? "Active" : "Inactive"}
                                            </span>
                                        </div>

                                        <Button
                                            onClick={() => deleteAdvertisement(ad.id)}
                                            className="bg-transparent cursor-pointer border border-[#e63946] text-[#e63946] group-hover:text-white group-hover:border-white rounded-none transition-all duration-300"
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
