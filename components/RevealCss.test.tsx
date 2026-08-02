import { render, screen } from "@testing-library/react";
import { RevealCss } from "./RevealCss";

/**
 * RevealCss dibuat untuk memperbaiki LCP: komponen Reveal berbasis Framer Motion
 * baru berjalan setelah React hydrate, sehingga headline hero sempat tidak
 * terlihat. Test di bawah mengunci sifat yang membuat perbaikan itu berlaku —
 * kalau ada yang mengubahnya nanti, test-nya gagal sebelum sampai produksi.
 */
describe("RevealCss", () => {
  it("merender isinya langsung, tanpa menunggu efek apa pun", () => {
    render(<RevealCss>Halo dunia</RevealCss>);
    expect(screen.getByText("Halo dunia")).toBeInTheDocument();
  });

  it("memakai animasi CSS, bukan style opacity inline dari JavaScript", () => {
    render(<RevealCss>Konten</RevealCss>);
    const el = screen.getByText("Konten");

    expect(el).toHaveClass("animate-fade-up");
    // Kalau opacity di-set inline, berarti visibilitas bergantung JavaScript lagi.
    expect(el.style.opacity).toBe("");
  });

  it("hanya menulis animationDelay bila delay memang diberikan", () => {
    const { rerender } = render(<RevealCss>Tanpa jeda</RevealCss>);
    expect(screen.getByText("Tanpa jeda").getAttribute("style")).toBeNull();

    rerender(<RevealCss delay={0.4}>Dengan jeda</RevealCss>);
    expect(screen.getByText("Dengan jeda")).toHaveStyle({
      animationDelay: "0.4s",
    });
  });

  it("merender tag semantik yang diminta, bukan selalu div", () => {
    render(<RevealCss as="h1">Judul utama</RevealCss>);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Judul utama"
    );
  });

  it("menggabungkan className tambahan tanpa membuang kelas animasinya", () => {
    render(<RevealCss className="text-lg">Isi</RevealCss>);
    const el = screen.getByText("Isi");
    expect(el).toHaveClass("animate-fade-up");
    expect(el).toHaveClass("text-lg");
  });
});
