import { storyblokEditable } from "@storyblok/react";

export default function Teaser({ blok }) {
    return (
        <div {...storyblokEditable(blok)} className="teaser p-4 rounded-md text-center">
            <h2 className="text-2xl font-bold">{blok.headline}</h2>
            <p className="text-gray-600">{blok.description}</p>
        </div>
    );
    }