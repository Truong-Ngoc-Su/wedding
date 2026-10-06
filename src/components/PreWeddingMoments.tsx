import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";

const moments = [
  {
    src: "/imgs/IMG_0578.JPG",
    alt: "Khoảnh khắc hạnh phúc của Ngọc Sự và Kim Oanh",
    className: "col-span-2 row-span-2",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    src: "https://images.unsplash.com/photo-1716813344739-51ac117d5ecc?auto=format&fit=crop&w=1400&q=85",
    alt: "Cặp đôi trong khoảnh khắc hoàng hôn ngày cưới",
    className: "col-span-2 row-span-1",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    src: "/imgs/IMG_0579.JPG",
    alt: "Chân dung cưới của Ngọc Sự và Kim Oanh",
    className: "col-span-1 row-span-1",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "https://images.unsplash.com/photo-1708126755326-b8a62f745dac?auto=format&fit=crop&w=900&q=85",
    alt: "Khoảnh khắc nắm tay trong lễ cưới",
    className: "col-span-1 row-span-1",
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  {
    src: "https://images.unsplash.com/photo-1665607437981-973dcd6a22bb?auto=format&fit=crop&w=1200&q=85",
    alt: "Không gian tiệc cưới được trang trí trang nhã",
    className: "col-span-2 row-span-1",
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
];

export default function PreWeddingMoments() {
  return (
    <section id="moments" className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
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

      <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:auto-rows-[190px] md:grid-cols-4">
        {moments.map((moment, index) => (
          <figure
            key={moment.src}
            className={`group relative overflow-hidden rounded-2xl border border-[#C9A46A]/20 bg-[#F3E5C8]/30 shadow-[0_12px_30px_-20px_rgba(45,38,34,0.4)] ${moment.className}`}
          >
            <Image
              src={moment.src}
              alt={moment.alt}
              fill
              sizes={moment.sizes}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
