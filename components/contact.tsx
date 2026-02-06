"use client";

import React from "react";

import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch {
      setError("Erro de conexao. Verifique sua internet e tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contato
          </p>
          <h2 className="mt-3 text-3xl font-bold font-heading text-foreground sm:text-4xl text-balance">
            Vamos conversar sobre o seu negocio
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Preencha o formulario e nossa equipe entrara em contato em ate 24
            horas uteis.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-xl font-bold font-heading text-foreground">
              Informacoes de contato
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Entre em contato por qualquer um dos canais abaixo ou preencha o
              formulario ao lado.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">E-mail</p>
                  <a
                    href="mailto:contato@atendo.log.br"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    contato@atendo.log.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Telefone</p>
                  <p className="text-sm text-muted-foreground">(11) 9999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Endereco</p>
                  <p className="text-sm text-muted-foreground">
                    Brasil - Atendimento remoto em todo o territorio nacional
                  </p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="mt-10 rounded-xl border border-border bg-card p-6">
              <h4 className="text-sm font-bold font-heading text-card-foreground">
                Acesso rapido aos nossos sistemas
              </h4>
              <div className="mt-4 flex flex-col gap-2">
                {[
                  { label: "CRM Atendo", href: "https://web.atendo.log.br" },
                  { label: "Cartoes Digitais", href: "https://meu.atendo.log.br" },
                  { label: "Gerenciador de Faturas", href: "https://painel.atendo.log.br" },
                  { label: "MasProspect Pro", href: "https://prospec.atendo.log.br/" },
                  { label: "PedirJa", href: "https://pedirja.com.br/" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold font-heading text-card-foreground">
                    Mensagem enviada!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Obrigado pelo contato. Nossa equipe retornara em breve.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 bg-transparent"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar outra mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                        Nome completo
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="company" className="text-sm font-medium text-card-foreground">
                        Empresa
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-card-foreground">
                      Assunto
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Como podemos ajudar?"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-sm font-medium text-card-foreground">
                      Mensagem
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descreva o que voce precisa..."
                      rows={5}
                      required
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-destructive">{error}</p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="gap-2"
                    disabled={loading}
                  >
                    {loading ? "Enviando..." : "Enviar mensagem"}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
