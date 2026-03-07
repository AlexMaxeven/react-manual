const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

export async function http(path, options = {}) {
const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
});

if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status}: ${text || res.statusText}`);
}

// якщо бекенд не JSON — не впадемо
const contentType = res.headers.get("content-type") || "";
if (!contentType.includes("application/json")) return null;

return res.json();
}