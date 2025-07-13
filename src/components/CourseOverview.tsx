import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Download, Trophy } from "lucide-react";
import coursePreview from "@/assets/course-preview.jpg";

export const CourseOverview = () => {
  const features = [
    {
      icon: Clock,
      title: "50+ Hours of Content",
      description: "Comprehensive video lessons covering every aspect of editing"
    },
    {
      icon: Download,
      title: "Lifetime Access",
      description: "Download all materials and access updates forever"
    },
    {
      icon: Trophy,
      title: "Industry Certification",
      description: "Get certified and showcase your skills to employers"
    },
    {
      icon: CheckCircle,
      title: "Project Files Included",
      description: "Practice with real footage and project templates"
    }
  ];

  const skills = [
    "Professional video editing workflows",
    "Advanced color grading and correction",
    "Motion graphics and text animations",
    "Audio editing and sound design",
    "Visual effects and compositing",
    "Export optimization for all platforms",
    "Client workflow and project management",
    "Industry-standard editing techniques"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need to Become a 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Pro Editor</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This comprehensive course covers both Premiere Pro and After Effects, 
            giving you the complete toolkit for professional video production.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Course Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={coursePreview} 
                alt="Course preview" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium">
                  Preview Available
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