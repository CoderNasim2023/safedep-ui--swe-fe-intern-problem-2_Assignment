"use server";

export async function getPackage({
  ecosystem,
  name,
  version,
}: {
  ecosystem: string;
  name: string;
  version: string;
}) {
  const tenant = process.env.SAFEDEP_TENANT_ID;
  const apiKey = process.env.SAFEDEP_API_KEY;

  if (!tenant || !apiKey) {
    throw new Error("SafeDep credentials not configured");
  }

  const url = `https://api.safedep.io/packages/${encodeURIComponent(
    ecosystem
  )}/${encodeURIComponent(name)}/${encodeURIComponent(version)}`;

  const res = await fetch(url, {
    headers: {
      "X-Tenant-ID": tenant,
      Authorization: `Bearer ${apiKey}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const err: any = new Error(`SafeDep API Error ${res.status}`);
    err.status = res.status;
    throw err;
  }

  return res.json();
}
