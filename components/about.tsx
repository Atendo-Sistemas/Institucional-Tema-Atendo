import { Target, Lightbulb, Handshake, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Foco no cliente",
    description:
      "Cada ferramenta e desenhada pensando na experiencia e necessidade real do nosso cliente.",
  },
  {
    icon: Lightbulb,
    title: "Inovacao constante",
    description:
      "Investimos continuamente em tecnologia para entregar as melhores solucoes do mercado.",
  },
  {
    icon: Handshake,
    title: "Parceria verdadeira",
    description:
      "Mais do que um fornecedor, somos parceiros no crescimento do seu negocio.",
  },
  {
    icon: Shield,
    title: "Seguranca e confianca",
    description:
      "Seus dados protegidos com as melhores praticas de seguranca da informacao.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Content */}
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Sobre a Atendo
            </p>
            <h2 className="mt-3 text-3xl font-bold font-heading text-foreground sm:text-4xl text-balance">
              Transformando a forma como empresas se conectam com seus clientes
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A Atendo nasceu com a missao de simplificar a gestao empresarial
              atraves de tecnologia acessivel e eficiente. Oferecemos um
              ecossistema integrado de solucoes que abrange desde o primeiro
              contato com o cliente ate a entrega final do produto ou servico.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Com ferramentas que vao do CRM ate sistemas de delivery, atendemos
              empresas de todos os portes, desde o microempreendedor individual
              ate grandes corporacoes, sempre com a mesma qualidade e
              compromisso.
            </p>
          </div>

          {/* Values grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold font-heading text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
