import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, User, MapPin, Building, Trophy } from 'lucide-react';

// District to Hub mapping
const districtToHubMapping = {
  'Chengalpattu': 'Chennai Metro Hub',
  'Chennai': 'Chennai Metro Hub',
  'Kancheepuram': 'Chennai Metro Hub',
  'Tiruvallur': 'Chennai Metro Hub',
  'Cuddalore': 'Cuddalore Regional Hub',
  'Kallakurichi': 'Cuddalore Regional Hub',
  'Tiruvannamalai': 'Cuddalore Regional Hub',
  'Villupuram': 'Cuddalore Regional Hub',
  'Dharmapuri': 'Hosur Regional Hub',
  'Krishnagiri': 'Hosur Regional Hub',
  'Ranipet': 'Hosur Regional Hub',
  'Tirupattur': 'Hosur Regional Hub',
  'Vellore': 'Hosur Regional Hub',
  'Namakkal': 'Salem Regional Hub',
  'Salem': 'Salem Regional Hub',
  'Erode': 'Erode Regional Hub',
  'Tiruppur': 'Erode Regional Hub',
  'Coimbatore': 'Coimbatore Regional Hub',
  'The Nilgiris': 'Coimbatore Regional Hub',
  'Mayiladuthurai': 'Thanjavur Regional Hub',
  'Nagapattinam': 'Thanjavur Regional Hub',
  'Pudukkottai': 'Thanjavur Regional Hub',
  'Thanjavur': 'Thanjavur Regional Hub',
  'Thiruvarur': 'Thanjavur Regional Hub',
  'Ariyalur': 'Tiruchirappalli Satellite Hub',
  'Karur': 'Tiruchirappalli Satellite Hub',
  'Perambalur': 'Tiruchirappalli Satellite Hub',
  'Tiruchirappalli': 'Tiruchirappalli Satellite Hub',
  'Dindigul': 'Madurai Regional Hub',
  'Madurai': 'Madurai Regional Hub',
  'Sivagangai': 'Madurai Regional Hub',
  'Theni': 'Madurai Regional Hub',
  'Virudhunagar': 'Madurai Regional Hub',
  'Kanniyakumari': 'Tirunelveli Regional Hub',
  'Ramanathapuram': 'Tirunelveli Regional Hub',
  'Tenkasi': 'Tirunelveli Regional Hub',
  'Thoothukudi': 'Tirunelveli Regional Hub',
  'Tirunelveli': 'Tirunelveli Regional Hub',
};

const districts = Object.keys(districtToHubMapping).sort();

const entityTypes = [
  'Proprietorship',
  'Private Limited',
  'LLP',
  'Registered Partnership',
  'Other'
];

interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  organizationName: string;
  designation: string;
  isDpiitRegistered: string;
  entityType: string;
  district: string;
  regionalHub: string;
  pincode: string;
  startupDescription: string;
  sector: string;
  websiteLinks: string;
  cricketExperience: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    mobile: '',
    organizationName: '',
    designation: '',
    isDpiitRegistered: '',
    entityType: '',
    district: '',
    regionalHub: '',
    pincode: '',
    startupDescription: '',
    sector: '',
    websiteLinks: '',
    cricketExperience: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-fill regional hub when district is selected
  useEffect(() => {
    if (formData.district && districtToHubMapping[formData.district]) {
      setFormData(prev => ({
        ...prev,
        regionalHub: districtToHubMapping[formData.district]
      }));
    }
  }, [formData.district]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Registration Successful!</h2>
            <p className="text-muted-foreground mb-4">
              Thank you for registering for TNGSS Cricket Central. We'll contact you soon with further details.
            </p>
            <Button onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                mobile: '',
                organizationName: '',
                designation: '',
                isDpiitRegistered: '',
                entityType: '',
                district: '',
                regionalHub: '',
                pincode: '',
                startupDescription: '',
                sector: '',
                websiteLinks: '',
                cricketExperience: '',
              });
            }}>
              Register Another Participant
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
            Tournament Registration
          </h1>
          <p className="text-xl text-muted-foreground">
            Join the ultimate startup cricket league experience
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Participant Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Participant Details
              </CardTitle>
              <CardDescription>
                Tell us about yourself and your role
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number (Preferable WhatsApp) *</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="designation">Designation *</Label>
                  <Input
                    id="designation"
                    value={formData.designation}
                    onChange={(e) => handleInputChange('designation', e.target.value)}
                    placeholder="e.g., Founder, CTO, Developer"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="organizationName">Organization / Startup Name *</Label>
                <Input
                  id="organizationName"
                  value={formData.organizationName}
                  onChange={(e) => handleInputChange('organizationName', e.target.value)}
                  placeholder="Enter your company/startup name"
                  required
                />
              </div>

              <div className="space-y-4">
                <Label>Are you a DPIIT Registered Startup? *</Label>
                <RadioGroup
                  value={formData.isDpiitRegistered}
                  onValueChange={(value) => handleInputChange('isDpiitRegistered', value)}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="dpiit-yes" />
                    <Label htmlFor="dpiit-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="dpiit-no" />
                    <Label htmlFor="dpiit-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="entityType">Type of Entity *</Label>
                <Select value={formData.entityType} onValueChange={(value) => handleInputChange('entityType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select entity type" />
                  </SelectTrigger>
                  <SelectContent>
                    {entityTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Location
              </CardTitle>
              <CardDescription>
                Your location determines your regional hub assignment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="district">District *</Label>
                  <Select value={formData.district} onValueChange={(value) => handleInputChange('district', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your district" />
                    </SelectTrigger>
                    <SelectContent>
                      {districts.map((district) => (
                        <SelectItem key={district} value={district}>
                          {district}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="regionalHub">Regional Hub</Label>
                  <Input
                    id="regionalHub"
                    value={formData.regionalHub}
                    readOnly
                    placeholder="Auto-filled based on district"
                    className="bg-muted"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => handleInputChange('pincode', e.target.value)}
                  placeholder="600001"
                  maxLength={6}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* About Your Startup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                About Your Startup
              </CardTitle>
              <CardDescription>
                Help us understand your business and industry
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="startupDescription">Brief Description of Your Startup *</Label>
                <Textarea
                  id="startupDescription"
                  value={formData.startupDescription}
                  onChange={(e) => handleInputChange('startupDescription', e.target.value)}
                  placeholder="Describe what your startup does, your mission, and key products/services..."
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sector">Sector / Industry *</Label>
                <Input
                  id="sector"
                  value={formData.sector}
                  onChange={(e) => handleInputChange('sector', e.target.value)}
                  placeholder="e.g., FinTech, HealthTech, EdTech, E-commerce"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="websiteLinks">Website / Social Media Links (Optional)</Label>
                <Input
                  id="websiteLinks"
                  value={formData.websiteLinks}
                  onChange={(e) => handleInputChange('websiteLinks', e.target.value)}
                  placeholder="https://yourwebsite.com, LinkedIn, Twitter handles"
                />
              </div>
            </CardContent>
          </Card>

          {/* Cricket Participation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Cricket Participation
              </CardTitle>
              <CardDescription>
                Let us know about your cricket experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base font-medium">
                  Do you know how to play professional cricket? *
                </Label>
                <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-accent">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> This is a Stitch Ball cricket match, played with standard cricket rules. 
                    Please ensure you have prior experience in handling a leather cricket ball and are comfortable 
                    playing competitive cricket.
                  </p>
                </div>
                <RadioGroup
                  value={formData.cricketExperience}
                  onValueChange={(value) => handleInputChange('cricketExperience', value)}
                  className="space-y-4"
                >
                  <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="yes" id="cricket-yes" className="mt-1" />
                    <div className="space-y-1">
                      <Label htmlFor="cricket-yes" className="font-medium">Yes</Label>
                      <p className="text-sm text-muted-foreground">
                        You will be playing in the match and will be allotted to your Regional Hub team based on your district.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="no" id="cricket-no" className="mt-1" />
                    <div className="space-y-1">
                      <Label htmlFor="cricket-no" className="font-medium">No</Label>
                      <p className="text-sm text-muted-foreground">
                        You can support your Regional Hub team and make valuable startup connections during the networking breaks.
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="px-12 py-3 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting Registration...
                </>
              ) : (
                'Complete Registration'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
