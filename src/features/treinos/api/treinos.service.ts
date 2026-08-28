import type { Categoria, Treino} from '../types/treino';
import { ordenarTreinoPorTitulo} from '../utils/treinos.utils';

const TREINOS_URL = '/api/treinos.json';

export async function buscarTreinos(): Promise<Treino[]> {
    const resposta = await fetch(TREINOS_URL);

    if (!resposta.ok) {
        throw new Error('Não foi possível carregar o catálogo de treinos');
    }

    const treinos = (await resposta.json()) as Treino[];
    return ordenarTreinoPorTitulo(treinos);
}

export async function buscarTreinorPorSlug(
    slug: string
): Promise<Treino | undefined> {
    const treinos = await buscarTreinos();
    return treinos.find((treino) => treino.slug === slug);
}

export async function buscarTreinosPorCategoria(
    categoria: Categoria
): Promise<readonly Treino[]> {
    const treinos = await buscarTreinos();
    return treinos.filter((treino) => treino.categoria === categoria);
}