import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { format } from 'date-fns';
import { 
  CalendarIcon, 
  MapPin, 
  Camera, 
  Utensils, 
  Users, 
  Mountain, 
  Trees, 
  Home, 
  Building, 
  Hotel, 
  Banknote,
  Check,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';

const CreatePlan = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    destinations: [] as string[],
    interests: [] as string[],
    people: '',
    hasChildren: null as boolean | null,
    childrenCount: '',
    dateFrom: null as Date | null,
    dateTo: null as Date | null,
    flexibleDates: false,
    accommodations: [] as string[],
    budget: '',
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false); // Add this state

  const destinations = [
    { name: 'TAWANG', icon: Mountain },
    { name: 'MECHUKA', icon: Mountain },
    { name: 'NAMDAPHA', icon: Trees },
    { name: 'ZIRO', icon: Trees },
    { name: 'BOMDILA & TAWANG', icon: Mountain },
    { name: 'NAMSAI', icon: MapPin }
  ];

  const interests = [
    { name: 'Adventure', icon: Mountain },
    { name: 'Culinary', icon: Utensils },
    { name: 'Culture', icon: Users },
    { name: 'Treks & Hikes', icon: Mountain },
    { name: 'Wildlife', icon: Trees }
  ];

  const accommodationOptions = [
    { name: 'Homestays', icon: Home },
    { name: 'BnB', icon: Building },
    { name: 'Hotels', icon: Hotel },
    { name: 'Resorts', icon: Building }
  ];

  const budgetOptions = [
    { name: 'Below 30K', icon: Banknote },
    { name: '30K-80K', icon: Banknote },
    { name: '80K-1.5Lac', icon: Banknote },
    { name: 'Above 1.5Lac', icon: Banknote }
  ];

  const handleCheckboxChange = (field: string, value: string) => {
    setFormData(prev => {
      const currentValue = prev[field as keyof typeof prev];
      if (field === 'budget') {
        return { ...prev, [field]: value };
      }
      const currentArray = currentValue as string[];
      return {
        ...prev,
        [field]: currentArray.includes(value)
          ? currentArray.filter((item: string) => item !== value)
          : [...currentArray, value]
      };
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderCheckboxCard = (item: { name: string; icon: any }, field: string, isSelected: boolean) => {
    const Icon = item.icon;
    return (
      <Card 
        key={item.name}
        className={cn(
          "relative cursor-pointer transition-all duration-200 hover:shadow-md",
          isSelected ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
        )}
        onClick={() => handleCheckboxChange(field, item.name)}
      >
        {isSelected && (
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-primary-foreground" />
          </div>
        )}
        <CardContent className="p-4 text-center flex flex-row items-center justify-start space-x-1">
          <Icon className="w-6 h-6 text-primary" />
          <p className="text-sm font-medium">{item.name}</p>
        </CardContent>
      </Card>
    );
  };

  const isStepOneValid = () => {
    return formData.destinations.length > 0 && 
           formData.interests.length > 0 && 
           formData.people && 
           formData.hasChildren !== null &&
           formData.accommodations.length > 0 &&
           formData.budget;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call or replace with your actual submission logic
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 pt-28">
        {!submitted && (
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Create Your Perfect Plan</h1>
            <p className="text-muted-foreground">Let us help you plan your dream journey to Arunachal Pradesh</p>
          </div>
        )}

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-24">
            <h2 className="text-3xl font-bold mb-4 text-primary">Thank You!</h2>
            <p className="text-lg text-foreground mb-2">Your plan request has been submitted successfully.</p>
            <p className="text-muted-foreground">You will receive an email with further information shortly, usually within a few hours.</p>
            <a href="/" className='underline mt-5'>Go Back Home</a>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left Side - Form */}
            <div className="space-y-6">
              {/* Step Indicator */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
                  currentStep === 1 ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground"
                )}>
                  1
                </div>
                <div className="w-16 h-1 bg-border"></div>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
                  currentStep === 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>
                  2
                </div>
              </div>

              {currentStep === 1 && (
                <div className="space-y-8">
                  {/* Destinations */}
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">I want to visit *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {destinations.map(dest => 
                        renderCheckboxCard(dest, 'destinations', formData.destinations.includes(dest.name))
                      )}
                    </div>
                  </div>

                  {/* Special Interests */}
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Special Interest *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {interests.map(interest => 
                        renderCheckboxCard(interest, 'interests', formData.interests.includes(interest.name))
                      )}
                    </div>
                  </div>

                  {/* Number of People */}
                  <div>
                    <Label className="text-lg font-semibold mb-2 block">Number of people *</Label>
                    <Input 
                      type="number" 
                      placeholder="Enter number of people"
                      value={formData.people}
                      onChange={(e) => handleInputChange('people', e.target.value)}
                      className="max-w-xs"
                    />
                  </div>

                  {/* Children */}
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Have Children?</Label>
                    <div className="flex space-x-4 mb-4">
                      <Button
                        variant={formData.hasChildren === true ? "default" : "outline"}
                        onClick={() => handleInputChange('hasChildren', true)}
                      >
                        Yes
                      </Button>
                      <Button
                        variant={formData.hasChildren === false ? "default" : "outline"}
                        onClick={() => handleInputChange('hasChildren', false)}
                      >
                        No
                      </Button>
                    </div>
                    {formData.hasChildren && (
                      <Input 
                        type="number" 
                        placeholder="Number of children"
                        value={formData.childrenCount}
                        onChange={(e) => handleInputChange('childrenCount', e.target.value)}
                        className="max-w-xs"
                      />
                    )}
                  </div>

                  {/* Travel Dates */}
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Travel Dates</Label>
                    <div className="flex flex-col space-y-4">
                      <div className="flex space-x-4">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="justify-start">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.dateFrom ? format(formData.dateFrom, "PPP") : "From date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={formData.dateFrom}
                              onSelect={(date) => handleInputChange('dateFrom', date)}
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>

                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="justify-start">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.dateTo ? format(formData.dateTo, "PPP") : "To date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={formData.dateTo}
                              onSelect={(date) => handleInputChange('dateTo', date)}
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          checked={formData.flexibleDates}
                          onCheckedChange={(checked) => handleInputChange('flexibleDates', checked)}
                        />
                        <Label>My dates are flexible</Label>
                      </div>
                    </div>
                  </div>

                  {/* Accommodations */}
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Accommodations *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {accommodationOptions.map(acc => 
                        renderCheckboxCard(acc, 'accommodations', formData.accommodations.includes(acc.name))
                      )}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Budget *</Label>
                    <div className="grid grid-cols-2 gap-4">
                      {budgetOptions.map(budget => 
                        renderCheckboxCard(budget, 'budget', formData.budget === budget.name)
                      )}
                    </div>
                  </div>

                  <Button 
                    onClick={() => setCurrentStep(2)}
                    disabled={!isStepOneValid()}
                    className="w-full"
                  >
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}

              {currentStep === 2 && (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <Button variant="outline" onClick={() => setCurrentStep(1)}>
                        <ChevronLeft className="mr-2 h-4 w-4" /> Back
                      </Button>
                      <h2 className="text-2xl font-bold">Contact Information</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input 
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 9876543210"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input 
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          placeholder="Your city"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us more about your travel preferences or special requirements..."
                        rows={4}
                      />
                    </div>

                    <Button className="w-full" size="lg" type="submit">
                      Submit Plan Request
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Side - Preview */}
            <div className="lg:sticky lg:top-20 lg:h-fit">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">Your Plan Summary</h3>
                
                <div className="space-y-6">
                  {formData.destinations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Destinations</h4>
                      <div className="flex flex-wrap gap-2">
                        {formData.destinations.map(dest => (
                          <span key={dest} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {dest}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {formData.interests.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        {formData.interests.map(interest => (
                          <span key={interest} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {formData.people && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Group Size</h4>
                      <p className="text-foreground">
                        {formData.people} people
                        {formData.hasChildren && formData.childrenCount && ` (${formData.childrenCount} children)`}
                      </p>
                    </div>
                  )}

                  {(formData.dateFrom || formData.dateTo || formData.flexibleDates) && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Travel Dates</h4>
                      {formData.flexibleDates ? (
                        <p className="text-foreground">Flexible dates</p>
                      ) : (
                        <p className="text-foreground">
                          {formData.dateFrom && format(formData.dateFrom, "PPP")}
                          {formData.dateFrom && formData.dateTo && " - "}
                          {formData.dateTo && format(formData.dateTo, "PPP")}
                        </p>
                      )}
                    </div>
                  )}

                  {formData.accommodations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Accommodations</h4>
                      <div className="flex flex-wrap gap-2">
                        {formData.accommodations.map(acc => (
                          <span key={acc} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                            {acc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {formData.budget && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Budget</h4>
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                        {formData.budget}
                      </span>
                    </div>
                  )}

                  {currentStep === 2 && formData.name && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Contact</h4>
                      <div className="space-y-1 text-sm">
                        <p>{formData.name}</p>
                        {formData.email && <p>{formData.email}</p>}
                        {formData.phone && <p>{formData.phone}</p>}
                        {formData.city && <p>{formData.city}</p>}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePlan;