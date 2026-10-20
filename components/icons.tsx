import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export function WhatsAppIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20.3 3.7A11.1 11.1 0 0 0 2.9 17.1L1.4 22.6l5.7-1.5A11.1 11.1 0 0 0 20.3 3.7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.1 6.3c-.3-.6-.6-.6-.9-.6h-.7c-.3 0-.6.1-.8.4-.8.8-1.1 1.7-1 2.8.2 2.6 2.3 5.2 4.7 6.9 2.3 1.6 4.8 2.4 6.5 1.5.6-.4 1.3-1.4 1.4-2.1.1-.3.1-.6-.2-.8l-2.6-1.2c-.3-.1-.5-.2-.7.2l-1.1 1.2c-.2.2-.4.2-.7.1-1.7-.7-3.2-2-4.2-3.6-.2-.3-.1-.5.1-.7l.8-1c.2-.3.3-.5.2-.8L8.1 6.3Z" fill="currentColor" transform="translate(2 1) scale(.86)" />
    </svg>
  );
}

export function InstagramIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.7" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function PhoneIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m6.8 2.8 2.4 4.5c.3.6.2 1.1-.2 1.5l-1.7 1.5a15.8 15.8 0 0 0 6.4 6.4l1.5-1.7c.4-.4.9-.5 1.5-.2l4.5 2.4c.5.3.7.8.5 1.4-.6 1.8-2.4 3.4-4.5 3.2C9.3 20.9 3.1 14.7 2.2 6.8 2 4.7 3.6 2.9 5.4 2.3c.6-.2 1.1 0 1.4.5Z" />
    </svg>
  );
}
