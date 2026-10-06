import { CalendarDays, Sparkles } from "lucide-react";
import { CELEBRATION_SCHEDULE, WEDDING_DATE_DISPLAY } from "@/lib/wedding-config";

export default function OrderOfEvents() {
  return (
    <section id="events" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#C9A46A]/25 bg-gradient-to-br from-[#FCFAF7] via-[#F8F5F0] to-[#F3E5C8]/45 p-5 shadow-[0_16px_45px_-28px_rgba(90,64,31,0.45)] sm:p-10">
        <div className="mb-9 text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 text-[#A37E3E]">
            <span className="h-px w-8 bg-[#C9A46A]/60" />
            <CalendarDays className="h-4 w-4" />
            <span className="font-poppins text-[10px] font-medium uppercase tracking-[0.14em]">
              {WEDDING_DATE_DISPLAY}
            </span>
            <span className="h-px w-8 bg-[#C9A46A]/60" />
          </div>
          <h2 className="font-great-vibes text-5xl text-[#A37E3E] sm:text-6xl">Chương trình lễ cưới</h2>
          <p className="mx-auto mt-3 max-w-xl font-poppins text-xs leading-relaxed text-[#5C524A] sm:text-sm">
            Trân trọng kính mời quý khách cùng gia đình đến chung vui và lưu giữ những khoảnh khắc đáng nhớ.
          </p>
        </div>

        <div className="space-y-3">
          {CELEBRATION_SCHEDULE.map((event) => (
            <article
              key={event.time}
              className="group grid grid-cols-[2.25rem_1fr] gap-x-3 rounded-2xl border border-[#C9A46A]/20 bg-white/65 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A46A]/45 hover:shadow-md sm:grid-cols-[3.5rem_8rem_1fr] sm:items-center sm:gap-x-5 sm:p-5"
            >
              <div className="row-span-2 flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A46A]/30 bg-[#F8F5F0] text-base sm:row-auto sm:h-11 sm:w-11">
                {event.icon}
              </div>
              <p className="font-cormorant tabular-nums text-xl font-semibold text-[#B58742] sm:text-2xl">{event.time}</p>
              <div className="col-start-2 mt-1 sm:col-start-3 sm:row-start-1 sm:mt-0">
                <h3 className="font-cormorant text-xl font-semibold text-[#2D2622] sm:text-2xl">
                  {event.title}
                </h3>
                <p className="mt-1 font-poppins text-xs leading-relaxed text-[#5C524A] sm:text-sm">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-[#C9A46A]">
          <Sparkles className="h-3.5 w-3.5" />
          <span className="font-poppins text-[10px] uppercase tracking-[0.22em]">Trân trọng kính mời</span>
          <Sparkles className="h-3.5 w-3.5" />
        </div>
      </div>
    </section>
  );
}
