// old version; new one in gpt<3

"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import confetti from "canvas-confetti";
import { version } from "os";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

const TARGET_WORD = "RESUME";

export default function DraggableLetters({ containerRef }: { containerRef: any }) {
  const letters = TARGET_WORD.split("");

  const dropRefs = useRef<(HTMLDivElement | null)[]>([]);
  const letterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [placedLetters, setPlacedLetters] = useState<(string | null)[]>(new Array(letters.length).fill(null));
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    if (!containerRef?.current) return;

    const container = containerRef.current;

    letters.forEach((_, i) => {
      const el = letterRefs.current[i];
      if (!el) return;

      const x = Math.random() * (container.clientWidth - 80);
      const y = Math.random() * (container.clientHeight - 80);
      gsap.set(el, { x, y });

      Draggable.create(el, {
        bounds: container,
        onDragEnd: function () {
          const dropZone = dropRefs.current[i];
          if (!dropZone || !el) return;

          const elRect = el.getBoundingClientRect();
          const dropRect = dropZone.getBoundingClientRect();

          const isNear =
            Math.abs(elRect.left - dropRect.left) < 40 &&
            Math.abs(elRect.top - dropRect.top) < 40;

          if (isNear) {
            const dx = dropRect.left - elRect.left;
            const dy = dropRect.top - elRect.top;
            gsap.to(el, { x: `+=${dx}`, y: `+=${dy}`, duration: 0.2 });
            placedLetters[i] = el.innerText;
            setPlacedLetters([...placedLetters]);
          } else {
            placedLetters[i] = null;
            setPlacedLetters([...placedLetters]);
          }

          checkMatch();
        },
      });
    });
  }, []);

  const checkMatch = () => {
    const formed = placedLetters.join("");
    if (formed === TARGET_WORD && !isMatched) {
      setIsMatched(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      window.open("/resume.pdf", "_blank");
    }
  };

  return (
    <div className="relative w-full max-w-4xl h-[300px] mx-auto">
      {/* DROP TARGETS */}
      <div className="flex justify-center mb-10 gap-6">
        {letters.map((_, i) => (
          <div
            key={`drop-${i}`}
            ref={(el) => (dropRefs.current[i] = el)}
            className="w-10 h-12 border-b-2 border-neutral-300 dark:border-neutral-600"
          ></div>
        ))}
      </div>

      <div className="absolute top-3.5 left-1/8 transform -translate-x-1/2 text-sm text-gray-400 flex items-center gap-2 pointer-events-none">
  <span>drag to fill</span>
  <span className="text-lg">➡️</span>
</div>

      {/* DRAGGABLE LETTERS */}
      {letters.map((letter, i) => (
        <div
          key={i}
          ref={(el) => (letterRefs.current[i] = el)}
          className="absolute w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-1xl font-bold cursor-grab select-none shadow-lg"
        >
          {letter}
        </div>
      ))}
    </div>
  );
}
