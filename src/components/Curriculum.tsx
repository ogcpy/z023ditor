import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Play, FileText } from "lucide-react";

export const Curriculum = () => {
  const mentoringSessions = [
    {
      title: "Premiere Pro Foundations",
      price: "£47/hour",
      duration: "1-on-1 Session",
      level: "Beginner",
      description: "Master the essentials of Premiere Pro with personalized guidance tailored to your needs.",
      includes: ["Cuts and timeline basics", "Transitions and effects", "Audio editing fundamentals", "Exporting for your specific needs"],
      popular: false
    },
    {
      title: "After Effects Mastery", 
      price: "£89/hour",
      duration: "1-on-1 Session",
      level: "Intermediate",
      description: "Create stunning motion graphics with direct mentorship from industry professionals.",
      includes: ["Motion graphics fundamentals", "Dynamic text animations", "Shape layers and effects", "Your specific project goals"],
      popular: false
    },
    {
      title: "Complete Mentoring Package",
      price: "£99-£119/hour",
      duration: "1-on-1 Sessions",
      level: "All Levels",
      description: "Comprehensive mentoring covering both Premiere Pro and After Effects with ongoing support.",
      includes: ["Premiere Pro guidance", "After Effects training", "Portfolio review", "Career advice", "Ongoing project support"],
      popular: true
    }
  ];

  const upcomingCourses = [
    {
      title: "Premiere Pro Crash Course",
      status: "Coming Soon",
      description: "No-fluff course covering everything you need to start editing professionally"
    },
    {
      title: "After Effects Essentials",
      status: "Coming Soon", 
      description: "Master motion graphics and create eye-catching animations"
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
        {/* 1-on-1 Mentoring Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            1-on-1 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Mentoring</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized guidance from industry professionals. Book sessions by the hour.
          </p>
        </div>

        {/* Mentoring Sessions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {mentoringSessions.map((session, index) => (
            <Card key={index} className={`border-0 shadow-elegant hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm relative ${session.popular ? 'ring-2 ring-primary' : ''}`}>
              {session.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                  <div className="mb-3">
                    <span className="text-3xl font-bold text-primary">{session.price}</span>
                  </div>
                  <Badge variant={getBadgeVariant(session.level)} className="mb-3">
                    {session.level}
                  </Badge>
                </div>

                <div className="flex justify-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span>{session.duration}</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  {session.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">What you'll get:</span>
                  </div>
                  {session.includes.map((item, itemIndex) => (
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

        {/* Upcoming Courses Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Crash Courses 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Coming Soon</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Self-paced courses with no-fluff content. Join the waitlist to be notified when they launch.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {upcomingCourses.map((course, index) => (
              <Card key={index} className="border border-primary/20 bg-card/30">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                  <Badge variant="outline" className="mb-3 border-primary text-primary">
                    {course.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              onClick={() => window.open('mailto:hello@zerotoeditor.com?subject=1-on-1 Session Booking', '_blank')}
            >
              Book 1-on-1 Session
            </button>
            <button 
              className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              onClick={() => window.open('mailto:hello@zerotoeditor.com?subject=Course Waitlist', '_blank')}
            >
              Join Course Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};