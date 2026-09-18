"use client";

import { useEffect, useState } from "react";
import { Content, defaultContent, KEY } from "@/lib/content";

type Section = keyof Content;
type EditableField = { section: Section; field: string; label: string };

const fields: EditableField[] = [
  { section: "home", field: "title", label: "Home title" },
  { section: "home", field: "subtitle", label: "Home subtitle" },
  { section: "home", field: "faceButton", label: "Face button" },
  { section: "home", field: "fingerprintButton", label: "Fingerprint button" },
  { section: "home", field: "footer", label: "Footer" },
  { section: "face", field: "title", label: "Face title" },
  { section: "face", field: "instruction", label: "Face instruction" },
  { section: "face", field: "scanning", label: "Face scanning text" },
  { section: "face", field: "success", label: "Face success text" },
  { section: "face", field: "close", label: "Face close button" },
  { section: "face", field: "retry", label: "Face retry button" },
  { section: "finger", field: "title", label: "Fingerprint title" },
  { section: "finger", field: "instruction", label: "Fingerprint instruction" },
  { section: "finger", field: "scanning", label: "Fingerprint scanning text" },
  { section: "finger", field: "progress", label: "Fingerprint progress text" },
  { section: "finger", field: "success", label: "Fingerprint success text" },
  { section: "finger", field: "close", label: "Fingerprint close button" },
  { section: "finger", field: "retry", label: "Fingerprint retry button" }
];

export default function Admin() {
  const [content, setContent] = useState<Content>(defaultContent);
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    try {
      const value = localStorage.getItem(KEY);
      if (value) setContent(JSON.parse(value) as Content);
    } catch {
      setContent(defaultContent);
    }
  }, []);

  const login = () => {
    const expected = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";
    if (password === expected) setLogged(true);
    else alert("Invalid password");
  };

  const update = (section: Section, field: string, value: string) => {
    setContent((current) => ({
      ...current,
      [section]: { ...current[section], [field]: value }
    } as Content));
  };

  const save = () => {
    localStorage.setItem(KEY, JSON.stringify(content));
    alert("Saved. Refresh the client page to see changes.");
  };

  if (!logged) {
    return (
      <main className="page">
        <section className="admin">
          <h1>Admin Login</h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && login()}
          />
          <button onClick={login}>Login</button>
          <p className="note">
            Demo password: admin123. Set NEXT_PUBLIC_ADMIN_PASSWORD in Vercel for a different demo password.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="admin">
        <div className="admin-head">
          <h1>Admin Content</h1>
          <button className="secondary" onClick={() => setLogged(false)}>Logout</button>
        </div>
        <p>Edit client-visible text, then save.</p>
        <div className="fields">
          {fields.map(({ section, field, label }) => {
            const value = String((content[section] as Record<string, string>)[field] ?? "");
            return (
              <label key={`${section}.${field}`}>
                {label}
                <input value={value} onChange={(event) => update(section, field, event.target.value)} />
              </label>
            );
          })}
        </div>
        <button onClick={save}>Save Content</button>
      </section>
    </main>
  );
}
