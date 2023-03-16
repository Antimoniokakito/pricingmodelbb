document.getElementById('calcular').addEventListener('click', calcularPrecos);

function formatarPrecos(precos) {
    let texto = "";
    for (const [nome, preco, precoAVista] of precos) {
        texto += `${nome}\n12x de R$ ${preco.toFixed(2)} ou R$ ${precoAVista.toFixed(2)} à vista por Transferência ou PIX\n\n`;
    }
    return texto;
}

function calcularPrecos() {
    const adultos = parseInt(document.getElementById('adultos').value, 10);
    const criancas = parseInt(document.getElementById('criancas').value, 10);

    let convidados = adultos + criancas;
    if (convidados < 30) {
        convidados = 30;
    }

    const formiguinha1 = 12 * 339.9 + (convidados - 30) * 51.9;
    const formiguinha2 = 12 * 349.9 + (convidados - 30) * 55.9;
    const formiguinha3 = 12 * 359.9 + (convidados - 30) * 58.9;

    let adultoMin = adultos < 25 ? 25 : adultos;
    let criancaMin = criancas < 10 ? 10 : criancas;

    const formigueiro1 = 12 * 429.9 + (adultoMin - 25) * 82.9 + (criancaMin - 10) * 54.9;
    const formigueiro2 = 12 * 499.9 + (adultoMin - 25) * 92.9 + (criancaMin - 10) * 58.9;
    const formigueiro3 = 12 * 549.9 + (adultoMin - 25) * 102.9 + (criancaMin - 10) * 62.9;

    const BalaBalao = 12 * 910.9 + (adultoMin - 25) * 175.9 + (criancaMin - 10) * 86.9;
    const Premier = 12 * 1350.9 + (adultoMin - 25) * 229.9 + (criancaMin - 10) * 92.9;

    const promocionais = [
        ["*Formiguinha 1*", formiguinha1 / 12, formiguinha1 * (1 - 0.075)],
        ["*Formiguinha 2*", formiguinha2 / 12, formiguinha2 * (1 - 0.075)],
        ["*Formiguinha 3*", formiguinha3 / 12, formiguinha3 * (1 - 0.075)],
    ];

    const tradicionais = [
        ["*Formigueiro 1*", formigueiro1 / 12, formigueiro1 * (1 - 0.075)],
        ["*Formigueiro 2*", formigueiro2 / 12, formigueiro2 * (1 - 0.075)],
        ["*Formigueiro 3*", formigueiro3 / 12, formigueiro3 * (1 - 0.075)],
    ];
    const premium = [
    		["*Bala Balão*", BalaBalao / 12, BalaBalao * (1 - 0.075)],
        ["*Premier*", Premier / 12, Premier * (1 - 0.075)],
    ];

    document.getElementById('result').value = `Orçamento para ${adultos} Adultos e ${criancas} Criancas\n\n` +
                                              "*Festas Promocionais*\n" +
                                              formatarPrecos(promocionais) +
                                              "*Festas Tradicionais*\n" +
                                              formatarPrecos(tradicionais) +
                                              "*Festas Premium*\n" +
                                              formatarPrecos(premium);
}
