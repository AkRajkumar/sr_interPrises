import { useState, useEffect, useRef } from "react";
import brandLogo from "./assets/sr-enterprises-logo.png";
import brandEmblem from "./assets/sr-emblem.png";

const WA_NUMBER = "917011389981";
const WA_MSG = encodeURIComponent(
  "Hello SR Enterprise, I want to order Star Bar End Mirror. Please share price and order details."
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;
const PHONE = "+91 70113 89981";

const PRODUCT = {
  name: "Star Bar End Mirror",
  tagline: "Premium Motorcycle Bar-End Mirror",
  price: 899,
  mrp: 1299,
  inStock: true,
  images: [
    "https://images.unsplash.com/photo-1747174506457-cee8bd255be5?w=700&h=700&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1590506962967-991b8485d983?w=700&h=700&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1607942722522-aaa340f9c4e8?w=700&h=700&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1664533627704-23c943dc7e3e?w=700&h=700&fit=crop&auto=format",
  ],
};

const FEATURES = [
  { icon: "◎", title: "Wide Clear View", desc: "High-quality convex glass provides a wider and clearer rear view for maximum safety." },
  { icon: "⬡", title: "Premium Quality", desc: "Made from high-grade aluminium alloy for superior strength and long-lasting durability." },
  { icon: "⚙", title: "Easy to Install", desc: "Simple bar-end mounting, compatible with 22mm handlebars on most motorcycles." },
  { icon: "◈", title: "Anti-Vibration", desc: "Engineered to reduce vibration and deliver stable, clear visibility at high speeds." },
  { icon: "✦", title: "Stylish & Modern", desc: "Sleek premium finish that enhances the look of any motorcycle." },
  { icon: "⊕", title: "Universal Fit", desc: "Designed to fit a wide range of motorcycle models right out of the box." },
];

const CATEGORY_PRODUCTS = [
  {
    name: "Star Bar End Mirror",
    category: "Mirrors",
    eyebrow: "BESTSELLER",
    description: "Premium convex bar-end mirror with anti-vibration mounting.",
    price: "₹899",
    image: PRODUCT.images[0],
    alt: "Star Bar End Mirror mounted on a motorcycle",
    available: true,
  },
  {
    name: "Street Round Mirror",
    category: "Mirrors",
    eyebrow: "NEW COLLECTION",
    description: "A timeless round profile for modern and classic motorcycles.",
    image: "https://images.unsplash.com/photo-1746711781900-242d46d549a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxwcmVtaXVtJTIwbW90b3JjeWNsZSUyMGFjY2Vzc29yaWVzJTIwaGVsbWV0JTIwcmlkaW5nJTIwZ2xvdmVzJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3OTM1MjU2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Motorcyclist preparing a premium street motorcycle",
  },
  {
    name: "Full-Face Helmets",
    category: "Helmets",
    eyebrow: "RIDER SAFETY",
    description: "Aerodynamic protection selected for everyday and touring riders.",
    image: "https://images.unsplash.com/photo-1556570508-121c77af2a75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwcmVtaXVtJTIwbW90b3JjeWNsZSUyMGFjY2Vzc29yaWVzJTIwaGVsbWV0JTIwcmlkaW5nJTIwZ2xvdmVzJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3OTM1MjU2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Premium full-face motorcycle helmet",
  },
  {
    name: "Sport Helmet Series",
    category: "Helmets",
    eyebrow: "COMING SOON",
    description: "Bold graphics, comfortable fit and road-ready protection.",
    image: "https://images.unsplash.com/photo-1605669164963-491b2ddc050b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwaGVhZGxpZ2h0JTIwZ2xvdmVzJTIwYWNjZXNzb3JpZXMlMjBkZXRhaWx8ZW58MXx8fHwxNzkzNTI1NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Red and black sport motorcycle helmet",
  },
  {
    name: "Performance Gloves",
    category: "Riding Gear",
    eyebrow: "RIDE READY",
    description: "Secure grip and durable protection for daily riding.",
    image: "https://images.unsplash.com/photo-1545284662-c3dda8bd045d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxtb3RvcmN5Y2xlJTIwaGVhZGxpZ2h0JTIwZ2xvdmVzJTIwYWNjZXNzb3JpZXMlMjBkZXRhaWx8ZW58MXx8fHwxNzkzNTI1NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Pair of black performance riding gloves",
  },
  {
    name: "LED Headlight Range",
    category: "Lighting",
    eyebrow: "HIGH VISIBILITY",
    description: "Focused illumination with a sharp, premium road presence.",
    image: "https://images.unsplash.com/photo-1574068136323-a5c81c432ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtb3RvcmN5Y2xlJTIwaGVhZGxpZ2h0JTIwZ2xvdmVzJTIwYWNjZXNzb3JpZXMlMjBkZXRhaWx8ZW58MXx8fHwxNzkzNTI1NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Close-up of a premium motorcycle headlight",
  },
];

const PRODUCT_CATEGORIES = ["All", "Mirrors", "Helmets", "Riding Gear", "Lighting"];

const REVIEWS = [
  { name: "Rahul Sharma",   city: "Mumbai",    rating: 5, text: "Excellent build quality. Installed in 10 minutes and the view is crystal clear. Worth every rupee!" },
  { name: "Vikram Nair",    city: "Bangalore", rating: 5, text: "No vibration at highway speeds. Looks very premium on my bike. Highly recommend SR Enterprise." },
  { name: "Amit Patel",     city: "Ahmedabad", rating: 5, text: "COD available, fast delivery. The mirror quality is outstanding. Will order again." },
  { name: "Sanjay Kulkarni",city: "Pune",      rating: 4, text: "Great product at unbeatable price. Aluminium body feels very solid. 5 stars for quality." },
];

const FAQS = [
  { q: "Is this mirror suitable for all motorcycles?",   a: "The Star Bar End Mirror is designed for universal fit and is compatible with most standard motorcycles that have 22mm handlebars." },
  { q: "What handlebar size is supported?",              a: "The mirror supports 22mm diameter handlebars, which is the standard size for most Indian and international motorcycles." },
  { q: "Is the mirror convex or flat?",                  a: "The mirror uses a high-quality convex glass that provides a wider field of view for better rear visibility." },
  { q: "Is installation easy?",                          a: "Yes! The bar-end mounting system is straightforward. Most riders install both mirrors in under 15 minutes." },
  { q: "Is the product vibration resistant?",            a: "Yes. The anti-vibration design keeps the mirror stable and clear even at high speeds." },
  { q: "Is Cash on Delivery available?",                 a: "Yes, Cash on Delivery (COD) is available across India." },
  { q: "How can I place an order?",                      a: "Order directly on this website, via WhatsApp at +91 70113 89981, or by calling us." },
  { q: "What is the delivery time?",                     a: "Standard delivery takes 5–7 business days. Express delivery available on request." },
];

function generateOrderId() {
  return "SR" + Date.now().toString().slice(-8).toUpperCase();
}

const PAYMENT_OPTIONS = [
  { value: "cod", icon: "💵", label: "Cash on Delivery", sub: "Pay when delivered" },
  { value: "upi", icon: "UPI", label: "UPI", sub: "PhonePe · Google Pay · BHIM" },
  { value: "card", icon: "▤", label: "Credit / Debit Card", sub: "Visa · Mastercard · RuPay" },
  { value: "netbanking", icon: "⌂", label: "Net Banking", sub: "All major Indian banks" },
  { value: "wallet", icon: "◫", label: "Wallet", sub: "Supported digital wallets" },
  { value: "whatsapp", icon: "💬", label: "WhatsApp Order", sub: "Confirm your order on WhatsApp" },
] as const;

function getPaymentLabel(payment: string) {
  return PAYMENT_OPTIONS.find((option) => option.value === payment)?.label ?? "Cash on Delivery";
}

/* ─── small reusable bits ─── */
function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children as string}</span>;
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "6px 0", gap: 12 }}>
      <span style={{ fontSize: 12, color: "var(--text3)", flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: 12, textAlign: "right", color: highlight ? "var(--accent)" : "var(--text2)", fontWeight: highlight ? 700 : 400 }}>{value}</span>
    </div>
  );
}

function InputField({ label, name, value, onChange, placeholder, type = "text" }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string; type?: string;
}) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text2)", marginBottom: 6 }}>{label}</label>
      <input name={name} value={value} onChange={onChange} placeholder={placeholder} type={type} className="input-field" />
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: string; label: string; value: string; href: string }) {
  return (
    <a href={href} className="card" style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", textDecoration: "none", color: "inherit" }}>
      <span style={{ fontSize: 22, width: 32, textAlign: "center" }}>{icon}</span>
      <div>
        <div style={{ fontSize: 11, color: "var(--text3)", marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>{value}</div>
      </div>
    </a>
  );
}

type AccountRole = "public" | "owner" | "admin";
const DEMO_PASSWORD = "SRdemo2026";

function AccountPage({ onBack }: { onBack: () => void }) {
  const [role, setRole] = useState<AccountRole>("public");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [submitted, setSubmitted] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [accountName, setAccountName] = useState("");

  const selectRole = (nextRole: AccountRole) => {
    setRole(nextRole);
    setSubmitted(false);
  };

  const selectMode = (nextMode: "login" | "register") => {
    setMode(nextMode);
    setSubmitted(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    if (mode === "login") {
      const email = String(values.get("email") || "");
      setAccountName(String(values.get("name") || email.split("@")[0] || "Rider"));
      setSignedIn(true);
      return;
    }
    setSubmitted(true);
  };

  if (signedIn) {
    const roleLabels: Record<AccountRole, string> = { public: "Customer", owner: "Owner", admin: "Administrator" };
    const roleDescriptions: Record<AccountRole, string> = {
      public: "Your orders and account details, all in one place.",
      owner: "A snapshot of your store and recent order activity.",
      admin: "A snapshot of platform activity and account access.",
    };

    return (
      <main className="dashboard-page">
        <header className="dashboard-header">
          <button type="button" className="dashboard-brand" onClick={onBack}>
            <img src={brandEmblem} alt="" />
            <span><strong>SR ENTERPRISES</strong><small>ACCOUNT PORTAL</small></span>
          </button>
          <div className="dashboard-header-actions">
            <span className="dashboard-role">{roleLabels[role]}</span>
            <button type="button" className="dashboard-store-link" onClick={onBack}>Visit store <span aria-hidden="true">↗</span></button>
            <button type="button" className="dashboard-logout" onClick={() => { setSignedIn(false); setSubmitted(false); }}>Log out</button>
          </div>
        </header>

        <section className="dashboard-content">
          <div className="dashboard-heading">
            <div>
              <span className="section-label">{roleLabels[role]} DASHBOARD</span>
              <h1>Welcome, {accountName}</h1>
              <p>{roleDescriptions[role]}</p>
            </div>
            <span className="dashboard-preview">PREVIEW DATA</span>
          </div>

          {role === "public" && (
            <>
              <div className="dashboard-stats">
                <article className="dashboard-stat"><span>Orders placed</span><strong>0</strong><small>Your purchases will appear here</small></article>
                <article className="dashboard-stat"><span>Saved addresses</span><strong>0</strong><small>Manage delivery details at checkout</small></article>
                <article className="dashboard-stat"><span>Account type</span><strong>Customer</strong><small>Personal shopping account</small></article>
              </div>
              <section className="dashboard-section">
                <div className="dashboard-section-heading"><div><h2>Your orders</h2><p>Track order status and delivery updates.</p></div><button type="button" className="dashboard-action" onClick={onBack}>Shop products <span aria-hidden="true">→</span></button></div>
                <div className="dashboard-empty"><span aria-hidden="true">▤</span><strong>No orders yet</strong><p>Your order history will show up here after checkout.</p></div>
              </section>
            </>
          )}

          {role === "owner" && (
            <>
              <div className="dashboard-stats">
                <article className="dashboard-stat"><span>Orders this month</span><strong>36</strong><small>Preview value</small></article>
                <article className="dashboard-stat"><span>Sales this month</span><strong>₹48,620</strong><small>Preview value</small></article>
                <article className="dashboard-stat"><span>Products in stock</span><strong>24</strong><small>Preview value</small></article>
              </div>
              <section className="dashboard-section">
                <div className="dashboard-section-heading"><div><h2>Recent orders</h2><p>Review and manage customer orders.</p></div><button type="button" className="dashboard-action" disabled>Manage orders</button></div>
                <div className="dashboard-table-wrap"><table className="dashboard-table"><thead><tr><th>Order</th><th>Customer</th><th>Date</th><th>Amount</th><th>Status</th></tr></thead><tbody><tr><td>#SR10428</td><td>Arjun Mehta</td><td>Today</td><td>₹1,798</td><td><span className="dashboard-status pending">Pending</span></td></tr><tr><td>#SR10427</td><td>Neha Sharma</td><td>Yesterday</td><td>₹899</td><td><span className="dashboard-status shipped">Shipped</span></td></tr><tr><td>#SR10426</td><td>Dev Patel</td><td>Yesterday</td><td>₹2,697</td><td><span className="dashboard-status delivered">Delivered</span></td></tr></tbody></table></div>
              </section>
            </>
          )}

          {role === "admin" && (
            <>
              <div className="dashboard-stats">
                <article className="dashboard-stat"><span>Active accounts</span><strong>128</strong><small>Preview value</small></article>
                <article className="dashboard-stat"><span>Access requests</span><strong>3</strong><small>Preview value</small></article>
                <article className="dashboard-stat"><span>Orders to review</span><strong>12</strong><small>Preview value</small></article>
              </div>
              <section className="dashboard-section">
                <div className="dashboard-section-heading"><div><h2>Access overview</h2><p>Account roles and permissions at a glance.</p></div></div>
                <div className="dashboard-access-list"><div><span className="dashboard-access-icon">P</span><span><strong>Public customers</strong><small>Browse products and manage personal orders</small></span><b>Customer</b></div><div><span className="dashboard-access-icon owner">O</span><span><strong>Business owners</strong><small>Manage store products and order activity</small></span><b>Approval required</b></div><div><span className="dashboard-access-icon admin">A</span><span><strong>Administrators</strong><small>Manage platform access and oversight</small></span><b>Invite only</b></div></div>
              </section>
            </>
          )}

          <p className="dashboard-disclaimer">This is a front-end preview. Connect authentication and business data services before using this dashboard with real accounts.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="account-page">
      <section className="account-visual" style={{ backgroundImage: `linear-gradient(180deg,rgba(8,9,11,.12),rgba(8,9,11,.92)),url(${PRODUCT.images[0]})` }}>
        <button type="button" className="account-back" onClick={onBack} aria-label="Back to store">← <span>Back to store</span></button>
        <div className="account-visual-copy">
          <img src={brandLogo} alt="SR Enterprise Manufacturing" />
          <p>BUILT FOR THE LONG RIDE</p>
          <h1>Better visibility.<br />More confidence.</h1>
          <span>SR Enterprise Manufacturing</span>
        </div>
      </section>

      <section className="account-panel">
        <div className="account-form-wrap">
          <button type="button" className="account-mobile-back" onClick={onBack}>← Back to store</button>
          <span className="section-label">YOUR SR ENTERPRISE ACCOUNT</span>
          <h2>{mode === "login" ? "Welcome back" : "Create your account"}</h2>
          <p className="account-intro">{mode === "login" ? "Sign in to continue to your account." : "Choose your account type to get started."}</p>

          <div className="account-role-switch" role="group" aria-label="Account type">
            {(["public", "owner", "admin"] as AccountRole[]).map((accountRole) => (
              <button key={accountRole} type="button" className={role === accountRole ? "selected" : ""} onClick={() => selectRole(accountRole)} aria-pressed={role === accountRole}>
                {accountRole === "public" ? "Public" : accountRole === "owner" ? "Owner" : "Admin"}
              </button>
            ))}
          </div>

          <div className="account-mode-switch" role="tablist" aria-label="Login or register">
            <button type="button" role="tab" aria-selected={mode === "login"} className={mode === "login" ? "selected" : ""} onClick={() => selectMode("login")}>Log in</button>
            <button type="button" role="tab" aria-selected={mode === "register"} className={mode === "register" ? "selected" : ""} onClick={() => selectMode("register")}>Register</button>
          </div>

          {role !== "public" && mode === "register" && (
            <p className="account-notice">{role === "owner" ? "Owner accounts require business verification." : "Admin accounts are created by the business administrator."} This demo does not create or grant account access.</p>
          )}

          <form key={`${role}-${mode}`} className="account-form" onSubmit={handleSubmit}>
            {mode === "register" && (
              <label>
                {role === "public" ? "Full name" : role === "owner" ? "Owner name" : "Administrator name"}
                <input className="input-field" name="name" autoComplete="name" placeholder="Your name" required />
              </label>
            )}
            {mode === "register" && role === "owner" && (
              <label>Business name<input className="input-field" name="business" autoComplete="organization" placeholder="Your business name" required /></label>
            )}
            <label>{role === "public" ? "Email address" : "Work email"}<input className="input-field" name="email" type="email" autoComplete="email" placeholder={mode === "login" ? `${role === "public" ? "customer" : role}@srenterprise.co.in` : "you@example.com"} required /></label>
            {mode === "register" && role === "public" && (
              <label>Mobile number<input className="input-field" name="mobile" type="tel" autoComplete="tel" placeholder="+91 00000 00000" required /></label>
            )}
            <label>Password<input className="input-field" name="password" type="password" autoComplete={mode === "login" ? "current-password" : "new-password"} placeholder={mode === "login" ? DEMO_PASSWORD : "At least 8 characters"} minLength={8} required /></label>
            {mode === "register" && <label>Confirm password<input className="input-field" name="confirmPassword" type="password" autoComplete="new-password" placeholder="Enter your password again" minLength={8} required /></label>}
            {mode === "login" && <button className="account-forgot" type="button" onClick={() => setSubmitted(true)}>Forgot password?</button>}
            <button className="btn-primary account-submit" type="submit">{mode === "login" ? "LOG IN" : role === "public" ? "CREATE ACCOUNT" : "REQUEST ACCESS"}<span aria-hidden="true">→</span></button>
          </form>

          {submitted && <p className="account-result" role="status">Registration is a preview only. Connect an account service to create your account or request access.</p>}
          <p className="account-security">Demo sign-in opens a preview dashboard. No account data is stored or verified.</p>
        </div>
      </section>
    </main>
  );
}

/* ─── MAIN ─── */
export default function App() {
  const [dark, setDark] = useState(true);
  const [activeNav, setActiveNav] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [qty, setQty] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [cartFlash, setCartFlash] = useState(false);
  const [step, setStep] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [placed, setPlaced] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [orderId] = useState(generateOrderId());
  const [form, setForm] = useState({ name: "", mobile: "", whatsapp: "", address: "", city: "", state: "", pincode: "", payment: "cod" });

  const discount = Math.round(((PRODUCT.mrp - PRODUCT.price) / PRODUCT.mrp) * 100);
  const total = PRODUCT.price * qty;

  /* apply theme class */
  useEffect(() => {
    document.documentElement.className = dark ? "" : "light";
  }, [dark]);

  /* active nav on scroll */
  useEffect(() => {
    const handler = () => {
      for (const id of ["home","products","features","about","contact"]) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 110 && r.bottom >= 110) { setActiveNav(id); break; }
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const goTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMobileOpen(false); };
  const fc = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const addCart = () => { setCartCount(c => c + qty); setCartFlash(true); setTimeout(() => setCartFlash(false), 1800); };
  const placeOrder = () => { setPlaced(true); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const navLinks = [
    { id: "home", label: "Home" }, { id: "products", label: "Products" },
    { id: "features", label: "Features" }, { id: "about", label: "About Us" }, { id: "contact", label: "Contact" },
  ];

  /* ── ORDER CONFIRMATION ── */
  if (placed) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg,var(--primary),var(--primary-dark))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, marginBottom: 24, boxShadow: "0 0 40px var(--primary-glow)" }}>✓</div>
        <h1 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: "clamp(32px,6vw,52px)", fontWeight: 700, color: "var(--accent)", marginBottom: 8 }}>Order Placed!</h1>
        <p style={{ color: "var(--text2)", marginBottom: 28, fontSize: 16 }}>Thank you! Your order has been confirmed.</p>
        <div className="card" style={{ padding: "24px 28px", maxWidth: 440, width: "100%", marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 14, marginBottom: 14, borderBottom: "1px solid var(--border)" }}>
            <span style={{ fontSize: 12, color: "var(--text3)" }}>Order ID</span>
            <span style={{ fontFamily: "Rajdhani,sans-serif", fontWeight: 700, color: "var(--primary)", letterSpacing: "0.06em" }}>{orderId}</span>
          </div>
          <Row label="Product" value={PRODUCT.name} />
          <Row label="Quantity" value={`${qty} pair(s)`} />
          <Row label="Total Amount" value={`₹${total.toLocaleString()}`} highlight />
          <Row label="Payment" value={getPaymentLabel(form.payment)} />
          <Row label="Name" value={form.name || "—"} />
          <Row label="Mobile" value={form.mobile || "—"} />
          <Row label="Address" value={form.address ? `${form.address}, ${form.city}, ${form.state} – ${form.pincode}` : "—"} />
          <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--border)", fontSize: 13, color: "var(--text2)" }}>
            <span style={{ color: "var(--primary)" }}>⏱ </span>Estimated Delivery: <strong>5–7 Business Days</strong>
          </div>
        </div>
        <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-wa"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", textDecoration: "none", fontSize: 15, marginBottom: 12 }}>
          <WaIcon /> Track on WhatsApp
        </a>
        <button onClick={() => { setPlaced(false); setStep(1); }} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text3)", fontSize: 13, textDecoration: "underline" }}>← Back to Home</button>
      </div>
    );
  }

  if (accountOpen) {
    return <AccountPage onBack={() => { setAccountOpen(false); window.scrollTo({ top: 0 }); }} />;
  }

  /* ─── SHARED HEADER STYLE ─── */
  const hdrStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    background: dark ? "rgba(8,9,11,0.88)" : "rgba(244,246,249,0.88)",
    backdropFilter: "blur(14px)",
    borderBottom: "1px solid var(--border)",
    transition: "background 0.3s",
  };

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", transition: "background 0.3s, color 0.3s" }}>

      {/* ══ HEADER ══ */}
      <header style={hdrStyle}>
        <div className="hdr-inner">
          {/* Logo */}
          <button onClick={() => goTo("home")} className="hdr-brand" aria-label="SR Enterprises Manufacturing — home">
            <img src={brandEmblem} alt="" className="hdr-brand-emblem" />
            <span className="hdr-brand-label">
              <strong>SR ENTERPRISES</strong>
              <small>MANUFACTURING</small>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hdr-desktop-nav">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => goTo(l.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: activeNav === l.id ? "var(--primary)" : "var(--text2)", transition: "color 0.18s", fontFamily: "Inter,sans-serif" }}>{l.label}</button>
            ))}
          </nav>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Theme toggle */}
            <button className="theme-toggle" onClick={() => setDark(d => !d)} title={dark ? "Switch to light" : "Switch to dark"}>
              <div className="theme-toggle-thumb" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {dark ? <MoonIcon /> : <SunIcon />}
              </div>
            </button>

            {/* Cart */}
            <button onClick={() => goTo("products")} style={{ position: "relative", background: "none", border: "none", cursor: "pointer", padding: 8, color: "var(--text2)" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              {cartCount > 0 && <span style={{ position: "absolute", top: 2, right: 2, width: 16, height: 16, borderRadius: "50%", background: "var(--accent)", color: "#fff", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{cartCount}</span>}
            </button>

            <button type="button" className="account-trigger" onClick={() => setAccountOpen(true)} aria-label="Log in or register">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/></svg>
              <span>Account</span>
            </button>

            {/* Desktop Order Now */}
            <button onClick={() => goTo("order")} className="btn-primary hdr-order-btn" style={{ padding: "9px 18px", fontSize: 13 }}>ORDER NOW</button>

            {/* Mobile hamburger */}
            <button className="hdr-hamburger" onClick={() => setMobileOpen(o => !o)} style={{ background: "none", border: "none", cursor: "pointer", padding: 6, color: "var(--text2)", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`hdr-mobile-menu${mobileOpen ? " open" : ""}`} style={{ padding: "8px 20px 16px", borderTop: "1px solid var(--border)", background: dark ? "rgba(8,9,11,0.97)" : "rgba(244,246,249,0.97)" }}>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => goTo(l.id)} style={{ display: "block", width: "100%", textAlign: "left", padding: "11px 12px", borderRadius: 10, background: activeNav === l.id ? "var(--card2)" : "none", border: "none", cursor: "pointer", fontSize: 15, fontWeight: 500, color: activeNav === l.id ? "var(--primary)" : "var(--text2)", marginBottom: 2 }}>{l.label}</button>
          ))}
          <button onClick={() => { setMobileOpen(false); setAccountOpen(true); }} className="account-menu-link">Log in / Register</button>
          <button onClick={() => goTo("order")} className="btn-primary" style={{ width: "100%", marginTop: 10, padding: "13px 0", fontSize: 15 }}>ORDER NOW</button>
        </div>
      </header>

      {/* ══ HERO ══ */}
      <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 62, overflow: "hidden" }}>
        {/* Background */}
        <div style={{ position: "absolute", inset: 0, background: dark ? "linear-gradient(135deg,#08090b 0%,#0c1a18 55%,#08090b 100%)" : "linear-gradient(135deg,#f4f6f9 0%,#e8f5f3 55%,#f4f6f9 100%)", transition: "background 0.3s" }} />
        <div className="grid-bg" />
        {/* Orbs */}
        <div className="orb" style={{ position: "absolute", width: 420, height: 420, top: "10%", right: "5%", background: dark ? "rgba(13,148,136,0.14)" : "rgba(13,148,136,0.08)" }} />
        <div className="orb" style={{ position: "absolute", width: 260, height: 260, bottom: "15%", left: "3%", background: dark ? "rgba(245,158,11,0.07)" : "rgba(245,158,11,0.05)", animationDelay: "3s" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "48px 20px", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center" }}>
            {/* Copy */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 14px", borderRadius: 999, background: "rgba(13,148,136,0.1)", border: "1px solid rgba(13,148,136,0.22)", marginBottom: 22 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)", display: "inline-block", animation: "wa-pulse 2s ease infinite" }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: "var(--primary)", letterSpacing: "0.06em" }}>IN STOCK — READY TO SHIP</span>
              </div>

              <h1 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: "clamp(40px,7vw,76px)", fontWeight: 700, lineHeight: 1, marginBottom: 10, letterSpacing: "0.01em" }}>
                STAR BAR END<br />
                <span className="gradient-text">MIRROR</span>
              </h1>
              <p style={{ fontFamily: "Rajdhani,sans-serif", fontSize: "clamp(17px,3vw,24px)", fontWeight: 500, color: "var(--text2)", marginBottom: 16 }}>Ride Safe. Ride Stylish.</p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text2)", maxWidth: 460, marginBottom: 28 }}>
                Premium motorcycle bar-end mirrors designed for clear rear visibility, durability and a stylish modern look. Trusted by riders across India.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px", marginBottom: 30, maxWidth: 340 }}>
                {["Universal Fit", "Wide Clear View", "Anti-Vibration", "Premium Aluminium"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--text2)" }}>
                    <span style={{ color: "var(--primary)", fontWeight: 700 }}>✓</span> {t}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 22 }}>
                <button onClick={() => goTo("order")} className="btn-primary" style={{ padding: "14px 28px", fontSize: 15 }}>ORDER NOW — ₹{PRODUCT.price}</button>
                <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-wa" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 22px", fontSize: 15, textDecoration: "none" }}>
                  <WaIcon /> Buy on WhatsApp
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 13, color: "var(--text3)", flexWrap: "wrap" }}>
                <span><span style={{ color: "#f59e0b" }}>★★★★★</span> 4.9/5</span>
                <span style={{ color: "var(--border2)" }}>|</span>
                <span>500+ Orders Delivered</span>
                <span style={{ color: "var(--border2)" }}>|</span>
                <span>Free Delivery Available</span>
              </div>
            </div>

            {/* Image */}
            <div>
              <div style={{ borderRadius: 22, overflow: "hidden", aspectRatio: "1/1", background: "var(--card)", border: "1px solid var(--border)", boxShadow: "var(--shadow-card), 0 0 60px var(--primary-glow)" }}>
                <img src={PRODUCT.images[activeImg]} alt="Star Bar End Mirror" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.25s" }} />
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 10, justifyContent: "center" }}>
                {PRODUCT.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} style={{ width: 56, height: 56, borderRadius: 10, overflow: "hidden", border: `2px solid ${i === activeImg ? "var(--primary)" : "var(--border)"}`, cursor: "pointer", transition: "border 0.18s", padding: 0 }}>
                    <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRUST BAR ══ */}
      <div style={{ background: dark ? "rgba(13,148,136,0.06)" : "rgba(13,148,136,0.04)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 20px", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between" }}>
          {[["🏆","Premium Quality"],["💰","Best Price"],["💪","Strong & Durable"],["👁","Better Visibility"],["🔩","Universal Fit"],["⭐","Customer Satisfaction"]].map(([icon,label]) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 500, color: "var(--text2)" }}>
              <span>{icon}</span> {label}
            </div>
          ))}
        </div>
      </div>

      {/* ══ CATEGORY PRODUCT GALLERY ══ */}
      <section className="category-gallery" aria-labelledby="category-gallery-title">
        <div className="category-gallery-inner">
          <div className="category-gallery-heading">
            <div>
              <SectionLabel>EXPLORE THE RANGE</SectionLabel>
              <h2 id="category-gallery-title">
                Shop by <span className="gradient-text">Category</span>
              </h2>
            </div>
            <p>Purpose-built motorcycle accessories selected for safety, performance and standout style.</p>
          </div>

          <div className="category-filters" role="group" aria-label="Filter product categories">
            {PRODUCT_CATEGORIES.map(category => (
              <button
                key={category}
                type="button"
                className={`category-filter${activeCategory === category ? " active" : ""}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="category-product-grid">
            {CATEGORY_PRODUCTS.filter(item => activeCategory === "All" || item.category === activeCategory).map(item => (
              <article className="category-product-card" key={item.name}>
                <div className="category-product-image">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span className="category-product-tag">{item.category}</span>
                  <span className="category-product-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="category-product-content">
                  <span className="category-product-eyebrow">{item.eyebrow}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="category-product-footer">
                    {item.available ? (
                      <>
                        <strong>{item.price}</strong>
                        <button type="button" onClick={() => goTo("products")}>View product <span aria-hidden="true">→</span></button>
                      </>
                    ) : (
                      <>
                        <span>Enquire for availability</span>
                        <a href={WA_URL} target="_blank" rel="noreferrer" aria-label={`Enquire about ${item.name} on WhatsApp`}>
                          Enquire <span aria-hidden="true">→</span>
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUCT DETAIL ══ */}
      <section id="products" style={{ padding: "80px 20px", maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>THE PRODUCT</SectionLabel>
        <h2 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: "clamp(30px,5vw,48px)", fontWeight: 700, marginBottom: 48 }}>
          Star Bar End Mirror — <span className="gradient-text">Full Details</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "start" }}>
          {/* Gallery */}
          <div>
            <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "1/1", background: "var(--card)", border: "1px solid var(--border)", boxShadow: "var(--shadow-card)", marginBottom: 10 }}>
              <img src={PRODUCT.images[activeImg]} alt={PRODUCT.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {PRODUCT.images.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)} style={{ flex: 1, height: 72, borderRadius: 12, overflow: "hidden", border: `2px solid ${i === activeImg ? "var(--primary)" : "var(--border)"}`, cursor: "pointer", padding: 0, transition: "border 0.18s" }}>
                  <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: 999, background: "var(--success-bg)", border: "1px solid var(--success-border)", color: "var(--success-text)", fontSize: 12, fontWeight: 600, marginBottom: 12 }}>✓ In Stock</div>
            <h3 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 30, fontWeight: 700, marginBottom: 4 }}>{PRODUCT.name}</h3>
            <p style={{ fontSize: 14, color: "var(--text2)", marginBottom: 18 }}>{PRODUCT.tagline}</p>

            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 20 }}>
              <span style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 38, fontWeight: 700, color: "var(--accent)" }}>₹{PRODUCT.price}</span>
              <span style={{ fontSize: 20, textDecoration: "line-through", color: "var(--text3)" }}>₹{PRODUCT.mrp}</span>
              <span style={{ padding: "2px 8px", borderRadius: 6, background: "var(--accent-bg)", color: "var(--accent)", fontSize: 12, fontWeight: 700 }}>{discount}% OFF</span>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 22 }}>
              {["Universal Fit","Pair (2 pcs)","Convex Glass","Aluminium Body","22mm Mount"].map(t => (
                <span key={t} style={{ padding: "4px 12px", borderRadius: 999, background: "var(--card2)", color: "var(--text2)", fontSize: 12, border: "1px solid var(--border)" }}>{t}</span>
              ))}
            </div>

            {/* Qty */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 22 }}>
              <span style={{ fontSize: 13, color: "var(--text2)" }}>Quantity:</span>
              <div style={{ display: "flex", alignItems: "center", borderRadius: 12, overflow: "hidden", border: "1px solid var(--border2)" }}>
                <button onClick={() => setQty(q => Math.max(1, q-1))} style={{ width: 40, height: 40, background: "var(--card2)", border: "none", cursor: "pointer", fontSize: 18, color: "var(--text)" }}>−</button>
                <span style={{ width: 44, textAlign: "center", fontFamily: "Rajdhani,sans-serif", fontWeight: 700, fontSize: 20, color: "var(--text)" }}>{qty}</span>
                <button onClick={() => setQty(q => q+1)} style={{ width: 40, height: 40, background: "var(--card2)", border: "none", cursor: "pointer", fontSize: 18, color: "var(--text)" }}>+</button>
              </div>
              <span style={{ fontSize: 13, color: "var(--text2)" }}>Total: <strong style={{ color: "var(--text)" }}>₹{(PRODUCT.price*qty).toLocaleString()}</strong></span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 10 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <button onClick={addCart} className={cartFlash ? "btn-primary" : "btn-ghost"} style={{ padding: "13px 0", fontSize: 14 }}>
                  {cartFlash ? "✓ ADDED" : "ADD TO CART"}
                </button>
                <button onClick={() => goTo("order")} className="btn-primary" style={{ padding: "13px 0", fontSize: 14 }}>BUY NOW</button>
              </div>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-wa" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 0", fontSize: 14, textDecoration: "none" }}>
                <WaIcon /> ORDER ON WHATSAPP
              </a>
            </div>

            {/* Mini badges */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginTop: 16 }}>
              {[["🚚","Free Delivery","On orders ₹500+"],["📦","COD Available","Cash on Delivery"],["↩️","Easy Return","7-day return"]].map(([icon,label,sub]) => (
                <div key={label} className="card" style={{ padding: "12px 8px", textAlign: "center" }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text2)" }}>{label}</div>
                  <div style={{ fontSize: 10, color: "var(--text3)", marginTop: 2 }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section id="features" style={{ padding: "80px 20px", background: "var(--bg2)", transition: "background 0.3s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>ENGINEERED FOR RIDERS</SectionLabel>
          <h2 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: "clamp(28px,5vw,46px)", fontWeight: 700, marginBottom: 44 }}>
            Why Choose <span className="gradient-text">Star Mirror?</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18 }}>
            {FEATURES.map(f => (
              <div key={f.title} className="card" style={{ padding: "26px 24px", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-card), 0 0 24px var(--primary-glow)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = ""; }}>
                <div style={{ fontSize: 24, color: "var(--primary)", marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--text2)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ORDER BOOKING ══ */}
      <section id="order" style={{ padding: "80px 20px", maxWidth: 760, margin: "0 auto" }}>
        <SectionLabel>SECURE CHECKOUT</SectionLabel>
        <h2 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: "clamp(28px,5vw,46px)", fontWeight: 700, marginBottom: 6 }}>
          Book Your <span className="gradient-text">Order</span>
        </h2>
        <p style={{ fontSize: 14, color: "var(--text2)", marginBottom: 36 }}>3 simple steps. Delivered to your door.</p>

        {/* Steps */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 36 }}>
          {[1,2,3].map((s,i) => (
            <div key={s} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div className={`${s === step ? "step-active" : s < step ? "step-done" : "step-idle"}`}
                  style={{ width: 38, height: 38, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Rajdhani,sans-serif", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>
                  {s < step ? "✓" : s}
                </div>
                <span style={{ fontSize: 10, fontWeight: 600, color: s === step ? "var(--primary)" : "var(--text3)", whiteSpace: "nowrap" }}>
                  {["Select","Details","Payment"][s-1]}
                </span>
              </div>
              {i < 2 && <div style={{ flex: 1, height: 2, background: s < step ? "var(--primary)" : "var(--border)", margin: "0 6px", marginTop: -18 }} />}
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: "28px 24px" }}>
          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <h3 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 22 }}>Select Product & Quantity</h3>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: 16, borderRadius: 14, background: "var(--card2)", border: "1px solid var(--border)", marginBottom: 22 }}>
                <img src={PRODUCT.images[0]} alt={PRODUCT.name} style={{ width: 72, height: 72, borderRadius: 10, objectFit: "cover", flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{PRODUCT.name}</div>
                  <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 6 }}>{PRODUCT.tagline}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 22, fontWeight: 700, color: "var(--accent)" }}>₹{PRODUCT.price}</span>
                    <span style={{ fontSize: 14, textDecoration: "line-through", color: "var(--text3)" }}>₹{PRODUCT.mrp}</span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 22 }}>
                <span style={{ fontSize: 13, color: "var(--text2)" }}>Quantity (Pairs):</span>
                <div style={{ display: "flex", alignItems: "center", borderRadius: 12, overflow: "hidden", border: "1px solid var(--border2)" }}>
                  <button onClick={() => setQty(q => Math.max(1,q-1))} style={{ width: 40, height: 40, background: "var(--bg2)", border: "none", cursor: "pointer", fontSize: 18, color: "var(--text)" }}>−</button>
                  <span style={{ width: 44, textAlign: "center", fontFamily: "Rajdhani,sans-serif", fontWeight: 700, fontSize: 22 }}>{qty}</span>
                  <button onClick={() => setQty(q => q+1)} style={{ width: 40, height: 40, background: "var(--bg2)", border: "none", cursor: "pointer", fontSize: 18, color: "var(--text)" }}>+</button>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", borderRadius: 14, background: dark ? "rgba(13,148,136,0.07)" : "rgba(13,148,136,0.05)", border: "1px solid rgba(13,148,136,0.18)", marginBottom: 24 }}>
                <span style={{ color: "var(--text2)" }}>Order Total ({qty} pair{qty>1?"s":""})</span>
                <span style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 26, fontWeight: 700, color: "var(--accent)" }}>₹{total.toLocaleString()}</span>
              </div>
              <button onClick={() => setStep(2)} className="btn-primary" style={{ width: "100%", padding: "14px 0", fontSize: 16 }}>CONTINUE →</button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <h3 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 22 }}>Delivery Details</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14, marginBottom: 24 }}>
                <InputField label="Full Name *" name="name" value={form.name} onChange={fc} placeholder="Your full name" />
                <InputField label="Mobile Number *" name="mobile" value={form.mobile} onChange={fc} placeholder="+91 00000 00000" />
                <InputField label="WhatsApp Number" name="whatsapp" value={form.whatsapp} onChange={fc} placeholder="+91 00000 00000" />
                <InputField label="City *" name="city" value={form.city} onChange={fc} placeholder="Your city" />
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text2)", marginBottom: 6 }}>Complete Address *</label>
                  <textarea name="address" value={form.address} onChange={fc} placeholder="House/Flat No., Street, Area, Landmark" rows={3} className="input-field" style={{ resize: "none" }} />
                </div>
                <InputField label="State *" name="state" value={form.state} onChange={fc} placeholder="Your state" />
                <InputField label="Pincode *" name="pincode" value={form.pincode} onChange={fc} placeholder="6-digit pincode" />
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => setStep(1)} className="btn-ghost" style={{ padding: "12px 20px", fontSize: 14 }}>← BACK</button>
                <button onClick={() => { if (form.name && form.mobile && form.address && form.city && form.state && form.pincode) setStep(3); }} className="btn-primary" style={{ flex: 1, padding: "12px 0", fontSize: 15 }}>CONTINUE →</button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <h3 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 22 }}>Payment & Review</h3>
              <div className="payment-method-grid" role="group" aria-label="Choose a payment method">
                {PAYMENT_OPTIONS.map(opt => (
                  <button type="button" key={opt.value} aria-pressed={form.payment === opt.value} onClick={() => setForm(f=>({...f,payment:opt.value}))} className={`payment-method${form.payment === opt.value ? " selected" : ""}`}>
                    <span className={`payment-method-icon${opt.value === "upi" ? " text-icon" : ""}`} aria-hidden="true">{opt.icon}</span>
                    <span className="payment-method-copy"><strong>{opt.label}</strong><small>{opt.sub}</small></span>
                    <span className="payment-method-check" aria-hidden="true">{form.payment === opt.value ? "✓" : ""}</span>
                  </button>
                ))}
              </div>

              {["upi", "card", "netbanking", "wallet"].includes(form.payment) && (
                <div className="payment-gateway-notice" role="status">
                  <strong>Online checkout is not connected yet.</strong>
                  <span>{getPaymentLabel(form.payment)} will be available after a secure payment gateway is configured. No payment will be taken in this preview.</span>
                </div>
              )}

              <div style={{ padding: "18px", borderRadius: 14, background: "var(--card2)", border: "1px solid var(--border)", marginBottom: 22 }}>
                <div style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Order Summary</div>
                <Row label="Product" value={PRODUCT.name} />
                <Row label="Quantity" value={`${qty} pair(s)`} />
                <Row label="Unit Price" value={`₹${PRODUCT.price}`} />
                <Row label="Total Amount" value={`₹${total.toLocaleString()}`} highlight />
                <Row label="Delivery" value="FREE" />
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: 10, marginTop: 10 }}>
                  <Row label="Name" value={form.name} />
                  <Row label="Mobile" value={form.mobile} />
                  <Row label="Address" value={`${form.address}, ${form.city}, ${form.state} – ${form.pincode}`} />
                  <Row label="Payment" value={getPaymentLabel(form.payment)} />
                </div>
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => setStep(2)} className="btn-ghost" style={{ padding: "12px 20px", fontSize: 14 }}>← BACK</button>
                {form.payment === "whatsapp" ? (
                  <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-wa" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 0", fontSize: 15, textDecoration: "none" }}>
                    <WaIcon /> ORDER ON WHATSAPP
                  </a>
                ) : ["upi", "card", "netbanking", "wallet"].includes(form.payment) ? (
                  <button type="button" disabled className="btn-ghost payment-unavailable">ONLINE PAYMENT UNAVAILABLE</button>
                ) : (
                  <button onClick={placeOrder} className="btn-primary" style={{ flex: 1, padding: "12px 0", fontSize: 15 }}>PLACE COD ORDER — ₹{total.toLocaleString()}</button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section style={{ padding: "80px 20px", background: "var(--bg2)", transition: "background 0.3s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>CUSTOMER REVIEWS</SectionLabel>
          <h2 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: "clamp(28px,5vw,46px)", fontWeight: 700, marginBottom: 44 }}>
            Trusted by <span className="gradient-text">Riders Nationwide</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
            {REVIEWS.map(r => (
              <div key={r.name} className="card" style={{ padding: "22px 20px" }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                  {Array(r.rating).fill(0).map((_,i) => <span key={i} style={{ color: "#f59e0b", fontSize: 14 }}>★</span>)}
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--text2)", marginBottom: 16 }}>"{r.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg,var(--primary),var(--primary-dark))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 13 }}>{r.name[0]}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{r.name}</div>
                    <div style={{ fontSize: 11, color: "var(--text3)" }}>{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" style={{ padding: "80px 20px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 56, alignItems: "center" }}>
          <div>
            <SectionLabel>OUR STORY</SectionLabel>
            <h2 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: "clamp(28px,5vw,46px)", fontWeight: 700, marginBottom: 20 }}>
              SR Enterprise <span className="gradient-text">Manufacturing</span>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text2)", marginBottom: 16 }}>SR Enterprise Manufacturing always focuses on high-quality manufacturing, excellent techniques and continuous research for new products.</p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text2)", marginBottom: 32 }}>Our Star Bar End Mirror is the result of careful engineering — built for Indian road conditions, designed for every type of rider.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
              {[["500+","Orders Delivered"],["4.9★","Average Rating"],["100%","Quality Checked"]].map(([n,l]) => (
                <div key={l} className="card" style={{ padding: "16px 10px", textAlign: "center" }}>
                  <div style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 22, fontWeight: 700, color: "var(--accent)", marginBottom: 4 }}>{n}</div>
                  <div style={{ fontSize: 11, color: "var(--text3)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)" }}>
              <img src="https://images.unsplash.com/photo-1564489627862-566a9b636fe9?w=600&h=440&fit=crop&auto=format" alt="Premium motorcycle" style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ position: "absolute", bottom: -16, left: -12, padding: "12px 18px", borderRadius: 14, background: "var(--card)", border: "1px solid rgba(13,148,136,0.3)", boxShadow: "var(--shadow-glow)" }}>
              <div style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 13, fontWeight: 700, color: "var(--primary)", marginBottom: 2 }}>MADE IN INDIA</div>
              <div style={{ fontSize: 11, color: "var(--text2)" }}>Premium Aluminium Alloy</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section style={{ padding: "80px 20px", background: "var(--bg2)", transition: "background 0.3s" }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <SectionLabel>FAQ</SectionLabel>
          <h2 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: "clamp(28px,5vw,46px)", fontWeight: 700, marginBottom: 40 }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {FAQS.map((faq,i) => (
              <div key={i} className="card" style={{ overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(openFaq===i ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16, color: "var(--text)" }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{faq.q}</span>
                  <span className={`faq-icon ${openFaq===i?"open":""}`} style={{ color: "var(--primary)", fontSize: 20, fontWeight: 300, flexShrink: 0 }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 20px 18px", fontSize: 13, color: "var(--text2)", lineHeight: 1.7 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" style={{ padding: "80px 20px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 48 }}>
          <div>
            <SectionLabel>GET IN TOUCH</SectionLabel>
            <h2 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: "clamp(28px,5vw,44px)", fontWeight: 700, marginBottom: 26 }}>
              Contact <span className="gradient-text">SR Enterprise</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ContactRow icon="📞" label="Call / WhatsApp" value={PHONE} href="tel:+917011389981" />
              <ContactRow icon="💬" label="WhatsApp Order" value="Message us now" href={WA_URL} />
              <ContactRow icon="🌐" label="Website" value="www.srenterprise.co.in" href="https://www.srenterprise.co.in" />
              <ContactRow icon="📘" label="Facebook" value="SR Enterprise Manufacturing" href="#" />
              <ContactRow icon="📷" label="Instagram" value="@srenterprise" href="#" />
            </div>
          </div>
          <div style={{ position: "relative", borderRadius: 22, overflow: "hidden", minHeight: 280 }}>
            <img src="https://images.unsplash.com/photo-1648104063947-f14d704a31b6?w=600&h=400&fit=crop&auto=format" alt="Motorcycle" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(8,9,11,0.72)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 32 }}>
              <p style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 20, fontWeight: 600, marginBottom: 8, color: "#f8fafc" }}>Ready to order?</p>
              <p style={{ fontSize: 13, color: "#94a3b8", marginBottom: 20 }}>Call or WhatsApp us for quick ordering and support.</p>
              <a href="tel:+917011389981" className="btn-primary" style={{ padding: "12px 24px", fontSize: 14, textDecoration: "none", display: "inline-block" }}>CALL: {PHONE}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: dark ? "#050507" : "#e8ecf2", borderTop: "1px solid var(--border)", transition: "background 0.3s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 36, marginBottom: 36 }}>
            <div>
              <img src={brandLogo} alt="SR Enterprises Manufacturing" className="footer-brand-logo" />
              <p style={{ fontSize: 12, color: "var(--text3)", lineHeight: 1.65 }}>Premium motorcycle accessories. Quality, durability, and style — all in one.</p>
              <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                {["f","ig","wa"].map(s => (
                  <a key={s} href={s==="wa"?WA_URL:"#"} style={{ width: 32, height: 32, borderRadius: 8, background: "var(--card2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: "var(--text2)", textDecoration: "none", border: "1px solid var(--border)" }}>{s}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text3)", marginBottom: 14, textTransform: "uppercase" }}>Quick Links</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {["Home","Products","Features","About Us","Contact"].map(l => (
                  <li key={l}><button onClick={() => goTo(l.toLowerCase().replace(" ",""))} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "var(--text2)", padding: 0 }}>{l}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text3)", marginBottom: 14, textTransform: "uppercase" }}>Support</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {["Privacy Policy","Terms & Conditions","Shipping Policy","Return & Refund Policy"].map(l => (
                  <li key={l}><a href="#" style={{ fontSize: 13, color: "var(--text2)", textDecoration: "none" }}>{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: "Rajdhani,sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text3)", marginBottom: 14, textTransform: "uppercase" }}>Contact</h4>
              <p style={{ fontSize: 13, color: "var(--text2)", marginBottom: 6 }}>SR Enterprise Manufacturing</p>
              <a href="tel:+917011389981" style={{ fontSize: 13, color: "var(--primary)", display: "block", marginBottom: 4, textDecoration: "none" }}>{PHONE}</a>
              <a href="https://www.srenterprise.co.in" style={{ fontSize: 13, color: "var(--text2)", textDecoration: "none" }}>www.srenterprise.co.in</a>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 20, textAlign: "center", fontSize: 12, color: "var(--text3)" }}>
            © 2024 SR Enterprise Manufacturing. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ══ FLOATING WHATSAPP ══ */}
      <a href={WA_URL} target="_blank" rel="noreferrer" className="wa-float"
        style={{ position: "fixed", bottom: 24, right: 24, zIndex: 100, display: "flex", alignItems: "center", gap: 8, padding: "12px 20px", borderRadius: 999, background: "#25d366", color: "#fff", fontFamily: "Rajdhani,sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.04em", textDecoration: "none" }}>
        <WaIcon size={20} />
        <span className="wa-label">Order on WhatsApp</span>
      </a>
    </div>
  );
}
