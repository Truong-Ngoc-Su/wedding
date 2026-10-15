import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";

const moments = [
  {
    src: "/imgs/IMG_0578.JPG",
    alt: "Khoảnh khắc hạnh phúc của Ngọc Sự và Kim Oanh",
    sizes: "(max-width: 639px) 50vw, 25vw",
  },
  {
    src: "/imgs/BO_07110.JPEG",
    alt: "Ngọc Sự và Kim Oanh trong bộ ảnh cưới",
    sizes: "(max-width: 639px) 50vw, 25vw",
  },
  {
    src: "/imgs/BO_07232.JPEG",
    alt: "Khoảnh khắc hạnh phúc của Ngọc Sự và Kim Oanh",
    sizes: "(max-width: 639px) 50vw, 25vw",
  },
  {
    src: "/imgs/IMG_0577.JPG",
    alt: "Chân dung cưới của Ngọc Sự và Kim Oanh",
    sizes: "(max-width: 639px) 50vw, 25vw",
  },
];

export default function PreWeddingMoments() {
  return (
    <section id="moments" className="relative mx-auto max-w-6xl px-4 py-14 sm:py-18">
      <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
        <div className="flex items-center justify-center gap-2 text-[#A37E3E]">
          <Sparkles className="h-3.5 w-3.5" />
          <span className="font-poppins text-[10px] font-medium uppercase tracking-[0.15em]">Thư viện ảnh</span>
          <Sparkles className="h-3.5 w-3.5" />
        </div>
        <h2 className="mt-3 font-cormorant text-4xl font-medium text-[#2D2622] sm:text-6xl">
          Khoảnh khắc trước ngày cưới
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-poppins text-sm leading-relaxed text-[#5C524A]">
          Một vài khoảnh khắc nhỏ trước ngày chính thức về chung một nhà, lưu lại hành trình mà hai đứa luôn trân trọng.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {moments.map((moment, index) => (
          <figure
            key={moment.src}
            className="group relative aspect-[2/3] overflow-hidden rounded-2xl border border-[#C9A46A]/20 bg-[#F3E5C8]/30 shadow-[0_12px_30px_-20px_rgba(45,38,34,0.4)]"
          >
            <Image
              src={moment.src}
              alt={moment.alt}
              fill
              sizes={moment.sizes}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2622]/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            {index < 2 && (
              <span className="absolute bottom-3 left-3 rounded-full border border-white/40 bg-black/25 p-1.5 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <Heart className="h-3.5 w-3.5 fill-white" />
              </span>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
