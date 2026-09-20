/**
 * ============================================================================
 * CHURRASCO NOME DO ALUNO - SCRIPT SIMPLES E FUNCIONAL
 * ============================================================================
 */

// 1. LISTA DE 30 CONVIDADOS PRÉ-DEFINIDOS (FICTÍCIOS)
// Para cada convidado: apenas Nome e opção se é homem, mulher ou criança
const convidadosPreDefinidos = [
  { nome: "Paula", tipo: "mulher" },
  { nome: "Lucas (filho da Paula)", tipo: "crianca" },
  { nome: "Tiago (filho da Paula)", tipo: "crianca" },
  { nome: "Carlos", tipo: "homem" },
  { nome: "Mariana", tipo: "mulher" },
  { nome: "Roberto", tipo: "homem" },
  { nome: "Carla", tipo: "mulher" },
  { nome: "Pedro", tipo: "crianca" },
  { nome: "Lucas Silva", tipo: "homem" },
  { nome: "Juliana", tipo: "mulher" },
  { nome: "Fernanda", tipo: "mulher" },
  { nome: "Sofia", tipo: "crianca" },
  { nome: "Rodrigo", tipo: "homem" },
  { nome: "Amanda", tipo: "mulher" },
  { nome: "Alice", tipo: "crianca" },
  { nome: "Enzo", tipo: "crianca" },
  { nome: "Felipe", tipo: "homem" },
  { nome: "Thiago", tipo: "homem" },
  { nome: "Marcela", tipo: "mulher" },
  { nome: "Bruno", tipo: "homem" },
  { nome: "Patrícia", tipo: "mulher" },
  { nome: "Arthur", tipo: "crianca" },
  { nome: "Beatriz", tipo: "mulher" },
  { nome: "Larissa", tipo: "mulher" },
  { nome: "Daniel", tipo: "homem" },
  { nome: "Gustavo", tipo: "homem" },
  { nome: "Gabriel", tipo: "homem" },
  { nome: "Vanessa", tipo: "mulher" },
  { nome: "Davi", tipo: "crianca" },
  { nome: "Laura", tipo: "crianca" }
];

// Lista de convidados ativa no sistema (começa com os 30 pré-preenchidos)
let convidados = convidadosPreDefinidos.map(c => ({ ...c }));

// 2. CATÁLOGO DE PRODUTOS PRÉ-CADASTRADOS (com fotos locais e massa/capacidade)
const produtosPreCadastrados = [
  { nome: "Picanha Bovina", tipo: "solido", valor: 2.0, unidade: "kg", foto: "imagens/picanha.jpg", responsaveis: [] },
  { nome: "Contrafilé em Bifes", tipo: "solido", valor: 2.5, unidade: "kg", foto: "imagens/contrafile.jpg", responsaveis: [] },
  { nome: "Fraldinha", tipo: "solido", valor: 2.0, unidade: "kg", foto: "imagens/fraldinha.jpg", responsaveis: [] },
  { nome: "Coxinha de Frango", tipo: "solido", valor: 2.0, unidade: "kg", foto: "imagens/frango.jpg", responsaveis: [] },
  { nome: "Linguiça Toscana", tipo: "solido", valor: 2.0, unidade: "kg", foto: "imagens/linguica.jpg", responsaveis: [] },
  { nome: "Pão de Alho", tipo: "solido", valor: 1.0, unidade: "kg", foto: "imagens/paodealho.jpg", responsaveis: [] },
  { nome: "Queijo Coalho", tipo: "solido", valor: 0.8, unidade: "kg", foto: "imagens/queijocoalho.jpg", responsaveis: [] },
  { nome: "Farofa Pronta", tipo: "solido", valor: 0.5, unidade: "kg", foto: "imagens/farofa.jpg", responsaveis: [] },
  { nome: "Panceta", tipo: "solido", valor: 1.0, unidade: "kg", foto: "imagens/panceta.jpg", responsaveis: [] },
  { nome: "Vinagrete", tipo: "solido", valor: 0.1, unidade: "kg", foto: "imagens/vinagrete.jpg", responsaveis: [] },
  { nome: "Maionese", tipo: "solido", valor: 0.1, unidade: "kg", foto: "imagens/maionese.jpg", responsaveis: [] },
  { nome: "Cerveja em Lata (350 ml)", tipo: "liquido", valor: 0.35, unidade: "L", porUnidade: true, capacidadeUnidade: 0.35, nomeUnidade: "lata", foto: "imagens/cerveja.jpg", responsaveis: [] },
  { nome: "Cerveja Litrão (garrafa 1 L)", tipo: "liquido", valor: 8.0, unidade: "L", foto: "imagens/cerveja_litro.jpg", responsaveis: [] },
  { nome: "Refrigerante 2L", tipo: "liquido", valor: 6.0, unidade: "L", foto: "imagens/refrigerante.jpg", responsaveis: [] },
  { nome: "Suco Natural de Frutas", tipo: "liquido", valor: 4.0, unidade: "L", foto: "imagens/suco.jpg", responsaveis: [] },
  { nome: "Água Mineral Galão", tipo: "liquido", valor: 6.0, unidade: "L", foto: "imagens/agua.jpg", responsaveis: [] }
];

// 3. LISTA DE PRODUTOS ATUALMENTE NO CHURRASCO
// Já com exemplos associados (ex: Pedro levando 500g, Fernanda 400g, etc.)
let listaProdutos = [
  {
    nome: "Picanha Bovina",
    tipo: "solido",
    valor: 2.0,
    unidade: "kg",
    foto: "imagens/picanha.jpg",
    responsaveis: [
      { nome: "Pedro", valor: 0.5 },
      { nome: "Fernanda", valor: 0.4 },
      { nome: "Carlos", valor: 1.1 }
    ]
  },
  {
    nome: "Contrafilé em Bifes",
    tipo: "solido",
    valor: 2.5,
    unidade: "kg",
    foto: "imagens/contrafile.jpg",
    responsaveis: [
      { nome: "Roberto", valor: 1.5 },
      { nome: "Lucas Silva", valor: 1.0 }
    ]
  },
  {
    nome: "Fraldinha",
    tipo: "solido",
    valor: 2.0,
    unidade: "kg",
    foto: "imagens/fraldinha.jpg",
    responsaveis: [
      { nome: "Juliana", valor: 1.0 },
      { nome: "Amanda", valor: 1.0 }
    ]
  },
  {
    nome: "Coxinha de Frango",
    tipo: "solido",
    valor: 2.0,
    unidade: "kg",
    foto: "imagens/frango.jpg",
    responsaveis: [
      { nome: "Rodrigo", valor: 1.0 },
      { nome: "Bruno", valor: 1.0 }
    ]
  },
  {
    nome: "Linguiça Toscana",
    tipo: "solido",
    valor: 2.0,
    unidade: "kg",
    foto: "imagens/linguica.jpg",
    responsaveis: [
      { nome: "Thiago", valor: 1.0 },
      { nome: "Daniel", valor: 1.0 }
    ]
  },
  {
    nome: "Pão de Alho",
    tipo: "solido",
    valor: 1.0,
    unidade: "kg",
    foto: "imagens/paodealho.jpg",
    responsaveis: [
      { nome: "Paula", valor: 0.5 },
      { nome: "Carla", valor: 0.5 }
    ]
  },
  {
    nome: "Queijo Coalho",
    tipo: "solido",
    valor: 0.8,
    unidade: "kg",
    foto: "imagens/queijocoalho.jpg",
    responsaveis: [
      { nome: "Patrícia", valor: 0.4 },
      { nome: "Mariana", valor: 0.4 }
    ]
  },
  {
    nome: "Panceta",
    tipo: "solido",
    valor: 1.0,
    unidade: "kg",
    foto: "imagens/panceta.jpg",
    responsaveis: [
      { nome: "Roberto", valor: 1.0 }
    ]
  },
  {
    nome: "Vinagrete",
    tipo: "solido",
    valor: 0.1,
    unidade: "kg",
    foto: "imagens/vinagrete.jpg",
    responsaveis: [
      { nome: "Mariana", valor: 0.1 }
    ]
  },
  {
    nome: "Maionese",
    tipo: "solido",
    valor: 0.1,
    unidade: "kg",
    foto: "imagens/maionese.jpg",
    responsaveis: [
      { nome: "Carla", valor: 0.1 }
    ]
  },
  {
    nome: "Cerveja em Lata (350 ml)",
    tipo: "liquido",
    valor: 0.35,
    unidade: "L",
    porUnidade: true,        // quantidade informada em latas
    capacidadeUnidade: 0.35, // cada lata tem 350 ml (0,35 L)
    nomeUnidade: "lata",
    foto: "imagens/cerveja.jpg",
    responsaveis: [
      { nome: "Pedro", unidades: 6, valor: 6 * 0.35 },
      { nome: "Felipe", unidades: 6, valor: 6 * 0.35 }
    ]
  },
  {
    nome: "Cerveja Litrão (garrafa 1 L)",
    tipo: "liquido",
    valor: 8.0,
    unidade: "L",
    foto: "imagens/cerveja_litro.jpg",
    responsaveis: [
      { nome: "Gustavo", valor: 4.0 },
      { nome: "Gabriel", valor: 4.0 }
    ]
  },
  {
    nome: "Refrigerante 2L",
    tipo: "liquido",
    valor: 6.0,
    unidade: "L",
    foto: "imagens/refrigerante.jpg",
    responsaveis: [
      { nome: "Beatriz", valor: 3.0 },
      { nome: "Larissa", valor: 3.0 }
    ]
  },
  {
    nome: "Suco Natural de Frutas",
    tipo: "liquido",
    valor: 4.0,
    unidade: "L",
    foto: "imagens/suco.jpg",
    responsaveis: [
      { nome: "Vanessa", valor: 2.0 },
      { nome: "Marcela", valor: 2.0 }
    ]
  },
  {
    nome: "Água Mineral Galão",
    tipo: "liquido",
    valor: 6.0,
    unidade: "L",
    foto: "imagens/agua.jpg",
    responsaveis: [
      { nome: "Paula", valor: 3.0 },
      { nome: "Fernanda", valor: 3.0 }
    ]
  }
];

// INICIALIZAÇÃO
document.addEventListener("DOMContentLoaded", () => {
  renderizarTabelaConvidados();
  preencherSelectPreCadastrados("todos");
  atualizarTudo();
});

// A. RENDERIZA A TABELA DE CONVIDADOS E CONTA HOMENS, MULHERES E CRIANÇAS
function renderizarTabelaConvidados() {
  const tbody = document.getElementById("tabelaConvidadosCorpo");
  tbody.innerHTML = "";

  let homens = 0;
  let mulheres = 0;
  let criancas = 0;

  if (convidados.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#64748b; padding:15px;">Nenhum convidado na lista. Cadastre novos convidados ou clique em "Carregar 30 Convidados Pré-Preenchidos".</td></tr>`;
  } else {
    convidados.forEach((c, index) => {
      let rotulo = "";
      let tagClasse = "";

      if (c.tipo === "homem") {
        rotulo = "Homem";
        tagClasse = "tag-homem";
        homens++;
      } else if (c.tipo === "mulher") {
        rotulo = "Mulher";
        tagClasse = "tag-mulher";
        mulheres++;
      } else {
        rotulo = "Criança";
        tagClasse = "tag-crianca";
        criancas++;
      }

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td><strong>${c.nome}</strong></td>
        <td><span class="${tagClasse}">${rotulo}</span></td>
        <td><button class="btn-remover-tabela" onclick="removerConvidado(${index})">Remover</button></td>
      `;
      tbody.appendChild(tr);
    });
  }

  document.getElementById("qtdHomens").textContent = homens;
  document.getElementById("qtdMulheres").textContent = mulheres;
  document.getElementById("qtdCriancas").textContent = criancas;
  document.getElementById("qtdTotal").textContent = convidados.length;
}

// A1. CARREGA OS 30 CONVIDADOS PRÉ-DEFINIDOS
function carregar30Convidados() {
  convidados = convidadosPreDefinidos.map(c => ({ ...c }));
  renderizarTabelaConvidados();
  atualizarTudo(); // atualiza também as listas "Quem vai levar?"
}

// A2. LIMPA A LISTA DE CONVIDADOS
function limparConvidados() {
  convidados = [];
  renderizarTabelaConvidados();
  atualizarTudo(); // atualiza também as listas "Quem vai levar?"
}

// A3. CADASTRA UM NOVO CONVIDADO (Apenas Nome e Opção Homem/Mulher/Criança)
function adicionarConvidado() {
  const inputNome = document.getElementById("convidadoNome");
  const nome = inputNome.value.trim();
  const tipo = document.getElementById("convidadoTipo").value; // "homem", "mulher" ou "crianca"

  if (!nome) {
    alert("Por favor, digite o nome do convidado.");
    inputNome.focus();
    return;
  }

  convidados.push({
    nome: nome,
    tipo: tipo
  });

  inputNome.value = "";
  inputNome.focus();

  renderizarTabelaConvidados();
  atualizarTudo(); // atualiza também as listas "Quem vai levar?"
}

// A4. REMOVE UM CONVIDADO DA LISTA
function removerConvidado(index) {
  convidados.splice(index, 1);
  renderizarTabelaConvidados();
  atualizarTudo(); // atualiza também as listas "Quem vai levar?"
}

// B. PREENCHE O SELECT SUSPENSO COM OPÇÃO DE FILTRO
function preencherSelectPreCadastrados(filtro) {
  const select = document.getElementById("selectPreCadastrado");
  select.innerHTML = "";

  const filtrados = produtosPreCadastrados.filter(p => {
    if (filtro === "todos") return true;
    return p.tipo === filtro;
  });

  filtrados.forEach(prod => {
    const option = document.createElement("option");
    option.value = prod.nome;
    option.textContent = `${prod.nome} (${prod.tipo.toUpperCase()}${prod.porUnidade ? " - POR UNIDADE" : ""})`;
    select.appendChild(option);
  });

  aoMudarProdutoCatalogo();
}

// Troca o rótulo do campo de quantidade: "Qtd (kg/L)" ou "Qtd (latas)"
function aoMudarProdutoCatalogo() {
  const nomeEscolhido = document.getElementById("selectPreCadastrado").value;
  const modelo = produtosPreCadastrados.find(p => p.nome === nomeEscolhido);
  const label = document.querySelector('label[for="qtdPreCadastrado"]');
  const input = document.getElementById("qtdPreCadastrado");

  if (modelo && modelo.porUnidade) {
    label.textContent = `Qtd (${modelo.nomeUnidade}s):`;
    input.step = "1";
    input.min = "1";
    input.placeholder = "Ex: 12";
  } else {
    label.textContent = "Qtd (kg/L):";
    input.step = "0.1";
    input.min = "0.1";
    input.placeholder = "Ex: 0.5";
  }
}

function aoMudarFiltro() {
  const filtro = document.getElementById("filtroCategoria").value;
  preencherSelectPreCadastrados(filtro);
}

// B1. ATUALIZA OS SELECTS DE CONVIDADOS NOS FORMULÁRIOS DE PRODUTOS
function atualizarSelectsConvidadosNosFormularios() {
  const selectA = document.getElementById("selectConvidadoPreCadastrado");
  const selectB = document.getElementById("novoConvidadoProduto");

  let opcoes = "";
  if (convidados.length === 0) {
    opcoes = `<option value="">Nenhum convidado cadastrado</option>`;
  } else {
    opcoes = convidados.map(c => `<option value="${c.nome}">${c.nome} (${c.tipo})</option>`).join("");
  }

  if (selectA) selectA.innerHTML = opcoes;
  if (selectB) selectB.innerHTML = opcoes;
}

// Função para formatar massa e capacidade de forma didática (ex: 500g, 400g, 1.5 kg, 600ml, 2.0 L)
function formatarQtd(valor, unidade) {
  if (unidade === "kg") {
    if (valor < 1) {
      return `${Math.round(valor * 1000)}g`;
    }
    return `${valor.toFixed(1)} kg`;
  } else {
    if (valor < 1) {
      return `${Math.round(valor * 1000)}ml`;
    }
    return `${valor.toFixed(1)} L`;
  }
}

// Monta o registro de quem vai levar.
// Produto por unidade (ex: lata): a pessoa informa a quantidade de unidades
// e a capacidade é somada automaticamente (12 latas x 0,35 L = 4,2 L).
// Retorna null se a quantidade for inválida.
function montarResponsavel(prod, nomePessoa, qtdInformada) {
  if (isNaN(qtdInformada) || qtdInformada <= 0) return null;

  if (prod.porUnidade) {
    if (!Number.isInteger(qtdInformada)) return null; // não existe meia lata
    return {
      nome: nomePessoa,
      unidades: qtdInformada,
      valor: qtdInformada * prod.capacidadeUnidade
    };
  }
  return { nome: nomePessoa, valor: qtdInformada };
}

// Texto da quantidade de uma pessoa (ex: "6 latas (2.1 L)" ou "500g")
function formatarResponsavel(prod, r) {
  if (prod.porUnidade) {
    const plural = r.unidades === 1 ? "" : "s";
    return `${r.unidades} ${prod.nomeUnidade}${plural} (${formatarQtd(r.valor, prod.unidade)})`;
  }
  return formatarQtd(r.valor, prod.unidade);
}

// Texto do total do produto (ex: "12 latas = 4.2 L" ou "2.0 kg")
function formatarTotalProduto(prod) {
  const somaValor = prod.responsaveis.reduce((soma, r) => soma + r.valor, 0);
  if (prod.porUnidade) {
    const somaUnidades = prod.responsaveis.reduce((soma, r) => soma + r.unidades, 0);
    const plural = somaUnidades === 1 ? "" : "s";
    return `${somaUnidades} ${prod.nomeUnidade}${plural} = ${formatarQtd(somaValor, prod.unidade)}`;
  }
  return formatarQtd(somaValor, prod.unidade);
}

// C. ADICIONA/ASSOCIA PRODUTO PRÉ-CADASTRADO A UM CONVIDADO
function adicionarPreCadastrado() {
  const nomeEscolhido = document.getElementById("selectPreCadastrado").value;
  const nomeConvidado = document.getElementById("selectConvidadoPreCadastrado").value;
  const inputQtd = document.getElementById("qtdPreCadastrado");
  const qtdInformada = parseFloat(inputQtd.value);

  if (!nomeConvidado) {
    alert("Cadastre ou selecione um convidado para levar o produto.");
    return;
  }
  const modeloEscolhido = produtosPreCadastrados.find(p => p.nome === nomeEscolhido);
  const responsavel = modeloEscolhido ? montarResponsavel(modeloEscolhido, nomeConvidado, qtdInformada) : null;
  if (!responsavel) {
    alert(modeloEscolhido && modeloEscolhido.porUnidade
      ? `Informe um número inteiro de ${modeloEscolhido.nomeUnidade}s (ex: 12).`
      : "Por favor, informe uma quantidade válida (ex: 0.5 para 500g ou 2.0 para 2L).");
    inputQtd.focus();
    return;
  }

  // Verifica se o produto já existe em listaProdutos
  let produto = listaProdutos.find(p => p.nome === nomeEscolhido);

  if (!produto) {
    // Procura no catálogo
    const modelo = produtosPreCadastrados.find(p => p.nome === nomeEscolhido);
    if (!modelo) return;

    produto = {
      nome: modelo.nome,
      tipo: modelo.tipo,
      unidade: modelo.unidade,
      porUnidade: modelo.porUnidade,
      capacidadeUnidade: modelo.capacidadeUnidade,
      nomeUnidade: modelo.nomeUnidade,
      foto: modelo.foto,
      responsaveis: []
    };
    listaProdutos.push(produto);
  }

  // Associa a pessoa que vai levar
  produto.responsaveis.push(responsavel);

  inputQtd.value = "";
  atualizarTudo();
}

// D. CRIA NOVO PRODUTO PERSONALIZADO E ASSOCIA A CONVIDADO
function adicionarNovoPersonalizado() {
  const nome = document.getElementById("novoNome").value.trim();
  const tipo = document.getElementById("novoTipo").value;
  const nomeConvidado = document.getElementById("novoConvidadoProduto").value;
  const inputValor = document.getElementById("novoValor");
  const valor = parseFloat(inputValor.value);

  if (!nome) {
    alert("Por favor, digite o nome do produto.");
    return;
  }
  if (!nomeConvidado) {
    alert("Selecione quem vai levar o produto.");
    return;
  }
  if (isNaN(valor) || valor <= 0) {
    alert("Por favor, informe uma massa ou capacidade válida (maior que zero).");
    inputValor.focus();
    return;
  }

  const unidade = tipo === "solido" ? "kg" : "L";
  const fotoPadrao = tipo === "solido"
    ? "imagens/padrao_solido.jpg"
    : "imagens/padrao_liquido.jpg";

  listaProdutos.push({
    nome: nome,
    tipo: tipo,
    unidade: unidade,
    foto: fotoPadrao,
    responsaveis: [
      { nome: nomeConvidado, valor: valor }
    ]
  });

  // Limpa campos
  document.getElementById("novoNome").value = "";
  inputValor.value = "";

  atualizarTudo();
}

// E. REMOVE UM PRODUTO COMPLETAMENTE DA GRADE
function removerProduto(indexNaListaGeral) {
  if (listaProdutos[indexNaListaGeral]) {
    // Ao esvaziar os responsáveis, o produto não entra mais na grade
    listaProdutos[indexNaListaGeral].responsaveis = [];
    atualizarTudo();
  }
}

// E1. ASSOCIA UMA PESSOA DIRETO NO CARD DO PRODUTO
function associarPessoaAoProduto(indexNaListaGeral) {
  const selectPessoa = document.getElementById(`selectPessoa_${indexNaListaGeral}`);
  const inputQtd = document.getElementById(`inputQtdPessoa_${indexNaListaGeral}`);
  
  const nomePessoa = selectPessoa ? selectPessoa.value : "";
  const qtdInformada = inputQtd ? parseFloat(inputQtd.value) : 0;

  if (!nomePessoa) {
    alert("Nenhum convidado disponível para associar.");
    return;
  }
  const produto = listaProdutos[indexNaListaGeral];
  const responsavel = montarResponsavel(produto, nomePessoa, qtdInformada);
  if (!responsavel) {
    alert(produto.porUnidade
      ? `Informe um número inteiro de ${produto.nomeUnidade}s (ex: 12).`
      : "Informe uma quantidade válida para a pessoa levar.");
    inputQtd.focus();
    return;
  }

  if (!produto.responsaveis) {
    produto.responsaveis = [];
  }

  // Permite que a pessoa esteja associada a este produto também
  produto.responsaveis.push(responsavel);

  atualizarTudo();
}

// E2. DESASSOCIA UMA PESSOA DO PRODUTO (Se ficar vazio, sai da grade)
function removerPessoaDoProduto(indexNaListaGeral, indexResp) {
  if (listaProdutos[indexNaListaGeral] && listaProdutos[indexNaListaGeral].responsaveis) {
    listaProdutos[indexNaListaGeral].responsaveis.splice(indexResp, 1);
    atualizarTudo();
  }
}

// F. ATUALIZA A TELA, VALIDAÇÃO E COMPARATIVO FINAL
function atualizarTudo() {
  atualizarSelectsConvidadosNosFormularios();
  renderizarGradeProdutos();
  validarRegraItens();
  calcularComparativoFinal();
}

// Renderiza APENAS os produtos que alguém for levar (Se ninguém marcar, NÃO entra na grade)
// Guarda quais cards estão com o painel de detalhes aberto
const detalhesAbertos = new Set();

function alternarDetalhes(indexNaListaGeral) {
  if (detalhesAbertos.has(indexNaListaGeral)) {
    detalhesAbertos.delete(indexNaListaGeral);
  } else {
    detalhesAbertos.add(indexNaListaGeral);
  }
  renderizarGradeProdutos();
}

function renderizarGradeProdutos() {
  const container = document.getElementById("gradeProdutos");
  container.innerHTML = "";

  // Opções para o select de pessoas nos cards
  let opcoesConvidados = "";
  if (convidados.length === 0) {
    opcoesConvidados = `<option value="">Nenhum convidado</option>`;
  } else {
    opcoesConvidados = convidados.map(c => `<option value="${c.nome}">${c.nome} (${c.tipo})</option>`).join("");
  }

  // FILTRO OBRIGATÓRIO: Apenas produtos com pelo menos 1 pessoa levando entram na grade!
  const produtosNaGrade = [];
  listaProdutos.forEach((prod, indexGeral) => {
    if (prod.responsaveis && prod.responsaveis.length > 0) {
      produtosNaGrade.push({ prod, indexGeral });
    }
  });

  if (produtosNaGrade.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 30px; background: #ffffff; border: 1px dashed #cbd5e1; border-radius: 8px; color: #64748b;">
        <p style="font-size: 1.1rem; margin-bottom: 6px;">🛒 <strong>Nenhum produto marcado para levar no momento.</strong></p>
        <p style="font-size: 0.9rem;">Escolha um produto e associe um convidado acima para que ele entre na grade!</p>
      </div>
    `;
    return;
  }

  produtosNaGrade.forEach(({ prod, indexGeral }) => {
    // 1. Monta a lista de quem vai levar (mostrada no botão Detalhes)
    const itensTooltipHtml = prod.responsaveis.map(r => `
      <li>
        <span>👤 ${r.nome}:</span>
        <strong>${formatarResponsavel(prod, r)}</strong>
      </li>
    `).join("");

    // 2. Calcula a soma total levada para este produto
    const somaTotalItem = prod.responsaveis.reduce((soma, r) => soma + r.valor, 0);

    // 3. Monta as tags das pessoas associadas
    const tagsResponsaveisHtml = prod.responsaveis.map((r, rIdx) => `
      <span class="tag-resp-item" title="Clique no × para remover">
        ${r.nome} (${formatarResponsavel(prod, r)})
        <button type="button" class="btn-x-resp" onclick="removerPessoaDoProduto(${indexGeral}, ${rIdx})">×</button>
      </span>
    `).join("");

    const totalPessoas = prod.responsaveis.length;

    const card = document.createElement("div");
    card.className = "card-item";
    card.innerHTML = `
      <div class="card-item-foto-wrap">
        <img src="${prod.foto}" alt="${prod.nome}" onerror="this.src='imagens/padrao_solido.jpg'">
      </div>

      <div class="card-item-conteudo">
        <span class="card-item-tipo">${prod.tipo}</span>
        <h4>${prod.nome}</h4>
        <div class="card-item-valor">Total confirmado: ${formatarTotalProduto(prod)}</div>

        <!-- Botão de detalhes: mostra quem vai levar e quanto -->
        <button type="button" class="btn-detalhes" onclick="alternarDetalhes(${indexGeral})">
          ${detalhesAbertos.has(indexGeral) ? "▲ Ocultar detalhes" : "▼ Detalhes"} (${totalPessoas} pessoa(s))
        </button>
        <div class="painel-detalhes" style="display: ${detalhesAbertos.has(indexGeral) ? "block" : "none"};">
          <div class="detalhes-titulo">👥 Quem vai levar:</div>
          <ul class="detalhes-lista">
            ${itensTooltipHtml}
          </ul>
        </div>

        <!-- Adicionar mais pessoas a este produto -->
        <div class="caixa-associar">
          <label>Adicionar mais alguém para levar:</label>
          <div class="linha-associar">
            <select id="selectPessoa_${indexGeral}">
              ${opcoesConvidados}
            </select>
            <input type="number" id="inputQtdPessoa_${indexGeral}" step="${prod.porUnidade ? 1 : 0.1}" min="${prod.porUnidade ? 1 : 0.1}" placeholder="${prod.porUnidade ? prod.nomeUnidade + "s" : prod.unidade}">
            <button class="btn-add-pessoa" onclick="associarPessoaAoProduto(${indexGeral})" title="Associar">+</button>
          </div>
          <div class="lista-tags-responsaveis">
            ${tagsResponsaveisHtml}
          </div>
        </div>

        <button class="btn-remover" onclick="removerProduto(${indexGeral})">Remover da Grade</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Validação da regra: 10 a 20 produtos presentes na grade
function validarRegraItens() {
  const produtosNaGrade = listaProdutos.filter(p => p.responsaveis && p.responsaveis.length > 0);
  const total = produtosNaGrade.length;
  const alerta = document.getElementById("alertaRegraItens");

  if (total >= 10 && total <= 20) {
    alerta.className = "alerta alerta-valido";
    alerta.textContent = `✓ ${total} produtos confirmados.`;
  } else if (total < 10) {
    alerta.className = "alerta alerta-invalido";
    alerta.textContent = `⚠️ Atenção: ${total} produtos na grade. Associe pessoas a mais ${10 - total} produto(s) para atingir o mínimo de 10 itens!`;
  } else {
    alerta.className = "alerta alerta-invalido";
    alerta.textContent = `⚠️ Atenção: ${total} produtos na grade. Limite de 20 ultrapassado! Remova ${total - 20} produto(s).`;
  }
}

// G. COMPARATIVO FINAL: PREVISTO vs. QUANTIDADE CONFIRMADA NA LISTA
function calcularComparativoFinal() {
  // 1. Contagem dos convidados por tipo (homem, mulher, crianca)
  let homens = 0, mulheres = 0, criancas = 0;
  convidados.forEach(c => {
    if (c.tipo === "homem") homens++;
    else if (c.tipo === "mulher") mulheres++;
    else if (c.tipo === "crianca") criancas++;
  });

  // 2. Consumo Previsto solicitado:
  // Homem: 500g (0.5 kg) sólido, 2.0 L líquido
  // Mulher: 400g (0.4 kg) sólido, 1.5 L líquido
  // Criança: 200g (0.2 kg) sólido, 600ml (0.6 L) líquido
  const solidoPrevistoKg = (homens * 0.5) + (mulheres * 0.4) + (criancas * 0.2);
  const liquidoPrevistoL = (homens * 2.0) + (mulheres * 1.5) + (criancas * 0.6);

  // 3. Total real levado pelos convidados nos produtos da grade
  let solidoListaKg = 0;
  let liquidoListaL = 0;

  listaProdutos.forEach(prod => {
    if (prod.responsaveis && prod.responsaveis.length > 0) {
      const somaProd = prod.responsaveis.reduce((soma, r) => soma + r.valor, 0);
      if (prod.tipo === "solido") {
        solidoListaKg += somaProd;
      } else if (prod.tipo === "liquido") {
        liquidoListaL += somaProd;
      }
    }
  });

  // 4. Exibição na tabela comparativa
  document.getElementById("solidoPrevisto").textContent = `${solidoPrevistoKg.toFixed(1)} kg`;
  document.getElementById("solidoLista").textContent = `${solidoListaKg.toFixed(1)} kg`;

  document.getElementById("liquidoPrevisto").textContent = `${liquidoPrevistoL.toFixed(1)} L`;
  document.getElementById("liquidoLista").textContent = `${liquidoListaL.toFixed(1)} L`;

  // 5. Status do Sólido
  const difSolido = solidoListaKg - solidoPrevistoKg;
  const statusSolidoEl = document.getElementById("solidoStatus");
  if (difSolido >= 0) {
    statusSolidoEl.innerHTML = `<span class="status-ok">✓ Suficiente (+${difSolido.toFixed(1)} kg)</span>`;
  } else {
    statusSolidoEl.innerHTML = `<span class="status-falta">⚠️ Falta ${Math.abs(difSolido).toFixed(1)} kg</span>`;
  }

  // 6. Status do Líquido
  const difLiquido = liquidoListaL - liquidoPrevistoL;
  const statusLiquidoEl = document.getElementById("liquidoStatus");
  if (difLiquido >= 0) {
    statusLiquidoEl.innerHTML = `<span class="status-ok">✓ Suficiente (+${difLiquido.toFixed(1)} L)</span>`;
  } else {
    statusLiquidoEl.innerHTML = `<span class="status-falta">⚠️ Falta ${Math.abs(difLiquido).toFixed(1)} L</span>`;
  }
}
