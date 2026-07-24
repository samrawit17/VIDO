import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin, ArrowRight, Heart, ChevronRight } from "lucide-react";
import logoImg from "@/assets/VIDO-logo.png";
import agImg from "@/assets/impact-agriculture.jpg";
import eduImg from "@/assets/impact-education.jpg";
import healthImg from "@/assets/impact-health.jpg";
import programsImg from "@/assets/tile-programs.jpg";
import studentsImg from "@/assets/impact-students.jpg";

export const Route = createFileRoute("/news")({
  component: News,
});

const events = [
  { date: "JUL 22", loc: "Addis Ababa", title: "VIDO Governance & Transparency Forum", tag: "Governance" },
  { date: "AUG 10", loc: "Oromia Region", title: "WASH Deployment — Community Cohort 3", tag: "WASH" },
  { date: "AUG 28", loc: "Afar Region", title: "Pastoralist Primary Healthcare Field Mission", tag: "Health" },
  { date: "SEP 15", loc: "Global / Online", title: "Diaspora Technical Intake Webinar", tag: "Diaspora" },
];

const news = [
  { title: "VIDO expands WASH programs across four regions of Ethiopia", excerpt: "Clean-water access reaches new pastoralist woredas under the integrated development model." },
  { title: "Board publishes FY2026 governance and accountability report", excerpt: "Reviewed disbursements confirm compliance with Proclamation 1113/2019 and MEAL frameworks." },
  { title: "Indigenous seed bank launched in partnership with Deshet Centre", excerpt: "600+ native medicinal-plant species preserved — bridging traditional wisdom and modern science." },
  { title: "Diaspora Engagement Window opens: technical skill-transfer pipeline live", excerpt: "Professionals abroad can now co-design programs and invest technical time from anywhere." },
];

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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">Upcoming Events</h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-sm">Forums, field missions, deployments and diaspora engagements — mark your calendar.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {events.map((e) => (
              <div key={e.title} className="border border-border bg-background p-5 flex gap-5 hover:border-primary transition group">
                <div className="w-16 h-16 bg-primary text-primary-foreground flex flex-col items-center justify-center shrink-0 rounded-sm">
                  <span className="font-display text-lg leading-none">{e.date.split(" ")[1]}</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-80 mt-1">{e.date.split(" ")[0]}</span>
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-widest text-gold font-semibold">{e.tag}</div>
                  <div className="font-display text-lg text-primary group-hover:underline mt-1">{e.title}</div>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {e.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {e.loc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-20 bg-background">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">Latest News</h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-sm">Program updates, governance reports, partnerships and community stories from across Ethiopia.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {news.map((n, i) => (
              <article key={i} className="bg-background border border-border overflow-hidden group hover:shadow-[var(--shadow-soft)] transition">
                <div className="h-40 overflow-hidden">
                  <img src={[agImg, eduImg, healthImg, programsImg][i]} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" width={600} height={400} loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-primary text-base leading-snug group-hover:underline">{n.title}</h3>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-3">{n.excerpt}</p>
                  <button className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary uppercase tracking-widest">
                    Read More <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
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
              <img src="https://afrodigital.dev/assets/logo-DlzEpGU4.png" alt="Afro Digital" className="h-5 w-auto inline-block" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}