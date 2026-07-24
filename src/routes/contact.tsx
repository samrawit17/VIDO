import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, ArrowRight, Heart, Clock, Facebook, Twitter, Instagram, Youtube, Linkedin, Send } from "lucide-react";
import logoImg from "@/assets/VIDO-logo.png";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* TOP BAR */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container-editorial flex items-center justify-between py-2">
          <div className="flex items-center gap-4 opacity-90">
            <Link to="/" className="hover:opacity-100">&larr; Home</Link>
            <span className="opacity-40">|</span>
            <a href="#contact" className="hover:opacity-100">Get in Touch</a>
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
            <Link to="/board" className="hover:text-gold">Board & CEO</Link>
            <Link to="/news" className="hover:text-gold">News & Events</Link>
            <Link to="/diaspora" className="hover:text-gold">Diaspora</Link>
            <Link to="/contact" className="text-gold font-semibold">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/" hash="donate" className="hidden md:inline-flex items-center gap-2 bg-gold text-gold-foreground px-4 py-2 rounded-sm text-sm font-semibold hover:brightness-110 transition">
              Donate <Heart className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-editorial py-16 md:py-24 text-center">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Get in Touch</div>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance max-w-3xl mx-auto">
            Contact <span className="italic text-gold">Us</span>
          </h1>
          <p className="mt-4 text-sm md:text-base opacity-90 max-w-xl mx-auto">
            Get in touch with Vital Vision Integrated Development Organization
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-16 bg-muted">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-border bg-background p-6 hover:border-gold transition">
              <div className="w-11 h-11 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="font-display text-lg text-primary mb-2">Address</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hiwot Corner Center, Nifas Silk Lafto — Wereda 11<br />
                Addis Ababa, Ethiopia
              </p>
            </div>
            <div className="border border-border bg-background p-6 hover:border-gold transition">
              <div className="w-11 h-11 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <div className="font-display text-lg text-primary mb-2">Phone</div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>+251 937 594 444</li>
                <li>+251 911 340 619</li>
                <li>+251 911 065 810</li>
              </ul>
            </div>
            <div className="border border-border bg-background p-6 hover:border-gold transition">
              <div className="w-11 h-11 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <div className="font-display text-lg text-primary mb-2">Email</div>
              <p className="text-sm text-muted-foreground break-all">
                vitalvisionintegrated@gmail.com
              </p>
            </div>
            <div className="border border-border bg-background p-6 hover:border-gold transition">
              <div className="w-11 h-11 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <div className="font-display text-lg text-primary mb-2">Hours</div>
              <p className="text-sm text-muted-foreground">
                Mon-Fri: 8:00 AM - 5:00 PM (EAT)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + EXECUTIVE */}
      <section className="py-16 bg-background">
        <div className="container-editorial">
          <div className="grid md:grid-cols-5 gap-12">
            {/* FORM */}
            <div className="md:col-span-3">
              <h2 className="font-display text-3xl text-primary">Send us a message</h2>
              <div className="w-16 h-[3px] bg-gold my-5" />
              <form className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                  <input id="fullName" type="text" className="border border-border bg-background p-4 rounded-sm w-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input id="email" type="email" className="border border-border bg-background p-4 rounded-sm w-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition" placeholder="Your email address" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
                  <select id="subject" className="border border-border bg-background p-4 rounded-sm w-full text-foreground focus:outline-none focus:border-gold transition">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="donation">Donation</option>
                    <option value="diaspora">Diaspora Engagement</option>
                    <option value="media">Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea id="message" rows={5} className="border border-border bg-background p-4 rounded-sm w-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition resize-y" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:bg-secondary transition">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* SIDEBAR */}
            <div className="md:col-span-2 space-y-8">
              {/* EXECUTIVE CONTACT */}
              <div className="border border-border bg-muted/40 p-6">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Executive Director</div>
                <div className="font-display text-2xl text-primary leading-tight">Mr. Tadesse Atlabachew Abegaz</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Chief Executive Director & Board Secretary of Vital Vision Integrated Development Organization.
                  Reach out directly for strategic partnerships, governance matters and high-level inquiries.
                </p>
                <a href="mailto:vitalvisionintegrated@gmail.com" className="mt-4 inline-flex items-center gap-2 text-sm text-primary font-semibold hover:text-gold transition">
                  <Mail className="w-4 h-4" /> vitalvisionintegrated@gmail.com
                </a>
              </div>

              {/* SOCIAL MEDIA */}
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Follow Us</div>
                <h3 className="font-display text-xl text-primary mb-4">Connect on social media</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-secondary transition" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-secondary transition" aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-secondary transition" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-secondary transition" aria-label="Youtube">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-secondary transition" aria-label="Linkedin">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ink text-primary-foreground">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-balance">Ready to make a difference?</h2>
          <div className="w-16 h-[3px] bg-gold mx-auto my-5" />
          <p className="opacity-80 text-sm leading-relaxed">
            Whether you're a partner, donor, diaspora professional or community member — there is a place for you in the VIDO mission. Reach out today and let's build resilient communities together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" hash="donate" className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-sm font-semibold hover:brightness-110 transition">
              Support Our Mission <Heart className="w-4 h-4" />
            </Link>
            <Link to="/programs" className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 rounded-sm font-semibold hover:bg-white/10 transition">
              Explore Programs <ArrowRight className="w-4 h-4" />
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
