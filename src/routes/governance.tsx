import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Shield, Check, ArrowRight, Heart, MapPin, Users, Scale, Phone, Mail, Linkedin } from "lucide-react";
import logoImg from "@/assets/VIDO-logo.png";
import betreImg from "@/assets/Directorates/BetreMariyamYosef.JPG";
import tadesseBelayImg from "@/assets/Directorates/Tadesse Belay.jpeg";
import selamAyenewImg from "@/assets/Directorates/Selamawit Ayenew.jpg";
import amareMekonenImg from "@/assets/Directorates/Amare Mekonen.jpeg";
import tegegneAkliluImg from "@/assets/Directorates/Tegegne Aklilu.jpeg";

export const Route = createFileRoute("/governance")({
  component: Governance,
});

const boardMembers = [
  { name: "Professor Yifru Berhan Mitke", role: "Board Chairperson", bio: "Former Minister for Ministry of Health Ethiopia, distinguished OB-GYN specialist, medical researcher, and global public health leader with over 29 years of clinical, academic, and executive experience. A recognized figure in global health innovation, leadership, and diplomacy, he has represented national and regional priorities on international stages, forging strategic global partnerships to advance health system resilience, equity, and policy reform across Ethiopia, East Africa and beyond. Currently, he works as a Senior Researcher and Executive Consultant specializing in policy development, program evaluation, and national and regional health surveys, while serving as a Scientific Advisor for the HaSET maternal and child health research program. His leadership background encompasses executive governance roles, including College Head with Vice President rank at both Addis Ababa University and Hawassa University. A prolific scholar and technical advisor, he has led 42 major consultancies and co-authored 116 peer-reviewed publications shaping regional and global health policy." },
  { name: "Mr. Abatiye Hailemariyam", role: "Deputy Board Chairperson", bio: "Abatye Hailemariam Gebresilase is a public health and development executive with over 21 years of leadership in health systems strengthening, governance, public-private partnerships, and sustainable financing across Ethiopia. Having held senior leadership positions within leading international and national organizations, including Marie Stopes International, his career spans from frontline healthcare delivery to strategic executive management. As Deputy Chairperson of Vital Vision Integrated Development Organization (VIDO), Abatye provides strategic direction, strengthens institutional governance, fosters cross-sectoral partnerships, mobilizes resources, and guides the organization's overarching mission to deliver sustainable, inclusive, and impactful community development across Ethiopia." },
  { name: "Mr. Tadesse Atlabachew Abegaz", role: "Chief Executive Director and Board Secretary", bio: "Tadesse Atlabachew Abegaz is a public health executive and development leader with over two decades of experience in health systems strengthening, policy, and institutional governance. Currently the CEO of Vital Vision Integrated Development Organization (VIDO), he previously served as Senior Special Advisor to the Ethiopian Minister of Health, Mayor of Gundo Meskel Town, and Director General of the Addis Ababa Food and Medicine Authority, Deputy Health Bureau Head, and General Director for Addis Ababa HIV/AIDS Prevention and Control Office. A veteran board leader across 12+ institutions, Tadesse has spearheaded national digital health reforms and managed major global partnerships with WHO, USAID, and The Global Fund. He holds an M.Sc. in Healthcare Management and is a PhD Research Fellow (UNISA)." },
  { name: "Dr. Daniel Hailemichael Burssa", role: "Board Member", bio: "A highly respected public health executive and clinical policy advisor with extensive experience in health system design and medical services management. He has served in several prominent national leadership roles, most notably as the Director General of the Medical Services Directorate at the Ethiopian Federal Ministry of Health (MOH) and as a Senior Advisor to the Minister of Health. Throughout his career, Dr. Daniel has been a driving force behind national medical quality standards, pediatric care initiatives, and emergency healthcare responses, successfully bridging high-level policy with impactful clinical delivery on the ground." },
  { name: "Dr. Zelalem Mulatu Demme", role: "Board Member", bio: "A prominent educational policymaker, academic, and currently the Head of the Addis Ababa City Administration Bureau of Education and a member of the City Council. He oversees the capital's public, private, and international school systems, championing systemic reforms, curriculum modernization, and Early Childhood Development (ECD). Notably, Dr. Zelalem spearheaded Addis Ababa's acclaimed School Feeding Program, which received international recognition with the Milan Urban Food Policy Pact Award. He holds a PhD in Political Science and International Relations from Addis Ababa University, bringing a robust academic foundation to his leadership of the city's education system." },
  { name: "Mr. Yohannes Mitiku Diro", role: "Board Member", bio: "A highly accomplished public administrator and governance expert with a distinguished career in regional and municipal leadership. He has served in key executive positions within the Oromia Regional State and as the Head of the Mayor's Office (Cabinet Secretariat) for the Addis Ababa City Administration. With extensive experience in public policy execution, urban governance, and inter-governmental coordination, Mr. Yohannes is recognized for his strategic leadership in streamlining municipal operations, managing cabinet affairs, and driving impactful development initiatives that bridge regional and capital-city administrations." },
  { name: "Hakim Abebech Shiferaw", role: "Board Member", bio: "A highly revered traditional medicine expert, conservationist, and honored community leader in Ethiopia. As a 52nd-generation healer who began her training at just five years old, she carries a profound ancestral lineage of indigenous medical and botanical knowledge. She is the founder and manager of the Deshet Traditional Medicine and Medicinal Plants Research Centre, where she oversees a dedicated field gene bank preserving over 600 native species of medicinal plants. Highly respected for her efforts to bridge traditional wisdom with modern science, Hakim Abebech has collaborated with the Federal Ministry of Health on key botanical research and remains a powerful, passionate voice for protecting Ethiopia's ecological heritage and indigenous flora." },
  { name: "Dr. Abas Hassen Yesuf", role: "Board Member and Member of Federal Parliament", bio: "Dr. Abas Hassen Yesuf is a prominent Ethiopian public health executive and medical leader serving as the Lead Executive Officer for Health System Innovation and Quality at the Ministry of Health of Ethiopia. He leads national initiatives to enhance healthcare quality, institutionalize the Patient Safety Friendly Hospital Framework, and establish facility accreditation systems. Additionally, Dr. Abas drives national digital health transformations, integrating artificial intelligence, telehealth, and innovative digital frameworks to strengthen healthcare delivery across Ethiopia." },
  { name: "Dr. Merawi Goshu", role: "Board Member", bio: "Dr. Merawi Goshu is an Ethiopian educational expert, psychological advocate, and the Founder of EREGEB Educational Services. With a profound commitment to educational reform and child development, he advocates for modernizing learning systems, prioritizing student psychological well-being, and transforming traditional academic practices. Through EREGEB Educational Services, Dr. Merawi promotes holistic learning frameworks, student mental health awareness, and constructive parenting approaches across Ethiopia. A prominent thought leader, his work challenges conventional teaching methods, inspiring educators, parents, and policymakers to foster resilience, critical thinking, and inclusive learning environments that empower youth to reach their full potential." },
];

const departments = [
  {
    name: "Health & Education Directorate",
    director: "Abatiye Hailemariyam",
    role: "Director",
    photo: "",
    focus: [
      "Strengthening health systems",
      "Expanding access to quality education",
      "Building institutional capacity",
    ],
  },
  {
    name: "Environment & Agriculture Directorate",
    director: "Amare Mekonen",
    role: "Director",
    photo: amareMekonenImg,
    focus: ["Promoting sustainable agriculture", "Environmental protection", "Climate resilience"],
  },
  {
    name: "Peace, Youth & Digital Directorate",
    director: "Tadesse Belay",
    role: "Director",
    photo: tadesseBelayImg,
    focus: ["Empowering youth", "Advancing peacebuilding initiatives", "Enhancing digital literacy and innovation"],
  },
  {
    name: "Finance & HR Administration Directorate",
    director: "Selamawit Ayenew",
    role: "Director",
    photo: selamAyenewImg,
    focus: ["Managing financial transparency", "Strengthening HR systems", "Organizational administration"],
  },
  {
    name: "Partnership & Resource Mobilization Directorate",
    director: "Dr Aweke Moges",
    role: "Director",
    photo: "",
    focus: ["Building partnerships", "Mobilizing resources", "Ensuring accountability through monitoring & evaluation"],
  },
  {
    name: "Monitoring & Evaluation Directorate",
    director: "Tegegne Akililu",
    role: "Director",
    photo: tegegneAkliluImg,
    focus: [
      "Performance tracking",
      "Data collection & analysis",
      "Accountability & transparency",
      "Impact assessment",
      "Learning & adaptation",
      "Reporting",
    ],
  },
  {
    name: "Information Technology Directorate",
    director: "BetreMariyam Yosef",
    role: "IT Advisor",
    photo: betreImg,
    linkedin: "https://www.linkedin.com/in/betremariyamyosef/",
    focus: [
      "Digital transformation & innovation",
      "ICT infrastructure development",
      "Cybersecurity & data protection",
      "Systems integration & automation",
      "Capacity building & digital literacy",
      "Data management & analytics",
    ],
  },
  {
    name: "Deputy Executive Officer",
    director: "Mr. Mandefro Haile",
    role: "",
    photo: "",
    focus: [
      "Organizational Leadership & Governance",
      "Coordination & Oversight",
      "Capacity Building & Staff Development",
      "Monitoring, Evaluation & Reporting",
      "Representation & Advocacy",
    ],
  },
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
            VIDO is legally registered under the FDRE ACSO Proclamation No. 1113/2019 with Registration No. 8042. Our governance framework ensures transparency, accountability and community ownership at every level — from the General Assembly to the field office.
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
            <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">Directorates</h2>
            <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
            <p className="text-muted-foreground text-sm">Programs and operations are delivered through specialized directorates and executive leadership, each reporting to the Executive Director.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((d) => (
              <article key={d.name + d.director} className="group flex flex-col bg-background border border-border overflow-hidden hover:border-gold hover:-translate-y-1 transition duration-300">
                <div className="relative h-56 bg-muted flex items-center justify-center p-5 overflow-hidden">
                  {d.photo ? (
                    <img
                      src={d.photo}
                      alt={d.director}
                      className="max-h-full w-auto object-contain shadow-[var(--shadow-soft)]"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-gold/10 border border-gold/30 flex items-center justify-center font-display font-bold text-xl text-primary/70 shrink-0">
                      {d.director.replace(/^(Mr\.|Dr\.)\s+/i, "").split(/\s+/).map(w => w[0]).slice(0, 2).join("")}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold via-gold/60 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">{d.name}</div>
                  {d.linkedin ? (
                    <a
                      href={d.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 font-display text-xl text-primary leading-snug inline-flex items-center gap-2 hover:text-gold transition-colors"
                    >
                      {d.director} <Linkedin className="w-4 h-4 text-gold" />
                    </a>
                  ) : (
                    <div className="mt-1.5 font-display text-xl text-primary leading-snug">{d.director}</div>
                  )}
                  {d.role && <div className="text-xs text-muted-foreground mt-1">{d.role}</div>}
                  <div className="mt-4 pt-4 border-t border-border space-y-2">
                    {d.focus.map((f) => (
                      <div key={f} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
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
                  <div className="font-display text-2xl mb-2">Registered under Proclamation No. 1113/2019 with Registration No. 8042</div>
                  <p className="opacity-85 text-sm leading-relaxed">
                    VIDO is fully registered with the Federal Democratic Republic of Ethiopia's Authority for Civil Society Organizations (ACSO) under Proclamation No. 1113/2019 with Registration No. 8042. This legal framework governs all aspects of our operations — from financial reporting and board composition to program implementation and partnership agreements.
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
                    Certificate of Registration No. 8042 · Issued by FDRE ACSO
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
            <p className="text-xs opacity-80 mt-4 leading-relaxed">Vital Vision Integrated Development Organization — an indigenous, non-governmental, non-profit and non-religious organization legally re-registered by FDRE ACSO under Proclamation No. 1113/2019 with Registration No. 8042.</p>
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
