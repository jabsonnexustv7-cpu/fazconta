export type CalculadoraSEO = {
  titulo: string;
  descricao: string;
  categoria: 'trabalhista' | 'financeiro' | 'utilidades' | 'saude' | 'matematica';
  rota: string;
  palavrasChave: string[];
  artigosRelacionados: { titulo: string; rota: string }[];
};

export const calculadorasSeo: CalculadoraSEO[] = [
  { titulo: 'FGTS', descricao: 'Depósito de 8% ao mês e estimativa anual.', categoria: 'trabalhista', rota: '/trabalhista/fgts', palavrasChave: ['fgts','depósito'], artigosRelacionados: [{ titulo: 'Como calcular FGTS', rota: '/blog/como-calcular-fgts' }] },
  { titulo: 'Seguro-Desemprego', descricao: 'Estimativa por faixas salariais.', categoria: 'trabalhista', rota: '/trabalhista/seguro-desemprego', palavrasChave: ['seguro desemprego'], artigosRelacionados: [{ titulo: 'Como funciona o seguro-desemprego', rota: '/blog/como-funciona-seguro-desemprego' }] },
  { titulo: 'Adicional Noturno', descricao: 'Acréscimo de 20% sobre horas noturnas.', categoria: 'trabalhista', rota: '/trabalhista/adicional-noturno', palavrasChave: ['adicional noturno'], artigosRelacionados: [] },
  { titulo: 'Vale-Transporte', descricao: 'Desconto máximo de 6% do salário.', categoria: 'trabalhista', rota: '/trabalhista/vale-transporte', palavrasChave: ['vale transporte'], artigosRelacionados: [] },
  { titulo: 'CLT x PJ', descricao: 'Comparação simples de renda líquida.', categoria: 'trabalhista', rota: '/trabalhista/clt-pj', palavrasChave: ['clt pj'], artigosRelacionados: [] },
  { titulo: 'CDI', descricao: 'Simulação de rendimento.', categoria: 'financeiro', rota: '/financeiro/cdi', palavrasChave: ['cdi'], artigosRelacionados: [{ titulo: 'CDI, Selic e poupança: diferenças', rota: '/blog/cdi-selic-poupanca-diferencas' }] },
  { titulo: 'Selic', descricao: 'Simulação de rendimento pela taxa Selic.', categoria: 'financeiro', rota: '/financeiro/selic', palavrasChave: ['selic'], artigosRelacionados: [{ titulo: 'CDI, Selic e poupança: diferenças', rota: '/blog/cdi-selic-poupanca-diferencas' }] },
  { titulo: 'Poupança', descricao: 'Simulação de rendimento da poupança.', categoria: 'financeiro', rota: '/financeiro/poupanca', palavrasChave: ['poupança'], artigosRelacionados: [{ titulo: 'CDI, Selic e poupança: diferenças', rota: '/blog/cdi-selic-poupanca-diferencas' }] },
  { titulo: 'Empréstimo', descricao: 'Parcela aproximada por juros compostos.', categoria: 'financeiro', rota: '/financeiro/emprestimo', palavrasChave: ['empréstimo'], artigosRelacionados: [] },
  { titulo: 'Reserva de Emergência', descricao: 'Meta por custo mensal x meses.', categoria: 'financeiro', rota: '/financeiro/reserva-emergencia', palavrasChave: ['reserva de emergência'], artigosRelacionados: [{ titulo: 'Como montar reserva de emergência', rota: '/blog/como-montar-reserva-de-emergencia' }] },
  { titulo: 'Regra de Três', descricao: 'Proporcionalidade simples.', categoria: 'utilidades', rota: '/utilidades/regra-de-tres', palavrasChave: ['regra de três'], artigosRelacionados: [{ titulo: 'Como calcular regra de três', rota: '/blog/como-calcular-regra-de-tres' }] },
  { titulo: 'Idade Exata', descricao: 'Cálculo de anos, meses e dias.', categoria: 'utilidades', rota: '/utilidades/idade-exata', palavrasChave: ['idade exata'], artigosRelacionados: [] },
  { titulo: 'Dias entre Datas', descricao: 'Diferença em dias.', categoria: 'utilidades', rota: '/utilidades/dias-entre-datas', palavrasChave: ['dias entre datas'], artigosRelacionados: [] },
  { titulo: 'Conversor de Temperatura', descricao: 'Celsius, Fahrenheit e Kelvin.', categoria: 'utilidades', rota: '/utilidades/conversor-temperatura', palavrasChave: ['conversor temperatura'], artigosRelacionados: [] },
  { titulo: 'Conversor de Medidas', descricao: 'Metro, centímetro, quilômetro e milha.', categoria: 'utilidades', rota: '/utilidades/conversor-medidas', palavrasChave: ['conversor medidas'], artigosRelacionados: [] }
];
