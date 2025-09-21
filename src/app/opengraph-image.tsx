import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            marginBottom: 20,
            background: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Devinbi
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.8,
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          Innovative Software Solutions
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
