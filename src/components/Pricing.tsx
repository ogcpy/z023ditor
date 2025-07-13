import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Clock, Download, Users, Trophy } from "lucide-react";

export const Pricing = () => {
  const features = [
    "50+ hours of premium video content",
    "Lifetime access to all materials",
    "Project files and templates included",
    "Industry certification upon completion",
    "Private student community access",
    "1-on-1 mentor support sessions",
    "Regular content updates",
    "30-day money-back guarantee"
  ];

  const bonuses = [
    {
      icon: Download,
      title: "Exclusive Templates Pack",
      value: "$99",
      description: "50+ professional templates for Premiere Pro & After Effects"
    },
    {
      icon: Users,
      title: "Private Discord Community",
      value: "$49",
      description: "Connect with fellow editors and get real-time help"
    },
    {
      icon: Trophy,
      title: "Portfolio Review Session",
      value: "$149",
      description: "One-on-one feedback session with industry professionals"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Editing Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get everything you need to become a professional video editor, 
            plus exclusive bonuses worth $297 - all for one low price.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Pricing Card */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-glow bg-gradient-hero relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
              
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Complete Video Editing Masterclass</h3>
                  <div className="mb-4">
                    <span className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      $199
                    </span>
                    <span className="text-lg text-muted-foreground line-through ml-2">$299</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                    <Clock className="w-4 h-4" />
                    <span>Limited time offer - 33% off!</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="hero" size="lg" className="w-full text-lg py-6">
                  Enroll Now - Start Learning Today
                </Button>
                
                <p className="text-center text-sm text-muted-foreground mt-4">
                  30-day money-back guarantee • Secure payment • Instant access
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Bonuses */}
          <div>
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold mb-2">Exclusive Bonuses</h4>
                  <p className="text-sm text-muted-foreground">
                    Worth $297 - included at no extra cost
                  </p>
                </div>

                <div className="space-y-6">
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <bonus.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="font-semibold text-sm">{bonus.title}</h5>
                            <Badge variant="outline" className="text-xs">
                              {bonus.value}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {bonus.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-center">
                    <p className="text-sm font-medium text-primary mb-1">Total Value</p>
                    <p className="text-2xl font-bold">$496</p>
                    <p className="text-xs text-muted-foreground">Get it all for just $199</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" />
              <span>4.9/5 from 25,000+ students</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Taught by industry professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-primary" />
              <span>Career advancement guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};