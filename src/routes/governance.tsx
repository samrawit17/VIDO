import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Shield, Check, ArrowRight, Heart, MapPin, Users, Scale, FileText, Phone, Mail } from "lucide-react";
import logoImg from "@/assets/VIDO-logo.png";

export const Route = createFileRoute("/governance")({
  component: Governance,
});

const boardMembers = [
  { name: "Ato Mesfin Tafesse Bogale", role: "Chairperson", bio: "Senior governance and policy advisor with extensive experience in civil society board leadership. Brings strategic foresight and fiduciary oversight to the Executive Board." },
  { name: "W/ro Tiruwork Zewdie Woldie", role: "Vice Chairperson", bio: "Gender equity advocate and former government health administrator. Champions community voice and inclusive program design across all thematic axes." },
  { name: "Ato Getachew Tilahun Tessema", role: "Secretary", bio: "Legal professional specialized in non-profit law and ACSO compliance. Ensures all board proceedings meet the standards of Proclamation No. 1113/2019." },
  { name: "Ato Tekalign Tafesse Kebede", role: "Board Member", bio: "Finance and audit expert with decades of experience in non-profit financial governance. Leads the board's oversight on zero-leakage disbursement." },
  { name: "W/ro Almaz Demeke Lema", role: "Board Member", bio: "Community development practitioner with deep roots in SNNP and Oromia rural programming. Brings field-level accountability to strategic board decisions." },
  { name: "Ato Birhane Gebre Gidey", role: "Board Member", bio: "Water resources engineer and WASH sector specialist. Advises on borehole sustainability, water quality monitoring and community-managed infrastructure." },
  { name: "Dr. Hailu Ayele Shiferaw", role: "Board Member", bio: "Public health physician with expertise in primary healthcare, HIV/AIDS programming and maternal-child nutrition. Ensures health interventions meet national protocols." },
  { name: "W/ro Zenebech Tadesse Gashaw", role: "Board Member", bio: "Educator and early childhood development specialist. Guides the board on alternative education pathways and youth-skills programming." },
  { name: "Ato Desta Negash Assefa", role: "Board Member", bio: "Peacebuilding and governance practitioner with experience in elder-led reconciliation. Strengthens the board's engagement with community peace councils." },
];

const departments = [
  { name: "Health & Education", desc: "Primary healthcare, HIV/AIDS, maternal & child nutrition, WASH in schools, ECD, alternative education pathways." },
  { name: "Environment & Agriculture", desc: "Climate-resilient agriculture, indigenous seed banks, conservation farming, watershed restoration, renewable energy." },
  { name: "Peace, Youth & Digital", desc: "Community peace councils, youth entrepreneurship, digital literacy, women's leadership, human rights awareness." },
  { name: "Finance, HR & Administration", desc: "Financial management, payroll, procurement, human resources, asset management, compliance reporting." },
  { name: "Partnership, Resource Mobilization & M&E", desc: "Donor engagement, grant writing, diaspora window, MEAL framework, quarterly reporting, impact evaluation." },
];

const principles = [
  { icon: Shield, title: "Transparency", desc: "All board proceedings, financial reports and program evaluations are documented and accessible. Quarterly reports are published and reviewed by the Executive Board." },
  { icon: Shield, title: "Accountability", desc: "Every expenditure is tracked against program objectives under a zero-leakage disbursement policy. The board conducts annual fiduciary audits." },
  { icon: Shield, title: "MEAL Framework", desc: "Monitoring, Evaluation, Accountability and Learning governs every program cycle. Community feedback loops ensure programs adapt to on-the-ground realities." },
  { icon: Shield, title: "Community Participation", desc: "Communities are represented in planning, implementation and evaluation. Beneficiary feedback mechanisms are embedded in every project design." },
];

function Governance() {
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
            <Link to="/governance" className="text-gold font-semibold">Governance</Link>
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
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-editorial text-center max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Governance & Accountability</div>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            Governance
          </h1>
          <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
          <p className="text-sm md:text-base opacity-90 max-w-2xl mx-auto leading-relaxed">
            VIDO is legally registered under the FDRE ACSO Proclamation No. 1113/2019. Our governance framework ensures transparency, accountability and community ownership at every level — from the General Assembly to the field office.
          </p>
        </div>
      </section>

      {/* ORGANOGRAM */}
      <section className="py-20 bg-muted">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Our Structure</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">Organogram</h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-sm">The governance hierarchy flows from the supreme body through the board to daily operational leadership.</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="border-l-4 border-gold p-5 bg-background shadow-sm">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <div className="font-display text-xl text-primary">General Assembly</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">The Supreme Body</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">The highest authority of VIDO. Comprised of all founding and general members who set the strategic direction, elect the Executive Board and approve annual plans and budgets.</p>
            </div>
            <div className="border-l-4 border-gold p-5 bg-background shadow-sm ml-8">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <div className="font-display text-xl text-primary">Executive Board</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Strategic Direction</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">Nine-member board responsible for governance, policy approval, financial oversight and ensuring mission alignment. Board members serve staggered terms and meet quarterly.</p>
            </div>
            <div className="border-l-4 border-gold p-5 bg-background shadow-sm ml-16">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <div className="font-display text-xl text-primary">Executive Director</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Daily Operations · Mr. Tadesse Atlabachew Abegaz</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">Appointed by the Executive Board, the Executive Director leads day-to-day operations, oversees all thematic programs, manages staff and ensures implementation of board decisions across nine regions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOARD MEMBERS */}
      <section className="py-20 bg-background">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Leadership</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">Board Members</h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-sm">The Executive Board brings together expertise in governance, health, education, finance, law and community development.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {boardMembers.map((m) => (
              <div key={m.name} className="border border-border p-6 bg-muted/30 hover:border-gold transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm shrink-0">
                    {m.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-display text-[15px] text-primary leading-tight">{m.name}</div>
                    <div className="text-[10px] uppercase tracking-widest text-gold font-semibold">{m.role}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="py-20 bg-muted">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Operational Structure</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">Departments</h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-sm">Programs and operations are delivered through five specialized departments, each led by a department head reporting to the Executive Director.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {departments.map((d) => (
              <div key={d.name} className="border border-border bg-background p-5 hover:border-gold transition flex flex-col">
                <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-3 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="font-display text-base text-primary leading-tight">{d.name}</div>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE PRINCIPLES */}
      <section className="py-20 bg-background">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Our Commitment</div>
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">Governance Principles</h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-sm">Four pillars that guide every decision, program and partnership.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {principles.map((p) => (
              <div key={p.title} className="border border-border bg-muted/30 p-6 hover:border-gold transition text-center">
                <div className="w-12 h-12 bg-gold/20 text-gold-foreground flex items-center justify-center rounded-full mx-auto mb-4">
                  <p.icon className="w-6 h-6" />
                </div>
                <div className="font-display text-xl text-primary">{p.title}</div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL & COMPLIANCE */}
      <section className="py-20 bg-ink text-primary-foreground">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Legal Framework</div>
              <h2 className="font-display text-3xl md:text-4xl leading-tight">Legal & Compliance</h2>
              <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            </div>
            <div className="border border-white/10 p-8 md:p-10">
              <div className="flex items-start gap-4">
                <Scale className="w-8 h-8 text-gold shrink-0 mt-1" />
                <div>
                  <div className="font-display text-2xl mb-2">Registered under Proclamation No. 1113/2019</div>
                  <p className="opacity-85 text-sm leading-relaxed">
                    VIDO is fully registered with the Federal Democratic Republic of Ethiopia's Authority for Civil Society Organizations (ACSO) under Proclamation No. 1113/2019. This legal framework governs all aspects of our operations — from financial reporting and board composition to program implementation and partnership agreements.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-sm opacity-85">Full ACSO compliance with annual renewal and reporting</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-sm opacity-85">Executive Board oversight of all financial and programmatic decisions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-sm opacity-85">MEAL framework with quarterly board-reviewed accountability reports</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-sm opacity-85">Zero-leakage disbursement policy with annual external audit</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-sm opacity-85">Community feedback and grievance mechanisms embedded in every program</span>
                    </div>
                  </div>
                  <div className="mt-6 text-xs opacity-70 border-t border-white/10 pt-4">
                    Certificate of Registration No. {new Date().getFullYear() >= 2026 ? "4804" : "4804"} · Issued by FDRE ACSO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="font-display text-3xl text-primary">Transparency in action</h2>
          <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            VIDO's governance documents, annual reports and board resolutions are available for review by partners, donors and the public. We believe that transparency is not a policy — it is a practice.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/programs" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:brightness-110 transition">
              Explore Our Programs <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/" hash="donate" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-sm text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition">
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
              <li><Link to="/diaspora" className="hover:text-gold">Diaspora</Link></li>
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
              <img src="https://afrodigital.dev/assets/logo-DlzEpGU4.png" alt="Afro Digital" className="h-4 w-auto" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
