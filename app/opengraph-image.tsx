import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const alt = "Srikar Mahankali — Software Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

async function toDataUri(path: string, mime: string) {
  const buffer = await readFile(join(process.cwd(), "public", path))
  return `data:${mime};base64,${buffer.toString("base64")}`
}

export default async function Image() {
  const headshot = await toDataUri("srikar-headshot.jpeg", "image/jpeg")

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 100px",
          background: "#141414",
          fontFamily: "sans-serif",
        }}
      >
        {/* Photo — the source is a square full-body shot, so we scale it up and
            shift it inside an overflow-hidden circle to frame head + shoulders. */}
        <div
          style={{
            width: 280,
            height: 280,
            borderRadius: "50%",
            border: "2px solid #2a2a2a",
            overflow: "hidden",
            display: "flex",
            position: "relative",
          }}
        >
          <img
            src={headshot}
            width={704}
            height={704}
            style={{ position: "absolute", top: 0, left: -212 }}
          />
        </div>

        {/* Text block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 64,
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#fafafa",
            }}
          >
            Srikar Mahankali
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#4bc98f",
              marginTop: 14,
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#a3a3a3",
              marginTop: 28,
              maxWidth: 620,
              lineHeight: 1.5,
            }}
          >
            I build thoughtful digital products that solve real problems for real people.
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
