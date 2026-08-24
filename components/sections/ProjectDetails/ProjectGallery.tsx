"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import styles from "@/components/sections/ProjectDetails/ProjectGallery.module.css";

type ProjectGalleryProps = {
  screenshots: readonly string[];
  layout: "phone" | "desktop";
  projectTitle: string;
  labels: {
    screenshot: string;
    openScreenshot: string;
    closeGallery: string;
    previousScreenshot: string;
    nextScreenshot: string;
  };
};

export default function ProjectGallery({
  screenshots,
  layout,
  projectTitle,
  labels,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const isOpen = activeIndex !== null;

  const closeGallery = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + screenshots.length) % screenshots.length,
    );
  }, [screenshots.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % screenshots.length,
    );
  }, [screenshots.length]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      openerRef.current?.focus();
    };
  }, [isOpen, closeGallery, showNext, showPrevious]);

  return (
    <>
      <div
        className={`${styles.gallery} ${
          layout === "phone" ? styles.phoneGallery : styles.desktopGallery
        }`}
      >
        {screenshots.map((screenshot, index) => {
          const imageLabel = `${projectTitle} ${labels.screenshot} ${index + 1}`;

          return (
            <button
              key={screenshot}
              className={styles.screenshotButton}
              type="button"
              onClick={() => {
                openerRef.current = document.activeElement as HTMLElement;
                setActiveIndex(index);
              }}
              aria-label={`${labels.openScreenshot}: ${imageLabel}`}
            >
              <span className={styles.screenshotFrame}>
                <Image
                  src={screenshot}
                  alt={imageLabel}
                  fill
                  sizes={
                    layout === "phone"
                      ? "(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 280px"
                      : "(max-width: 940px) 100vw, 850px"
                  }
                />
              </span>
            </button>
          );
        })}
      </div>

      {activeIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} ${labels.screenshot} ${activeIndex + 1}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeGallery();
          }}
        >
          <button
            ref={closeButtonRef}
            className={`${styles.lightboxControl} ${styles.closeButton}`}
            type="button"
            onClick={closeGallery}
            aria-label={labels.closeGallery}
          >
            <X size={26} aria-hidden="true" />
          </button>

          {screenshots.length > 1 && (
            <button
              className={`${styles.lightboxControl} ${styles.previousButton}`}
              type="button"
              onClick={showPrevious}
              aria-label={labels.previousScreenshot}
            >
              <ChevronLeft size={30} aria-hidden="true" />
            </button>
          )}

          <div className={styles.lightboxImage}>
            <Image
              src={screenshots[activeIndex]}
              alt={`${projectTitle} ${labels.screenshot} ${activeIndex + 1}`}
              fill
              priority
              sizes="100vw"
            />
          </div>

          {screenshots.length > 1 && (
            <button
              className={`${styles.lightboxControl} ${styles.nextButton}`}
              type="button"
              onClick={showNext}
              aria-label={labels.nextScreenshot}
            >
              <ChevronRight size={30} aria-hidden="true" />
            </button>
          )}

          <span className={styles.lightboxCounter} aria-live="polite">
            {activeIndex + 1} / {screenshots.length}
          </span>
        </div>
      )}
    </>
  );
}
