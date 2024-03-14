import React, { useEffect, useRef, useState } from "react";

const InteractiveText: React.FC<{ originalText: string }> = ({
  originalText,
}) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [text, setText] = useState(originalText);

  useEffect(() => {
    const handleMouseOver = () => {
      let iteration = 0;
      let interval: ReturnType<typeof setInterval>;

      interval = setInterval(() => {
        const newText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return letter;
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        setText(newText);

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    let interval: ReturnType<typeof setInterval>;

    const current = headingRef.current;
    current?.addEventListener("mouseover", handleMouseOver);

    return () => {
      current?.removeEventListener("mouseover", handleMouseOver);
      clearInterval(interval);
    };
  }, [originalText]);

  return <span ref={headingRef}>{text}</span>;
};
export default InteractiveText;
