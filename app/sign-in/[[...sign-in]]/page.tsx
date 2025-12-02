"use client";

import { SignIn } from '@clerk/nextjs';

export default function Page() {
    return (
        <div className="min-h-[100vh] flex items-center justify-center">
            <SignIn
                routing="hash"
                redirectUrl="/admin"
                appearance={{
                    elements: {
                        footerAction: {
                            display: "none",
                        },
                        card: {
                            paddingBottom: "0px",
                        },
                    }
                }}
            />
        </div>
    );
}

//suyogtopare143@gmail.com