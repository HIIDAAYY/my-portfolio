import { site, waLink, waMessages } from "./site";

describe("waLink", () => {
  it("menempelkan pesan ke nomor WhatsApp yang benar", () => {
    expect(waLink("halo")).toBe(`${site.contact.whatsapp}?text=halo`);
  });

  it("meng-encode spasi dan karakter khusus agar link tidak putus", () => {
    // Ini inti masalahnya: pesan mentah berisi spasi, koma, dan tanda tanya.
    // Tanpa encoding, WhatsApp memotong pesan di spasi pertama.
    const url = waLink("Halo Adit, boleh diskusi?");

    expect(url).toContain("%20");
    expect(url).not.toContain(" ");
    expect(decodeURIComponent(url.split("?text=")[1])).toBe(
      "Halo Adit, boleh diskusi?"
    );
  });

  it("aman untuk emoji dan newline", () => {
    const url = waLink("Halo 👋\nSaya tertarik");
    expect(url).not.toContain("\n");
    expect(decodeURIComponent(url.split("?text=")[1])).toBe(
      "Halo 👋\nSaya tertarik"
    );
  });
});

describe("waMessages", () => {
  it("menyisipkan nama industri ke pesan demo", () => {
    expect(waMessages.demo("klinik gigi")).toContain("klinik gigi");
  });

  it("setiap pesan siap pakai tanpa placeholder yang belum diisi", () => {
    const teks = [waMessages.general, waMessages.aiAgent, waMessages.demo("kafe")];
    for (const t of teks) {
      expect(t.length).toBeGreaterThan(20);
      expect(t).not.toMatch(/\[.*\]|\{\{.*\}\}/); // tidak ada [ISI] atau {{var}}
    }
  });
});

describe("konfigurasi situs", () => {
  it("URL kanonik memakai https dan tanpa trailing slash", () => {
    expect(site.url).toMatch(/^https:\/\//);
    expect(site.url.endsWith("/")).toBe(false);
  });

  it("nomor WhatsApp memakai format internasional tanpa tanda plus", () => {
    expect(site.contact.whatsapp).toMatch(/^https:\/\/wa\.me\/62\d{8,}$/);
  });
});
