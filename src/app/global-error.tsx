"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home, Bug } from "lucide-react";
import { Analytics } from "@/utils/analytics";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Componente de erro global para capturar e tratar erros não tratados na aplicação
 * Implementa logging, analytics e UX otimizada para e-commerce
 */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log do erro para monitoramento (Sentry, DataDog, etc.)
    console.error("Global Error:", {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      timestamp: new Date().toISOString(),
      userAgent:
        typeof window !== "undefined" ? window.navigator.userAgent : "unknown",
      url: typeof window !== "undefined" ? window.location.href : "unknown",
    });

    // Analytics para tracking de erros críticos - SEM ANY
    Analytics.trackError(error);

    // Enviar para serviço de monitoramento
    // Exemplo: Sentry.captureException(error)
  }, [error]);

  const handleReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  const handleGoHome = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  const isNetworkError =
    error.message.includes("fetch") || error.message.includes("network");
  const isChunkError =
    error.message.includes("chunk") || error.message.includes("Loading");

  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden">
          {/* Header com ícone */}
          <div className="bg-red-500 px-6 py-4 text-center">
            <AlertTriangle className="w-12 h-12 text-white mx-auto mb-2" />
            <h1 className="text-xl font-bold text-white">
              Ops! Algo deu errado
            </h1>
          </div>

          {/* Conteúdo */}
          <div className="p-6 space-y-4">
            {/* Mensagem específica baseada no tipo de erro */}
            <div className="text-center space-y-2">
              {isNetworkError ? (
                <>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Problema de Conexão
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Parece que há um problema com sua conexão. Verifique sua
                    internet e tente novamente.
                  </p>
                </>
              ) : isChunkError ? (
                <>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Atualização Necessária
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Uma nova versão está disponível. Recarregue a página para
                    continuar.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Erro Inesperado
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Encontramos um problema técnico. Nossa equipe foi notificada
                    e está trabalhando na solução.
                  </p>
                </>
              )}
            </div>

            {/* Detalhes do erro (apenas em desenvolvimento) */}
            {process.env.NODE_ENV === "development" && (
              <details className="bg-gray-50 rounded-lg p-4 border">
                <summary className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
                  <Bug className="w-4 h-4" />
                  Detalhes do Erro
                </summary>
                <div className="mt-2 space-y-2">
                  <div className="text-xs">
                    <strong>Mensagem:</strong>
                    <p className="text-red-600 font-mono break-all">
                      {error.message}
                    </p>
                  </div>
                  {error.digest && (
                    <div className="text-xs">
                      <strong>ID do Erro:</strong>
                      <p className="text-gray-600 font-mono">{error.digest}</p>
                    </div>
                  )}
                </div>
              </details>
            )}

            {/* Ações */}
            <div className="space-y-3 pt-2">
              <button
                onClick={reset}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                aria-label="Tentar novamente"
              >
                <RefreshCw className="w-4 h-4" />
                Tentar Novamente
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleReload}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  aria-label="Recarregar página"
                >
                  Recarregar
                </button>

                <button
                  onClick={handleGoHome}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm flex items-center justify-center gap-1 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  aria-label="Voltar ao início"
                >
                  <Home className="w-4 h-4" />
                  Início
                </button>
              </div>
            </div>

            {/* Informação de contato para problemas persistentes */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
              <p className="text-xs text-blue-800 text-center">
                Problema persistindo?{" "}
                <a
                  href="/contato"
                  className="font-medium underline hover:no-underline"
                  aria-label="Entre em contato conosco"
                >
                  Entre em contato
                </a>{" "}
                conosco
              </p>
            </div>
          </div>
        </div>

        {/* Meta tags para SEO */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.title = 'Erro - ${
                typeof window !== "undefined"
                  ? window.location.hostname
                  : "Loja Online"
              }';
              const meta = document.createElement('meta');
              meta.name = 'robots';
              meta.content = 'noindex, nofollow';
              document.head.appendChild(meta);
            `,
          }}
        />
      </body>
    </html>
  );
}
