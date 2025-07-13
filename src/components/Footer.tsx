import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Play } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="text-center mb-16 py-16 bg-gradient-primary rounded-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Creating?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful video editors who transformed their careers with our course.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Enroll Now - $199
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Play className="w-5 h-5 mr-2" />
              Watch Preview
            </Button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Video Editing Masterclass</h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              The most comprehensive online course for learning Premiere Pro and After Effects. 
              Transform your creative vision into professional videos.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Support</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-secondary-foreground/80">support@videoediting.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MessageCircle className="w-4 h-4" />
                <span className="text-secondary-foreground/80">24/7 Student Support</span>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Promise</h4>
            <div className="space-y-2 text-secondary-foreground/80">
              <p>✓ 30-day money-back guarantee</p>
              <p>✓ Lifetime access to updates</p>
              <p>✓ Industry-recognized certification</p>
              <p>✓ Career advancement support</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; 2024 Video Editing Masterclass. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};