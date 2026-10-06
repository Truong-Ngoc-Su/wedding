"use client";

import React, { useEffect, useState } from "react";
import EnvelopeSplash from "@/components/EnvelopeSplash";
import PetalCanvas from "@/components/PetalCanvas";
import MusicPlayer from "@/components/MusicPlayer";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import OrderOfEvents from "@/components/OrderOfEvents";
import VenueDetails from "@/components/VenueDetails";
import PreWeddingMoments from "@/components/PreWeddingMoments";
import DressCodeSection from "@/components/DressCodeSection";
import RSVPSection from "@/components/RSVPSection";
import GiftsBlessingsSection from "@/components/GiftsBlessingsSection";
import ThankYouSection from "@/components/ThankYouSection";
import BottomNav from "@/components/BottomNav";

export default function WeddingPage() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [countdownRevealed, setCountdownRevealed] = useState(false);
  const [shouldAutoStartMusic, setShouldAutoStartMusic] = useState(false);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    if (!envelopeOpened || !countdownRevealed) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [envelopeOpened, countdownRevealed]);

  const handleOpenEnvelope = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setCountdownRevealed(false);
    setShouldAutoStartMusic(true);
    setEnvelopeOpened(true);
  };

  const handleReopenEnvelope = () => {
    setCountdownRevealed(false);
    setEnvelopeOpened(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-[#F8F5F0] text-[#2D2622] selection:bg-[#DFBE85]/30">
      {/* 1. Interactive Luxury 3D Envelope Splash Screen */}
      <EnvelopeSplash
        isOpen={envelopeOpened}
        onOpen={handleOpenEnvelope}
      />

      {/* Floating Petal & Gold Shimmer Canvas Background */}
      <PetalCanvas />

      {/* Floating Royal Indian Instrumental Music Player */}
      <MusicPlayer shouldAutoStart={shouldAutoStartMusic} />

      {/* 1. Live Countdown Section */}
      <CountdownSection onRevealed={() => setCountdownRevealed(true)} />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Celebration Timeline */}
      <OrderOfEvents />

      {/* 4. Venue & Hospitality */}
      <VenueDetails />

      {/* 5. Pre-wedding Moments */}
      <PreWeddingMoments />

      {/* 6. Dress Code & Pastel Palette */}
      {/* <DressCodeSection /> */}

      {/* 7. Personalised RSVP */}
      <RSVPSection invitationViewed={countdownRevealed} />

      {/* 8. Gift & Blessings */}
      <GiftsBlessingsSection />

      {/* 9. Thank You Screen */}
      <ThankYouSection onReopenEnvelope={handleReopenEnvelope} />

      {/* Sticky Floating Bottom Navigation */}
      {countdownRevealed && <BottomNav />}
    </main>
  );
}
