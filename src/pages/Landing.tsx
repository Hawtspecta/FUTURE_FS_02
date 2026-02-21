import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Users, Zap, Shield, Sparkles, TrendingUp } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">LeadFlow AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Login
            </Link>
            <Link
              to="/dashboard"
              className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-xl hover:opacity-90 transition-opacity font-medium"
            >
              Access Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Built for agencies & freelancers
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-up-delay-1">
            Turn conversations into{" "}
            <span className="gradient-text">conversions</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up-delay-2">
            The minimal CRM that helps you track leads, manage follow-ups, and close deals faster. No complexity, just results.
          </p>
          <div className="flex items-center justify-center gap-4 animate-slide-up-delay-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-base font-semibold hover:opacity-90 transition-all glow"
            >
              Access Dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground px-6 py-3 rounded-xl text-base font-medium transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-2 glow animate-float">
            <img
              src={dashboardPreview}
              alt="LeadFlow AI Dashboard Preview"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to <span className="gradient-text">close more deals</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Powerful features, zero complexity. Focus on what matters — your clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Lead Management",
                desc: "Capture, organize, and track every lead from first touch to conversion.",
              },
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                desc: "Instant insights into your pipeline with beautiful, actionable charts.",
              },
              {
                icon: TrendingUp,
                title: "Conversion Tracking",
                desc: "Monitor your conversion rates and identify winning strategies.",
              },
              {
                icon: Zap,
                title: "Quick Follow-ups",
                desc: "Add notes and schedule follow-ups without leaving the dashboard.",
              },
              {
                icon: Shield,
                title: "Secure & Private",
                desc: "Enterprise-grade security with JWT authentication and encrypted data.",
              },
              {
                icon: Sparkles,
                title: "Clean Interface",
                desc: "A distraction-free workspace designed for speed and focus.",
              },
            ].map((feature, i) => (
              <div key={i} className="glass-card-hover p-6">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-12 glow">
            <h2 className="text-3xl font-bold mb-4">Ready to streamline your pipeline?</h2>
            <p className="text-muted-foreground mb-8">
              Start managing your leads like a pro. No credit card required.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl text-base font-semibold hover:opacity-90 transition-all"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Zap className="h-3 w-3 text-primary-foreground" />
            </div>
            <span>LeadFlow AI</span>
          </div>
          <span>© 2026 LeadFlow AI. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
