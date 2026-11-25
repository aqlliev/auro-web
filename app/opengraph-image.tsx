import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Qodiriy Aqlliev, MBA in Big Data and AI at Sejong University";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const portrait = await readFile(join(process.cwd(), "public/portrait.jpg"));
  const src = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F3EEE3",
          color: "#111111",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            width: 640,
            padding: "72px 64px",
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: 4,
              color: "#625E55",
              fontFamily: "sans-serif",
            }}
          >
            SEOUL · SEJONG UNIVERSITY
          </div>
          <div style={{ fontSize: 78, lineHeight: 0.9, marginTop: 28 }}>Qodiriy</div>
          <div style={{ fontSize: 78, lineHeight: 0.9, fontStyle: "italic", color: "#D9541E" }}>Aqlliev</div>
          <div style={{ fontSize: 28, marginTop: 32, color: "#D9541E" }}>MBA, Big Data & AI</div>
          <div style={{ fontSize: 26, marginTop: 10, color: "#111111" }}>
            From credit risk to AI.
          </div>
        </div>
        <div style={{ display: "flex", width: 560, height: 630, position: "relative" }}>
          <img
            src={src}
            alt=""
            width={560}
            height={630}
            style={{ objectFit: "cover", objectPosition: "64% 12%" }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
