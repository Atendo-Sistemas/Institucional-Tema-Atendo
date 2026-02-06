import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, TechFlow Solutions",
    content:
      "O CRM Atendo transformou completamente a forma como gerenciamos nossos clientes. A integracao com o gerenciador de faturas economiza horas do nosso time financeiro toda semana.",
    rating: 5,
  },
  {
    name: "Ana Paula Ribeiro",
    role: "Diretora Comercial, StartUp Hub",
    content:
      "O MasProspect Pro e incrivel. Conseguimos triplicar nossa base de leads qualificados em apenas dois meses. A ferramenta de prospeccao inteligente realmente faz a diferenca.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Proprietario, Restaurante Sabor & Arte",
    content:
      "Desde que adotamos o PedirJa, nossas vendas por delivery cresceram 40%. A plataforma e facil de usar e nossos clientes adoram a experiencia de pedido.",
    rating: 5,
  },
  {
    name: "Fernanda Costa",
    role: "Gerente de Marketing, Nova Digital",
    content:
      "Os cartoes de visita digitais sao um diferencial enorme nas reunioes. Profissional, moderno e pratico. Todos ficam impressionados quando compartilho o meu.",
    rating: 5,
  },
  {
    name: "Marcos Oliveira",
    role: "CFO, Grupo Alianca",
    content:
      "O gerenciador de faturas trouxe controle total para nossa operacao financeira. A automatizacao de lembretes reduziu nossa inadimplencia em 60%.",
    rating: 5,
  },
  {
    name: "Juliana Santos",
    role: "Empreendedora, JS Consultoria",
    content:
      "Como empreendedora solo, o plano Starter me deu tudo que eu precisava. O CRM e intuitivo e os cartoes digitais me ajudaram muito no networking.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Depoimentos
          </p>
          <h2 className="mt-3 text-3xl font-bold font-heading text-foreground sm:text-4xl text-balance">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Empresas de todos os portes confiam na Atendo para transformar seu
            atendimento e impulsionar resultados.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <Quote className="h-8 w-8 text-primary/20" />

              <div className="mt-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={`star-${testimonial.name}-${i}`}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.content}"`}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-bold text-primary">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
