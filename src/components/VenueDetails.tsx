import { ExternalLink, MapPin, Navigation, Sparkles } from "lucide-react";
import { VENUE_FULL_ADDRESS, VENUE_MAP_EMBED_URL, VENUE_MAP_URL, VENUE_MOMENTS, WEDDING_DATE_DISPLAY } from "@/lib/wedding-config";

export default function VenueDetails() {
  const mapUrl = VENUE_MAP_URL;
  const mapEmbedUrl = VENUE_MAP_EMBED_URL;

  return (
    <section id="venue" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-poppins text-[10px] font-medium uppercase tracking-[0.15em] text-[#A37E3E]">Địa điểm</p>
          <h2 className="mt-2 font-cormorant text-4xl font-medium text-[#2D2622] sm:text-6xl">Địa điểm tổ chức</h2>
          <p className="mt-3 font-poppins text-sm leading-relaxed text-[#5C524A] sm:text-base">
            Hôn lễ được chuẩn bị chu đáo tại {VENUE_FULL_ADDRESS}, mong được đón tiếp quý khách trong ngày vui của gia đình.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-5 md:grid-cols-2 sm:mt-12">
          {VENUE_MOMENTS.map((moment) => (
            <article key={moment.title} className="glass-card glass-card-hover rounded-3xl px-6 py-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A46A]/35 bg-[#F8F5F0] text-2xl">
                {moment.icon}
              </div>
              <h3 className="mt-5 font-cormorant text-2xl font-semibold text-[#2D2622]">{moment.title}</h3>
              <p className="mt-2 font-poppins text-[10px] font-medium uppercase tracking-[0.14em] text-[#A37E3E]">
                {moment.time}
              </p>
              <p className="mt-4 min-h-10 font-poppins text-xs leading-relaxed text-[#5C524A]">{moment.description}</p>
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-[#C9A46A]/40 px-4 py-2 font-poppins text-[10px] font-medium uppercase tracking-[0.16em] text-[#A37E3E] transition-colors hover:bg-[#DFBE85]/15"
              >
                Xem bản đồ <ExternalLink className="h-3 w-3" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-[#C9A46A]/25 bg-white shadow-[0_14px_35px_-25px_rgba(45,38,34,0.4)]">
          <iframe
            title={`Bản đồ đến ${VENUE_FULL_ADDRESS}`}
            src={mapEmbedUrl}
            className="h-72 w-full border-0 sm:h-96"
            loading="lazy"
          />
          <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-[#5C524A]">
              <MapPin className="h-4 w-4 shrink-0 text-[#C9A46A]" />
              <span className="font-poppins text-xs">{VENUE_FULL_ADDRESS} · {WEDDING_DATE_DISPLAY}</span>
            </div>
            <a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-poppins text-xs font-medium text-[#A37E3E] hover:text-[#2D2622]">
              <Navigation className="h-4 w-4" /> Chỉ đường
            </a>
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-2 text-[#C9A46A]">
          <Sparkles className="h-3.5 w-3.5" /><span className="font-poppins text-[10px] uppercase tracking-[0.2em]">Hân hạnh được đón tiếp quý khách</span><Sparkles className="h-3.5 w-3.5" />
        </div>
      </div>
    </section>
  );
}
