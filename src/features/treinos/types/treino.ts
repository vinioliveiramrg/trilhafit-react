// Union types: cada um so aceita valores exatos, previne strings soltas
export type Categoria = 'forca' | 'cardio' | 'mobilidade';
export type Nivel = 'iniciante' | 'intermediario' | 'avancado';
export type GrupoMuscular = 
  'peito' | 'costas' | 'pernas' | 'ombros' | 'bracos' | 'core' | 'cardio';

export interface Exercicio {
  readonly id: string;
  readonly nome: string;
  readonly series: number;
  readonly repeticoes: number;
  readonly descansoSegundos: number;
}

export interface Treino {
  readonly id: string;
  readonly slug: string; // URL amigavel: "forca-superior-a"
  readonly titulo: string;
  readonly categoria: Categoria;
  readonly grupoMuscular: GrupoMuscular[]; // array - um treino pode trabalhar vários grupos
  readonly nivel: Nivel;
  readonly duracaoMinutos: number;
  readonly descricao: string;
  readonly exercicios: Exercicio[];
  readonly imagemUrl: string;

}

// Preenchido pelo formulário (passo 14) - nao vem da API

export interface RegistroTreino {
    readonly id: string;
    readonly treinoId: string;
    readonly data: string;
    readonly duracaoMinutos: number;
    readonly cargaTotal: number;
    readonly observacoes?: string;
}

  

