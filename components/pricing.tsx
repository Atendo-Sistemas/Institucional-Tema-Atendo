import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Inciante",
    description: "Ideal para quem esta comecando e precisa das ferramentas essenciais.",
    price: "155",
    period: "/mes",
    features: [
      "CRM Atendo 1 Canal",
      "01 Cartãoo de visita digital",
      "Suporte por e-mail",
      "Até 03 usuarios",
    ],
    highlighted: false,
    cta: "Comecar agora",
  },
  {
    name: "Profissional",
    description: "Para empresas em crescimento que precisam de mais poder e automacao.",
    price: "495",
    period: "/mes",
    features: [
      "CRM Atendo 03 canais",
      "01 Cartão de visita digitai",
      "Gerenciador de faturas completo - Verificar extenção",
      "MasProspect Pro verificar extenção",
      "Suporte prioritario",
      "Ate 10 usuarios",
      "Relatorios avancados",
    ],
    highlighted: true,
    cta: "Assinar agora",
  },
  {
    name: "Empresarial",
    description: "Solucao completa para empresas que precisam de tudo integrado.",
    price: "925",
    period: "/mês",
    features: [
      "CRM Atendo 05 Canais",
      "03 Cartões digitais",
      "MasProspect Pro avancado",
      "Até 20 Usuarios",
      "Gerente de conta dedicado",
    ],
    highlighted: false,
    cta: "Falar com vendas",
  },
];

export function Pricing() {
  return (
    <section id="planos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Planos e Precos
          </p>
          <h2 className="mt-3 text-3xl font-bold font-heading text-foreground sm:text-4xl text-balance">
            Escolha o plano ideal para o seu negocio
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Planos flexiveis que acompanham o crescimento da sua empresa.
            Sem fidelidade, cancele quando quiser.
          </p>
        </div>

        {/* Plans grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition-all ${
                plan.highlighted
                  ? "border-primary bg-card shadow-lg shadow-primary/10 ring-1 ring-primary"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1">
                  <span className="text-xs font-semibold text-primary-foreground">
                    Mais popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold font-heading text-card-foreground">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                {plan.price !== "Sob consulta" && (
                  <span className="text-sm text-muted-foreground">R$</span>
                )}
                <span className="text-4xl font-bold font-heading text-card-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8"
                variant={plan.highlighted ? "default" : "outline"}
                size="lg"
                asChild
              >
                <a href="#contato">{plan.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
