"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ORDER_URL, products } from "@/lib/site";

export function ProductSlider() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = useCallback((index: number) => {
    const container = track.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    const first = container.children[0] as HTMLElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    container.scrollTo({ left: card.offsetLeft - first.offsetLeft, behavior: reduced ? "instant" : "smooth" });
  }, []);

  useEffect(() => {
    const container = track.current;
    if (!container) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const first = container.children[0] as HTMLElement;
        let closest = 0;
        let distance = Infinity;
        Array.from(container.children).forEach((element, index) => {
          const offset = (element as HTMLElement).offsetLeft - first.offsetLeft;
          const difference = Math.abs(offset - container.scrollLeft);
          if (difference < distance) { distance = difference; closest = index; }
        });
        setActive(closest);
      });
    };
    container.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div
        ref={track}
        id="product-list"
        className="product-track"
        role="region"
        aria-label="Cashew products. Swipe or use arrow keys to explore."
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(Math.min(products.length - 1, Math.max(0, active + (event.key === "ArrowRight" ? 1 : -1))));
          }
        }}
      >
        {products.map((product, index) => (
          <article key={product.id} className="product-card" aria-labelledby={`title-${product.id}`}>
            <Image src={product.image} alt={product.name} width={255} height={197} sizes="(max-width: 767px) 200px, (max-width: 1100px) 20vw, 245px" className="product-image" quality={85} />
            <h3 id={`title-${product.id}`}>{product.name}</h3>
            {product.available ? (
              <>
                <p className="product-price">{product.weight} <span aria-hidden="true">—</span> {product.price}</p>
                <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="button button-yellow product-order" aria-label={`Order ${product.weight} ${product.name} for ${product.price} on WhatsApp`}>
                  Order on WhatsApp
                </a>
              </>
            ) : (
              <p className="stock-label">Currently out of Stock</p>
            )}
            <span className="sr-only">Product {index + 1} of {products.length}</span>
          </article>
        ))}
      </div>
      <div className="slider-dots" aria-label="Choose product">
        {products.map((product, index) => (
          <button type="button" key={product.id} aria-label={`Show ${product.name}${product.weight ? `, ${product.weight}` : ""}`} aria-controls="product-list" aria-current={index === active ? "true" : undefined} onClick={() => goTo(index)}>
            <span className={index === active ? "active" : ""} />
          </button>
        ))}
      </div>
    </>
  );
}
