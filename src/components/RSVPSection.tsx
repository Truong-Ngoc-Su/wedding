"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import confetti from "canvas-confetti";
import { CheckCircle2, CircleAlert, Heart, LoaderCircle, Send, Sparkles, UserRound, X } from "lucide-react";
import { GROOM_NAME, BRIDE_NAME } from "@/lib/wedding-config";

type Attendance = "yes" | "no";
type LookupState = "loading" | "ready" | "not_found" | "error" | "missing_id" | "missing_api";
interface Guest { ma_khach: string; ten_khach: string; di: string | number; ban_roi: string | number }
interface ApiResponse { status: string; message?: string; data?: Guest }

const hasValue = (value: string | number | undefined) => value === 1 || value === "1" || Boolean(value);
const stateMessage = (state: LookupState) => {
  if (state === "missing_id") return "Vui lòng mở đường link thiệp riêng được gửi đến quý khách để xác nhận tham dự.";
  if (state === "missing_api") return "Hệ thống xác nhận đang được thiết lập. Vui lòng quay lại sau ít phút.";
  if (state === "not_found") return "Mã khách không tồn tại. Vui lòng kiểm tra lại đường link thiệp.";
  return "Không thể kết nối hệ thống xác nhận lúc này. Vui lòng thử lại sau.";
};

interface RSVPSectionProps {
  invitationViewed: boolean;
}

export default function RSVPSection({ invitationViewed }: RSVPSectionProps) {
  const params = useParams<{ guestId?: string }>();
  const guestIdFromPath = params.guestId?.trim() ?? "";
  const [lookupState, setLookupState] = useState<LookupState>("loading");
  const [guest, setGuest] = useState<Guest | null>(null);
  const [guestId, setGuestId] = useState("");
  const [attendance, setAttendance] = useState<Attendance>("yes");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ type: "success" | "already" | "error"; message: string } | null>(null);

  useEffect(() => {
    // The Google Apps Script GET endpoint records the opening time, so wait
    // until the guest has finished scratching the card before calling it.
    if (!invitationViewed) return;

    const id = guestIdFromPath;
    setGuestId(id);
    if (!id) return void setLookupState("missing_id");
    const controller = new AbortController();
    void (async () => {
      try {
        const response = await fetch(`/api/rsvp?id=${encodeURIComponent(id)}`, { cache: "no-store", signal: controller.signal });
        if (!response.ok) throw new Error("Lookup failed");
        const payload = (await response.json()) as ApiResponse;
        if (payload.status !== "success" || !payload.data) return void setLookupState("not_found");
        setGuest(payload.data);
        if (hasValue(payload.data.di)) setAttendance("yes");
        if (hasValue(payload.data.ban_roi)) setAttendance("no");
        setLookupState("ready");
      } catch (error) {
        if ((error as Error).name !== "AbortError") setLookupState("error");
      }
    })();
    return () => controller.abort();
  }, [guestIdFromPath, invitationViewed]);

  const alreadyResponded = Boolean(guest && (hasValue(guest.di) || hasValue(guest.ban_roi)));
  const submit = async () => {
    if (!guestId || alreadyResponded) return;
    setIsSubmitting(true); setResult(null);
    try {
      const response = await fetch("/api/rsvp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: guestId, di: attendance === "yes" ? 1 : "", ban: attendance === "no" ? 1 : "" }) });
      if (!response.ok) throw new Error("Submit failed");
      const payload = (await response.json()) as ApiResponse;
      if (payload.status === "success") {
        setResult({ type: "success", message: payload.message || "Cập nhật RSVP thành công" });
        if (attendance === "yes") confetti({ particleCount: 90, spread: 70, origin: { y: 0.75 }, colors: ["#C9A46A", "#DFBE85", "#B76E79", "#FFFFFF"] });
      } else if (payload.status === "already_responded") {
        setResult({ type: "already", message: payload.message || "Quý khách đã xác nhận tham dự trước đó." });
      } else throw new Error(payload.message || "Submit failed");
    } catch (error) {
      setResult({ type: "error", message: error instanceof Error && error.message !== "Submit failed" ? error.message : "Không thể gửi xác nhận. Vui lòng thử lại sau." });
    } finally { setIsSubmitting(false); }
  };
  const unavailable = lookupState !== "ready";
  const isComplete = result?.type === "success" || result?.type === "already" || alreadyResponded;

  return <section id="rsvp" className="relative px-4 py-20 sm:py-28"><div className="mx-auto max-w-2xl">
    <div className="mb-10 text-center"><div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C9A46A]/30 bg-white/80 px-4 py-1.5 shadow-sm"><Sparkles className="h-3.5 w-3.5 text-[#C9A46A]" /><span className="font-poppins text-[11px] font-medium uppercase tracking-[0.25em] text-[#A37E3E]">Xác nhận tham dự</span></div><h2 className="font-cormorant text-4xl font-medium text-[#2D2622] sm:text-5xl">Hẹn gặp quý khách</h2><p className="mt-2 font-poppins text-xs text-[#5C524A] sm:text-sm">Sự hiện diện của quý khách là niềm vinh hạnh của gia đình chúng mình.</p></div>
    <div className="glass-card overflow-hidden rounded-[2rem] border border-[#C9A46A]/35 p-6 shadow-xl sm:p-10">
      {lookupState === "loading" ? <div className="flex min-h-48 flex-col items-center justify-center gap-4 text-center"><LoaderCircle className="h-7 w-7 animate-spin text-[#C9A46A]" /><p className="font-poppins text-sm text-[#5C524A]">Đang chuẩn bị thiệp mời dành riêng cho quý khách...</p></div>
      : unavailable ? <div className="flex min-h-48 flex-col items-center justify-center gap-4 text-center"><CircleAlert className="h-9 w-9 text-[#B58742]" /><p className="max-w-md font-poppins text-sm leading-6 text-[#5C524A]">{stateMessage(lookupState)}</p></div>
      : isComplete ? <div className="py-5 text-center"><div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A46A] bg-[#DFBE85]/20"><CheckCircle2 className="h-8 w-8 text-[#C9A46A]" /></div><p className="font-poppins text-xs uppercase tracking-[0.2em] text-[#A37E3E]">Lời hồi đáp đã được ghi nhận</p><h3 className="mt-2 font-cormorant text-3xl font-semibold text-[#2D2622]">Cảm ơn {guest?.ten_khach}</h3><p className="mx-auto mt-3 max-w-md font-poppins text-sm leading-6 text-[#5C524A]">{result?.message || (attendance === "yes" ? "Cảm ơn quý khách đã nhận lời. Hẹn gặp quý khách trong ngày vui của chúng mình!" : "Cảm ơn quý khách đã dành thời gian phản hồi. Chúng mình rất trân quý những lời chúc của quý khách.")}</p></div>
      : <div><div className="mb-8 rounded-2xl border border-[#C9A46A]/25 bg-white/70 px-5 py-4 text-center"><UserRound className="mx-auto mb-2 h-5 w-5 text-[#C9A46A]" /><p className="font-poppins text-[11px] uppercase tracking-[0.2em] text-[#A37E3E]">Trân trọng kính mời</p><h3 className="mt-1 font-cormorant text-3xl font-semibold text-[#2D2622]">{guest?.ten_khach}</h3><p className="mt-1 font-poppins text-xs text-[#5C524A]">đến chung vui cùng {GROOM_NAME} &amp; {BRIDE_NAME}</p></div>
        <p className="mb-3 text-center font-poppins text-xs font-medium uppercase tracking-[0.16em] text-[#5C524A]">Quý khách có thể tham dự chứ?</p><div className="grid gap-3 sm:grid-cols-2"><button type="button" onClick={() => setAttendance("yes")} className={`flex items-center justify-center gap-2 rounded-2xl border px-4 py-4 font-poppins text-sm font-medium transition-all ${attendance === "yes" ? "border-[#C9A46A] bg-[#FCFAF7] text-[#2D2622] shadow-md ring-2 ring-[#C9A46A]/20" : "border-stone-200 bg-white/60 text-[#5C524A] hover:bg-white"}`}><Heart className="h-4 w-4 text-[#B76E79]" fill={attendance === "yes" ? "currentColor" : "none"} />Vâng, tôi sẽ đến</button><button type="button" onClick={() => setAttendance("no")} className={`flex items-center justify-center gap-2 rounded-2xl border px-4 py-4 font-poppins text-sm font-medium transition-all ${attendance === "no" ? "border-[#A8B59A] bg-[#FCFAF7] text-[#2D2622] shadow-md ring-2 ring-[#A8B59A]/20" : "border-stone-200 bg-white/60 text-[#5C524A] hover:bg-white"}`}><X className="h-4 w-4" />Rất tiếc, tôi bận</button></div>
        {result?.type === "error" && <p role="alert" className="mt-4 text-center font-poppins text-xs text-[#B76E79]">{result.message}</p>}<div className="mt-7 text-center"><button type="button" onClick={() => void submit()} disabled={isSubmitting} className="mx-auto flex min-w-60 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C9A46A] via-[#DFBE85] to-[#B58742] px-8 py-3.5 font-poppins text-sm font-semibold tracking-wide text-[#2D2622] shadow-lg transition-all hover:shadow-[#C9A46A]/40 disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? <><LoaderCircle className="h-4 w-4 animate-spin" />Đang gửi...</> : <><Send className="h-4 w-4" />Gửi xác nhận</>}</button></div></div>}
    </div>
  </div></section>;
}
