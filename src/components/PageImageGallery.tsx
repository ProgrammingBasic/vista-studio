import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Image {
    url: string;
    alt?: string;
}

interface PageImageGalleryProps {
    images: Image[];
}

function PageImageGallery({ images }: PageImageGalleryProps) {
    if (!images || images.length === 0) {
        return <div className="text-center text-muted-foreground">No images to display.</div>;
    }

    const [selectedImage, setSelectedImage] = useState(images[0]);

    // Effect to update the selected image if the images prop changes
    useEffect(() => {
        setSelectedImage(images[0]);
    }, [images]);

    return (
        <div className="w-full">
            {/* Main Image Display */}
            <div className="relative mb-4 h-80 md:h-[700px] w-full overflow-hidden rounded-lg shadow-lg">
                <img
                    key={selectedImage.url} // Add key to force re-render on change for transition
                    src={selectedImage.url}
                    alt={selectedImage.alt || 'Main destination view'}
                    className="w-full h-full object-cover animate-fade-in"
                />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4">
        {images.slice(0, 8).map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={cn(
                            'relative w-full aspect-square rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200',
                            selectedImage.url === image.url ? 'ring-2 ring-primary ring-offset-2' : 'hover:opacity-80'
                        )}
                    >
                        <img
                            src={image.url}
                            alt={image.alt || `Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PageImageGallery;