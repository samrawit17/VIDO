import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import logoImg from "@/assets/VIDO-logo.png";
import afroDigitalLogo from "@/assets/afro digital logo.png";
import heroImg from "@/assets/hero-community.jpg";
import studentsImg from "@/assets/impact-students.jpg";
import programsImg from "@/assets/tile-programs.jpg";
import careersImg from "@/assets/tile-careers.jpg";
import eduImg from "@/assets/impact-education.jpg";
import healthImg from "@/assets/impact-health.jpg";
import yifruImg from "@/assets/Board&Chief-Executive-profile/Professor Yifru Berhan Mitke.jpg";
import abatiyeImg from "@/assets/Board&Chief-Executive-profile/Mr. Abatiye Hailemariyam.jpeg";
import tadesseImg from "@/assets/Board&Chief-Executive-profile/Mr. Tadesse Atlabachew Abegaz.jpeg";
import danielImg from "@/assets/Board&Chief-Executive-profile/Dr. Daniel Hailemichael Burssa.jpg";
import zelalemImg from "@/assets/Board&Chief-Executive-profile/Dr. Zelalem Mulatu Demme.jpg";
import yohannesImg from "@/assets/Board&Chief-Executive-profile/Mr. Yohannes Mitiku Diro.jpg";
import hakimImg from "@/assets/Board&Chief-Executive-profile/Hakim Abebech Shiferaw.jpg";
import abasImg from "@/assets/Board&Chief-Executive-profile/Dr. Abas Hassen Yesuf.jpg";
import merawiImg from "@/assets/Board&Chief-Executive-profile/Dr Merawi Goshu.jpg";
import {
  Search, Globe, Menu, Play, ChevronRight, ChevronLeft, MapPin,
  Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowRight, Phone, Mail,
  Heart, X, Droplets, HeartPulse, BookOpen, Sprout, Users, Shield, Building2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const board = [
  { name: "Professor Yifru Berhan Mitke", role: "Board Chairperson", photo: "", bio: "Former Minister for Ministry of Health Ethiopia, distinguished OB-GYN specialist, medical researcher, and global public health leader with over 29 years of clinical, academic, and executive experience. A recognized figure in global health innovation, leadership, and diplomacy, he has represented national and regional priorities on international stages, forging strategic global partnerships to advance health system resilience, equity, and policy reform across Ethiopia, East Africa and beyond. Currently, he works as a Senior Researcher and Executive Consultant specializing in policy development, program evaluation, and national and regional health surveys, while serving as a Scientific Advisor for the HaSET maternal and child health research program. His leadership background encompasses executive governance roles, including College Head with Vice President rank at both Addis Ababa University and Hawassa University. A prolific scholar and technical advisor, he has led 42 major consultancies and co-authored 116 peer-reviewed publications shaping regional and global health policy." },
  { name: "Mr. Abatiye Hailemariyam", role: "Deputy Board Chairperson", photo: "", bio: "Abatye Hailemariam Gebresilase is a public health and development executive with over 21 years of leadership in health systems strengthening, governance, public-private partnerships, and sustainable financing across Ethiopia. Having held senior leadership positions within leading international and national organizations, including Marie Stopes International, his career spans from frontline healthcare delivery to strategic executive management. As Deputy Chairperson of Vital Vision Integrated Development Organization (VIDO), Abatye provides strategic direction, strengthens institutional governance, fosters cross-sectoral partnerships, mobilizes resources, and guides the organization's overarching mission to deliver sustainable, inclusive, and impactful community development across Ethiopia." },
  { name: "Mr. Tadesse Atlabachew Abegaz", role: "Chief Executive Director and Board Secretary", photo: "", bio: "Tadesse Atlabachew Abegaz is a public health executive and development leader with over two decades of experience in health systems strengthening, policy, and institutional governance. Currently the CEO of Vital Vision Integrated Development Organization (VIDO), he previously served as Senior Special Advisor to the Ethiopian Minister of Health, Mayor of Gundo Meskel Town, and Director General of the Addis Ababa Food and Medicine Authority, Deputy Health Bureau Head, and General Director for Addis Ababa HIV/AIDS Prevention and Control Office. A veteran board leader across 12+ institutions, Tadesse has spearheaded national digital health reforms and managed major global partnerships with WHO, USAID, and The Global Fund. He holds an M.Sc. in Healthcare Management and is a PhD Research Fellow (UNISA)." },
  { name: "Dr. Daniel Hailemichael Burssa", role: "Board Member", photo: "", bio: "A highly respected public health executive and clinical policy advisor with extensive experience in health system design and medical services management. He has served in several prominent national leadership roles, most notably as the Director General of the Medical Services Directorate at the Ethiopian Federal Ministry of Health (MOH) and as a Senior Advisor to the Minister of Health. Throughout his career, Dr. Daniel has been a driving force behind national medical quality standards, pediatric care initiatives, and emergency healthcare responses, successfully bridging high-level policy with impactful clinical delivery on the ground." },
  { name: "Dr. Zelalem Mulatu Demme", role: "Board Member", photo: "", bio: "A prominent educational policymaker, academic, and currently the Head of the Addis Ababa City Administration Bureau of Education and a member of the City Council. He oversees the capital's public, private, and international school systems, championing systemic reforms, curriculum modernization, and Early Childhood Development (ECD). Notably, Dr. Zelalem spearheaded Addis Ababa's acclaimed School Feeding Program, which received international recognition with the Milan Urban Food Policy Pact Award. He holds a PhD in Political Science and International Relations from Addis Ababa University, bringing a robust academic foundation to his leadership of the city's education system." },
  { name: "Mr. Yohannes Mitiku Diro", role: "Board Member", photo: "", bio: "A highly accomplished public administrator and governance expert with a distinguished career in regional and municipal leadership. He has served in key executive positions within the Oromia Regional State and as the Head of the Mayor's Office (Cabinet Secretariat) for the Addis Ababa City Administration. With extensive experience in public policy execution, urban governance, and inter-governmental coordination, Mr. Yohannes is recognized for his strategic leadership in streamlining municipal operations, managing cabinet affairs, and driving impactful development initiatives that bridge regional and capital-city administrations." },
  { name: "Hakim Abebech Shiferaw", role: "Board Member", photo: "", bio: "A highly revered traditional medicine expert, conservationist, and honored community leader in Ethiopia. As a 52nd-generation healer who began her training at just five years old, she carries a profound ancestral lineage of indigenous medical and botanical knowledge. She is the founder and manager of the Deshet Traditional Medicine and Medicinal Plants Research Centre, where she oversees a dedicated field gene bank preserving over 600 native species of medicinal plants. Highly respected for her efforts to bridge traditional wisdom with modern science, Hakim Abebech has collaborated with the Federal Ministry of Health on key botanical research and remains a powerful, passionate voice for protecting Ethiopia's ecological heritage and indigenous flora." },
  { name: "Dr. Abas Hassen Yesuf", role: "Board Member and Member of Federal Parliament", photo: "", bio: "Dr. Abas Hassen Yesuf is a prominent Ethiopian public health executive and medical leader serving as the Lead Executive Officer for Health System Innovation and Quality at the Ministry of Health of Ethiopia. He leads national initiatives to enhance healthcare quality, institutionalize the Patient Safety Friendly Hospital Framework, and establish facility accreditation systems. Additionally, Dr. Abas drives national digital health transformations, integrating artificial intelligence, telehealth, and innovative digital frameworks to strengthen healthcare delivery across Ethiopia." },
  { name: "Dr. Merawi Goshu", role: "Board Member", photo: "", bio: "Dr. Merawi Goshu is an Ethiopian educational expert, psychological advocate, and the Founder of EREGEB Educational Services. With a profound commitment to educational reform and child development, he advocates for modernizing learning systems, prioritizing student psychological well-being, and transforming traditional academic practices. Through EREGEB Educational Services, Dr. Merawi promotes holistic learning frameworks, student mental health awareness, and constructive parenting approaches across Ethiopia. A prominent thought leader, his work challenges conventional teaching methods, inspiring educators, parents, and policymakers to foster resilience, critical thinking, and inclusive learning environments that empower youth to reach their full potential." },
];


const boardPhotos: Record<string, string> = {
  "Professor Yifru Berhan Mitke": yifruImg,
  "Mr. Abatiye Hailemariyam": abatiyeImg,
  "Mr. Tadesse Atlabachew Abegaz": tadesseImg,
  "Dr. Daniel Hailemichael Burssa": danielImg,
  "Dr. Zelalem Mulatu Demme": zelalemImg,
  "Mr. Yohannes Mitiku Diro": yohannesImg,
  "Hakim Abebech Shiferaw": hakimImg,
  "Dr. Abas Hassen Yesuf": abasImg,
  "Dr. Merawi Goshu": merawiImg,
};

const audienceTabs = {
  Beneficiary: {
    heading: "Building Vision With Your Community",
    body: "VIDO partners with pastoralist families, smallholder farmers, women, children and youth across Addis Ababa, Oromia, Amhara, Tigray, SNNP, Sidama, Afar, Benishangul and Gambela. Programs are community-designed and community-owned — from WASH and primary healthcare to indigenous seed banks and elder-led reconciliation.",
    bullets: ["WASH & sanitation", "Primary healthcare & nutrition", "Quality education & ECD", "Livelihoods & cooperatives", "Women & youth empowerment", "Climate-resilient infrastructure"],
    cta: "Explore Thematic Focus",
  },
  Partner: {
    heading: "Aligning Institutions For Impact",
    body: "We co-design programs with government, multilateral and INGO partners under Proclamation No. 1113/2019. Every intervention is board-reviewed and delivered through the One Problem – One Project – One Solution engagement approach.",
    bullets: ["Board-reviewed governance", "MEAL-driven reporting", "Multisectoral program design", "Local capacity building", "MoU-ready frameworks", "Accountability & transparency"],
    cta: "Become a Partner",
  },
  Donor: {
    heading: "Design For Resilience",
    body: "Your capital funds self-reliant, climate-adaptive ecosystems — not aid dependency. VIDO's integrated model unifies water, health, education, livelihoods and human rights to address systemic poverty holistically.",
    bullets: ["Zero-leakage mandate", "Quarterly board reports", "Transparent disbursement", "Diaspora co-investment", "Documented cost-per-life", "Measurable community exits"],
    cta: "Donate Today",
  },
} as const;

const axes = [
  { icon: Droplets, title: "WASH", body: "Clean water, sanitation and hygiene for underserved rural and pastoralist communities." },
  { icon: HeartPulse, title: "Health & Nutrition", body: "Primary healthcare, HIV/AIDS response, maternal & child nutrition and emergency response." },
  { icon: BookOpen, title: "Education", body: "Quality education, early childhood development and out-of-school youth pathways." },
  { icon: Sprout, title: "Environment & Livelihoods", body: "Natural-resource management, climate-resilient agriculture and sustainable income generation." },
  { icon: Users, title: "Youth & Women Empowerment", body: "Skill-building, gender equity and empowerment of women, girls and youth." },
  { icon: Shield, title: "Peace & Good Governance", body: "Human rights, democracy, conflict management and community-led peacebuilding." },
];

const tiles = [
  { title: "Thematic Focus", subtitle: "Integrated development model", img: programsImg, href: "/programs" },
  { title: "Board & Leadership", subtitle: "9 professionals steering VIDO", img: studentsImg, href: "/board" },
  { title: "Diaspora", subtitle: "Co-invest with us", img: careersImg, href: "/diaspora" },
];

const socialTiles = [
  { title: "Integrated Development", body: "Water, health, education, livelihoods, human rights.", tone: "primary" },
  { title: "One Problem, One Project, One Solution", body: "Our engagement approach.", tone: "gold" },
  { title: "Community-Led", body: "Needs assessment driven by local wisdom.", tone: "ink" },
  { title: "MEAL Discipline", body: "Monitoring, evaluation, accountability & learning.", tone: "primary" },
  { title: "Design For Resilience", body: "Self-reliant ecosystems, not aid dependency.", tone: "gold" },
  { title: "Diaspora Window", body: "Bring your skills home from anywhere.", tone: "ink" },
  { title: "Elder Councils", body: "Traditional reconciliation, engineered.", tone: "primary" },
  { title: "Seed Banks", body: "Indigenous varieties, regenerative soils.", tone: "gold" },
];

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return n;
}

function Index() {
  const [tab, setTab] = useState<keyof typeof audienceTabs>("Beneficiary");
  const [videoOpen, setVideoOpen] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroInView, setHeroInView] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setHeroInView(true), { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const testimonials = useMemo(() => [
    { quote: "VIDO's integrated approach — water, health and education together — has changed what is possible for our village in a single season.", name: "Amina H.", role: "Community Member, Afar Region" },
    { quote: "Every birr was reconciled to a life changed. That level of transparency is why we returned for a second cycle.", name: "Dr. Bekele T.", role: "Institutional Partner" },
    { quote: "As a diaspora professional, I finally have a home for my technical time. VIDO turned a weekend into a real classroom in the highlands.", name: "Selam A.", role: "Diaspora Contributor" },
  ], []);

  const active = audienceTabs[tab];

  const stat1 = useCountUp(9, heroInView);
  const stat2 = useCountUp(8, heroInView);
  const stat3 = useCountUp(6, heroInView);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* TOP BAR */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container-editorial flex items-center justify-between py-2">
          <div className="flex items-center gap-4 opacity-90">
            <Link to="/governance" className="hover:opacity-100">Policy & Governance</Link>
            <span className="opacity-40">|</span>
            <a href="#docs" className="hover:opacity-100">Quick Links</a>
            <span className="opacity-40">|</span>
            <Link to="/contact" className="hover:opacity-100">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <Search className="w-3.5 h-3.5" />
            <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> EN · አማ</span>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <header className="bg-primary text-primary-foreground border-t border-white/10">
        <div className="container-editorial flex items-center justify-between py-3">
          <a href="#" className="flex items-center gap-3">
            <img src={logoImg} alt="VIDO" className="h-10 w-auto" />
            <div className="leading-tight">
              <div className="font-display text-lg">VIDO</div>
              <div className="text-[10px] uppercase tracking-widest opacity-80">Vital Vision Integrated Development</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm">
            <Link to="/about" className="hover:text-gold">About Us</Link>
            <Link to="/programs" className="hover:text-gold">Thematic Focus</Link>
            <Link to="/governance" className="hover:text-gold">Governance</Link>
            <Link to="/board" className="hover:text-gold">Board</Link>
            <Link to="/news" className="hover:text-gold">News & Events</Link>
            <Link to="/diaspora" className="hover:text-gold">Diaspora</Link>
            <Link to="/contact" className="hover:text-gold">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#donate" className="hidden md:inline-flex items-center gap-2 bg-gold text-gold-foreground px-4 py-2 rounded-sm text-sm font-semibold hover:brightness-110 transition">
              Donate <Heart className="w-4 h-4" />
            </a>
            <button className="lg:hidden text-primary-foreground"><Menu /></button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section ref={heroRef} className="relative">
        <div className="relative h-[520px] md:h-[600px] overflow-hidden">
          <img src={heroImg} alt="VIDO community" className="w-full h-full object-cover" width={1920} height={900} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-editorial">
              <div className="max-w-2xl text-primary-foreground">
                <div className="inline-block text-[11px] uppercase tracking-[0.3em] bg-gold text-gold-foreground px-3 py-1 mb-6">Indigenous NGO · Ethiopia · Proclamation 1113/2019</div>
                <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
                  A resilient, empowered community — <span className="italic text-gold">every right, realized</span>.
                </h1>
                <p className="mt-5 text-base md:text-lg opacity-90 max-w-xl">
                  Vital Vision Integrated Development Organization unifies water, health, education, livelihoods and human rights to address systemic poverty and vulnerability holistically.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/programs" className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition">
                    Explore Our Work <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="#donate" className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 rounded-sm font-semibold hover:bg-white/10 transition">
                    Support Our Mission
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-ink text-primary-foreground">
          <div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6 py-6 text-center">
            <div><div className="font-display text-3xl text-gold">{stat1}</div><div className="text-[11px] uppercase tracking-widest opacity-70 mt-1">Board & Leadership</div></div>
            <div><div className="font-display text-3xl text-gold">{stat2}</div><div className="text-[11px] uppercase tracking-widest opacity-70 mt-1">Regions of Ethiopia</div></div>
            <div><div className="font-display text-3xl text-gold">{stat3}</div><div className="text-[11px] uppercase tracking-widest opacity-70 mt-1">Thematic Axes</div></div>
            <div><div className="font-display text-3xl text-gold">100%</div><div className="text-[11px] uppercase tracking-widest opacity-70 mt-1">Community-Owned</div></div>
          </div>
        </div>
      </section>

      {/* AUDIENCE TABS */}
      <section id="about" className="relative py-20 bg-muted">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url(${eduImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container-editorial relative">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {(Object.keys(audienceTabs) as Array<keyof typeof audienceTabs>).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`px-8 py-3 text-sm font-semibold rounded-sm transition ${
                  tab === k ? "bg-primary text-primary-foreground" : "bg-white text-foreground hover:bg-primary/10"
                }`}
              >
                {k}
              </button>
            ))}
          </div>
          <div className="bg-background/90 backdrop-blur rounded-sm shadow-[var(--shadow-soft)] p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight text-balance">{active.heading}</h2>
              <div className="w-24 h-[3px] bg-gold my-5" />
              <p className="text-muted-foreground text-[15px] leading-relaxed">{active.body}</p>
              {tab === "Beneficiary" ? (
                <Link to="/programs" className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:bg-secondary transition">
                  {active.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <button className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:bg-secondary transition">
                  {active.cta} <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
            <ul className="space-y-3">
              {active.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 w-2 h-2 bg-gold rounded-full shrink-0" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* VISION / MISSION / GOAL */}
      <section className="py-20 bg-background">
        <div className="container-editorial grid md:grid-cols-3 gap-6">
          {[
            { label: "Vision", body: "Envisioning a resilient, empowered community where every individual enjoys the fundamental right to health, education, and economic security." },
            { label: "Mission", body: "To empower vulnerable and marginalized communities to achieve self-reliance through integrated programs improving access to sustainable livelihoods, quality education, healthcare and economic empowerment for men, women, children and youth." },
            { label: "Goal", body: "Implement holistic, multi-sectoral solutions — combining water, health, education, food and livelihoods — to build community resilience and self-reliance." },
          ].map((b) => (
            <div key={b.label} className="border border-border p-8 bg-muted/40">
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{b.label}</div>
              <div className="mt-3 font-display text-2xl text-primary leading-snug">{b.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL BAND */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-editorial grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <div className="w-24 h-24 rounded-full bg-white/10 border-4 border-gold/40 flex items-center justify-center shrink-0 mx-auto md:mx-0">
            <span className="font-display text-3xl text-gold">"</span>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Voices from the field</div>
            <p className="text-lg md:text-xl leading-relaxed font-display italic max-w-3xl">
              {testimonials[testimonialIdx].quote}
            </p>
            <div className="mt-5 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-semibold">{testimonials[testimonialIdx].name}</div>
                <div className="text-sm opacity-70">{testimonials[testimonialIdx].role}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length)} className="w-9 h-9 rounded-full border border-white/30 hover:bg-white/10 flex items-center justify-center"><ChevronLeft className="w-4 h-4" /></button>
                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <span key={i} className={`w-2 h-2 rounded-full ${i === testimonialIdx ? "bg-gold" : "bg-white/30"}`} />
                  ))}
                </div>
                <button onClick={() => setTestimonialIdx((i) => (i + 1) % testimonials.length)} className="w-9 h-9 rounded-full border border-white/30 hover:bg-white/10 flex items-center justify-center"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE TILES */}
      <section className="grid md:grid-cols-3">
        {tiles.map((t) => (
          <a key={t.title} href={t.href} className="group relative h-64 md:h-80 overflow-hidden">
            <img src={t.img} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" width={1000} height={700} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-primary-foreground">
              <div className="text-[11px] uppercase tracking-widest text-gold opacity-90">{t.subtitle}</div>
              <div className="font-display text-3xl mt-1 group-hover:translate-x-1 transition">{t.title}</div>
              <div className="mt-3 h-[2px] w-12 bg-gold group-hover:w-20 transition-all" />
            </div>
          </a>
        ))}
      </section>

      {/* THEMATIC FOCUS */}
      <section id="programs" className="py-20 bg-background">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Thematic Focus</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">One integrated model. Six areas of action.</h2>
            <p className="mt-3 text-muted-foreground text-sm">Multisectoral programs designed with communities, aligned to regional and national goals, and delivered under the MEAL framework.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {axes.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border border-border bg-muted/30 p-6 hover:border-gold hover:bg-background transition">
                <div className="w-11 h-11 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-display text-xl text-primary">{title}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO + DONATE */}
      <section id="donate" className="py-20">
        <div className="container-editorial grid md:grid-cols-2 gap-12 items-center">
          <button onClick={() => setVideoOpen(true)} className="group relative aspect-video rounded-sm overflow-hidden shadow-[var(--shadow-lift)]">
            <img src={healthImg} alt="VIDO impact story" className="w-full h-full object-cover" width={1200} height={675} loading="lazy" />
            <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/30 transition flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gold text-gold-foreground flex items-center justify-center shadow-xl group-hover:scale-110 transition">
                <Play className="w-8 h-8 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-primary-foreground text-xs uppercase tracking-widest">Watch our story</div>
          </button>
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Transform Lives</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight text-balance">Make a donation. Build community resilience.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With every gift, you fund community-owned infrastructure — WASH systems, primary healthcare, classrooms, cooperatives and reconciliation councils. VIDO's integrated model turns single gifts into multi-sector outcomes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:bg-secondary transition">
                Donate Now <Heart className="w-4 h-4" />
              </a>
              <a href="#governance" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-sm text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition">
                See Governance
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANCE / ORGANOGRAM */}
      <section id="governance" className="bg-muted py-20">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Governance</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">General Assembly → Executive Board → Executive Director</h2>
            <p className="mt-3 text-muted-foreground text-sm">VIDO has a General Assembly of like-minded professionals. The Board of Directors, elected by the General Assembly, is responsible for directing the organization towards its vision and mission.</p>
          </div>
          <div className="grid gap-3 max-w-3xl mx-auto">
            {[
              { l: "General Assembly", d: "The Supreme Body" },
              { l: "Executive Board", d: "Strategic Direction" },
              { l: "Executive Director", d: "Daily Operations · Mr. Tadesse Atlabachew Abegaz" },
            ].map((n, i) => (
              <div key={n.l} className="bg-background border-l-4 border-gold p-5 flex items-center justify-between" style={{ marginLeft: `${i * 24}px` }}>
                <div>
                  <div className="font-display text-lg text-primary">{n.l}</div>
                  <div className="text-xs text-muted-foreground mt-1">{n.d}</div>
                </div>
                <Building2 className="w-5 h-5 text-primary/60" />
              </div>
            ))}
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            {["Health & Education", "Environment & Agriculture", "Peace, Youth & Digital", "Finance & HR Administration", "Partnership & Resource Mobilization", "Monitoring & Evaluation", "Information Technology"].map((d) => (
              <div key={d} className="bg-background border border-border p-4">
                <div className="text-[10px] uppercase tracking-widest text-gold">Directorate</div>
                <div className="font-display text-primary mt-1 leading-tight">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT WITH IMAGE */}
      <section className="py-20">
        <div className="container-editorial grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Engagement Approach</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight text-balance">One Problem — One Project — One Solution.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              Driven by local wisdom, guided by evidence, and dedicated to building lasting community resilience. Every VIDO project starts with a community-led needs assessment and ends with sustainability transferred to local hands.
            </p>
            <Link to="/programs" className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:bg-secondary transition">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <img src={studentsImg} alt="Ethiopian community" className="w-full h-[360px] object-cover rounded-sm shadow-[var(--shadow-lift)]" width={1200} height={900} loading="lazy" />
            <div className="absolute -bottom-6 -left-6 bg-gold text-gold-foreground px-6 py-4 rounded-sm shadow-lg hidden md:block">
              <div className="font-display text-2xl leading-none">1113/2019</div>
              <div className="text-[10px] uppercase tracking-widest mt-1">FDRE ACSO Registered</div>
              <div className="text-[10px] uppercase tracking-widest mt-1">With Registration No. #8042</div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-20 bg-muted">
        <div className="container-editorial">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-3xl text-primary">Upcoming Events</h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-lg font-display italic">Coming soon — stay tuned!</p>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="py-20">
        <div className="container-editorial">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-3xl text-primary">News</h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-lg font-display italic">Coming soon — we'll share updates here!</p>
          </div>
        </div>
      </section>

      {/* BOARD */}
      <section id="board" className="py-20 bg-muted">
        <div className="container-editorial">
          <div className="text-center mb-12">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Board & Chief Executive</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary">Nine leaders steering the vision</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto">Portrait photos of each board member and the CEO. Replace the placeholders with official headshots as they become available.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {board.map((p) => {
              const initials = p.name.replace(/^(Mr\.|Dr\.|Professor|Hakim)\s+/i, "").split(/\s+/).map(w => w[0]).slice(0, 2).join("");
              return (
                <div key={p.name} className="border border-border bg-background hover:border-gold transition overflow-hidden flex flex-col">
                  <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-gold/10 relative overflow-hidden border-b border-border">
                    {boardPhotos[p.name] ? (
                      <img src={boardPhotos[p.name]} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-primary/40">
                        <div className="font-display text-6xl">{initials}</div>
                        <div className="text-[10px] uppercase tracking-widest mt-3 opacity-70">Photo coming soon</div>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1">
                    <div className="text-[10px] uppercase tracking-widest text-gold">{p.role}</div>
                    <div className="font-display text-primary text-lg mt-1 leading-tight">{p.name}</div>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{p.bio}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* CONNECT WITH US - social tile grid */}
      <section className="bg-background py-20">
        <div className="container-editorial">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <h2 className="font-display text-3xl text-primary">Connect with us</h2>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-secondary transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {socialTiles.map((s, i) => (
              <div
                key={i}
                className={`aspect-square p-5 flex flex-col justify-between transition hover:scale-[1.02] cursor-pointer ${
                  s.tone === "primary" ? "bg-primary text-primary-foreground" :
                  s.tone === "gold" ? "bg-gold text-gold-foreground" :
                  "bg-ink text-primary-foreground"
                }`}
              >
                <div className="text-[10px] uppercase tracking-widest opacity-70">@vitalvision</div>
                <div>
                  <div className="font-display text-lg leading-tight">{s.title}</div>
                  <div className="text-xs mt-2 opacity-90 leading-snug">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIASPORA CTA */}
      <section id="diaspora" className="bg-ink text-primary-foreground py-16">
        <div className="container-editorial grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Diaspora Engagement Window</div>
            <h2 className="font-display text-3xl md:text-4xl text-balance">Bring your skills home — from anywhere in the world.</h2>
            <p className="mt-3 opacity-80 max-w-2xl">Ethiopian professionals abroad can co-invest technical time, mentorship, or capital into a live thematic axis of VIDO's work.</p>
          </div>
          <a href="mailto:vitalvisionintegrated@gmail.com" className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition whitespace-nowrap">
            Open Intake Portal <ArrowRight className="w-4 h-4" />
          </a>
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
              <a href="#" className="hover:text-gold">Privacy</a>
              <a href="#" className="hover:text-gold">Terms</a>
              <Link to="/governance" className="hover:text-gold">Governance</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-editorial py-4 flex items-center justify-center gap-2 text-[11px] opacity-60">
            <span>powered by</span>
            <a href="https://afrodigital.dev/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-90">
              <img src={afroDigitalLogo} alt="Afro Digital" className="h-4 w-auto" />
            </a>
          </div>
        </div>
      </footer>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div onClick={() => setVideoOpen(false)} className="fixed inset-0 z-50 bg-ink/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl aspect-video bg-black">
            <button onClick={() => setVideoOpen(false)} className="absolute -top-10 right-0 text-white"><X /></button>
            <div className="w-full h-full flex items-center justify-center text-white/60 text-sm">Video placeholder — replace with embedded player.</div>
          </div>
        </div>
      )}
    </div>
  );
}
