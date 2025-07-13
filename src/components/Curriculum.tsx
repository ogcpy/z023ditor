import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Play, FileText } from "lucide-react";

export const Curriculum = () => {
  const modules = [
    {
      title: "Getting Started with Premiere Pro",
      duration: "3 hours",
      lessons: 12,
      badge: "Beginner",
      description: "Master the fundamentals of Premiere Pro interface, project setup, and basic editing techniques.",
      topics: ["Workspace navigation", "Importing media", "Basic cuts and transitions", "Timeline fundamentals"]
    },
    {
      title: "Advanced Editing Techniques",
      duration: "8 hours",
      lessons: 24,
      badge: "Intermediate", 
      description: "Learn professional editing workflows, multicam editing, and advanced timeline techniques.",
      topics: ["Multicam editing", "Proxy workflows", "Advanced trimming", "Nested sequences"]
    },
    {
      title: "Color Grading Mastery",
      duration: "6 hours",
      lessons: 18,
      badge: "Intermediate",
      description: "Transform your footage with professional color correction and grading techniques.",
      topics: ["Color theory", "Lumetri Color panel", "Creative looks", "Matching shots"]
    },
    {
      title: "Audio Production & Sound Design",
      duration: "4 hours",
      lessons: 15,
      badge: "Intermediate",
      description: "Create professional audio mixes with dialogue, music, and sound effects.",
      topics: ["Audio cleanup", "Mixing techniques", "Sound effects", "Music licensing"]
    },
    {
      title: "After Effects Fundamentals",
      duration: "10 hours",
      lessons: 30,
      badge: "Beginner",
      description: "Dive into motion graphics and visual effects with After Effects.",
      topics: ["Composition basics", "Keyframe animation", "Layer management", "Effects overview"]
    },
    {
      title: "Motion Graphics & Animation",
      duration: "12 hours",
      lessons: 36,
      badge: "Advanced",
      description: "Create stunning motion graphics, titles, and animated elements.",
      topics: ["Text animation", "Shape layers", "Expressions", "Character animation"]
    },
    {
      title: "Visual Effects & Compositing",
      duration: "8 hours",
      lessons: 24,
      badge: "Advanced",
      description: "Master green screen, tracking, and advanced compositing techniques.",
      topics: ["Keying techniques", "Motion tracking", "3D compositing", "Particle systems"]
    },
    {
      title: "Workflow & Client Management",
      duration: "3 hours",
      lessons: 10,
      badge: "Professional",
      description: "Learn industry workflows, client communication, and project delivery.",
      topics: ["File organization", "Client feedback", "Delivery formats", "Backup strategies"]
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Beginner": return "secondary";
      case "Intermediate": return "default";
      case "Advanced": return "destructive";
      case "Professional": return "outline";
      default: return "secondary";
    }
  };

  return (
    <section className="py-24 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete Learning
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Curriculum</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            8 comprehensive modules taking you from beginner to professional video editor.
            Each module builds upon the previous one for optimal learning progression.
          </p>
        </div>

        {/* Curriculum Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Module Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-primary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <Badge variant={getBadgeVariant(module.badge)}>
                        {module.badge}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                  </div>
                </div>

                {/* Module Stats */}
                <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    <span>{module.lessons} lessons</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {module.description}
                </p>

                {/* Topics */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Key Topics:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};