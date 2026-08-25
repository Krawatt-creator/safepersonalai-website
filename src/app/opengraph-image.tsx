import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(60% 60% at 15% 10%, rgba(0,229,153,0.16) 0%, rgba(0,229,153,0) 60%), radial-gradient(50% 50% at 90% 90%, rgba(142,85,234,0.16) 0%, rgba(142,85,234,0) 60%), #0a0b0d",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "#00e599",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 600, color: "#f2f3f5" }}>
            SafePersonalAI
          </div>
        </div>
        <div
          style={{
            marginTop: 44,
            display: "flex",
            flexDirection: "column",
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#f2f3f5",
            maxWidth: 900,
          }}
        >
          <span>It reads your inbox.</span>
          <span>It never sends without you.</span>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "#a7abb5",
            maxWidth: 820,
          }}
        >
          Runs on your Mac, with your own AI key. Nothing leaves without you.
        </div>
      </div>
    ),
    { ...size }
  );
}
