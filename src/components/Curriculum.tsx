import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Play, FileText } from "lucide-react";

export const Curriculum = () => {
  const courses = [
    {
      title: "Premiere Pro Crash Course",
      price: "£47",
      duration: "4 hours",
      level: "Beginner",
      description: "Master the essentials of Premiere Pro with no-fluff, straight-to-the-point lessons.",
      includes: ["Cuts and timeline basics", "Transitions and effects", "Audio editing fundamentals", "Exporting for different platforms"],
      popular: false
    },
    {
      title: "After Effects Essentials", 
      price: "£89",
      duration: "6 hours",
      level: "Intermediate",
      description: "Create stunning motion graphics and dynamic text animations that grab attention.",
      includes: ["Motion graphics fundamentals", "Dynamic text animations", "Shape layers and effects", "Exporting and integration"],
      popular: false
    },
    {
      title: "Complete Bundle",
      price: "£99-£119",
      originalPrice: "£136",
      duration: "10+ hours",
      level: "All Levels",
      description: "Both courses plus exclusive templates, grading presets, and practice project files.",
      includes: ["Premiere Pro Crash Course", "After Effects Essentials", "Drag-and-drop templates", "Grading presets", "Practice project files", "Bonus pack (£19 value)"],
      popular: true
    }
  ];

  const getBadgeVariant = (level: string) => {
    switch (level) {
      case "Beginner": return "secondary";
      case "Intermediate": return "default";
      case "All Levels": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <section className="py-24 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Choose Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Learning Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with individual courses or grab the complete bundle with exclusive bonuses.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className={`border-0 shadow-elegant hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm relative ${course.popular ? 'ring-2 ring-primary' : ''}`}>
              {course.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8">
                {/* Course Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="mb-3">
                    <span className="text-3xl font-bold text-primary">{course.price}</span>
                    {course.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through ml-2">{course.originalPrice}</span>
                    )}
                  </div>
                  <Badge variant={getBadgeVariant(course.level)} className="mb-3">
                    {course.level}
                  </Badge>
                </div>

                {/* Course Stats */}
                <div className="flex justify-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  {course.description}
                </p>

                {/* Includes */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Includes:</span>
                  </div>
                  {course.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground mb-4">
            All courses include the £19 Bonus Pack when you purchase the bundle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get Individual Course
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
              Get Complete Bundle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};