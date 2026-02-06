"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quais formas de pagamento sao aceitas?",
    answer:
      "Aceitamos cartao de credito, boleto bancario e PIX. Para planos Enterprise, tambem oferecemos faturamento mensal com nota fiscal.",
  },
  {
    question: "Posso testar antes de assinar?",
    answer:
      "Sim! Oferecemos um periodo de teste gratuito de 14 dias em todos os planos. Nao e necessario cadastrar cartao de credito para comecar.",
  },
  {
    question: "Como funciona o suporte tecnico?",
    answer:
      "Nosso suporte funciona por e-mail para o plano Starter, com suporte prioritario por chat e telefone para os planos Profissional e Enterprise. O plano Enterprise conta com gerente de conta dedicado.",
  },
  {
    question: "Posso migrar de plano a qualquer momento?",
    answer:
      "Sim, voce pode fazer upgrade ou downgrade do seu plano a qualquer momento. A cobranca sera ajustada proporcionalmente ao periodo restante.",
  },
  {
    question: "Os dados da minha empresa estao seguros?",
    answer:
      "Absolutamente. Utilizamos criptografia de ponta a ponta, servidores seguros com backup automatico diario e seguimos as melhores praticas de seguranca da informacao conforme a LGPD.",
  },
  {
    question: "Como funciona a integracao entre os produtos?",
    answer:
      "Todos os produtos Atendo sao nativamente integrados. Os dados do CRM se conectam automaticamente com o gerenciador de faturas, o MasProspect Pro alimenta o pipeline do CRM, e os sistemas de delivery podem ser gerenciados de forma centralizada.",
  },
  {
    question: "Existe contrato de fidelidade?",
    answer:
      "Nao. Todos os nossos planos sao sem fidelidade. Voce pode cancelar a qualquer momento sem multas ou taxas adicionais.",
  },
  {
    question: "Oferecem treinamento para minha equipe?",
    answer:
      "Sim! Todos os planos incluem acesso a nossa base de conhecimento e tutoriais em video. Os planos Profissional e Enterprise incluem sessoes de onboarding ao vivo e treinamentos personalizados.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Perguntas Frequentes
          </p>
          <h2 className="mt-3 text-3xl font-bold font-heading text-foreground sm:text-4xl text-balance">
            Tire suas duvidas
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Reunimos as perguntas mais comuns dos nossos clientes. Nao encontrou
            sua resposta? Entre em contato conosco.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
