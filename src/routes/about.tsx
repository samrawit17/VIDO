import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Mail, Heart, Droplets, HeartPulse, BookOpen, Sprout, Users, Shield, Target, Check, Clock } from "lucide-react";
import logoImg from "@/assets/VIDO-logo.png";
import heroImg from "@/assets/hero-ethiopia.jpg";
import studentsImg from "@/assets/impact-students.jpg";
import agImg from "@/assets/impact-agriculture.jpg";
import eduImg from "@/assets/impact-education.jpg";
import healthImg from "@/assets/impact-health.jpg";

export const Route = createFileRoute("/about")({
  component: About,
});

const timeline = [
  { year: "2019", event: "VIDO re-registered under FDRE ACSO Proclamation No. 1113/2019, formalizing its legal status as an indigenous non-governmental organization." },
  { year: "2020", event: "Expanded WASH and primary healthcare operations across Oromia and SNNP regions, reaching 5,000+ households with clean water access." },
  { year: "2021", event: "Launched integrated education and livelihoods programs; established elder-led peace councils in conflict-prone woredas." },
  { year: "2022", event: "Opened diaspora engagement window; deployed MEAL framework across all thematic axes with board-reviewed quarterly reporting." },
  { year: "2023", event: "Extended operations to nine regions including Afar, Benishangul-Gumuz, Gambela, Sidama and Tigray; indigenous seed bank partnership with Deshet Centre." },
  { year: "2024", event: "Scaled community-owned WASH infrastructure to 12,000+ households; launched youth entrepreneurship and digital literacy tracks." },
  { year: "2025", event: "Governance & Transparency Forum held; FY2026 accountability report published; 100% community-ownership milestone achieved across active programs." },
];

const regions = [
  { name: "Addis Ababa", desc: "Headquarters and urban programs", color: "primary" },
  { name: "Oromia", desc: "WASH, agriculture, education & health", color: "gold" },
  { name: "Amhara", desc: "Health, nutrition & youth empowerment", color: "ink" },
  { name: "Tigray", desc: "Health systems & peacebuilding", color: "primary" },
  { name: "SNNP", desc: "WASH, education & livelihoods", color: "gold" },
  { name: "Sidama", desc: "Agriculture & environment", color: "ink" },
  { name: "Afar", desc: "Pastoralist WASH & primary healthcare", color: "primary" },
  { name: "Benishangul-Gumuz", desc: "Water access & community health", color: "gold" },
  { name: "Gambela", desc: "Education & alternative pathways", color: "ink" },
];

const principles = [
  {
    icon: Users,
    title: "Community-Led Needs Assessment",
    body: "Every intervention begins with participatory dialogue — listening to elders, women, youth and local leaders to identify the most pressing needs and existing capacities.",
  },
  {
    icon: Target,
    title: "One Problem — One Project — One Solution",
    body: "Each project targets a single systemic problem with an integrated solution that spans multiple sectors — because water, health, education and livelihoods are never isolated.",
  },
  {
    icon: Shield,
    title: "Community Ownership & Transfer",
    body: "Programs are designed to be owned and operated by the community from day one. VIDO provides technical support and seed resources; communities lead implementation and sustain outcomes.",
  },
  {
    icon: Check,
    title: "MEAL-Driven Accountability",
    body: "Monitoring, evaluation, accountability and learning frameworks govern every program cycle. Quarterly board reviews ensure transparency, zero-leakage disbursement and measurable impact.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* TOP BAR */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container-editorial flex items-center justify-between py-2">
          <div className="flex items-center gap-4 opacity-90">
            <Link to="/" className="hover:opacity-100">&larr; Home</Link>
            <span className="opacity-40">|</span>
            <a href="#contact" className="hover:opacity-100">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Ethiopia</span>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <header className="bg-primary text-primary-foreground border-t border-white/10">
        <div className="container-editorial flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImg} alt="VIDO" className="h-10 w-auto" />
            <div className="leading-tight">
              <div className="font-display text-lg">VIDO</div>
              <div className="text-[10px] uppercase tracking-widest opacity-80">Vital Vision Integrated Development</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-sm">
            <Link to="/" className="hover:text-gold">Home</Link>
            <Link to="/about" className="text-gold font-semibold">About Us</Link>
            <Link to="/programs" className="hover:text-gold">Thematic Focus</Link>
            <Link to="/governance" className="hover:text-gold">Governance</Link>
            <Link to="/board" className="hover:text-gold">Board & CEO</Link>
            <Link to="/news" className="hover:text-gold">News & Events</Link>
            <Link to="/diaspora" className="hover:text-gold">Diaspora</Link>
            <Link to="/contact" className="hover:text-gold">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/" hash="donate" className="hidden md:inline-flex items-center gap-2 bg-gold text-gold-foreground px-4 py-2 rounded-sm text-sm font-semibold hover:brightness-110 transition">
              Donate <Heart className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img src={heroImg} alt="About VIDO" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-editorial">
              <div className="max-w-2xl text-primary-foreground">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Indigenous NGO · Ethiopia</div>
                <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
                  About <span className="italic text-gold">VIDO</span>
                </h1>
                <p className="mt-4 text-sm md:text-base opacity-90 max-w-xl">
                  Vital Vision Integrated Development Organization is an indigenous, non-governmental, non-profit and non-religious organization legally registered under the FDRE ACSO Proclamation No. 1113/2019. We work across nine regions of Ethiopia to build resilient, self-reliant communities through integrated, community-owned development programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION / GOAL */}
      <section className="py-20 bg-muted">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">Our Foundation</h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-sm">Everything we do is guided by a clear vision, a actionable mission and a measurable goal.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Our Vision", body: "Envisioning a resilient, empowered community where every individual enjoys the fundamental right to health, education, and economic security — living with dignity and self-determination in harmony with their environment." },
              { label: "Our Mission", body: "To empower vulnerable and marginalized communities to achieve self-reliance through integrated, community-owned programs that improve access to sustainable livelihoods, quality education, primary healthcare and economic empowerment for men, women, children and youth across Ethiopia." },
              { label: "Our Goal", body: "To implement holistic, multi-sectoral solutions — combining water, health, education, food security and livelihoods — that build lasting community resilience, reduce aid dependency and transfer full program ownership to local leadership within each program cycle." },
            ].map((b) => (
              <div key={b.label} className="border border-border p-8 bg-background">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{b.label}</div>
                <div className="mt-4 font-display text-[15px] text-primary leading-relaxed">{b.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 bg-background">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Our Story</div>
              <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight text-balance">A journey rooted in community, guided by <span className="italic text-gold">purpose</span>.</h2>
              <div className="w-24 h-[3px] bg-gold my-5" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                VIDO was founded by a group of like-minded Ethiopian professionals who recognized that sustainable development must be indigenous — designed by the community, for the community, and sustained by the community. Re-registered under Proclamation 1113/2019, VIDO has grown from a small initiative into a multi-regional organization operating across thematic axes that address the root causes of poverty and vulnerability.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                Our journey has been marked by deep engagement with local elders, women's groups, youth and government partners. Every milestone — from the first borehole in Oromia to the diaspora engagement window — reflects our commitment to listening first, acting second and transferring ownership always.
              </p>
            </div>
            <div className="relative">
              <img src={eduImg} alt="VIDO story" className="w-full h-80 object-cover rounded-sm shadow-[var(--shadow-lift)]" width={1200} height={900} loading="lazy" />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4 rounded-sm shadow-lg hidden md:block">
                <div className="font-display text-2xl leading-none">1113/2019</div>
                <div className="text-[10px] uppercase tracking-widest mt-1">FDRE ACSO Registered</div>
                <div className="text-[10px] uppercase tracking-widest mt-1">With Registration No. #8042</div>
              </div>
            </div>
          </div>
          <div className="space-y-0 max-w-3xl mx-auto">
            {timeline.map((t, i) => (
              <div key={t.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-sm font-bold shrink-0">{t.year.slice(-2)}</div>
                  {i < timeline.length - 1 && <div className="w-[2px] flex-1 bg-gold/30" />}
                </div>
                <div className="pb-8 pt-1">
                  <div className="font-display text-lg text-primary">{t.year}</div>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATED DEVELOPMENT MODEL */}
      <section className="py-20 bg-muted">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Engagement Approach</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight text-balance">One Problem — One Project — One Solution</h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-sm">
              VIDO believes that poverty and vulnerability are systemic — not isolated. Our integrated model unifies water, health, education, livelihoods and human rights into a single, measurable program cycle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {principles.map((p) => (
              <div key={p.title} className="border border-border bg-background p-6 hover:border-gold transition">
                <div className="w-11 h-11 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-4">
                  <p.icon className="w-5 h-5" />
                </div>
                <div className="font-display text-xl text-primary">{p.title}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-primary text-primary-foreground p-8 rounded-sm">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-display text-3xl text-gold">6</div>
                <div className="text-[11px] uppercase tracking-widest opacity-80 mt-1">Thematic Axes</div>
              </div>
              <div>
                <div className="font-display text-3xl text-gold">9</div>
                <div className="text-[11px] uppercase tracking-widest opacity-80 mt-1">Regions of Operation</div>
              </div>
              <div>
                <div className="font-display text-3xl text-gold">100%</div>
                <div className="text-[11px] uppercase tracking-widest opacity-80 mt-1">Community-Owned</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEOGRAPHIC REACH */}
      <section className="py-20 bg-background">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Geographic Reach</div>
              <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight text-balance">Across <span className="italic text-gold">nine regions</span> of Ethiopia</h2>
              <div className="w-24 h-[3px] bg-gold my-5" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                From the highlands of Tigray to the lowlands of Afar, from the capital Addis Ababa to the pastoralist communities of Benishangul-Gumuz — VIDO's programs reach Ethiopia's most vulnerable and marginalized populations, wherever the need is greatest.
              </p>
              <div className="mt-6 space-y-3">
                {regions.map((r) => (
                  <div key={r.name} className="flex items-center gap-3 text-sm">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      r.color === "primary" ? "bg-primary text-primary-foreground" :
                      r.color === "gold" ? "bg-gold text-gold-foreground" :
                      "bg-ink text-primary-foreground"
                    }`}>
                      <MapPin className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">{r.name}</span>
                      <span className="text-muted-foreground"> — {r.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={agImg} alt="Geographic reach" className="w-full h-96 object-cover rounded-sm shadow-[var(--shadow-lift)]" width={1200} height={900} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY OWNERSHIP */}
      <section className="py-20 bg-muted">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Community Ownership</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight text-balance">Designed by the community. <span className="italic text-gold">Owned by the community.</span></h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-sm">
              We do not build for communities — we build with them. Every VIDO program is co-created through participatory dialogue and designed to transfer full ownership to local hands.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Participatory Design",
                body: "Programs begin with community-led needs assessments — listening to elders, women, youth and local leaders. No top-down prescriptions. Every intervention reflects local wisdom, priorities and cultural context.",
              },
              {
                icon: HeartPulse,
                title: "Local Leadership",
                body: "Community members are trained as WASH committees, health volunteers, cooperative leaders and peace council members. VIDO provides technical support; communities provide the leadership that sustains outcomes.",
              },
              {
                icon: Sprout,
                title: "Sustainable Transfer",
                body: "Every program has a clear exit strategy. Infrastructure, governance structures and financial systems are built to outlast the program cycle — fully owned and operated by the community within three to five years.",
              },
            ].map((c) => (
              <div key={c.title} className="border border-border bg-background p-8 hover:border-gold transition">
                <div className="w-11 h-11 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-4">
                  <c.icon className="w-5 h-5" />
                </div>
                <div className="font-display text-xl text-primary">{c.title}</div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink text-primary-foreground">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-balance">Join us in building resilient communities</h2>
          <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
          <p className="opacity-80 text-sm leading-relaxed">
            Whether you are a partner, donor, diaspora professional or community member — there is a place for you in the VIDO mission. Together, we turn systemic challenges into lasting solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/programs" className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition">
              Explore Thematic Focus <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/" hash="donate" className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 rounded-sm font-semibold hover:bg-white/10 transition">
              Support Our Mission <Heart className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-primary text-primary-foreground">
        <div className="container-editorial py-14 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="VIDO" className="h-10 w-auto" />
              <div>
                <div className="font-display text-lg">VIDO</div>
                <div className="text-[10px] uppercase tracking-widest opacity-70">Vital Vision Integrated Development</div>
              </div>
            </div>
            <p className="text-xs opacity-80 mt-4 leading-relaxed">Vital Vision Integrated Development Organization — an indigenous, non-governmental, non-profit and non-religious organization legally re-registered by FDRE ACSO under Proclamation No. 1113/2019.</p>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-gold mb-3">Explore</div>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-gold">Thematic Focus</Link></li>
              <li><Link to="/governance" className="hover:text-gold">Governance</Link></li>
              <li><Link to="/board" className="hover:text-gold">Board & CEO</Link></li>
              <li><Link to="/news" className="hover:text-gold">News & Events</Link></li>
              <li><Link to="/diaspora" className="hover:text-gold">Diaspora Window</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-gold mb-3">Contact Us</div>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> +251 937 594 444</li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> +251 911 340 619</li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> +251 911 065 810</li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> vitalvisionintegrated@gmail.com</li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-gold mb-3">Headquarters</div>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> <span>Hiwot Corner Center, Nifas Silk Lafto — Wereda 11<br />Addis Ababa, Ethiopia</span></li>
              <li className="opacity-80 text-xs mt-3">Executive Director<br /><span className="opacity-100">Mr. Tadesse Atlabachew Abegaz</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-editorial py-5 flex items-center justify-between flex-wrap gap-4 text-xs opacity-70">
            <div>© {new Date().getFullYear()} Vital Vision Integrated Development Organization. All rights reserved.</div>
            <div className="flex gap-4">
              <Link to="/" className="hover:text-gold">Privacy</Link>
              <Link to="/" className="hover:text-gold">Terms</Link>
              <Link to="/governance" className="hover:text-gold">Governance</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-editorial py-4 flex items-center justify-center gap-2 text-[11px] opacity-60">
            <span>powered by</span>
            <a href="https://afrodigital.dev/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-90">
              <img src="https://afrodigital.dev/assets/logo-DlzEpGU4.png" alt="Afro Digital" className="h-4 w-auto" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
