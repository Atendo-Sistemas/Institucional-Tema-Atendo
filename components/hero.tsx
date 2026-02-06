import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const highlights = [
  "CRM completo",
  "Gestao de faturas",
  "Prospeccao inteligente",
  "Delivery integrado",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(213_80%_50%/0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(199_89%_48%/0.06),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">
                Plataforma completa de atendimento
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight font-heading text-foreground sm:text-5xl lg:text-6xl text-balance">
              Simplifique seu{" "}
              <span className="text-primary">atendimento</span> e acelere seus
              resultados
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Gerencie clientes, faturas, prospeccao e delivery em um unico
              ecossistema. Ferramentas integradas para empresas de todos os
              portes.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" className="gap-2 text-base" asChild>
                <a href="#contato">
                  Comece agora
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-base bg-transparent"
                asChild
              >
                <a href="#produtos">Conheca nossos produtos</a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/10">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="Dashboard do sistema Atendo mostrando gestao integrada de atendimento"
                  width={640}
                  height={420}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card p-8 shadow-sm lg:mt-20 lg:grid-cols-4">
          {[
            { value: "500+", label: "Empresas atendidas" },
            { value: "10k+", label: "Usuarios ativos" },
            { value: "99.9%", label: "Uptime garantido" },
            { value: "24/7", label: "Suporte disponivel" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold font-heading text-primary lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
