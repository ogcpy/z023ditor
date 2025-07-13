import { Users, TrendingUp } from "lucide-react";

export const SocialProof = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Join the Community</h3>
          </div>
          
          <p className="text-lg text-muted-foreground mb-6">
            Join 1,000+ creators learning editing faster
          </p>
          
          <div className="inline-flex items-center gap-3 bg-background border border-primary/20 rounded-full px-6 py-3 shadow-elegant">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">📲</span>
            </div>
            <span className="font-medium">@zerotoeditor on TikTok</span>
            <Users className="w-4 h-4 text-primary" />
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            Follow for daily editing tips and behind-the-scenes content
          </p>
        </div>
      </div>
    </section>
  );
};