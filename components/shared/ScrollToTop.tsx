"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="fixed bottom-4 right-4">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 translate-y-5",
          "bg-violet-400 hover:bg-violet-500 focus:ring-violet-400 inline-flex items-center rounded-full p-3 text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2"
        )}
      >
        <Image
          src="/assets/up-arrow.svg"
          width={24}
          height={24}
          alt="Click to scroll top"
        />
      </button>
    </div>
  );
};
