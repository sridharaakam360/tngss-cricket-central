import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Search, 
  Filter, 
  Download, 
  Eye,
  Mail,
  Phone,
  Calendar,
  User
} from "lucide-react";

interface Application {
  id: string;
  name: string;
  email: string;
  phone: string;
  teamName: string;
  category: "STARTUP" | "PROFESSIONAL";
  role: "Founder" | "Co-founder" | "Team Member" | "Professional Player" | "Mentor";
  experience: string;
  submittedAt: string;
  status: "PENDING" | "APPROVED" | "REJECTED" | "UNDER_REVIEW";
  zone: string;
  district: string;
  company?: string;
  designation?: string;
  cricketExperience?: string;
}

const Applications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [roleFilter, setRoleFilter] = useState<string>("");

  // Mock applications data
  const applications: Application[] = [
    {
      id: "1",
      name: "Rahul Kumar",
      email: "rahul@startup.com",
      phone: "+91 98765 43210",
      teamName: "Alpha Startups",
      category: "STARTUP",
      role: "Founder",
      experience: "5 years",
      submittedAt: "2024-01-15T10:30:00Z",
      status: "APPROVED",
      zone: "Chennai",
      district: "Chennai",
      company: "TechCorp",
      designation: "CEO"
    },
    {
      id: "2",
      name: "Priya Sharma",
      email: "priya@tech.com",
      phone: "+91 87654 32109",
      teamName: "Beta Builders",
      category: "STARTUP",
      role: "Co-founder",
      experience: "3 years",
      submittedAt: "2024-01-14T14:20:00Z",
      status: "PENDING",
      zone: "Coimbatore",
      district: "Coimbatore",
      company: "InnovateLab",
      designation: "CTO"
    },
    {
      id: "3",
      name: "Amit Patel",
      email: "amit@pro.com",
      phone: "+91 76543 21098",
      teamName: "Pro Warriors",
      category: "PROFESSIONAL",
      role: "Professional Player",
      experience: "8 years",
      submittedAt: "2024-01-13T09:15:00Z",
      status: "APPROVED",
      zone: "Madurai",
      district: "Madurai",
      cricketExperience: "State level player"
    },
    {
      id: "4",
      name: "Sneha Reddy",
      email: "sneha@mentor.com",
      phone: "+91 65432 10987",
      teamName: "Tech Titans",
      category: "PROFESSIONAL",
      role: "Mentor",
      experience: "12 years",
      submittedAt: "2024-01-12T16:45:00Z",
      status: "UNDER_REVIEW",
      zone: "Salem",
      district: "Salem",
      company: "Cricket Academy",
      designation: "Head Coach"
    },
    {
      id: "5",
      name: "Vikram Singh",
      email: "vikram@team.com",
      phone: "+91 54321 09876",
      teamName: "Code Ninjas",
      category: "STARTUP",
      role: "Team Member",
      experience: "2 years",
      submittedAt: "2024-01-11T11:30:00Z",
      status: "REJECTED",
      zone: "Trichy",
      district: "Trichy",
      company: "DevStudio",
      designation: "Senior Developer"
    }
  ];

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const matchesSearch = 
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.phone.includes(searchTerm);

      const matchesCategory = !categoryFilter || app.category === categoryFilter;
      const matchesStatus = !statusFilter || app.status === statusFilter;
      const matchesRole = !roleFilter || app.role === roleFilter;

      return matchesSearch && matchesCategory && matchesStatus && matchesRole;
    });
  }, [applications, searchTerm, categoryFilter, statusFilter, roleFilter]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "APPROVED":
        return <Badge variant="default" className="bg-green-500">Approved</Badge>;
      case "PENDING":
        return <Badge variant="secondary">Pending</Badge>;
      case "REJECTED":
        return <Badge variant="destructive">Rejected</Badge>;
      case "UNDER_REVIEW":
        return <Badge variant="outline" className="border-yellow-500 text-yellow-500">Under Review</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getCategoryBadge = (category: string) => {
    return category === "STARTUP" ? 
      <Badge variant="default">Startup</Badge> : 
      <Badge variant="secondary">Professional</Badge>;
  };

  const exportToCSV = () => {
    const headers = [
      "ID", "Name", "Email", "Phone", "Team Name", "Category", "Role", 
      "Experience", "Submitted At", "Status", "Zone", "District", "Company", "Designation"
    ];

    const csvData = filteredApplications.map(app => [
      app.id,
      app.name,
      app.email,
      app.phone,
      app.teamName,
      app.category,
      app.role,
      app.experience,
      new Date(app.submittedAt).toLocaleDateString(),
      app.status,
      app.zone,
      app.district,
      app.company || "",
      app.designation || ""
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `applications_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Application Responses</span>
            <Button onClick={exportToCSV}>
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by name, email, team..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Category</Label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All categories</SelectItem>
                  <SelectItem value="STARTUP">Startup</SelectItem>
                  <SelectItem value="PROFESSIONAL">Professional</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All statuses</SelectItem>
                  <SelectItem value="PENDING">Pending</SelectItem>
                  <SelectItem value="APPROVED">Approved</SelectItem>
                  <SelectItem value="REJECTED">Rejected</SelectItem>
                  <SelectItem value="UNDER_REVIEW">Under Review</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Role</Label>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All roles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All roles</SelectItem>
                  <SelectItem value="Founder">Founder</SelectItem>
                  <SelectItem value="Co-founder">Co-founder</SelectItem>
                  <SelectItem value="Team Member">Team Member</SelectItem>
                  <SelectItem value="Professional Player">Professional Player</SelectItem>
                  <SelectItem value="Mentor">Mentor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Applications Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Applications ({filteredApplications.length} of {applications.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-mono">{app.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{app.name}</div>
                        <div className="text-sm text-muted-foreground">{app.zone}, {app.district}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-3 h-3" />
                          {app.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-3 h-3" />
                          {app.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{app.teamName}</div>
                    </TableCell>
                    <TableCell>
                      {getCategoryBadge(app.category)}
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{app.role}</div>
                        {app.company && (
                          <div className="text-sm text-muted-foreground">{app.company}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{app.experience}</div>
                        {app.cricketExperience && (
                          <div className="text-sm text-muted-foreground">{app.cricketExperience}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-3 h-3" />
                        {new Date(app.submittedAt).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(app.status)}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="w-3 h-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredApplications.length === 0 && (
            <div className="text-center py-8">
              <div className="text-muted-foreground">
                No applications found matching your criteria.
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{applications.length}</div>
            <div className="text-sm text-muted-foreground">Total Applications</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {applications.filter(app => app.status === "APPROVED").length}
            </div>
            <div className="text-sm text-muted-foreground">Approved</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">
              {applications.filter(app => app.status === "PENDING").length}
            </div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">
              {applications.filter(app => app.status === "REJECTED").length}
            </div>
            <div className="text-sm text-muted-foreground">Rejected</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Applications;
