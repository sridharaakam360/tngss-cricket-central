import SEO from "@/components/seo/SEO";
import RegistrationForm from "@/components/forms/RegistrationForm";

const Register = () => {
  return (
    <main>
      <SEO
        title="Register - TNGSS Cricket Central"
        description="Register your team for the TNGSS Startup Cricket League. Fill out the form to participate in Tamil Nadu's premier startup cricket tournament."
        canonical="/register"
      />
      <RegistrationForm />
    </main>
  );
};

export default Register;
