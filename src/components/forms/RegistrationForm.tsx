
// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { CheckCircle, User, MapPin, Building, Trophy } from "lucide-react";

// // District to Hub mapping
// const districtToHubMapping: Record<string, string> = {
//   Chengalpattu: "Chennai Metro Hub",
//   Chennai: "Chennai Metro Hub",
//   Kancheepuram: "Chennai Metro Hub",
//   Tiruvallur: "Chennai Metro Hub",
//   Cuddalore: "Cuddalore Regional Hub",
//   Kallakurichi: "Cuddalore Regional Hub",
//   Tiruvannamalai: "Cuddalore Regional Hub",
//   Villupuram: "Cuddalore Regional Hub",
//   Dharmapuri: "Hosur Regional Hub",
//   Krishnagiri: "Hosur Regional Hub",
//   Ranipet: "Hosur Regional Hub",
//   Tirupattur: "Hosur Regional Hub",
//   Vellore: "Hosur Regional Hub",
//   Namakkal: "Salem Regional Hub",
//   Salem: "Salem Regional Hub",
//   Erode: "Erode Regional Hub",
//   Tiruppur: "Erode Regional Hub",
//   Coimbatore: "Coimbatore Regional Hub",
//   "The Nilgiris": "Coimbatore Regional Hub",
//   Mayiladuthurai: "Thanjavur Regional Hub",
//   Nagapattinam: "Thanjavur Regional Hub",
//   Pudukkottai: "Thanjavur Regional Hub",
//   Thanjavur: "Thanjavur Regional Hub",
//   Thiruvarur: "Thanjavur Regional Hub",
//   Ariyalur: "Tiruchirappalli Satellite Hub",
//   Karur: "Tiruchirappalli Satellite Hub",
//   Perambalur: "Tiruchirappalli Satellite Hub",
//   Tiruchirappalli: "Tiruchirappalli Satellite Hub",
//   Dindigul: "Madurai Regional Hub",
//   Madurai: "Madurai Regional Hub",
//   Sivagangai: "Madurai Regional Hub",
//   Theni: "Madurai Regional Hub",
//   Virudhunagar: "Madurai Regional Hub",
//   Kanniyakumari: "Tirunelveli Regional Hub",
//   Ramanathapuram: "Tirunelveli Regional Hub",
//   Tenkasi: "Tirunelveli Regional Hub",
//   Thoothukudi: "Tirunelveli Regional Hub",
//   Tirunelveli: "Tirunelveli Regional Hub",
// };

// const districts = Object.keys(districtToHubMapping).sort();

// const entityTypes = [
//   "Proprietorship",
//   "Private Limited",
//   "LLP",
//   "Registered Partnership",
//   "Other",
// ];

// interface FormData {
//   fullName: string;
//   email: string;
//   mobile: string;
//   organizationName: string;
//   designation: string;
//   isDpiitRegistered: string;
//   entityType: string;
//   district: string;
//   regionalHub: string;
//   pincode: string;
//   startupDescription: string;
//   sector: string;
//   websiteLinks: string;
//   cricketExperience: string;
//   companyPhoto: File | null;
//   teamLeaderPhoto: File | null;
// }

// const RegistrationForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     fullName: "",
//     email: "",
//     mobile: "",
//     organizationName: "",
//     designation: "",
//     isDpiitRegistered: "",
//     entityType: "",
//     district: "",
//     regionalHub: "",
//     pincode: "",
//     startupDescription: "",
//     sector: "",
//     websiteLinks: "",
//     cricketExperience: "",
//     companyPhoto: null,
//     teamLeaderPhoto: null,
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // Auto-fill regional hub
//   useEffect(() => {
//     if (formData.district && districtToHubMapping[formData.district]) {
//       setFormData((prev) => ({
//         ...prev,
//         regionalHub: districtToHubMapping[formData.district],
//       }));
//     }
//   }, [formData.district]);

//   const handleInputChange = (field: keyof FormData, value: string) => {
//     let processedValue = value;

//     // Auto-formatting for specific fields
//     switch(field) {
//       case 'mobile':
//         processedValue = value.replace(/\D/g, '').slice(0, 10);
//         break;
//       case 'pincode':
//         processedValue = value.replace(/\D/g, '').slice(0, 6);
//         break;
//       case 'email':
//         processedValue = value.trim().toLowerCase();
//         break;
//       default:
//         processedValue = value;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [field]: processedValue,
//     }));
//     setErrors((prev) => ({ ...prev, [field]: "" }));
//   };

//   const handleFileChange = (field: keyof FormData, file: File | null) => {
//     if (file) {
//       // Check file type
//       const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
//       if (!validTypes.includes(file.type)) {
//         setErrors(prev => ({
//           ...prev,
//           [field]: "Only JPG, PNG, or GIF images are allowed"
//         }));
//         return;
//       }

//       // Check file size (5MB max)
//       if (file.size > 5 * 1024 * 1024) {
//         setErrors(prev => ({
//           ...prev,
//           [field]: "File size must be less than 5MB"
//         }));
//         return;
//       }
//     }

//     setFormData(prev => ({ ...prev, [field]: file }));
//     setErrors(prev => ({ ...prev, [field]: "" }));
//   };

//   const validate = () => {
//     const newErrors: Record<string, string> = {};
//     const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
//     const invalidPattern = /^[a-z]{5,}$/i; // Matches all-letter words (like "qwtuop")

//     if (!formData.fullName.trim() || formData.fullName.length < 3) {
//       newErrors.fullName = "Please enter a valid full name (min 3 characters)";
//     }

//     if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }

//     if (formData.mobile.replace(/\D/g, '').length !== 10) {
//       newErrors.mobile = "Please enter a valid 10-digit mobile number";
//     }

//     if (!formData.organizationName.trim()) {
//       newErrors.organizationName = "Organization name is required";
//     }

//     // if (!formData.designation.trim() || invalidPattern.test(formData.designation)) {
//     //   newErrors.designation = "Please enter a valid designation";
//     // }

//     if (!formData.isDpiitRegistered) {
//       newErrors.isDpiitRegistered = "This selection is required";
//     }

//     if (!formData.entityType) {
//       newErrors.entityType = "Entity type is required";
//     }

//     if (!formData.district) {
//       newErrors.district = "District is required";
//     }

//     if (!/^[1-9][0-9]{5}$/.test(formData.pincode)) {
//       newErrors.pincode = "Please enter a valid 6-digit Indian pincode";
//     }

//     if (formData.startupDescription.length < 30 || 
//         formData.startupDescription.length > 500) {
//       newErrors.startupDescription = "Description must be 30-500 characters";
//     }

//     // if (!formData.sector.trim() || invalidPattern.test(formData.sector)) {
//     //   newErrors.sector = "Please enter a valid sector";
//     // }

//     if (!urlRegex.test(formData.websiteLinks)) {
//       newErrors.websiteLinks = "Please enter a valid URL (include http:// or https://)";
//     }

//     if (!formData.cricketExperience) {
//       newErrors.cricketExperience = "This selection is required";
//     }

//     if (!formData.companyPhoto) {
//       newErrors.companyPhoto = "Company photo is required";
//     }

//     if (!formData.teamLeaderPhoto) {
//       newErrors.teamLeaderPhoto = "Team leader photo is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setIsSubmitting(true);

//     try {
//       const formDataToSend = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {

//         if (value instanceof File) {
//           formDataToSend.append(key, value);
//           console.log("The data is",formDataToSend);
//         } else if (value !== null && value !== undefined) {
//           formDataToSend.append(key, value.toString());
//           console.log("The data is",formDataToSend);
//         }
//       });

//       // const apiUrl = "http://localhost:4000/api/applications";
//       const apiUrl = "https://aakamshineapi.yugan.tech/api/applications";

//       const response = await fetch(apiUrl, {
//         method: "POST",
//         body: formDataToSend,
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Registration failed");
//       }

//       const data = await response.json();
//       console.log("Registration successful:", data);
//       setIsSubmitted(true);
//     } catch (error) {
//       console.error("Registration error:", error);
//       setErrors(prev => ({
//         ...prev,
//         form: "Submission failed. Please try again."
//       }));
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       fullName: "",
//       email: "",
//       mobile: "",
//       organizationName: "",
//       designation: "",
//       isDpiitRegistered: "",
//       entityType: "",
//       district: "",
//       regionalHub: "",
//       pincode: "",
//       startupDescription: "",
//       sector: "",
//       websiteLinks: "",
//       cricketExperience: "",
//       companyPhoto: null,
//       teamLeaderPhoto: null,
//     });
//     setErrors({});
//     setIsSubmitted(false);
//   };

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen flex items-center justify-center p-4">
//         <Card className="w-full max-w-md text-center">
//           <CardContent className="pt-6">
//             <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
//             <h2 className="text-2xl font-bold mb-2">
//               Registration Successful!
//             </h2>
//             <p className="text-muted-foreground mb-4">
//               Thank you for registering for TNGSS Cricket Central. We'll contact
//               you soon with further details.
//             </p>
//             <Button onClick={resetForm}>
//               Register Another Participant
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen py-12 px-4">
//       <div className="container max-w-4xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
//             Tournament Registration
//           </h1>
//           <p className="text-xl text-muted-foreground">
//             Join the ultimate startup cricket league experience
//           </p>
//         </div>

//         {errors.form && (
//           <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//             {errors.form}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Participant Details */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <User className="w-5 h-5 text-primary" />
//                 Participant Details
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <Label htmlFor="fullName">Full Name *</Label>
//                   <Input
//                     id="fullName"
//                     value={formData.fullName}
//                     onChange={(e) =>
//                       handleInputChange("fullName", e.target.value)
//                     }
//                     placeholder="John Doe"
//                   />
//                   {errors.fullName && (
//                     <p className="text-red-500 text-sm">{errors.fullName}</p>
//                   )}
//                 </div>
//                 <div>
//                   <Label htmlFor="email">Email *</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => handleInputChange("email", e.target.value)}
//                     placeholder="example@domain.com"
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-sm">{errors.email}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <Label htmlFor="mobile">Mobile *</Label>
//                   <Input
//                     id="mobile"
//                     value={formData.mobile}
//                     onChange={(e) =>
//                       handleInputChange("mobile", e.target.value)
//                     }
//                     placeholder="9876543210"
//                   />
//                   {errors.mobile && (
//                     <p className="text-red-500 text-sm">{errors.mobile}</p>
//                   )}
//                 </div>
//                 <div>
//                   <Label htmlFor="designation">Designation *</Label>
//                   <Input
//                     id="designation"
//                     value={formData.designation}
//                     onChange={(e) =>
//                       handleInputChange("designation", e.target.value)
//                     }
//                     placeholder="Founder & CEO"
//                   />
//                   {errors.designation && (
//                     <p className="text-red-500 text-sm">{errors.designation}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <Label htmlFor="organizationName">Organization *</Label>
//                 <Input
//                   id="organizationName"
//                   value={formData.organizationName}
//                   onChange={(e) =>
//                     handleInputChange("organizationName", e.target.value)
//                   }
//                   placeholder="My Startup Inc."
//                 />
//                 {errors.organizationName && (
//                   <p className="text-red-500 text-sm">
//                     {errors.organizationName}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <Label>Are you a DPIIT Registered Startup? *</Label>
//                 <RadioGroup
//                   value={formData.isDpiitRegistered}
//                   onValueChange={(value) =>
//                     handleInputChange("isDpiitRegistered", value)
//                   }
//                   className="flex gap-6"
//                 >
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="yes" id="dpiit-yes" />
//                     <Label htmlFor="dpiit-yes">Yes</Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="no" id="dpiit-no" />
//                     <Label htmlFor="dpiit-no">No</Label>
//                   </div>
//                 </RadioGroup>
//                 {errors.isDpiitRegistered && (
//                   <p className="text-red-500 text-sm">
//                     {errors.isDpiitRegistered}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <Label>Entity Type *</Label>
//                 <Select
//                   value={formData.entityType}
//                   onValueChange={(value) =>
//                     handleInputChange("entityType", value)
//                   }
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select entity type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {entityTypes.map((type) => (
//                       <SelectItem key={type} value={type}>
//                         {type}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 {errors.entityType && (
//                   <p className="text-red-500 text-sm">{errors.entityType}</p>
//                 )}
//               </div>
//             </CardContent>
//           </Card>

//           {/* Location */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <MapPin className="w-5 h-5 text-primary" />
//                 Location
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <Label>District *</Label>
//                   <Select
//                     value={formData.district}
//                     onValueChange={(value) =>
//                       handleInputChange("district", value)
//                     }
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select district" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {districts.map((district) => (
//                         <SelectItem key={district} value={district}>
//                           {district}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   {errors.district && (
//                     <p className="text-red-500 text-sm">{errors.district}</p>
//                   )}
//                 </div>
//                 <div>
//                   <Label>Regional Hub</Label>
//                   <Input value={formData.regionalHub} readOnly />
//                 </div>
//               </div>

//               <div>
//                 <Label>Pincode *</Label>
//                 <Input
//                   value={formData.pincode}
//                   onChange={(e) => handleInputChange("pincode", e.target.value)}
//                   placeholder="600001"
//                 />
//                 {errors.pincode && (
//                   <p className="text-red-500 text-sm">{errors.pincode}</p>
//                 )}
//               </div>
//             </CardContent>
//           </Card>

//           {/* About Startup */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Building className="w-5 h-5 text-primary" />
//                 About Startup
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div>
//                 <Label>Startup Description *</Label>
//                 <Textarea
//                   value={formData.startupDescription}
//                   onChange={(e) =>
//                     handleInputChange("startupDescription", e.target.value)
//                   }
//                   placeholder="Briefly describe your startup (30-500 characters)"
//                   rows={5}
//                 />
//                 <p className="text-sm text-muted-foreground text-right">
//                   {formData.startupDescription.length}/500 characters
//                 </p>
//                 {errors.startupDescription && (
//                   <p className="text-red-500 text-sm">
//                     {errors.startupDescription}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <Label>Sector *</Label>
//                 <Input
//                   value={formData.sector}
//                   onChange={(e) => handleInputChange("sector", e.target.value)}
//                   placeholder="E-commerce, Fintech, etc."
//                 />
//                 {errors.sector && (
//                   <p className="text-red-500 text-sm">{errors.sector}</p>
//                 )}
//               </div>

//               <div>
//                 <Label>Website/ LinkedIn Profile *</Label>
//                 <Input
//                   value={formData.websiteLinks}
//                   onChange={(e) =>
//                     handleInputChange("websiteLinks", e.target.value)
//                   }
//                   placeholder="https://example.com"
//                 />
//                 {errors.websiteLinks && (
//                   <p className="text-red-500 text-sm">{errors.websiteLinks}</p>
//                 )}
//               </div>

//               <div>
//                 <Label>Company Logo *</Label>
//                 <Input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) =>
//                     handleFileChange(
//                       "companyPhoto",
//                       e.target.files?.[0] || null
//                     )
//                   }
//                 />
//                 <p className="text-sm text-muted-foreground mt-1">
//                   JPEG, PNG, or GIF (Max 5MB)
//                 </p>
//                 {errors.companyPhoto && (
//                   <p className="text-red-500 text-sm">{errors.companyPhoto}</p>
//                 )}
//                 {formData.companyPhoto && (
//                   <p className="text-green-600 text-sm mt-1">
//                     Selected: {formData.companyPhoto.name}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <Label>Participant Photo *</Label>
//                 <Input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) =>
//                     handleFileChange(
//                       "teamLeaderPhoto",
//                       e.target.files?.[0] || null
//                     )
//                   }
//                 />
//                 <p className="text-sm text-muted-foreground mt-1">
//                   JPEG, PNG, or GIF (Max 5MB)
//                 </p>
//                 {errors.teamLeaderPhoto && (
//                   <p className="text-red-500 text-sm">
//                     {errors.teamLeaderPhoto}
//                   </p>
//                 )}
//                 {formData.teamLeaderPhoto && (
//                   <p className="text-green-600 text-sm mt-1">
//                     Selected: {formData.teamLeaderPhoto.name}
//                   </p>
//                 )}
//               </div>
//             </CardContent>
//           </Card>

//           {/* Cricket */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Trophy className="w-5 h-5 text-primary" />
//                 Cricket Participation
//               </CardTitle>
//               <CardDescription>
//                 Let us know about your cricket experience
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <RadioGroup
//                 value={formData.cricketExperience}
//                 onValueChange={(value) =>
//                   handleInputChange("cricketExperience", value)
//                 }
//                 className="space-y-4"
//               >
//                 <div className="flex items-start space-x-3 p-4 border rounded-lg">
//                   <RadioGroupItem
//                     value="yes"
//                     id="cricket-yes"
//                     className="mt-1"
//                   />
//                   <div>
//                     <Label htmlFor="cricket-yes" className="font-medium">
//                       Yes
//                     </Label>
//                     <p className="text-sm text-muted-foreground">
//                       You will be playing in the match and will be allotted to your Regional Hub team based on your district                    </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3 p-4 border rounded-lg">
//                   <RadioGroupItem value="no" id="cricket-no" className="mt-1" />
//                   <div>
//                     <Label htmlFor="cricket-no" className="font-medium">
//                       No
//                     </Label>
//                     <p className="text-sm text-muted-foreground">
//                       You can support your Regional Hub team and make valuable startup connections during the networking breaks
//                     </p>
//                   </div>
//                 </div>
//               </RadioGroup>
//               {errors.cricketExperience && (
//                 <p className="text-red-500 text-sm">{errors.cricketExperience}</p>
//               )}
//             </CardContent>
//           </Card>

//           <Separator />

//           <div className="flex justify-center pt-6">
//             <Button
//               type="submit"
//               size="lg"
//               disabled={isSubmitting}
//               className="px-12 py-3 text-lg font-semibold"
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                   Submitting...
//                 </>
//               ) : (
//                 "Complete Registration"
//               )}
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, User, MapPin, Building, Trophy } from "lucide-react";

// District to Hub mapping
const districtToHubMapping: Record<string, string> = {
  Chengalpattu: "Chennai Metro Hub",
  Chennai: "Chennai Metro Hub",
  Kancheepuram: "Chennai Metro Hub",
  Tiruvallur: "Chennai Metro Hub",
  Cuddalore: "Cuddalore Regional Hub",
  Kallakurichi: "Cuddalore Regional Hub",
  Tiruvannamalai: "Cuddalore Regional Hub",
  Villupuram: "Cuddalore Regional Hub",
  Dharmapuri: "Hosur Regional Hub",
  Krishnagiri: "Hosur Regional Hub",
  Ranipet: "Hosur Regional Hub",
  Tirupattur: "Hosur Regional Hub",
  Vellore: "Hosur Regional Hub",
  Namakkal: "Salem Regional Hub",
  Salem: "Salem Regional Hub",
  Erode: "Erode Regional Hub",
  Tiruppur: "Erode Regional Hub",
  Coimbatore: "Coimbatore Regional Hub",
  "The Nilgiris": "Coimbatore Regional Hub",
  Mayiladuthurai: "Thanjavur Regional Hub",
  Nagapattinam: "Thanjavur Regional Hub",
  Pudukkottai: "Thanjavur Regional Hub",
  Thanjavur: "Thanjavur Regional Hub",
  Thiruvarur: "Thanjavur Regional Hub",
  Ariyalur: "Tiruchirappalli Satellite Hub",
  Karur: "Tiruchirappalli Satellite Hub",
  Perambalur: "Tiruchirappalli Satellite Hub",
  Tiruchirappalli: "Tiruchirappalli Satellite Hub",
  Dindigul: "Madurai Regional Hub",
  Madurai: "Madurai Regional Hub",
  Sivagangai: "Madurai Regional Hub",
  Theni: "Madurai Regional Hub",
  Virudhunagar: "Madurai Regional Hub",
  Kanniyakumari: "Tirunelveli Regional Hub",
  Ramanathapuram: "Tirunelveli Regional Hub",
  Tenkasi: "Tirunelveli Regional Hub",
  Thoothukudi: "Tirunelveli Regional Hub",
  Tirunelveli: "Tirunelveli Regional Hub",
};

const districts = Object.keys(districtToHubMapping).sort();

const entityTypes = [
  "Proprietorship",
  "Private Limited",
  "LLP",
  "Registered Partnership",
  "Other",
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
  companyPhoto: File | null;
  teamLeaderPhoto: File | null;
}

const fieldFocusMap: Record<keyof FormData, string> = {
  fullName: "fullName",
  email: "email",
  mobile: "mobile",
  organizationName: "organizationName",
  designation: "designation",
  isDpiitRegistered: "dpiit-yes", // first radio
  entityType: "entityType-trigger", // SelectTrigger id
  district: "district-trigger", // SelectTrigger id
  regionalHub: "regionalHub", // readOnly
  pincode: "pincode",
  startupDescription: "startupDescription",
  sector: "sector",
  websiteLinks: "websiteLinks",
  cricketExperience: "cricket-yes", // first radio
  companyPhoto: "companyPhoto",
  teamLeaderPhoto: "teamLeaderPhoto",
};

const scrollToField = (key: keyof FormData) => {
  const targetId = fieldFocusMap[key];
  const el = document.getElementById(targetId) as HTMLElement | null;
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "center" });

  // Try to focus the element or a focusable child
  const focusable =
    (el.matches("input, textarea, button, [role='combobox']") ? el : el.querySelector("input, textarea, button, [role='combobox']")) as HTMLElement | null;

  setTimeout(() => {
    (focusable ?? el).focus?.();
  }, 250);
};

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    mobile: "",
    organizationName: "",
    designation: "",
    isDpiitRegistered: "",
    entityType: "",
    district: "",
    regionalHub: "",
    pincode: "",
    startupDescription: "",
    sector: "",
    websiteLinks: "",
    cricketExperience: "",
    companyPhoto: null,
    teamLeaderPhoto: null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-fill regional hub
  useEffect(() => {
    if (formData.district && districtToHubMapping[formData.district]) {
      setFormData((prev) => ({
        ...prev,
        regionalHub: districtToHubMapping[formData.district],
      }));
    }
  }, [formData.district]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    let processedValue = value;

    switch (field) {
      case "mobile":
        processedValue = value.replace(/\D/g, "").slice(0, 10);
        break;
      case "pincode":
        processedValue = value.replace(/\D/g, "").slice(0, 6);
        break;
      case "email":
        processedValue = value.trim().toLowerCase();
        break;
      default:
        processedValue = value;
    }

    setFormData((prev) => ({ ...prev, [field]: processedValue }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleFileChange = (field: keyof FormData, file: File | null) => {
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          [field]: "Only JPG, PNG, or GIF images are allowed",
        }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          [field]: "File size must be less than 5MB",
        }));
        return;
      }
    }
    setFormData((prev) => ({ ...prev, [field]: file }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    let firstKey: keyof FormData | null = null;

    const flag = (key: keyof FormData, msg: string) => {
      newErrors[key] = msg;
      if (!firstKey) firstKey = key;
    };

    if (!formData.fullName.trim() || formData.fullName.length < 3) {
      flag("fullName", "Please enter a valid full name (min 3 characters)");
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      flag("email", "Please enter a valid email address");
    }

    if (formData.mobile.replace(/\D/g, "").length !== 10) {
      flag("mobile", "Please enter a valid 10-digit mobile number");
    }

    if (!formData.organizationName.trim()) {
      flag("organizationName", "Organization name is required");
    }

    if (!formData.designation.trim()) {
      flag("designation", "Designation is required");
    }

    if (!formData.isDpiitRegistered) {
      flag("isDpiitRegistered", "This selection is required");
    }

    if (!formData.entityType) {
      flag("entityType", "Entity type is required");
    }

    if (!formData.district) {
      flag("district", "District is required");
    }

    if (!/^[1-9][0-9]{5}$/.test(formData.pincode)) {
      flag("pincode", "Please enter a valid 6-digit Indian pincode");
    }

    if (
      formData.startupDescription.length < 30 ||
      formData.startupDescription.length > 500
    ) {
      flag("startupDescription", "Description must be 30-500 characters");
    }

    if (!formData.sector.trim()) {
      flag("sector", "Sector is required");
    }

    // ✅ Required only (no http/URL validation)
    if (!formData.websiteLinks.trim()) {
      flag("websiteLinks", "Website or LinkedIn is required");
    }

    if (!formData.cricketExperience) {
      flag("cricketExperience", "This selection is required");
    }

    if (!formData.companyPhoto) {
      flag("companyPhoto", "Company photo is required");
    }

    if (!formData.teamLeaderPhoto) {
      flag("teamLeaderPhoto", "Team leader photo is required");
    }

    setErrors(newErrors);
    return { valid: Object.keys(newErrors).length === 0, firstKey };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { valid, firstKey } = validate();
    if (!valid) {
      if (firstKey) scrollToField(firstKey);
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataToSend.append(key, value);
        } else if (value !== null && value !== undefined) {
          formDataToSend.append(key, value.toString());
        }
      });

      const apiUrl = "https://aakamshineapi.yugan.tech/api/applications";
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Registration error:", error);
      setErrors((prev) => ({
        ...prev,
        form: "Submission failed. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      organizationName: "",
      designation: "",
      isDpiitRegistered: "",
      entityType: "",
      district: "",
      regionalHub: "",
      pincode: "",
      startupDescription: "",
      sector: "",
      websiteLinks: "",
      cricketExperience: "",
      companyPhoto: null,
      teamLeaderPhoto: null,
    });
    setErrors({});
    setIsSubmitted(false);
    scrollToField("fullName");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Registration Successful!</h2>
            <p className="text-muted-foreground mb-4">
              Thank you for registering for TNGSS Cricket Central. We'll contact
              you soon with further details.
            </p>
            <Button onClick={resetForm}>Register Another Participant</Button>
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

        {errors.form && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {errors.form}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {/* Participant Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Participant Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="John Doe"
                    aria-invalid={!!errors.fullName}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="example@domain.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="mobile">Mobile *</Label>
                  <Input
                    id="mobile"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
                    placeholder="9876543210"
                    aria-invalid={!!errors.mobile}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm">{errors.mobile}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="designation">Designation *</Label>
                  <Input
                    id="designation"
                    value={formData.designation}
                    onChange={(e) =>
                      handleInputChange("designation", e.target.value)
                    }
                    placeholder="Founder & CEO"
                    aria-invalid={!!errors.designation}
                  />
                  {errors.designation && (
                    <p className="text-red-500 text-sm">{errors.designation}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="organizationName">Organization *</Label>
                <Input
                  id="organizationName"
                  value={formData.organizationName}
                  onChange={(e) =>
                    handleInputChange("organizationName", e.target.value)
                  }
                  placeholder="My Startup Inc."
                  aria-invalid={!!errors.organizationName}
                />
                {errors.organizationName && (
                  <p className="text-red-500 text-sm">
                    {errors.organizationName}
                  </p>
                )}
              </div>

              <div>
                <Label>Are you a DPIIT Registered Startup? *</Label>
                <RadioGroup
                  value={formData.isDpiitRegistered}
                  onValueChange={(value) =>
                    handleInputChange("isDpiitRegistered", value)
                  }
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
                {errors.isDpiitRegistered && (
                  <p className="text-red-500 text-sm">
                    {errors.isDpiitRegistered}
                  </p>
                )}
              </div>

              <div>
                <Label>Entity Type *</Label>
                <Select
                  value={formData.entityType}
                  onValueChange={(value) => handleInputChange("entityType", value)}
                >
                  <SelectTrigger id="entityType-trigger" aria-invalid={!!errors.entityType}>
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
                {errors.entityType && (
                  <p className="text-red-500 text-sm">{errors.entityType}</p>
                )}
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
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>District *</Label>
                  <Select
                    value={formData.district}
                    onValueChange={(value) => handleInputChange("district", value)}
                  >
                    <SelectTrigger id="district-trigger" aria-invalid={!!errors.district}>
                      <SelectValue placeholder="Select district" />
                    </SelectTrigger>
                    <SelectContent>
                      {districts.map((district) => (
                        <SelectItem key={district} value={district}>
                          {district}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.district && (
                    <p className="text-red-500 text-sm">{errors.district}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="regionalHub">Regional Hub</Label>
                  <Input id="regionalHub" value={formData.regionalHub} readOnly />
                </div>
              </div>

              <div>
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => handleInputChange("pincode", e.target.value)}
                  placeholder="600001"
                  aria-invalid={!!errors.pincode}
                />
                {errors.pincode && (
                  <p className="text-red-500 text-sm">{errors.pincode}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* About Startup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                About Startup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="startupDescription">Startup Description *</Label>
                <Textarea
                  id="startupDescription"
                  value={formData.startupDescription}
                  onChange={(e) =>
                    handleInputChange("startupDescription", e.target.value)
                  }
                  placeholder="Briefly describe your startup (30-500 characters)"
                  rows={5}
                  aria-invalid={!!errors.startupDescription}
                />
                <p className="text-sm text-muted-foreground text-right">
                  {formData.startupDescription.length}/500 characters
                </p>
                {errors.startupDescription && (
                  <p className="text-red-500 text-sm">
                    {errors.startupDescription}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="sector">Sector *</Label>
                <Input
                  id="sector"
                  value={formData.sector}
                  onChange={(e) => handleInputChange("sector", e.target.value)}
                  placeholder="E-commerce, Fintech, etc."
                  aria-invalid={!!errors.sector}
                />
                {errors.sector && (
                  <p className="text-red-500 text-sm">{errors.sector}</p>
                )}
              </div>

              <div>
                <Label htmlFor="websiteLinks">Website / LinkedIn Profile *</Label>
                <Input
                  id="websiteLinks"
                  value={formData.websiteLinks}
                  onChange={(e) => handleInputChange("websiteLinks", e.target.value)}
                  placeholder="https://example.com or linkedin.com/in/username"
                  aria-invalid={!!errors.websiteLinks}
                />
                {errors.websiteLinks && (
                  <p className="text-red-500 text-sm">{errors.websiteLinks}</p>
                )}
              </div>

              <div>
                <Label htmlFor="companyPhoto">Company Logo *</Label>
                <Input
                  id="companyPhoto"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileChange("companyPhoto", e.target.files?.[0] || null)
                  }
                  aria-invalid={!!errors.companyPhoto}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  JPEG, PNG, or GIF (Max 5MB)
                </p>
                {errors.companyPhoto && (
                  <p className="text-red-500 text-sm">{errors.companyPhoto}</p>
                )}
                {formData.companyPhoto && (
                  <p className="text-green-600 text-sm mt-1">
                    Selected: {formData.companyPhoto.name}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="teamLeaderPhoto">Participant Photo *</Label>
                <Input
                  id="teamLeaderPhoto"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileChange(
                      "teamLeaderPhoto",
                      e.target.files?.[0] || null
                    )
                  }
                  aria-invalid={!!errors.teamLeaderPhoto}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  JPEG, PNG, or GIF (Max 5MB)
                </p>
                {errors.teamLeaderPhoto && (
                  <p className="text-red-500 text-sm">
                    {errors.teamLeaderPhoto}
                  </p>
                )}
                {formData.teamLeaderPhoto && (
                  <p className="text-green-600 text-sm mt-1">
                    Selected: {formData.teamLeaderPhoto.name}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Cricket */}
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
              <RadioGroup
                value={formData.cricketExperience}
                onValueChange={(value) =>
                  handleInputChange("cricketExperience", value)
                }
                className="space-y-4"
              >
                <div className="flex items-start space-x-3 p-4 border rounded-lg">
                  <RadioGroupItem value="yes" id="cricket-yes" className="mt-1" />
                  <div>
                    <Label htmlFor="cricket-yes" className="font-medium">
                      Yes
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      You will be playing in the match and will be allotted to your
                      Regional Hub team based on your district
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 border rounded-lg">
                  <RadioGroupItem value="no" id="cricket-no" className="mt-1" />
                  <div>
                    <Label htmlFor="cricket-no" className="font-medium">
                      No
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      You can support your Regional Hub team and make valuable startup
                      connections during the networking breaks
                    </p>
                  </div>
                </div>
              </RadioGroup>
              {errors.cricketExperience && (
                <p className="text-red-500 text-sm">{errors.cricketExperience}</p>
              )}
            </CardContent>
          </Card>

          <Separator />

          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="px-12 py-3 text-lg font-semibold"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                "Complete Registration"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
