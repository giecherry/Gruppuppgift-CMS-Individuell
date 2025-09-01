
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function Hero({ blok }) {
    console.log("HERO", blok)

    let heroClasses = `h-[50vh] bg-gray p-6`

    /*`h-[50vh] bg-gray-100`*/
    /*`h-[50vh] bg-amber-400/25`*/

    console.log(blok)
    console.log("Knappdata:", blok.button);
    console.log("Knapptext:", blok.button_text);

    return (
        <div {...storyblokEditable(blok)} className={heroClasses} style={{
            backgroundImage: `url(${blok?.background_image?.filename})`
        }}>
            <h1 style={{ textAlign: "center", fontSize: "3rem", font: "public sans", fontWeight: "bold", paddingTop: "3rem", marginBottom: "1rem", color: "#333", }}>
            {blok.title}
            </h1>
            <h4 className="text-center text-sm text-gray-600 whitespace-wrap mt-2">                
            {blok.text}
            </h4>
            {blok.button?.cached_url && (
                <Link
                    href={`/${blok.button.cached_url}`}
                    target={blok.button.target || "_self"}
                    className="block text-center border border-black text-black bg-transparent px-12 py-2 rounded-none hover:bg-black hover:text-white transition mt-4 mb-6 mx-auto w-40 font-bold whitespace-nowrap"
                    /*"inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mt-4"*/
                >
                    {blok.button.name || "Shop All"}
                </Link>
        )}
            <img 
                src={blok.image.filename}
                alt={blok.image.alt || "Hero image"}
                style={{
                    padding: "50px",
                    display: "block",
                    margin: "0 auto"
        }}
/>
            
        </div>
    )
}