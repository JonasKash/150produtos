import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Check, 
  ChevronRight, 
  Download, 
  DollarSign, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Package,
  ArrowRight,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

// Import the generated image
import productBundleImage from "@assets/generated_images/3d_digital_product_bundle_box_with_emerald_accents.png";

export default function SalesPage() {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // Smooth scroll to pricing
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary-foreground overflow-x-hidden">
      {/* Announcement Bar */}
      <div className="bg-foreground text-background py-2 px-4 text-center text-xs font-medium tracking-wide uppercase">
        ⚠️ Oferta por tempo limitado: Pack com 90% de Desconto
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 space-y-8 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
                  🔥 Torne-se Produtor Hoje
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight text-foreground">
                  150 Produtos <span className="text-primary">Validados</span> + 100% de Comissão Para Você
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Pare de ganhar migalhas como afiliado. Tenha seu próprio império digital com produtos prontos para vender e fique com todo o lucro no seu bolso.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-1"
                  onClick={scrollToPricing}
                >
                  Quero Ser Produtor Agora
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground px-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-background flex items-center justify-center text-[10px] font-bold overflow-hidden">
                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <span className="font-medium">+1.200 produtores ativos</span>
                </div>
              </motion.div>
              
              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="flex gap-6 text-sm font-medium text-muted-foreground"
              >
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-primary" /> Acesso Imediato
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-primary" /> Vitalício
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-primary" /> Compra Segura
                </span>
              </motion.div>
            </div>

            <div className="flex-1 relative w-full max-w-md md:max-w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
              >
                <img 
                  src={productBundleImage} 
                  alt="Pack de Produtos Digitais" 
                  className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation Section */}
      <section className="py-20 bg-secondary/50 border-y border-border/50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Cansado de enriquecer os outros?
            </h2>
            <p className="text-lg text-muted-foreground">
              A dura verdade sobre o mercado de afiliados que ninguém te conta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="h-8 w-8 text-red-500" />,
                title: "Comissões Baixas",
                desc: "Você faz todo o trabalho duro de vender, mas fica com apenas 30% a 50% do valor. O dono do produto fica rico com seu esforço."
              },
              {
                icon: <Clock className="h-8 w-8 text-orange-500" />,
                title: "Meses de Criação",
                desc: "Criar um produto do zero leva tempo. Gravar aulas, escrever e-books, configurar área de membros... meses sem faturar nada."
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-gray-500" />,
                title: "Concorrência Desleal",
                desc: "Como afiliado, você compete com milhares de outras pessoas vendendo a mesma coisa, com a mesma oferta e mesmos criativos."
              }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg bg-background">
                <CardContent className="pt-8 p-8">
                  <div className="mb-6 p-3 bg-background rounded-xl w-fit shadow-sm border border-border/50">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                A Solução Definitiva
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
                Você não precisa criar nada. <br/>
                <span className="text-primary">Já está tudo pronto.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Imagine pular toda a fase chata de criação e ir direto para a parte que coloca dinheiro no bolso: as vendas. Com nosso pack, você se torna dono de 150 produtos instantaneamente.
              </p>
              
              <div className="space-y-4">
                {[
                  "100% de comissão em todas as vendas",
                  "Produtos validados em nichos lucrativos",
                  "Sem necessidade de aparecer",
                  "Comece a vender hoje mesmo"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" variant="outline" className="h-12 border-primary text-primary hover:bg-primary/5" onClick={scrollToPricing}>
                Ver Lista de Produtos
              </Button>
            </div>
            
            <div className="flex-1 relative">
               {/* Abstract visual representation of many files/products */}
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 mt-8">
                     <div className="bg-secondary p-6 rounded-2xl shadow-sm border border-border/50 animate-pulse-slow">
                        <div className="h-8 w-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                           <Download className="h-4 w-4" />
                        </div>
                        <div className="h-2 w-24 bg-gray-200 rounded mb-2"></div>
                        <div className="h-2 w-16 bg-gray-200 rounded"></div>
                     </div>
                     <div className="bg-secondary p-6 rounded-2xl shadow-sm border border-border/50">
                        <div className="h-8 w-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                           <Package className="h-4 w-4" />
                        </div>
                        <div className="h-2 w-24 bg-gray-200 rounded mb-2"></div>
                        <div className="h-2 w-16 bg-gray-200 rounded"></div>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="bg-white p-6 rounded-2xl shadow-xl border border-primary/20 z-10 relative">
                        <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                           Mais Vendido
                        </div>
                        <div className="h-8 w-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                           <DollarSign className="h-4 w-4" />
                        </div>
                        <h4 className="font-bold text-lg mb-1">PLR Premium</h4>
                        <p className="text-xs text-muted-foreground mb-4">Nicho de Saúde & Bem-estar</p>
                        <div className="w-full h-1.5 bg-emerald-100 rounded-full overflow-hidden">
                           <div className="w-[80%] h-full bg-emerald-500 rounded-full"></div>
                        </div>
                     </div>
                     <div className="bg-secondary p-6 rounded-2xl shadow-sm border border-border/50">
                        <div className="h-8 w-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                           <Star className="h-4 w-4" />
                        </div>
                        <div className="h-2 w-24 bg-gray-200 rounded mb-2"></div>
                        <div className="h-2 w-16 bg-gray-200 rounded"></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-foreground text-background relative overflow-hidden">
         {/* Pattern background */}
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         
         <div className="container px-4 mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                  3 Passos Simples Para Lucrar
               </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
               {[
                  {
                     step: "01",
                     title: "Baixe o Material",
                     desc: "Acesse a área de membros e faça o download dos 150 produtos, capas e materiais de divulgação."
                  },
                  {
                     step: "02",
                     title: "Configure a Venda",
                     desc: "Cadastre o produto em qualquer plataforma (Kiwify, Hotmart, Eduzz) e defina o SEU preço."
                  },
                  {
                     step: "03",
                     title: "Receba 100%",
                     desc: "Divulgue seu link e receba o valor integral de cada venda direto na sua conta bancária."
                  }
               ].map((item, i) => (
                  <div key={i} className="relative">
                     <div className="text-6xl font-black text-white/10 absolute -top-8 -left-4 font-display select-none">
                        {item.step}
                     </div>
                     <h3 className="text-xl font-bold mb-4 relative z-10 text-primary">{item.title}</h3>
                     <p className="text-gray-400 relative z-10 leading-relaxed">
                        {item.desc}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display">Bônus Exclusivos</h2>
            <p className="text-muted-foreground mt-2">Para garantir que você tenha resultados rápidos</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Templates de Vendas", value: "R$ 97" },
              { title: "Copy para Anúncios", value: "R$ 147" },
              { title: "Estratégias de Tráfego", value: "R$ 197" },
              { title: "Grupo de Networking", value: "Inestimável" },
            ].map((bonus, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border border-border shadow-sm text-center">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Bônus #{i+1}</div>
                <h3 className="font-bold text-lg mb-2">{bonus.title}</h3>
                <p className="text-sm text-muted-foreground">Valor separado: <span className="line-through decoration-red-500/50">{bonus.value}</span></p>
                <p className="text-sm font-bold text-green-600 mt-1">GRÁTIS hoje</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto">
             <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-emerald-400 to-primary rounded-2xl blur opacity-75"></div>
                
                <Card className="relative border-none shadow-2xl bg-background overflow-hidden">
                   <div className="bg-foreground text-background text-center py-3 text-sm font-bold uppercase tracking-wider">
                      Oferta Especial Limitada
                   </div>
                   <CardContent className="p-8 md:p-12 text-center space-y-8">
                      <div>
                         <p className="text-muted-foreground text-lg mb-2 line-through">De R$ 497,00 por apenas</p>
                         <div className="flex items-center justify-center gap-1 text-foreground">
                            <span className="text-2xl font-bold relative -top-6">R$</span>
                            <span className="text-7xl md:text-8xl font-black tracking-tighter font-display">27</span>
                            <span className="text-xl font-bold relative -bottom-6">,90</span>
                         </div>
                         <p className="text-sm text-emerald-600 font-bold mt-4 bg-emerald-50 inline-block px-3 py-1 rounded-full border border-emerald-100">
                            Menos de R$ 0,18 por produto
                         </p>
                      </div>

                      <ul className="space-y-4 text-left max-w-xs mx-auto">
                         {[
                            "Acesso Imediato a 150 Produtos",
                            "Licença PLR (Direito de Revenda)",
                            "4 Bônus Exclusivos",
                            "Acesso Vitalício",
                            "Garantia de 7 Dias"
                         ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                               <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                  <Check className="h-3 w-3" />
                               </div>
                               <span className="text-foreground/80">{item}</span>
                            </li>
                         ))}
                      </ul>

                      <Button 
                        size="lg" 
                        className="w-full h-16 text-xl font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 animate-pulse-slow"
                      >
                        COMPRAR AGORA
                      </Button>

                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                         <ShieldCheck className="h-4 w-4" />
                         <span>Pagamento 100% Seguro</span>
                      </div>
                   </CardContent>
                </Card>
             </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="pb-24 pt-8">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto bg-secondary/50 rounded-2xl p-8 md:p-12 border border-border flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
               <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-primary/10">
                  <ShieldCheck className="h-12 w-12 md:h-16 md:w-16 text-primary" />
               </div>
            </div>
            <div className="text-center md:text-left space-y-4">
               <h3 className="text-2xl font-bold font-display">Garantia Incondicional de 7 Dias</h3>
               <p className="text-muted-foreground">
                  O risco é todo nosso. Se você acessar o material e achar que não vale pelo menos 10x o que você investiu, nós devolvemos 100% do seu dinheiro. Sem perguntas, sem letras miúdas.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container px-4 mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold font-display text-center mb-12">Perguntas Frequentes</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "Preciso ter experiência para começar?",
                a: "Não! O pack foi pensado justamente para quem está começando. Você recebe os produtos prontos, só precisa copiar e colar."
              },
              {
                q: "Como recebo o acesso?",
                a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para acessar nossa área de membros exclusiva e baixar todo o material."
              },
              {
                q: "Posso vender pelo preço que eu quiser?",
                a: "Sim! Você tem total liberdade para definir o preço dos produtos. A estratégia e o lucro são 100% seus."
              },
              {
                q: "Os produtos são em português?",
                a: "Sim, todos os 150 produtos são em português e prontos para o mercado brasileiro."
              },
              {
                q: "Tenho suporte se tiver dúvidas?",
                a: "Com certeza. Temos uma equipe de suporte dedicada para te ajudar em qualquer dificuldade que você tenha no processo."
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium text-lg">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Ainda com dúvidas? Não perca essa oportunidade.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold px-8" onClick={scrollToPricing}>
               GARANTIR MEU ACESSO AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background/60 text-sm text-center">
         <div className="container px-4 mx-auto">
            <p className="mb-4">&copy; 2024 Pack Produtor Digital. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-6">
               <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
               <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            </div>
         </div>
      </footer>
    </div>
  );
}
