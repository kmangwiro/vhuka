"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryItems = [
    { src: "/images/gallery/top1.JPG", title: "Brand Launch" },
    { src: "/images/gallery/andy.jpg", title: "Brand Launch" },
    { src: "/images/gallery/Notre.jpg", title: "Client Meeting" },
    { src: "/images/gallery/Marvel.jpg", title: "Social Content" },
    { src: "/images/gallery/graphicde.jpg", title: "Team Work" },
    { src: "/images/gallery/Brayde.jpg", title: "Product Shoot" },
    { src: "/images/gallery/andy2.jpg", title: "Creative Session" },
    { src: "/images/gallery/office.jpg", title: "Creative Session" },
    { src: "/images/gallery/office21.jpg", title: "Creative Session" },
    { src: "/images/gallery/phamarcy.jpg", title: "Creative Session" },
    { src: "/images/gallery/phamarcy2.jpg", title: "Creative Session" },
    { src: "/images/gallery/top.JPG", title: "Creative Session" },
]

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <section id="gallery" className="py-20 lg:py-32 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Gallery
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                        Moments That Define Our Work
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A visual story of our creativity, collaboration, and impact.
                    </p>
                </div>

                {/* Grid (NO SHRINKING) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(item.src)}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image Wrapper */}
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                                <p className="text-white text-sm font-medium tracking-wide">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal Preview */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <button className="absolute top-6 right-6 text-white">
                            <X className="w-6 h-6" />
                        </button>

                        {/* Image */}
                        <div className="relative w-full max-w-6xl h-[85vh]">
                            <Image
                                src={selectedImage}
                                alt="Preview"
                                fill
                                className="object-contain rounded-xl"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}