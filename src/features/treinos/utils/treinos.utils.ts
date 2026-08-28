import type { Treino } from '../types/treinos';

export function normalizarTexto(texto: string): string {
  return texto
    .normalize('NFD')
    .replaceAll(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
}

export function filtrarTreinosPorTermo(
    treinos: readonly Treino[], termo: string
): readonly Treino[]{
    const t = normalizarTexto(termo);
    if (t.length === 0) return treinos;
    return treinos.filter((treino) => 
        normalizarTexto(treino.titulo).includes(t) ||
        normalizarTexto(treino.nivel).includes(t) ||
        treino.grupoMuscular.some((g) => normalizarTexto(g).includes(t))
    );
}

export function obterTreiosFavoritos(
    treinos: readonly Treino[], idsFavoritos: readonly string[]
): readonly Treino[]{
    const favoritosSet = new Set(idsFavoritos);
    return treinos.filter((treino) => favoritosSet.has(treino.id));
}

export function orenarTreinosPorTitulos(
        treinos: readonly Treino[]
): readonly Treino[]{
    return [...treinos].sort((a, b) => 
    a.titulo.localeCompare(b.titulo, 'pt-BR')
    );
}