import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, Users, ArrowRight, CheckCircle, Star, Cpu, Bot, MessageSquare, CircuitBoard, Network, Play, Sparkles, Rocket, Target, Award } from 'lucide-react';

const Index: React.FC = () => {
  useEffect(() => {
    const handleClick = (e: Event) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const targetId = anchor.getAttribute('href')?.substring(1);
      if (!targetId) return;

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    };

    // Store references to cleanup properly
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Blobs */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/20 filter blur-[80px] animate-pulse-soft" />
        <div className="absolute top-[60%] -right-[5%] w-[30%] h-[40%] rounded-full bg-blue-400/20 filter blur-[100px] animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[10%] left-[20%] w-[25%] h-[30%] rounded-full bg-purple-400/20 filter blur-[60px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNDE0MTQiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydi0yaC0ydjJ6bTItNHYtMmgtMnYyaDJ6bS0yIDRoMnYtMmgtMnYyem0tNCAwdi0yaC0ydjJoMnptMC0xNnYxMGgyVjIyaC0yem0wIDE0di0yaC0ydjJoMnptLTQtMTJ2LTJoMnYyaC0yem0wIDR2Mmg0di0yaC00em0wIDZ2Mmg0di0yaC00em0wLTEwaDJ2MmgtMnYtMnptMCA4aDF2MmgtNHYtMmgzem0tNCA0aDJ2MmgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 animate-grid-fade" />
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold text-foreground">VOW II AI Studio</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Pricing
              </a>
              <Link to="/auth" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sign In
              </Link>
              <Link to="/auth" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-slide-down">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Content Creation
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Create Amazing Content with{' '}
              <span className="text-gradient">VOW II AI Studio</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Supercharge your content creation with cutting-edge AI tools. Generate ideas, 
              write scripts, create thumbnails, and produce videos faster than ever before.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/auth" 
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center group"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border border-border text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent transition-colors flex items-center justify-center group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
            
            {/* Visual Element */}
            <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden animate-scale">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 border border-white/20 backdrop-blur-sm rounded-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex justify-center space-x-4 mb-4">
                      <Brain className="h-8 w-8 text-primary animate-float" style={{ animationDelay: '0s' }} />
                      <Cpu className="h-8 w-8 text-purple-600 animate-float" style={{ animationDelay: '0.2s' }} />
                      <Bot className="h-8 w-8 text-indigo-600 animate-float" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <p className="text-muted-foreground font-medium">AI-Powered Dashboard Preview</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose VOW II AI Studio?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful AI tools designed to supercharge your content creation workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-colors">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced AI</h3>
              <p className="text-muted-foreground">
                State-of-the-art AI models trained on millions of high-quality content pieces
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-colors">
              <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Generate professional content in seconds, not hours
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-colors">
              <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your content and data are protected with enterprise-grade security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-muted-foreground">
                Create your account and get instant access to our AI tools
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Tool</h3>
              <p className="text-muted-foreground">
                Select from our range of AI-powered content generation tools
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Generate & Publish</h3>
              <p className="text-muted-foreground">
                Create amazing content and publish it to your platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for your content creation needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-muted-foreground mb-6">Perfect for getting started</p>
              <div className="text-3xl font-bold mb-6">
                $0<span className="text-lg text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>1,000 tokens per month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Basic content generation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Community support</span>
                </li>
              </ul>
              <Link 
                to="/auth" 
                className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-accent/80 transition-colors block text-center"
              >
                Get Started Free
              </Link>
            </div>
            
            <div className="bg-primary text-primary-foreground border border-primary rounded-lg p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-primary-foreground/80 mb-6">For content creators and marketers</p>
              <div className="text-3xl font-bold mb-6">
                $29<span className="text-lg text-primary-foreground/80">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-foreground/80 mr-2" />
                  <span>50,000 tokens per month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-foreground/80 mr-2" />
                  <span>Advanced AI models</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-foreground/80 mr-2" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary-foreground/80 mr-2" />
                  <span>Export to multiple formats</span>
                </li>
              </ul>
              <Link 
                to="/auth" 
                className="w-full bg-primary-foreground text-primary py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors block text-center"
              >
                Start Pro Trial
              </Link>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-6">For teams and organizations</p>
              <div className="text-3xl font-bold mb-6">
                $99<span className="text-lg text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Unlimited tokens</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Custom AI training</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Dedicated support</span>
                </li>
              </ul>
              <Link 
                to="/auth" 
                className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-accent/80 transition-colors block text-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by Content Creators
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our users are saying about VOW II AI Studio
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "VOW II AI Studio has completely transformed my content creation process. 
                I can now generate high-quality articles in minutes instead of hours!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3">
                  S
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Content Marketing Manager</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "The AI tools are incredibly intuitive and the quality of generated content 
                is outstanding. Highly recommended for any content creator!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  M
                </div>
                <div>
                  <p className="font-semibold">Mike Chen</p>
                  <p className="text-sm text-muted-foreground">Digital Marketing Specialist</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "As a startup founder, time is everything. VOW II AI Studio helps me 
                create professional content quickly without sacrificing quality."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  E
                </div>
                <div>
                  <p className="font-semibold">Emma Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Startup Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join thousands of content creators who are already using VOW II AI Studio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/auth" 
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Creating Now
            </Link>
            <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-primary mr-2" />
                <span className="text-xl font-bold">VOW II AI Studio</span>
              </div>
              <p className="text-muted-foreground">
                Empowering content creators with advanced AI tools for better, faster content creation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 VOW II AI Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;