"use client";

import { useState } from "react";
import { Bug, Zap, Wifi, AlertTriangle } from "lucide-react";

/**
 * Componente para testar diferentes tipos de erro
 * Ajuda a verificar se o global-error.tsx está funcionando
 */
export default function ErrorTestButton() {
  const [showOptions, setShowOptions] = useState(false);

  const triggerGlobalError = () => {
    // Força um erro que vai para o global-error
    throw new Error("FORCE_GLOBAL_ERROR: Teste de erro global simulado");
  };

  const triggerLocalError = () => {
    // Erro que será capturado pelo ErrorWrapper local
    throw new Error("Teste de erro local");
  };

  const triggerNetworkError = () => {
    // Simula erro de rede
    throw new Error("fetch failed: Erro de rede simulado");
  };

  const triggerChunkError = () => {
    // Simula erro de chunk loading
    throw new Error("Loading chunk 123 failed: Erro de carregamento simulado");
  };

  if (!showOptions) {
    return (
      <button
        onClick={() => setShowOptions(true)}
        className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-md flex items-center gap-1 transition-colors"
      >
        <Bug className="w-3 h-3" />
        Testar Erros
      </button>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-red-200 p-3 flex flex-wrap gap-2 items-center">
      <span className="text-xs font-medium text-red-700 mr-2">
        <AlertTriangle className="w-3 h-3 inline mr-1" />
        Testes de Erro:
      </span>

      <button
        onClick={triggerGlobalError}
        className="bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded flex items-center gap-1"
      >
        <Zap className="w-3 h-3" />
        Global
      </button>

      <button
        onClick={triggerLocalError}
        className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1"
      >
        <Bug className="w-3 h-3" />
        Local
      </button>

      <button
        onClick={triggerNetworkError}
        className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1"
      >
        <Wifi className="w-3 h-3" />
        Rede
      </button>

      <button
        onClick={triggerChunkError}
        className="bg-purple-500 hover:bg-purple-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1"
      >
        <Bug className="w-3 h-3" />
        Chunk
      </button>

      <button
        onClick={() => setShowOptions(false)}
        className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-xs px-2 py-1 rounded ml-2"
      >
        ✕
      </button>
    </div>
  );
}
