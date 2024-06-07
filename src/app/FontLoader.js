"use client";

import { useEffect } from 'react';
import FontFaceObserver from 'fontfaceobserver';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function FontLoader() {
  useEffect(() => {
    const fontUrl = `${basePath}/fonts/LeagueSpartan-VariableFont_wght.ttf`;

    const style = document.createElement("style");
    style.textContent = `
      @font-face {
        font-family: 'League Spartan';
        src: url('${fontUrl}') format('truetype');
        font-weight: 400 500 700;
        font-style: normal;
      }
    `;
    document.head.appendChild(style);

    const font = new FontFaceObserver('League Spartan');
    font.load().then(() => {
      document.body.style.fontFamily = '"League Spartan", sans-serif';
    }).catch(() => {
      console.error('Font is not available');
    });

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
