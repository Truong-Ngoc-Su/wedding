import Image from "next/image";
import { Gift, Heart, QrCode } from "lucide-react";
import { BRIDE_GIFT, GROOM_GIFT } from "@/lib/wedding-config";

const gifts = [
  { label: "Mừng cưới chú rể", detail: GROOM_GIFT },
  { label: "Mừng cưới cô dâu", detail: BRIDE_GIFT },
];

export default function GiftsBlessingsSection() {
  return (
    <section id="gifts" className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:py-28">
      <div className="mb-10">
        <p className="font-poppins text-[10px] font-medium uppercase tracking-[0.3em] text-[#A37E3E]">Mừng cưới</p>
        <h2 className="mt-2 font-cormorant text-4xl font-medium text-[#2D2622] sm:text-6xl">Lời chúc &amp; quà mừng</h2>
        <p className="mx-auto mt-3 max-w-xl font-poppins text-sm leading-relaxed text-[#5C524A]">
          Sự hiện diện của quý khách là món quà quý giá nhất. Nếu muốn gửi lời chúc hoặc quà mừng từ xa, gia đình xin phép được đón nhận tại đây.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:px-12">
        {gifts.map(({ label, detail }) => (
          <article key={label} className="glass-card rounded-3xl border border-[#C9A46A]/35 px-8 py-10 shadow-xl">
            <Gift className="mx-auto h-6 w-6 text-[#C9A46A]" />
            <h3 className="mt-4 font-great-vibes text-4xl text-[#A37E3E]">{label}</h3>
            <div className="mx-auto mt-7 flex h-40 w-40 items-center justify-center rounded-2xl border-2 border-[#C9A46A]/30 bg-white p-2 shadow-sm">
              {detail.qrImage ? (
                <Image src={detail.qrImage} alt={`Mã QR mừng cưới ${detail.name}`} width={144} height={144} unoptimized className="h-full w-full rounded-lg object-contain" />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-dashed border-[#C9A46A]/45 bg-[#FCFAF7] text-[#A37E3E]">
                  <QrCode className="h-12 w-12" />
                  <span className="mt-2 font-poppins text-[10px]">Sẽ cập nhật mã QR</span>
                </div>
              )}
            </div>
            <p className="mt-6 font-cormorant text-2xl font-semibold text-[#2D2622]">{detail.name}</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#C9A46A]/25 bg-white/75 px-4 py-2 font-poppins text-[11px] text-[#7F8D70]">
              <Heart className="h-3.5 w-3.5 fill-[#B76E79] text-[#B76E79]" /> Lời chúc của quý khách là niềm vui của chúng mình
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
