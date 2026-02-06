import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, subject, message } = body;

    // Validacao basica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Campos obrigatorios nao preenchidos." },
        { status: 400 }
      );
    }

    // ================================================================
    // CONFIGURE AQUI O ENVIO DE EMAIL
    // Opcao 1: Use um servico como Resend, SendGrid, ou Nodemailer
    // Opcao 2: Integre com um webhook (Slack, Discord, etc.)
    // Opcao 3: Salve em banco de dados
    //
    // Por enquanto, os dados sao logados no servidor.
    // Para producao, adicione a integracao de email desejada.
    // ================================================================

    console.log("=== NOVO CONTATO RECEBIDO ===");
    console.log("Nome:", name);
    console.log("Empresa:", company || "Nao informada");
    console.log("Email:", email);
    console.log("Telefone:", phone || "Nao informado");
    console.log("Assunto:", subject);
    console.log("Mensagem:", message);
    console.log("Data:", new Date().toLocaleString("pt-BR"));
    console.log("=============================");

    return NextResponse.json(
      { success: true, message: "Mensagem recebida com sucesso!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
