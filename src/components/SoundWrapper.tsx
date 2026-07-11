"use client";

import { useEffect } from "react";
import { playHoverSound, playClickSound } from "@/utils/audio";

export default function SoundWrapper() {
  useEffect(() => {
    // Only run on the client
    if (typeof window === "undefined") return;

    // We keep track of whether the user has interacted
    let hasInteracted = false;

    const unlockAudio = () => {
      hasInteracted = true;
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("keydown", unlockAudio);
    };

    document.addEventListener("click", unlockAudio);
    document.addEventListener("keydown", unlockAudio);

    const handleMouseDown = (e: MouseEvent) => {
      if (!hasInteracted) return;
      const target = e.target as HTMLElement;
      if (
        target.closest(".pixel-button") ||
        target.closest(".retro-titlebar-btn") ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button"
      ) {
        playClickSound();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("keydown", unlockAudio);
    };
  }, []);

  return null; // This component just mounts global event listeners
}
