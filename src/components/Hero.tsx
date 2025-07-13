import { Button } from "@/components/ui/button";
import { PlayCircle, Star, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/zero-to-editor-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Video editing workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted by Nike, adidas & Top Brands</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            🎬 From Zero to 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Editor</span>
            <br />
            — Fast.
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Learn Premiere Pro & After Effects the smart way.<br />
            1-on-1 mentoring now available. Crash courses dropping soon.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">1,000+ creators</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">@zerotoeditor</span>
            </div>
            <div className="flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">No-fluff learning</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" onClick={() => window.open('https://wa.me/447123456789?text=Hi%20there!%20I%27d%20like%20to%20book%20a%201-on-1%20video%20editing%20session.', '_blank')}>
              Book a 1-on-1 Session
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => window.open('mailto:hello@zerotoeditor.com?subject=Course Waitlist', '_blank')}>
              Join the Course Waitlist
            </Button>
          </div>

          {/* Pricing Preview */}
          <div className="mt-8 text-sm text-muted-foreground">
            <span className="text-lg font-bold text-primary">Courses from £47</span>
            <span className="ml-2">• 1-on-1 mentoring available</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};