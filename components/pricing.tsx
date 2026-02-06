import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    description: "Ideal para quem esta comecando e precisa das ferramentas essenciais.",
    price: "97",
    period: "/mes",
    features: [
      "CRM Atendo (ate 500 contatos)",
      "1 Cartao de visita digital",
      "Gerenciador de faturas basico",
      "Suporte por e-mail",
      "1 usuario",
    ],
    highlighted: false,
    cta: "Comecar agora",
  },
  {
    name: "Profissional",
    description: "Para empresas em crescimento que precisam de mais poder e automacao.",
    price: "197",
    period: "/mes",
    features: [
      "CRM Atendo (contatos ilimitados)",
      "5 Cartoes de visita digitais",
      "Gerenciador de faturas completo",
      "MasProspect Pro incluso",
      "Suporte prioritario",
      "Ate 5 usuarios",
      "Relatorios avancados",
    ],
    highlighted: true,
    cta: "Assinar agora",
  },
  {
    name: "Enterprise",
    description: "Solucao completa para empresas que precisam de tudo integrado.",
    price: "Sob consulta",
    period: "",
    features: [
      "Todos os produtos Atendo",
      "Cartoes digitais ilimitados",
      "MasProspect Pro avancado",
      "Integracao com delivery",
      "API personalizada",
      "Usuarios ilimitados",
      "Gerente de conta dedicado",
      "SLA garantido",
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
