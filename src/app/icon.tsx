import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const cells = [
  "#22456B",
  "#43739F",
  "#93BEE0",
  "#3A4650",
  "#1C2024",
  "#FEDB27",
  "#0B1C2E",
  "#43739F",
  "#22456B",
];

export default function Icon() {
  const rows = [cells.slice(0, 3), cells.slice(3, 6), cells.slice(6, 9)];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          background: "#0B1C2E",
          padding: 4,
        }}
      >
        {rows.map((row, r) => (
          <div key={r} style={{ display: "flex", flex: 1, gap: 3 }}>
            {row.map((color, c) => (
              <div key={c} style={{ background: color, flex: 1 }} />
            ))}
          </div>
        ))}
      </div>
    ),
    { ...size }
  );
}
