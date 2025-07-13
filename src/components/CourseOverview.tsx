import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Download, Trophy, Zap, Target } from "lucide-react";

export const CourseOverview = () => {
  const features = [
    {
      icon: Zap,
      title: "No-Fluff Learning",
      description: "Skip the YouTube rabbit hole. Get straight to what works."
    },
    {
      icon: Target,
      title: "Real-World Skills",
      description: "Learn the exact techniques used for major brands"
    },
    {
      icon: Download,
      title: "Templates Included",
      description: "Drag-and-drop templates and grading presets"
    },
    {
      icon: Trophy,
      title: "1-on-1 Mentoring",
      description: "Personal guidance from industry professionals"
    }
  ];

  const skills = [
    "Professional editing workflows in Premiere Pro",
    "Motion graphics and dynamic text in After Effects", 
    "Color grading and correction techniques",
    "Audio editing and sound design",
    "Timeline organization and project management",
    "Export settings for TikTok, YouTube, and clients",
    "Industry-standard shortcuts and efficiency tips",
    "Building a professional editing portfolio"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Skip the YouTube Rabbit Hole.
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Learn What Works.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            "Edit like a pro. Without the fluff." — The crash course I wish I had when I started.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Testimonials */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-2xl shadow-elegant border border-primary/10">
              <p className="text-lg font-medium mb-4">"More helpful than hours on YouTube."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">JC</span>
                </div>
                <div>
                  <p className="font-medium text-sm">Jake C.</p>
                  <p className="text-xs text-muted-foreground">Content Creator</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-2xl shadow-elegant border border-primary/10">
              <p className="text-lg font-medium mb-4">"Straight to the point — I actually understood how to edit."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">SM</span>
                </div>
                <div>
                  <p className="font-medium text-sm">Sarah M.</p>
                  <p className="text-xs text-muted-foreground">TikTok Creator</p>
                </div>
              </div>
            </div>
          </div>

          {/* What You'll Learn */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8">What You'll Master</h3>
            <div className="grid gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};