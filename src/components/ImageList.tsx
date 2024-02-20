import { Image, Maybe } from "@/lib/types"

export default function ImageList({images} : {images: Maybe<Array<Image>>}) {
    return (
      <div className="bg-white">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {images && images.map((image) => (
                <div key={image.imageSrc} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                  <img
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
            ))}
        </div>
      </div>
    )
  }