import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, MapPin, Globe, Users, BookOpen, GraduationCap, Briefcase, HandHeart, Mail, Phone } from "lucide-react";
import logoImg from "@/assets/VIDO-logo.png";
import { GraphicPanel } from "@/components/graphic-panel";

export const Route = createFileRoute("/diaspora")({
  component: Diaspora,
});

const steps = [
  {
    icon: BookOpen,
    step: "01",
    title: "Register your expertise",
    body: "Share your professional background, skills and interests through our diaspora intake form — whether you are in engineering, health, education, finance or any other field.",
  },
  {
    icon: Globe,
    step: "02",
    title: "Match to a thematic axis",
    body: "We align your expertise with one of our six thematic axes — WASH, health, education, livelihoods, youth empowerment or peacebuilding — where your contribution will have the greatest impact.",
  },
  {
    icon: HandHeart,
    step: "03",
    title: "Co-design & contribute",
    body: "Collaborate with our in-country teams to design and deploy your contribution — whether through technical support, virtual mentorship, project co-funding or direct capital investment.",
  },
];

const contributions = [
  {
    icon: Briefcase,
    title: "Technical Skills Transfer",
    body: "Contribute your professional expertise — engineering, healthcare, education, IT, agriculture, finance or governance — to strengthen VIDO's in-country program delivery through virtual consulting, training or short-term deployment.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    body: "Guide Ethiopian youth and emerging professionals through structured mentorship programs. Offer career guidance, academic support and leadership coaching — remotely or during diaspora returns.",
  },
  {
    icon: Heart,
    title: "Capital Co-investment",
    body: "Co-fund a specific project or thematic axis with full transparency. Every diaspora contribution is tracked through the MEAL framework, with quarterly impact reports delivered directly to you.",
  },
  {
    icon: Globe,
    title: "Advocacy",
    body: "Amplify VIDO's mission within your professional networks, diaspora associations and academic institutions. Host events, share resources or represent VIDO in international forums.",
  },
];

function Diaspora() {
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
            <Link to="/programs" className="hover:text-gold">Thematic Focus</Link>
            <Link to="/governance" className="hover:text-gold">Governance</Link>
            <Link to="/board" className="hover:text-gold">Board & CEO</Link>
            <Link to="/news" className="hover:text-gold">News & Events</Link>
            <Link to="/diaspora" className="text-gold font-semibold">Diaspora</Link>
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
          <GraphicPanel className="w-full h-full" tone="primary" icon={Globe} sublabel="Diaspora Engagement Window" label="Bring your skills home" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-editorial">
              <div className="max-w-2xl text-primary-foreground">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Diaspora Engagement Window</div>
                <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
                  Diaspora <span className="italic text-gold">Engagement</span> Window
                </h1>
                <p className="mt-4 text-sm md:text-base opacity-90 max-w-xl">
                  Bring your skills home — from anywhere in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-muted">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">How It Works</h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-sm">
              A three-step process designed to turn your skills, time and capital into measurable impact on the ground.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="border border-border bg-background p-8 hover:border-gold transition relative">
                <div className="text-5xl font-display text-gold/20 absolute top-4 right-6 leading-none">{s.step}</div>
                <div className="w-11 h-11 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-4">
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="font-display text-xl text-primary">{s.title}</div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAYS TO CONTRIBUTE */}
      <section className="py-20 bg-background">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Ways to Contribute</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">Your skills, your terms, <span className="italic text-gold">your impact</span></h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-sm">
              Whether you can give time, expertise or capital — there is a way for every diaspora professional to contribute.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {contributions.map((c) => (
              <div key={c.title} className="border border-border p-8 hover:border-gold transition">
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

      {/* TESTIMONIAL */}
      <section className="py-20 bg-ink text-primary-foreground">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
              <Users className="w-7 h-7 text-gold" />
            </div>
            <blockquote className="font-display text-2xl md:text-3xl leading-snug text-balance">
              "As a diaspora professional, I finally have a home for my technical time."
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3 text-sm">
              <div className="w-10 h-10 rounded-full bg-gold/30 flex items-center justify-center font-display font-bold">SA</div>
              <div className="text-left">
                <div className="font-semibold">Selam A.</div>
                <div className="text-xs opacity-70">Diaspora Contributor — Health Systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">Ready to make a difference?</h2>
          <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Join the VIDO diaspora network. Whether you have two hours or two weeks — your expertise can transform lives in Ethiopia.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:vitalvisionintegrated@gmail.com" className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition">
              Get in Touch <Mail className="w-4 h-4" />
            </a>
            <Link to="/" hash="donate" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-sm font-semibold hover:bg-primary hover:text-primary-foreground transition">
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
            <p className="text-xs opacity-80 mt-4 leading-relaxed">Vital Vision Integrated Development Organization — an indigenous, non-governmental, non-profit and non-religious organization legally re-registered by FDRE ACSO under Proclamation No. 1113/2019 with Registration No. 8042.</p>
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
              <li><Link to="/diaspora" className="hover:text-gold">Diaspora</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
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
              <img src="https://afrodigital.dev/assets/logo-DlzEpGU4.png" alt="Afro Digital" className="h-5 w-auto inline-block" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
