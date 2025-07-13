import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

interface WaitlistFormProps {
  children: React.ReactNode;
}

export const WaitlistForm = ({ children }: WaitlistFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: ""
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate form submission (you can replace this with actual API call)
    console.log("Waitlist submission:", formData);
    toast.success("Thanks for joining the waitlist! We'll notify you when courses launch.");
    
    // Reset form and close dialog
    setFormData({ name: "", email: "", experience: "" });
    setIsOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Join the Course Waitlist
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="experience">Video Editing Experience (Optional)</Label>
            <Input
              id="experience"
              type="text"
              placeholder="e.g., Beginner, Some experience, etc."
              value={formData.experience}
              onChange={(e) => handleInputChange("experience", e.target.value)}
            />
          </div>
          
          <Button type="submit" className="w-full" size="lg">
            Join Waitlist
          </Button>
        </form>
        
        <p className="text-sm text-muted-foreground text-center mt-4">
          We'll notify you as soon as our crash courses are available!
        </p>
      </DialogContent>
    </Dialog>
  );
};