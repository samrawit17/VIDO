import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight, Heart } from "lucide-react";
import logoImg from "@/assets/VIDO-logo.png";
import afroDigitalLogo from "@/assets/afro digital logo.png";
import studentsImg from "@/assets/impact-students.jpg";

export const Route = createFileRoute("/news")({
  component: News,
});

function News() {
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
            <Link to="/news" className="text-gold font-semibold">News & Events</Link>
            <Link to="/diaspora" className="hover:text-gold">Diaspora</Link>
            <Link to="/" hash="contact" className="hover:text-gold">Contact</Link>
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
          <img src={studentsImg} alt="News & Events" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-editorial">
              <div className="max-w-2xl text-primary-foreground">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Stay informed · Stay connected</div>
                <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
                  News & <span className="italic text-gold">Events</span>
                </h1>
                <p className="mt-4 text-sm md:text-base opacity-90 max-w-xl">
                  The latest updates from Vital Vision Integrated Development — upcoming forums, field missions, program launches and community milestones across Ethiopia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-20 bg-muted">
        <div className="container-editorial">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">Upcoming Events</h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-lg font-display italic">Coming soon — stay tuned!</p>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-20 bg-background">
        <div className="container-editorial">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">Latest News</h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-lg font-display italic">Coming soon — we'll share updates here!</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink text-primary-foreground">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-balance">Stay engaged with VIDO</h2>
          <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
          <p className="opacity-80 text-sm leading-relaxed">
            Subscribe to our newsletter for quarterly program updates, field reports and event invitations delivered to your inbox.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:vitalvisionintegrated@gmail.com" className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition">
              Subscribe <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/" hash="diaspora" className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 rounded-sm font-semibold hover:bg-white/10 transition">
              Diaspora Window <Heart className="w-4 h-4" />
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
              <li><Link to="/" hash="diaspora" className="hover:text-gold">Diaspora Window</Link></li>
              <li><Link to="/" hash="contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-gold mb-3">Contact Us</div>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> +251 937 594 444</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> +251 911 340 619</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> +251 911 065 810</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> vitalvisionintegrated@gmail.com</li>
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
            <div>&copy; {new Date().getFullYear()} Vital Vision Integrated Development Organization. All rights reserved.</div>
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
              <img src={afroDigitalLogo} alt="Afro Digital" className="h-5 w-auto inline-block" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}