import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Heart, ArrowRight, Building2, Quote } from "lucide-react";
import heroImg from "@/assets/hero-community.jpg";
import logoImg from "@/assets/VIDO-logo.png";
import yifruImg from "@/assets/Board&Chief-Executive-profile/Professor Yifru Berhan Mitke.jpg";
import abatiyeImg from "@/assets/Board&Chief-Executive-profile/Mr. Abatiye Hailemariyam.jpeg";
import tadesseImg from "@/assets/Board&Chief-Executive-profile/Mr. Tadesse Atlabachew Abegaz.jpg";
import danielImg from "@/assets/Board&Chief-Executive-profile/Dr. Daniel Hailemichael Burssa.jpg";
import zelalemImg from "@/assets/Board&Chief-Executive-profile/Dr. Zelalem Mulatu Demme.jpg";
import yohannesImg from "@/assets/Board&Chief-Executive-profile/Mr. Yohannes Mitiku Diro.jpg";
import hakimImg from "@/assets/Board&Chief-Executive-profile/Hakim Abebech Shiferaw.jpg";
import abasImg from "@/assets/Board&Chief-Executive-profile/Dr. Abas Hassen Yesuf.jpg";
import merawiImg from "@/assets/Board&Chief-Executive-profile/Dr Merawi Goshu.jpg";

export const Route = createFileRoute("/board")({
  component: Board,
});

const board = [
  { name: "Professor Yifru Berhan Mitke", role: "Board Chairperson", photo: "", bio: "Former Minister of Health of Ethiopia, distinguished OB-GYN specialist, medical researcher, and public health leader with over 29 years of clinical, teaching, and executive leadership experience. He currently works as a Senior Researcher and Executive Consultant specializing in policy development, policy analysis, program evaluation, and national surveys, while also serving as a Scientific Advisor for the HaSET maternal and child health research program. His extensive career is highlighted by high level governance roles, including serving as College Head with Vice President rank at both Addis Ababa University and Hawassa University. A prolific academic and technical expert, he has led 42 major consultancies and co-authored 116 peer reviewed publications that continue to shape maternal, neonatal, and public health policies across East Africa." },
  { name: "Mr. Abatiye Hailemariyam", role: "Deputy Board Chairperson", photo: "", bio: "Public health and development executive with 21+ years of leadership across Ethiopia's health sector. Expertise spans health systems strengthening, governance, public-private partnerships, market systems development and sustainable financing. Has served in senior leadership roles across prominent national and international organizations, from frontline healthcare delivery to executive management. As Deputy Chairperson of VIDO, he provides strategic direction to strengthen governance, foster partnerships, mobilize resources and advance the organization's mission of sustainable, inclusive community development." },
  { name: "Mr. Tadesse Atlabachew Abegaz", role: "Chief Executive Director & Board Secretary", photo: "", bio: "Public health executive and development leader with two decades of experience in health systems strengthening, policy and institutional governance. Currently CEO of VIDO; previously Senior Special Advisor to the Ethiopian Minister of Health, Mayor of Gundo Meskel Town, and Director General of the Addis Ababa Food and Medicine Authority. Veteran board leader across 12+ institutions; led national digital-health reforms and major partnerships with WHO, USAID and The Global Fund. M.Sc. Healthcare Management; PhD Research Fellow (UNISA)." },
  { name: "Dr. Daniel Hailemichael Burssa", role: "Board Member", photo: "", bio: "A highly respected public health executive and clinical policy advisor with extensive experience in health system design and medical services management. Former Director General of the Medical Services Directorate at the Ethiopian Federal Ministry of Health and Senior Advisor to the Minister of Health. A driving force behind national medical quality standards, pediatric care initiatives and emergency healthcare responses, bridging high-level policy with impactful clinical delivery on the ground." },
  { name: "Dr. Zelalem Mulatu Demme", role: "Board Member", photo: "", bio: "A prominent educational policymaker and academic, currently Head of the Addis Ababa City Administration Bureau of Education and member of the City Council. Oversees the capital's public, private and international school systems — championing systemic reforms, curriculum modernization and Early Childhood Development. Spearheaded Addis Ababa's acclaimed School Feeding Program, recipient of the Milan Urban Food Policy Pact Award. PhD in Political Science and International Relations, Addis Ababa University." },
  { name: "Mr. Yohannes Mitiku Diro", role: "Board Member", photo: "", bio: "A highly accomplished public administrator and governance expert with a distinguished career in regional and municipal leadership. Has served in key executive positions within Oromia Regional State and as Head of the Mayor's Office (Cabinet Secretariat) for the Addis Ababa City Administration. Recognized for strategic leadership in streamlining municipal operations, managing cabinet affairs, and driving development initiatives bridging regional and capital-city administrations." },
  { name: "Hakim Abebech Shiferaw", role: "Board Member", photo: "", bio: "A highly revered traditional medicine expert, conservationist and honored community leader. A 52nd-generation healer who began her training at age five, she carries a profound ancestral lineage of indigenous medical and botanical knowledge. Founder and manager of the Deshet Traditional Medicine and Medicinal Plants Research Centre — a field gene bank preserving 600+ native medicinal plant species. Collaborates with the Federal Ministry of Health on botanical research and is a powerful voice for Ethiopia's ecological heritage and indigenous flora." },
  { name: "Dr. Abas Hassen Yesuf", role: "Board Member", photo: "", bio: "A prominent Ethiopian public health executive and medical leader serving as Lead Executive Officer for Health System Innovation and Quality at the Ministry of Health of Ethiopia. Leads national initiatives to enhance healthcare quality, institutionalize the Patient Safety Friendly Hospital Framework and establish facility accreditation systems. Drives national digital-health transformation — integrating artificial intelligence, telehealth and innovative digital frameworks to strengthen healthcare delivery across Ethiopia." },
  { name: "Dr. Merawi Goshu", role: "Board Member", photo: "", bio: "Ethiopian educational expert, psychological advocate and Founder of EREGEB Educational Services. Advocates for modernizing learning systems, prioritizing student psychological well-being and transforming traditional academic practices. Through EREGEB, promotes holistic learning frameworks, student mental-health awareness and constructive parenting approaches across Ethiopia. A prominent thought leader challenging conventional teaching methods and inspiring educators, parents and policymakers to foster resilience, critical thinking and inclusive learning environments." },
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

const ceo = board[2];

function Board() {
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
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-sm">
            <Link to="/" className="hover:text-gold">Home</Link>
            <Link to="/about" className="hover:text-gold">About Us</Link>
            <Link to="/programs" className="hover:text-gold">Thematic Focus</Link>
            <Link to="/governance" className="hover:text-gold">Governance</Link>
            <Link to="/board" className="text-gold font-semibold">Board & CEO</Link>
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
          <img src={heroImg} alt="Board & Chief Executive" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-editorial">
              <div className="max-w-2xl text-primary-foreground">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Leadership</div>
                <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
                  Board & <span className="italic text-gold">Chief Executive</span>
                </h1>
                <p className="mt-4 text-sm md:text-base opacity-90 max-w-xl">
                  Nine experienced professionals steering the vision and mission of Vital Vision Integrated Development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOARD GRID */}
      <section className="py-20 bg-muted">
        <div className="container-editorial">
          <div className="text-center mb-12">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Board & Chief Executive</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary">Nine leaders steering the vision</h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
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

      {/* CEO SPOTLIGHT */}
      <section className="py-20 bg-background">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Chief Executive Director</div>
              <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">{ceo.name}</h2>
              <div className="w-16 h-[3px] bg-gold my-5" />
              <p className="text-muted-foreground text-sm leading-relaxed">{ceo.bio}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                  <Building2 className="w-4 h-4 text-gold" />
                  <span>{ceo.role}</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-gold/10 relative overflow-hidden rounded-sm shadow-[var(--shadow-lift)]">
                {boardPhotos[ceo.name] ? (
                  <img src={boardPhotos[ceo.name]} alt={ceo.name} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-primary/40">
                    <div className="font-display text-6xl">{ceo.name.replace(/^(Mr\.|Dr\.|Professor|Hakim)\s+/i, "").split(/\s+/).map(w => w[0]).slice(0, 2).join("")}</div>
                    <div className="text-[10px] uppercase tracking-widest mt-3 opacity-70">Photo coming soon</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-primary text-primary-foreground">
        <div className="container-editorial py-14 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="VIDO" className="h-10 w-auto" />
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
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
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