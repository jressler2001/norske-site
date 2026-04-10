import Image from 'next/image';

const categories = [
  {
    title: 'Electric Vehicles (LSVs)',
    body: 'Efficient, capable vehicles built for real-world environments.',
    image:
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Sporting Goods',
    body: 'Performance-driven equipment with a refined feel.',
    image:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Apparel',
    body: 'Clean, functional, everyday essentials.',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Automotive Accessories',
    body: 'Subtle upgrades that elevate the driving experience.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Construction Materials & Systems',
    body: 'Windows, doors, flooring, and architectural-grade components.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Housewares',
    body: 'Minimal, functional products for everyday living.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
];

const principles = ['Purpose-built', 'Durable', 'Approachable', 'Timeless'];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#06090d] text-[#f2f4f7] selection:bg-white/20">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_68%_20%,rgba(255,255,255,0.10),transparent_24%),radial-gradient(circle_at_20%_0%,rgba(90,100,120,0.16),transparent_28%),linear-gradient(180deg,#0a0d12_0%,#07090d_45%,#05070b_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:120px_120px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0d12]/72 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Norske logo"
              width={180}
              height={60}
              className="h-10 w-auto object-contain"
              priority
            />
            <div className="hidden md:block">
              <div className="text-[11px] uppercase tracking-[0.38em] text-white/40">Norske</div>
              <div className="text-sm text-white/78">Recreational Innovations</div>
            </div>
          </a>

          <nav className="hidden items-center gap-10 text-[15px] text-white/72 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#products" className="transition hover:text-white">Products</a>
            <a href="#approach" className="transition hover:text-white">Approach</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1400px] px-4 pb-10 pt-5 lg:px-8">
        <section className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018))] shadow-[0_30px_120px_rgba(0,0,0,0.58)]">
          <div className="border-b border-white/10 px-6 py-4 lg:px-10">
            <div className="flex items-center justify-between">
              <div className="text-[11px] uppercase tracking-[0.42em] text-white/38">
                Norske Recreational Innovations
              </div>
              <div className="hidden text-[12px] text-white/28 md:block">
                Refined products across real-world categories
              </div>
            </div>
          </div>

          <div className="grid min-h-[640px] gap-8 px-6 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-14">
            <div className="flex flex-col justify-center">
              <h1 className="max-w-[620px] text-[48px] font-medium leading-[0.98] tracking-[-0.045em] text-white sm:text-[64px] lg:text-[72px]">
                Engineered Simplicity.
                <br />
                Elevated Everyday.
              </h1>

              <p className="mt-8 max-w-[620px] text-[19px] leading-[1.65] text-white/72 lg:text-[21px]">
                Global sourcing, refined design, and trusted partnerships—delivering premium-feeling products without the premium markup.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white px-7 py-4 text-[17px] font-medium text-black shadow-[0_8px_30px_rgba(255,255,255,0.12)] transition hover:translate-y-[-1px]"
                >
                  Explore What We’re Building
                </a>
                <a
                  href="#future"
                  className="inline-flex items-center justify-center rounded-xl border border-white/18 bg-white/[0.03] px-7 py-4 text-[17px] font-medium text-white/88 transition hover:bg-white/[0.07]"
                >
                  Coming Soon
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_38%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_78%_62%,rgba(255,255,255,0.10),transparent_22%)]" />
              <div className="relative flex h-full min-h-[360px] w-full items-center justify-center rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_90px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_70%_28%,rgba(255,255,255,0.18),transparent_23%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.15))]" />
                <Image
                  src="/logo.png"
                  alt="Norske emblem"
                  width={900}
                  height={900}
                  className="relative z-10 w-[88%] max-w-[640px] object-contain drop-shadow-[0_28px_40px_rgba(0,0,0,0.62)]"
                  priority
                />
              </div>
            </div>
          </div>

          <section id="about" className="border-t border-white/8 bg-[linear-gradient(180deg,rgba(8,11,16,0.6),rgba(8,11,16,0.92))] px-6 py-10 lg:px-10">
            <div className="max-w-[980px]">
              <h2 className="text-[28px] font-medium tracking-[-0.03em] text-white lg:text-[38px]">
                Built on Scandinavian Principles
              </h2>
              <p className="mt-4 max-w-[900px] text-[17px] leading-8 text-white/68 lg:text-[19px]">
                From structure to street to home, Norske delivers refined products across the environments people rely on every day.
              </p>
            </div>

            <div id="products" className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
              {categories.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.025] shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                >
                  <div className="relative h-[140px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1280px) 50vw, 16vw"
                      className="object-cover grayscale contrast-125 brightness-[0.72]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.58))]" />
                  </div>
                  <div className="px-4 pb-4 pt-4">
                    <h3 className="text-[15px] font-medium leading-6 text-white lg:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-6 text-white/52 lg:text-[14px]">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>

        <section id="approach" className="grid gap-6 px-2 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-2 lg:py-12">
          <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-6 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)] lg:px-8">
            <div className="text-[11px] uppercase tracking-[0.36em] text-white/36">Approach</div>
            <h2 className="mt-4 text-[30px] font-medium tracking-[-0.03em] text-white lg:text-[40px]">
              Global Sourcing. Relentlessly Refined.
            </h2>
            <p className="mt-5 max-w-[720px] text-[17px] leading-8 text-white/68 lg:text-[18px]">
              We work directly with manufacturers and suppliers to streamline supply chains, improve consistency, and deliver stronger value without compromising the product experience.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Direct manufacturer relationships',
                'Supply chain efficiencies',
                'Material and finish control',
                'Consistency across categories',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[16px] border border-white/10 bg-white/[0.03] px-5 py-4 text-[15px] text-white/78"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-6 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)] lg:px-8">
              <div className="text-[11px] uppercase tracking-[0.36em] text-white/36">Standard</div>
              <h3 className="mt-4 text-[28px] font-medium tracking-[-0.03em] text-white">
                Refined, Not Flashy
              </h3>
              <p className="mt-5 text-[16px] leading-8 text-white/66">
                Nice, but not loud. Fashionable, yet approachable. Simple, yet still sophisticated.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.92),rgba(8,11,16,1))] px-6 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)] lg:px-8">
              <div className="text-[11px] uppercase tracking-[0.36em] text-white/36">Brand Pillars</div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {principles.map((item) => (
                  <div
                    key={item}
                    className="rounded-[16px] border border-white/10 bg-white/[0.04] px-4 py-4 text-[15px] text-white/84"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="future" className="px-2 pb-6 pt-2">
          <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-6 py-10 text-center shadow-[0_18px_60px_rgba(0,0,0,0.35)] lg:px-8 lg:py-14">
            <div className="text-[11px] uppercase tracking-[0.36em] text-white/36">Where We’re Going</div>
            <h2 className="mt-4 text-[32px] font-medium tracking-[-0.03em] text-white lg:text-[42px]">
              We’re Just Getting Started
            </h2>
            <p className="mx-auto mt-5 max-w-[860px] text-[17px] leading-8 text-white/66 lg:text-[18px]">
              Expanded product lines, deeper supplier partnerships, and a broader digital presence are on the way. More information will continue to be added as Norske grows.
            </p>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/8 px-6 py-8 text-sm text-white/46 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Norske logo"
              width={150}
              height={50}
              className="h-8 w-auto object-contain opacity-85"
            />
            <span>© 2026 Norske Recreational Innovations</span>
          </div>
          <div>More information coming soon</div>
        </div>
      </footer>
    </div>
  );
}
