import {
  Users,
  CreditCard,
  Search,
  Truck,
  ExternalLink,
  Contact,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Users,
    title: "CRM Atendo",
    description:
      "Gerencie seus clientes, leads e oportunidades com um CRM completo e intuitivo. Automatize processos e acompanhe todo o funil de vendas em tempo real.",
    features: [
      "Gestao de contatos",
      "Pipeline de vendas",
      "Automacao de tarefas",
      "Relatorios detalhados",
    ],
    href: "https://web.atendo.log.br",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Contact,
    title: "Cartoes Digitais",
    description:
      "Crie e compartilhe cartoes de visita digitais profissionais. Impacte seus contatos com uma apresentacao moderna e interativa da sua marca.",
    features: [
      "Design personalizado",
      "QR Code integrado",
      "Links para redes sociais",
      "Compartilhamento instantaneo",
    ],
    href: "https://meu.atendo.log.br",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: CreditCard,
    title: "Gerenciador de Faturas",
    description:
      "Controle completo de faturas e financeiro. Emita, acompanhe e gerencie todas as suas faturas de forma centralizada e eficiente.",
    features: [
      "Emissao de faturas",
      "Controle de pagamentos",
      "Lembretes automaticos",
      "Dashboard financeiro",
    ],
    href: "https://painel.atendo.log.br",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Search,
    title: "MasProspect Pro",
    description:
      "Sistema de prospeccao inteligente que encontra e qualifica leads automaticamente. Amplie sua base de clientes com inteligencia e eficiencia.",
    features: [
      "Prospeccao automatizada",
      "Qualificacao de leads",
      "Integracao com CRM",
      "Segmentacao avancada",
    ],
    href: "https://prospec.atendo.log.br/",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Truck,
    title: "Delivery e Automacao",
    description:
      "Sistema completo para delivery, pedidos online e automacao de atendimento. Gerencie pedidos, cardapio digital, pagamentos e entregas em uma unica plataforma para restaurantes, lanchonetes, mercados e muito mais.",
    features: [
      "Pedidos online e via WhatsApp",
      "Cardapio digital personalizado",
      "Automacao de atendimento",
      "Relatorios de vendas e desempenho",
      "Impressao automatica na cozinha",
      "Geolocalizacao de entregas",
    ],
    href: "#contato",
    color: "bg-primary/10 text-primary",
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nossos Produtos
          </p>
          <h2 className="mt-3 text-3xl font-bold font-heading text-foreground sm:text-4xl text-balance">
            Tudo que sua empresa precisa em um so lugar
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Um ecossistema completo de ferramentas para gerenciar atendimento,
            vendas, financeiro e automacao do seu negocio.
          </p>
        </div>

        {/* Products grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${product.color}`}
              >
                <product.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold font-heading text-card-foreground">
                {product.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <ul className="mt-5 flex flex-col gap-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="mt-6 gap-2 group-hover:border-primary group-hover:text-primary bg-transparent"
                asChild
              >
                <a
                  href={product.href}
                  target={product.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    product.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  Acessar
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
