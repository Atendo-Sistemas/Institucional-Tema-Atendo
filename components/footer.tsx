const productLinks = [
  { label: "CRM Atendo", href: "https://web.atendo.log.br" },
  { label: "Cartoes Digitais", href: "https://meu.atendo.log.br" },
  { label: "Gerenciador de Faturas", href: "https://painel.atendo.log.br" },
  { label: "MasProspect Pro", href: "https://prospec.atendo.log.br/" },
  { label: "PedirJa", href: "https://pedirja.com.br/" },
  { label: "Pedido da Hora", href: "#contato" },
];

const siteLinks = [
  { label: "Sobre nos", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const legalLinks = [
  { label: "Termos de uso", href: "#" },
  { label: "Politica de privacidade", href: "#" },
  { label: "LGPD", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground font-heading">
                  A
                </span>
              </div>
              <span className="text-xl font-bold font-heading">Atendo</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              Sistema de Atendimento completo para empresas de todos os portes.
              CRM, faturas, prospeccao e delivery integrados em uma unica
              plataforma.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold font-heading uppercase tracking-wider opacity-50">
              Produtos
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Site links */}
          <div>
            <h4 className="text-sm font-bold font-heading uppercase tracking-wider opacity-50">
              Navegacao
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {siteLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold font-heading uppercase tracking-wider opacity-50">
              Legal
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs opacity-50">
            {`\u00A9 ${new Date().getFullYear()} Atendo Sistema de Atendimento. Todos os direitos reservados.`}
          </p>
          <a
            href="https://atendo.log.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs opacity-50 transition-opacity hover:opacity-100"
          >
            atendo.log.br
          </a>
        </div>
      </div>
    </footer>
  );
}
