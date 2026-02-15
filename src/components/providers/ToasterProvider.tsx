"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
            containerStyle={{
                zIndex: 99999,
            }}
            toastOptions={{
                duration: 4000,
                style: {
                    background: '#333',
                    color: '#fff',
                },
            }}
        />
    );
}
