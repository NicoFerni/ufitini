'use client'

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { useRouter } from 'next/navigation';


export default function TabBar() {

    const router = useRouter();

    let tabs = [
        {
            id: "Home",
            label: "Home",
            link: ""
        },
        {
            id: "Fitness",
            label: "Fitness",
            link: "/fitness"
        },
        {
            id: "Recipes",
            label: "Recipes",
            link: "/recipes"
        },
        {
            id: "Profile",
            label: "Profile",
            link: "/profile"
        }
    ];

    return (
        <div className="fixed bottom-0 w-full">
            <Tabs aria-label="Dynamic tabs" items={tabs} className="flex w-full flex-col  inset-x-0 bottom-0">
            {(item) => (
                    <Tab 
                        key={item.id} 
                        title={item.label} 
                        onClick={() => router.push(item.link)}
                    >
                     
                    </Tab>
                )}
            </Tabs>
        </div>
    );
}
