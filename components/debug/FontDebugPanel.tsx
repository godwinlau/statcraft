"use client";

import { useState, useEffect, useRef } from "react";

const POPULAR_FONTS = [
  "Inter",
  "Poppins",
  "Manrope",
  "DM Sans",
  "Plus Jakarta Sans",
  "Outfit",
  "Space Grotesk",
  "Sora",
  "Urbanist",
  "Nunito Sans",
  "Work Sans",
  "Rubik",
  "Figtree",
  "Geist",
  "Lexend",
  "Albert Sans",
  "Red Hat Display",
  "General Sans",
  "Satoshi",
  "Onest",
  "Archivo",
  "Barlow",
  "Cabin",
  "Karla",
  "Lato",
  "Montserrat",
  "Nunito",
  "Open Sans",
  "Raleway",
  "Roboto",
  "Source Sans 3",
  "Ubuntu",
  "Mulish",
  "Quicksand",
  "Jost",
  "Josefin Sans",
  "Libre Franklin",
  "Noto Sans",
  "Overpass",
  "Public Sans",
  "Fira Sans",
  "Exo 2",
  "Titillium Web",
  "Heebo",
  "Assistant",
  "Mukta",
  "Signika",
  "Comfortaa",
  "Prompt",
  "Chivo",
];

function loadGoogleFont(fontName: string) {
  const id = `gf-${fontName.replace(/\s+/g, "-").toLowerCase()}`;
  if (document.getElementById(id)) return;

  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontName)}:wght@400;500;600;700&display=swap`;
  document.head.appendChild(link);
}

function applyFont(fontName: string) {
  // Must target body — next/font sets the CSS variable via a class on <body>,
  // so only an inline style on body (higher specificity) can override it.
  document.body.style.setProperty(
    "--font-uncut-sans",
    `"${fontName}", sans-serif`
  );
}

function resetFont() {
  document.body.style.removeProperty("--font-uncut-sans");
}

export default function FontDebugPanel() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<string | null>(null);
  const [custom, setCustom] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = POPULAR_FONTS.filter((f) =>
    f.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  function selectFont(name: string) {
    loadGoogleFont(name);
    applyFont(name);
    setActive(name);
  }

  function handleCustom() {
    const name = custom.trim();
    if (!name) return;
    selectFont(name);
    setCustom("");
  }

  function handleReset() {
    resetFont();
    setActive(null);
  }

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div style={{ position: "fixed", bottom: 16, right: 16, zIndex: 99999 }}>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 44,
          height: 44,
          borderRadius: 12,
          border: "none",
          background: "#1C1917",
          color: "#fff",
          fontSize: 20,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        }}
        title="Font Debug Panel"
      >
        Aa
      </button>

      {/* Panel */}
      {open && (
        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 0,
            width: 320,
            maxHeight: 480,
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
            border: "1px solid #E7E5E4",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "14px 16px 10px",
              borderBottom: "1px solid #E7E5E4",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#1C1917",
                  letterSpacing: "-0.01em",
                }}
              >
                Font Explorer
              </span>
              {active && (
                <button
                  onClick={handleReset}
                  style={{
                    fontSize: 11,
                    color: "#FF5015",
                    background: "rgba(255,80,21,0.08)",
                    border: "none",
                    borderRadius: 6,
                    padding: "3px 8px",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Reset
                </button>
              )}
            </div>

            {active && (
              <div
                style={{
                  fontSize: 11,
                  color: "#78716C",
                  marginBottom: 8,
                }}
              >
                Active: <strong style={{ color: "#1C1917" }}>{active}</strong>
              </div>
            )}

            {/* Search */}
            <input
              ref={inputRef}
              type="text"
              placeholder="Search fonts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 10px",
                fontSize: 13,
                border: "1px solid #E7E5E4",
                borderRadius: 8,
                outline: "none",
                background: "#F5F5F4",
                color: "#1C1917",
              }}
            />
          </div>

          {/* Font list */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "6px 8px",
            }}
          >
            {filtered.map((font) => (
              <button
                key={font}
                onClick={() => selectFont(font)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "8px 10px",
                  fontSize: 13,
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  background: active === font ? "rgba(255,80,21,0.08)" : "transparent",
                  color: active === font ? "#FF5015" : "#1C1917",
                  fontWeight: active === font ? 600 : 400,
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (active !== font)
                    (e.target as HTMLElement).style.background = "#F5F5F4";
                }}
                onMouseLeave={(e) => {
                  if (active !== font)
                    (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {font}
              </button>
            ))}
            {filtered.length === 0 && (
              <div
                style={{
                  padding: "16px 10px",
                  fontSize: 12,
                  color: "#A8A29E",
                  textAlign: "center",
                }}
              >
                No fonts match &ldquo;{search}&rdquo;
              </div>
            )}
          </div>

          {/* Custom font input */}
          <div
            style={{
              padding: "10px 12px",
              borderTop: "1px solid #E7E5E4",
              display: "flex",
              gap: 6,
            }}
          >
            <input
              type="text"
              placeholder="Custom font name..."
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCustom()}
              style={{
                flex: 1,
                padding: "7px 10px",
                fontSize: 12,
                border: "1px solid #E7E5E4",
                borderRadius: 8,
                outline: "none",
                background: "#F5F5F4",
                color: "#1C1917",
              }}
            />
            <button
              onClick={handleCustom}
              style={{
                padding: "7px 12px",
                fontSize: 12,
                fontWeight: 600,
                border: "none",
                borderRadius: 8,
                background: "#1C1917",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
