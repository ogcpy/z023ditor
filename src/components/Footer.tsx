import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Play } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="text-center mb-16 py-16 bg-gradient-primary rounded-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Go From Zero to Editor?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Stop watching endless tutorials. Start creating professional content today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Book a 1-on-1 Session
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Join the Course Waitlist
            </Button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Zero to Editor</h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Skip the YouTube rabbit hole. Learn Premiere Pro & After Effects the smart way 
              with 1-on-1 mentoring and no-fluff crash courses.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-secondary-foreground/80">hello@zerotoeditor.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MessageCircle className="w-4 h-4" />
                <span className="text-secondary-foreground/80">@zerotoeditor</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-secondary-foreground/80">
              <p>• Book 1-on-1 Session</p>
              <p>• Join Course Waitlist</p>
              <p>• TikTok @zerotoeditor</p>
              <p>• Support & FAQ</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; 2024 Zero to Editor. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};