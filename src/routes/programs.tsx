import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Droplets, HeartPulse, BookOpen, Sprout, Users, Shield, ArrowRight, Heart,
  Check, MapPin, Target,
} from "lucide-react";
import programsHero from "@/assets/hero-community.jpg";
import agImg from "@/assets/impact-agriculture.jpg";
import eduImg from "@/assets/impact-education.jpg";
import healthImg from "@/assets/impact-health.jpg";
import studentsImg from "@/assets/impact-students.jpg";
import logoImg from "@/assets/VIDO-logo.png";

export const Route = createFileRoute("/programs")({
  component: Programs,
});

const axesDetail = [
  {
    icon: Droplets,
    title: "WASH",
    tagline: "Clean water, sanitation and hygiene for all",
    image: programsHero,
    regions: ["Afar", "Oromia", "SNNP", "Sidama", "Benishangul-Gumuz"],
    objectives: [
      "Construct and rehabilitate community water points and boreholes",
      "Promote household-level water treatment and safe storage",
      "Build gender-segregated sanitation facilities in schools and health posts",
      "Train community-led total sanitation and hygiene (CLTSH) committees",
      "Establish sustainable water management committees in every target kebele",
    ],
    impact: "12,000+ households provided with access to clean water across 4 regions.",
  },
  {
    icon: HeartPulse,
    title: "Health & Nutrition",
    tagline: "Primary healthcare, HIV/AIDS response, maternal & child nutrition",
    image: healthImg,
    regions: ["Addis Ababa", "Oromia", "Amhara", "Tigray"],
    objectives: [
      "Strengthen primary healthcare delivery at kebele level",
      "Support HIV/AIDS prevention, testing and treatment adherence",
      "Deliver maternal and child health nutrition programs",
      "Train health extension workers and community health volunteers",
      "Emergency nutrition response in drought-affected woredas",
    ],
    impact: "8,500+ mothers and children reached with nutrition and maternal health services annually.",
  },
  {
    icon: BookOpen,
    title: "Education",
    tagline: "Quality education, early childhood development and youth pathways",
    image: eduImg,
    regions: ["Addis Ababa", "Oromia", "SNNP", "Gambela"],
    objectives: [
      "Expand early childhood development (ECD) centers in underserved communities",
      "Improve school infrastructure and learning environments",
      "Support out-of-school youth with alternative education pathways",
      "Provide teaching materials, school feeding and scholarships",
      "Strengthen parent-teacher associations and community education governance",
    ],
    impact: "3,200+ out-of-school youth enrolled in alternative basic education programs.",
  },
  {
    icon: Sprout,
    title: "Environment & Livelihoods",
    tagline: "Climate-resilient agriculture and sustainable income generation",
    image: agImg,
    regions: ["Oromia", "SNNP", "Sidama", "Benishangul-Gumuz"],
    objectives: [
      "Promote climate-resilient agriculture and conservation farming",
      "Establish indigenous seed banks and regenerative soil practices",
      "Facilitate access to microfinance and village savings & loan associations",
      "Train cooperatives in value-chain processing and market linkages",
      "Reforest degraded watersheds and promote alternative energy sources",
    ],
    impact: "60+ hectares of degraded land under restoration; 1,200+ farmers trained in conservation agriculture.",
  },
  {
    icon: Users,
    title: "Youth & Women Empowerment",
    tagline: "Skill-building, gender equity and economic independence",
    image: studentsImg,
    regions: ["Addis Ababa", "Oromia", "Amhara", "SNNP", "Afar"],
    objectives: [
      "Provide technical and vocational skills training for youth",
      "Establish women's economic cooperatives and self-help groups",
      "Conduct gender-equity awareness and GBV prevention programs",
      "Support women's leadership in community decision-making structures",
      "Facilitate youth entrepreneurship and digital literacy training",
    ],
    impact: "2,500+ women and youth trained in market-relevant skills and entrepreneurship.",
  },
  {
    icon: Shield,
    title: "Peace & Good Governance",
    tagline: "Human rights, democracy and community-led peacebuilding",
    image: programsHero,
    regions: ["Oromia", "SNNP", "Tigray", "Afar", "Benishangul-Gumuz"],
    objectives: [
      "Facilitate elder-led reconciliation and conflict mediation councils",
      "Promote citizen participation in local governance and budget planning",
      "Conduct human rights awareness and legal literacy training",
      "Support democratic processes and peaceful coexistence initiatives",
      "Build capacity of local institutions for accountable service delivery",
    ],
    impact: "40+ community peace councils established; 15 inter-community conflicts resolved through dialogue.",
  },
];

function Programs() {
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
            <Link to="/about" className="hover:text-gold">About Us</Link>
            <Link to="/programs" className="text-gold font-semibold">Thematic Focus</Link>
            <Link to="/governance" className="hover:text-gold">Governance</Link>
            <Link to="/board" className="hover:text-gold">Board</Link>
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
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img src={programsHero} alt="VIDO programs" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-editorial">
              <div className="max-w-2xl text-primary-foreground">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Thematic Focus</div>
                <h1 className="font-display text-4xl md:text-5xl leading-tight">
                  One integrated model. <span className="italic text-gold">Six areas of action.</span>
                </h1>
                <p className="mt-4 text-sm md:text-base opacity-90 max-w-xl">
                  Multisectoral programs designed with communities, aligned to regional and national goals, and delivered under the MEAL framework of monitoring, evaluation, accountability and learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 bg-muted">
        <div className="container-editorial text-center max-w-3xl">
          <h2 className="font-display text-3xl text-primary">Our Integrated Development Model</h2>
          <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            VIDO believes that poverty and vulnerability are systemic — not isolated. A community without clean water cannot sustain
            health. A child who is malnourished cannot learn. A woman without economic opportunity cannot participate in governance.
            That is why every VIDO intervention unifies water, health, education, livelihoods and human rights into a single,
            measurable program cycle — One Problem, One Project, One Solution.
          </p>
        </div>
      </section>

      {/* AXES */}
      {axesDetail.map((axis, i) => (
        <section key={axis.title} className={`py-16 md:py-20 ${i % 2 === 0 ? "bg-background" : "bg-muted/50"}`}>
          <div className="container-editorial">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className={i % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-4">
                  <axis.icon className="w-6 h-6" />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-gold font-semibold mb-1">
                  Axis {i + 1} of 6
                </div>
                <h2 className="font-display text-3xl text-primary leading-tight">{axis.title}</h2>
                <p className="text-muted-foreground text-sm mt-2 italic">{axis.tagline}</p>
                <div className="w-12 h-[2px] bg-gold my-4" />
                <ul className="space-y-2">
                  {axis.objectives.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-foreground">{o}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Target className="w-3.5 h-3.5 text-gold" />
                    <span>{axis.impact}</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {axis.regions.map((r) => (
                    <span key={r} className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-2.5 py-1 rounded-sm font-semibold">
                      <MapPin className="w-3 h-3" />
                      {r}
                    </span>
                  ))}
                </div>
              </div>
              <div className={i % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="aspect-video rounded-sm overflow-hidden shadow-[var(--shadow-lift)]">
                  <img src={axis.image} alt={axis.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* THEMATIC TILES SUMMARY */}
      <section className="py-16 bg-ink text-primary-foreground">
        <div className="container-editorial text-center">
          <h2 className="font-display text-3xl">All axes, one mission</h2>
          <p className="mt-3 opacity-80 text-sm max-w-2xl mx-auto">
            Every thematic axis is delivered through community-owned structures, monitored through the MEAL framework,
            and designed to transfer fully to local leadership within the program cycle.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-10">
            {axesDetail.map((a) => (
              <div key={a.title} className="border border-white/10 p-4 text-center hover:border-gold/50 transition">
                <a.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="text-xs font-semibold">{a.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="font-display text-3xl text-primary">Partner with us</h2>
          <div className="w-16 h-[3px] bg-gold mx-auto my-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Whether you are a government agency, an INGO, a diaspora professional or a donor —
            VIDO's integrated model is designed for partnership. Every program is board-reviewed,
            MEAL-monitored and delivered under Proclamation No. 1113/2019.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:bg-secondary transition">
              Explore Our Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/" hash="donate" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-sm text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition">
              Support a Program <Heart className="w-4 h-4" />
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
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
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
              <li className="flex items-start gap-2">+251 937 594 444</li>
              <li className="flex items-start gap-2">+251 911 340 619</li>
              <li className="flex items-start gap-2">+251 911 065 810</li>
              <li className="flex items-start gap-2">vitalvisionintegrated@gmail.com</li>
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
