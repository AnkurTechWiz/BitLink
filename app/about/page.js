export default function About() {
  return (
    <main className="bg-purple-100 min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">About BitLinks</h1>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <p className="text-lg mb-6">
            BitLinks is a simple and privacy-focused URL shortener that allows you to create short, memorable links for your long URLs.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            We believe in simplicity and privacy. Unlike other URL shorteners that track your clicks or require personal information,
            BitLinks focuses on providing a clean, fast, and secure service without compromising your data.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Instant URL shortening</li>
            <li>No registration required</li>
            <li>No tracking or analytics</li>
            <li>Custom short URLs</li>
            <li>Fast redirects</li>
          </ul>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">How It Works</h2>
          <p className="mb-6">
            Simply enter your long URL and optionally choose a custom short code. BitLinks will generate a short link that redirects to your original URL.
            Share the short link anywhere - it's that easy!
          </p>
        </div>
      </div>
    </main>
  );
}