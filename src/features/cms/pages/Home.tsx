/* Midnight Signal: cinematic digital brutalism, oversized editorial type, signal-cyan routes, and interactions that reveal structure. */
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { ArrowDown, ArrowUpRight, ChevronRight, Circle } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../../components/ui/dialog";
import { useCaseStudies, useBlogPosts } from "../../public/hooks/usePublicContent";
import { Link } from "wouter";

const capabilities = [
  ["01", "AI & INTELLIGENCE", "Generative AI, machine learning, intelligent automation and AI platforms."],
  ["02", "SOFTWARE ENGINEERING", "Enterprise applications, SaaS, APIs and resilient microservices."],
  ["03", "CLOUD & INFRASTRUCTURE", "Cloud architecture, migration, DevOps and infrastructure designed to scale."],
  ["04", "DATA ENGINEERING", "Pipelines, platforms and decision systems that turn data into movement."],
  ["05", "DIGITAL TRANSFORMATION", "Operating models and connected experiences that make change durable."],
  ["06", "ENTERPRISE PLATFORMS", "Secure foundations that bring teams, systems and intelligence together."],
];
const industriesList = ["BANKING", "FINANCIAL SERVICES", "HEALTHCARE", "MANUFACTURING", "RETAIL", "LOGISTICS", "EDUCATION", "AUTOMOTIVE", "TELECOMMUNICATIONS", "GOVERNMENT", "REAL ESTATE", "PROFESSIONAL SERVICES"];
const principles = [
  ["01", "ENGINEERING FIRST", "Start with the system, not the surface. Make the foundation capable of carrying what comes next."],
  ["02", "INTELLIGENCE BY DESIGN", "Embed intelligence where decisions are made, so complexity becomes a competitive advantage."],
  ["03", "SECURITY AT SCALE", "Build trust into every layer, from the first architecture sketch to the last deployment."],
  ["04", "BUILT FOR TOMORROW", "Choose patterns and platforms that leave room for the future to arrive."],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [core, setCore] = useState("AI");
  const [activeCapability, setActiveCapability] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [dialog, setDialog] = useState<"contact" | "project" | null>(null);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  const { data: caseStudies } = useCaseStudies();
  const { data: blogPosts } = useBlogPosts();

  useEffect(() => {
    const onMove = (event: MouseEvent) => setCursor({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => { window.removeEventListener("mousemove", onMove); };
  }, []);

  const coreDetails = useMemo(() => ({
    AI: ["Generative AI", "Machine Learning", "Intelligent Automation", "AI Platforms"],
    DATA: ["Data Platforms", "Decision Systems", "Real-time Pipelines", "Data Governance"],
    CLOUD: ["Cloud Architecture", "Migration", "DevOps", "Infrastructure"],
    SOFTWARE: ["Enterprise Apps", "SaaS Systems", "APIs", "Microservices"],
    SECURITY: ["Zero Trust", "Risk Systems", "Identity", "Resilience"],
    AUTOMATION: ["Workflow Design", "Orchestration", "RPA", "Intelligent Ops"],
  } as Record<string, string[]>)[core], [core]);

  const openDialog = (type: "contact" | "project") => setDialog(type);
  const action = (label: string) => toast.success(label, { description: "This interaction is wired and ready." });

  return (
    <div className="aurexion -mt-16" style={{ "--mx": `${cursor.x}%`, "--my": `${cursor.y}%` } as React.CSSProperties}>
      <main>
        <section id="top" className="hero section-dark">
          <div className="hero-art" style={{ backgroundImage: "url(/manus-storage/aurexion-hero_3b2c0b49.png)" }} />
          <div className="hero-grid" />
          <div className="hero-copy reveal">
            <p className="eyebrow"><Circle size={8} fill="currentColor" /> DIGITAL INTELLIGENCE / 001</p>
            <h1>ENGINEERING<br /><em>WHAT COMES NEXT.</em></h1>
            <p className="hero-sub">AI. Software. Cloud. Data.<br />Engineered for the enterprise.</p>
            <div className="hero-ctas">
              <Link href="/contact" className="signal-button inline-flex items-center">START A CONVERSATION <ArrowUpRight size={17} className="ml-1" /></Link>
              <button className="text-button" onClick={() => scrollToId("capabilities")}>EXPLORE OUR TECHNOLOGY <ArrowDown size={16} /></button>
            </div>
          </div>
          <div className="hero-meta"><span>FROM COMPLEXITY</span><span className="meta-line" /><span>TO INTELLIGENCE</span></div><div className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></div>
        </section>

        <section id="about" className="statement section-dark section-padding">
          <div className="section-index">02 / THE SHIFT</div>
          <div className="statement-copy">
            <p>Complex problems.</p>
            <h2>Intelligent systems.</h2>
            <div className="signal-rule" />
            <p className="statement-note">The hard part is rarely the technology alone. It is the architecture, the decisions, and the intelligence that make every layer work together.</p>
          </div>
          <div className="orbital-orb"><span /><span /><span /></div>
        </section>

        <section id="core" className="core-section section-dark section-padding">
          <div className="section-index">03 / THE SYSTEM</div>
          <div className="section-heading">
            <p className="eyebrow">THE AUREXION CORE</p>
            <h2>One system.<br /><em>Many intelligences.</em></h2>
          </div>
          <div className="core-layout">
            <div className="core-visual">
              <div className="core-ring ring-one" />
              <div className="core-ring ring-two" />
              <div className="core-center">
                <img src="/manus-storage/aurexion-mark_e8f9e729.png" alt="Aurexion core" />
              </div>
              {["AI", "DATA", "CLOUD", "SOFTWARE", "SECURITY", "AUTOMATION"].map((item, i) => <button key={item} className={`core-node node-${i} ${core === item ? "active" : ""}`} onClick={() => setCore(item)}><span>{item}</span></button>)}
            </div>
            <div className="core-detail">
              <p className="eyebrow">ACTIVE NODE / {core}</p>
              <h3>{coreDetails[0]}</h3>
              <ul>
                {coreDetails.map((detail) => <li key={detail}><ChevronRight size={15} />{detail}</li>)}
              </ul>
              <Link href="/services"><Button variant="outline" className="outline-button">VIEW ALL SERVICES <ArrowUpRight size={15} /></Button></Link>
            </div>
          </div>
        </section>

        <section id="capabilities" className="capabilities section-dark section-padding">
          <div className="section-index">04 / WHAT WE ENGINEER</div>
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">CAPABILITIES</p>
              <h2>Technology with<br /><em>a point of view.</em></h2>
            </div>
            <p className="heading-note">Move through the stack. Each discipline is a different lens on the same question: what should this system make possible?</p>
          </div>
          <div className="capability-list">
            {capabilities.map(([num, title, desc], i) => (
              <button key={title} className={`capability-row ${activeCapability === i ? "active" : ""}`} onMouseEnter={() => setActiveCapability(i)} onClick={() => { setActiveCapability(i); action(`${title} selected`); }}>
                <span className="cap-num">{num}</span>
                <span className="cap-title">{title}</span>
                <span className="cap-desc">{desc}</span>
                <ArrowUpRight className="cap-arrow" size={22} />
              </button>
            ))}
          </div>
        </section>

        <section id="ai" className="immersive-section ai-section section-dark" style={{ backgroundImage: "url(/manus-storage/aurexion-neural_ae3aae0d.png)" }}>
          <div className="immersive-overlay" />
          <div className="immersive-content">
            <p className="eyebrow">05 / AI & INTELLIGENCE</p>
            <h2>INTELLIGENCE<br /><em>WITHOUT LIMITS.</em></h2>
            <p>From generative models to intelligent operations, we turn data into decisions that move with the business.</p>
            <Button className="text-button" onClick={() => scrollToId("core")}>ENTER THE CORE <ArrowUpRight size={16} /></Button>
          </div>
          <div className="floating-labels">
            {["GENERATIVE AI", "MACHINE LEARNING", "COMPUTER VISION", "NLP", "AI AGENTS", "PREDICTIVE ANALYTICS"].map((label) => <span key={label}>{label}</span>)}
          </div>
        </section>

        <section id="industries" className="industries section-dark section-padding">
          <div className="section-index">06 / INDUSTRIES</div>
          <div className="section-heading">
            <p className="eyebrow">BUILT FOR COMPLEX INDUSTRIES</p>
            <h2>Where the stakes<br /><em>are highest.</em></h2>
          </div>
          <div className="industry-layout">
            <div className="industry-list">
              {industriesList.map((industry, i) => (
                <button key={industry} className={activeIndustry === i ? "active" : ""} onMouseEnter={() => setActiveIndustry(i)} onClick={() => action(`${industry} perspective opened`)}>
                  <span>{String(i + 1).padStart(2, "0")}</span>{industry}<ArrowUpRight size={16} />
                </button>
              ))}
            </div>
            <div className="industry-detail">
              <p className="eyebrow">SELECTED SECTOR / {String(activeIndustry + 1).padStart(2, "0")}</p>
              <h3>{industriesList[activeIndustry]}</h3>
              <p>AI risk systems<br />Digital platforms<br />Data engineering<br />Cloud modernization</p>
              <div className="detail-mark">{activeIndustry % 2 === 0 ? "◌" : "◈"}</div>
            </div>
          </div>
        </section>

        <section id="work" className="work-section section-dark section-padding">
          <div className="section-index">07 / ENGINEERED IN THE REAL WORLD</div>
          <div className="work-header">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Systems that<br /><em>change the field.</em></h2>
            </div>
            <Link href="/case-studies" className="text-button">VIEW ALL WORK <ArrowUpRight size={16} /></Link>
          </div>
          
          {caseStudies && caseStudies.length > 0 ? (
            <article className="case-study">
              <div className="case-visual">
                <div className="case-graphic"><span /><span /><span /><span /><span /></div>
                <p className="case-number">01</p>
              </div>
              <div className="case-copy">
                <p className="eyebrow">{caseStudies[0].industry}</p>
                <h3>{caseStudies[0].title}</h3>
                <p>{caseStudies[0].challenge}</p>
                <div className="case-facts">
                  <span><b>CHALLENGE</b> {caseStudies[0].challenge}</span>
                  <span><b>SOLUTION</b> {caseStudies[0].solution}</span>
                  <span><b>OUTCOME</b> {caseStudies[0].results}</span>
                </div>
                <Link href={`/case-studies`} className="text-button">EXPLORE CASE STUDY <ArrowUpRight size={16} /></Link>
              </div>
            </article>
          ) : (
            <article className="case-study">
              <div className="case-visual">
                <div className="case-graphic"><span /><span /><span /><span /><span /></div>
                <p className="case-number">01</p>
              </div>
              <div className="case-copy">
                <p className="eyebrow">AI + DATA + CLOUD</p>
                <h3>Enterprise<br /><em>Intelligence Platform</em></h3>
                <p>Reframing a complex operating environment as one connected decision system.</p>
                <div className="case-facts">
                  <span><b>CHALLENGE</b> Fragmented intelligence</span>
                  <span><b>SOLUTION</b> Unified data architecture</span>
                  <span><b>OUTCOME</b> A system ready to move</span>
                </div>
                <Link href="/case-studies" className="text-button">EXPLORE CASE STUDIES <ArrowUpRight size={16} /></Link>
              </div>
            </article>
          )}
        </section>

        <section className="principles section-dark section-padding">
          <div className="section-index">08 / WHY AUREXION</div>
          <div className="principles-heading">
            <p className="eyebrow">THE DIFFERENCE</p>
            <h2>We don't just<br />implement technology.</h2>
            <h2 className="accent">We engineer<br />what it becomes.</h2>
          </div>
          <div className="principles-grid">
            {principles.map(([num, title, desc]) => (
              <button className="principle" key={num} onClick={() => action(`${title} principle selected`)}>
                <span className="principle-num">{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ArrowUpRight size={17} />
              </button>
            ))}
          </div>
        </section>

        <section id="insights" className="insights section-dark section-padding">
          <div className="section-index">09 / INSIGHTS</div>
          <div className="work-header">
            <div>
              <p className="eyebrow">THOUGHTS ON WHAT'S NEXT</p>
              <h2>Signals worth<br /><em>following.</em></h2>
            </div>
            <Link href="/blog" className="text-button">VIEW ALL INSIGHTS <ArrowUpRight size={16} /></Link>
          </div>
          <div className="insight-grid">
            {blogPosts && blogPosts.length > 0 ? (
              blogPosts.slice(0, 3).map((post, i) => (
                <Link href={`/blog`} className="insight-card block" key={post.id}>
                  <span className={`insight-art art-${i}`} />
                  <span className="eyebrow">{post.category} / {post.publishedDate}</span>
                  <h3>{post.title}</h3>
                  <span className="read-link">READ ARTICLE <ArrowUpRight size={15} /></span>
                </Link>
              ))
            ) : (
              [["AI", "The new shape of enterprise intelligence", "06.18.26"], ["CLOUD", "Why resilient systems begin with a point of view", "05.29.26"], ["ENGINEERING", "Complexity is a signal, not a sentence", "04.11.26"]].map(([tag, title, date], i) => (
                <Link href="/blog" className="insight-card block" key={title}>
                  <span className={`insight-art art-${i}`} />
                  <span className="eyebrow">{tag} / {date}</span>
                  <h3>{title}</h3>
                  <span className="read-link">READ ARTICLE <ArrowUpRight size={15} /></span>
                </Link>
              ))
            )}
          </div>
        </section>

        <section className="final-cta section-dark">
          <div className="final-art" />
          <div className="final-copy">
            <p className="eyebrow">THE NEXT SYSTEM STARTS HERE</p>
            <h2>WHAT WILL YOU<br /><em>ENGINEER NEXT?</em></h2>
            <p>Bring us your most complex technology challenge.</p>
            <div className="hero-ctas">
              <Link href="/rfp" className="signal-button inline-flex items-center">START A PROJECT <ArrowUpRight size={17} className="ml-1" /></Link>
              <Link href="/contact" className="text-button">TALK TO AN EXPERT <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>
      </main>

      <Dialog open={dialog !== null} onOpenChange={(open) => !open && setDialog(null)}>
        <DialogContent className="aurexion-dialog">
          <DialogHeader>
            <DialogTitle>{dialog === "project" ? "Start with the hard problem." : "Let's make the next system legible."}</DialogTitle>
            <DialogDescription>{dialog === "project" ? "Tell us what you are trying to engineer. This demo form is ready for your project brief." : "Aurexion connects strategy, engineering and intelligence in one conversation."}</DialogDescription>
          </DialogHeader>
          <div className="dialog-form">
            <input placeholder="Your name" aria-label="Your name" />
            <input placeholder="Work email" aria-label="Work email" type="email" />
            <textarea placeholder="What are you trying to make possible?" aria-label="Project details" rows={4} />
            <Button className="signal-button" onClick={() => { setDialog(null); action("Message queued"); }}>SEND MESSAGE <ArrowUpRight size={16} /></Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
