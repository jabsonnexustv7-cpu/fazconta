export type CalculadoraSEO = {
  titulo: string;
  descricao: string;
  categoria: 'trabalhista' | 'financeiro' | 'utilidades' | 'saude' | 'matematica';
  rota: string;
  palavrasChave: string[];
  artigosRelacionados: { titulo: string; rota: string }[];
};

export const calculadorasSeo: CalculadoraSEO[] = [
  { titulo: 'Salário Líquido', descricao: 'Calcule descontos de INSS, IRRF e benefícios.', categoria: 'trabalhista', rota: '/trabalhista/salario-liquido', palavrasChave: ['salário líquido', 'descontos CLT'], artigosRelacionados: [{ titulo: 'Como calcular salário líquido', rota: '/blog/como-calcular-salario-liquido' }, { titulo: 'Salário bruto vs salário líquido', rota: '/blog/salario-bruto-vs-salario-liquido' }] },
  { titulo: 'Férias', descricao: 'Simule férias proporcionais, 1/3 constitucional e descontos.', categoria: 'trabalhista', rota: '/trabalhista/ferias', palavrasChave: ['cálculo férias', 'férias proporcionais'], artigosRelacionados: [{ titulo: 'Como calcular férias', rota: '/blog/como-calcular-ferias' }, { titulo: 'Férias proporcionais: como funciona', rota: '/blog/ferias-proporcionais-como-funciona' }] },
  { titulo: 'Rescisão', descricao: 'Estime verbas rescisórias por tipo de desligamento.', categoria: 'trabalhista', rota: '/trabalhista/rescisao', palavrasChave: ['rescisão CLT', 'pedido demissão'], artigosRelacionados: [{ titulo: 'Como calcular rescisão', rota: '/blog/como-calcular-rescisao' }, { titulo: 'Pedido de demissão vs sem justa causa', rota: '/blog/pedido-demissao-vs-sem-justa-causa' }] },
  { titulo: 'Juros Compostos', descricao: 'Projete evolução do patrimônio no tempo.', categoria: 'financeiro', rota: '/financeiro/juros-compostos', palavrasChave: ['juros compostos', 'investimentos'], artigosRelacionados: [{ titulo: 'Como calcular juros compostos', rota: '/blog/como-calcular-juros-compostos' }, { titulo: 'Juros simples vs juros compostos', rota: '/blog/juros-simples-vs-juros-compostos' }] },
  { titulo: 'IMC', descricao: 'Calcule índice de massa corporal e faixa.', categoria: 'utilidades', rota: '/utilidades/imc', palavrasChave: ['imc', 'peso ideal'], artigosRelacionados: [{ titulo: 'Como calcular IMC', rota: '/blog/como-calcular-imc' }, { titulo: 'Como calcular porcentagem', rota: '/blog/como-calcular-porcentagem' }] },
  { titulo: 'Porcentagem', descricao: 'Descubra aumentos, descontos e variação percentual.', categoria: 'utilidades', rota: '/utilidades/porcentagem', palavrasChave: ['porcentagem', 'desconto'], artigosRelacionados: [{ titulo: 'Como calcular porcentagem', rota: '/blog/como-calcular-porcentagem' }, { titulo: 'Juros simples vs juros compostos', rota: '/blog/juros-simples-vs-juros-compostos' }] }
];
