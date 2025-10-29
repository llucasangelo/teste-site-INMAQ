import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Form submitted:", formData);
  };

  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de saber mais sobre as máquinas INMAQ.";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <nav className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/inmaq-logo.png" alt="INMAQ Logo" className="h-12 w-auto" />
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="hover:text-accent transition-colors font-medium">
                Início
              </a>
              <a href="#sobre" className="hover:text-accent transition-colors font-medium">
                Sobre
              </a>
              <a href="#produtos" className="hover:text-accent transition-colors font-medium">
                Produtos
              </a>
              <a href="#contato" className="hover:text-accent transition-colors font-medium">
                Contato
              </a>
            </div>
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Fale Conosco
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Inovação em Máquinas e Automação
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90">
                Desenvolvemos máquinas acessíveis e de alta qualidade para pequenos negócios crescerem e automatizarem seus processos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Conheça Nossos Produtos
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Entre em Contato
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/inmaq-logo.png" 
                alt="INMAQ - Inovação em Máquinas" 
                className="w-full max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Sobre a INMAQ
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              A INMAQ nasceu com a missão de democratizar o acesso à tecnologia industrial para pequenos e médios negócios. 
              Acreditamos que toda empresa, independentemente do seu tamanho, merece ter acesso a equipamentos de qualidade 
              que otimizem seus processos e aumentem sua produtividade.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Nossa equipe é formada por profissionais experientes em engenharia mecânica, automação e desenvolvimento de produtos. 
              Trabalhamos com dedicação para criar soluções que sejam não apenas eficientes, mas também acessíveis e fáceis de operar.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="text-4xl font-bold text-accent">100%</div>
                  <div className="text-lg font-semibold text-primary">Qualidade</div>
                  <p className="text-sm text-muted-foreground">Produtos testados e aprovados</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="text-4xl font-bold text-accent">24/7</div>
                  <div className="text-lg font-semibold text-primary">Suporte</div>
                  <p className="text-sm text-muted-foreground">Atendimento sempre disponível</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="text-4xl font-bold text-accent">+5</div>
                  <div className="text-lg font-semibold text-primary">Anos</div>
                  <p className="text-sm text-muted-foreground">De experiência no mercado</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Nossos Produtos
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Conheça nossas soluções desenvolvidas especialmente para pequenos negócios
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary to-secondary p-8 flex items-center justify-center">
                  <div className="text-center text-primary-foreground space-y-4">
                    <div className="text-6xl font-bold">EF-100</div>
                    <div className="text-2xl font-semibold">Envasadora de Frascos</div>
                  </div>
                </div>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-primary">Envasadora de Frascos</h3>
                  <p className="text-foreground/80">
                    Nossa envasadora de frascos é a solução perfeita para pequenas empresas que buscam 
                    automatizar seu processo de envase com precisão e eficiência.
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Alta precisão no envase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Fácil operação e manutenção</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Ajustável para diferentes tamanhos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Construção robusta e durável</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Preço acessível</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-4"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Gostaria de saber mais sobre a Envasadora de Frascos EF-100')}`, '_blank')}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </div>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-lg text-foreground/70">
                Em breve, novos produtos! Fique atento às nossas novidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Entre em Contato
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Estamos prontos para atender você e encontrar a melhor solução para o seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Telefone</h3>
                      <p className="text-foreground/70">(11) 99999-9999</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">E-mail</h3>
                      <p className="text-foreground/70">contato@inmaq.com.br</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Endereço</h3>
                      <p className="text-foreground/70">
                        São Paulo, SP<br />
                        Brasil
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Nome
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Como podemos ajudar você?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/inmaq-logo.png" alt="INMAQ Logo" className="h-12 w-auto mb-4" />
              <p className="text-primary-foreground/80">
                Inovação em Máquinas e Automação para pequenos negócios
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contato</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>(11) 99999-9999</li>
                <li>contato@inmaq.com.br</li>
                <li>São Paulo, SP - Brasil</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
            <p>&copy; {new Date().getFullYear()} INMAQ - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute right-full mr-3 bg-[#25D366] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Fale conosco!
        </span>
      </a>
    </div>
  );
}

