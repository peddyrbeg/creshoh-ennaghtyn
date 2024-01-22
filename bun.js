let feysht = 0;
let runt = 0;
const kiaull = new Audio('sheeanyn/game-loop.wav');
    kiaull.volume = 0.1;
    kiaull.loop = true;
let kiaullGoll = true;
let sfxGoll = true;

(function crooDuillag () {
    soieReihyn();
    soieCrammanyn();
    const saagh = trogAyrn("div", "saagh", []);
    const gowToshiaght = () => {
        coyrle.style.display = "none";
        kiaullGoll = document.getElementById("skirreyder-kiaull").checked;
        if (kiaullGoll) kiaull.play();
        sfxGoll = document.getElementById("skirreyder-sfx").checked;
        traa();
    };
    const coyrle = trogAyrn("div", "saagh-coyrle", [
        trogAyrn("div", "coyrle-toshiaght", [
            "Click the word that matches the picture!",
            trogAyrn("button", "cramman-coyrle", ["ok"], ["reih"], gowToshiaght),
            trogAyrn("div", "saagh-corragyn", [
                trogAyrn("div", "saagh-corrag-kiaull", [
                    trogAyrn("div", "lipaid-kiaull", ["music"], ["lipaid"]),
                    trogAyrn("label", "corrag-kiaull", [
                        trogAyrn("input", "skirreyder-kiaull", [], [], null, "checkbox", kiaullGoll),
                        trogAyrn("span", "far-skirreyder-kiaull", [], ["skirreyder"])
                    ], ["corrag"]),
                ], ["saagh-corrag"]),
                trogAyrn("div", "saagh-corrag-sfx", [
                    trogAyrn("div", "lipaid-sfx", ["sfx"], ["lipaid"]),
                    trogAyrn("label", "corrag-sfx", [
                        trogAyrn("input", "skirreyder-sfx", [], [], null, "checkbox", sfxGoll),
                        trogAyrn("span", "far-skirreyder-sfx", [], ["skirreyder"])
                    ], ["corrag"])
                ], ["saagh-corrag"])
            ])
        ])
    ]);
    const toshiaght = trogAyrn("div", "saagh-toshiaght", [trogAyrn("h2", "ennym", ["Cre shoh?"])]);
    const mean = trogAyrn("div", "saagh-mean", [
        trogAyrn("div", "saagh-caslys", [trogAyrn("img", "caslys", focklynYnsit[reihyn[0]].caslys)]),
        trogAyrn("button", "reih-1", [crammanyn[0]], ["reih"], clickit),
        trogAyrn("button", "reih-2", [crammanyn[1]], ["reih"], clickit),
        trogAyrn("button", "reih-3", [crammanyn[2]], ["reih"], clickit)
    ]);
    const bun = trogAyrn("div", "bun", [trogAyrn("div", "clag", [
        trogAyrn("span", "clag-minnid", ["00"]),
        trogAyrn("span", "", [":"]),
        trogAyrn("span", "clag-grig", ["00"])]),
        trogAyrn("div", "fys", [
            trogAyrn("div", "feysht", ["1/" + (Object.keys(focklynYnsit).length * 4)]),
            trogAyrn("div", "agg", ["0"])
        ])
    ]);
    saagh.append(coyrle, toshiaght, mean, bun);
    document.body.append(saagh);
})();