class Particles {
    static bosons = {
        gluon: {spin: 1, charge: 0, mass: 0 },
        photon: {spin: 1, charge: 0, mass: 0 },
        "W-": {spin: 1, charge: -1, mass: 80.38 },
        "W+": {spin: 1, charge: 1, mass: 80.38 },
        Z: {spin: 1, charge: 0, mass: 91.188 },
        Higgs: {spin: 0, charge: 0, mass: 125.25 },
    };
    static leptons = {
        lightestNeutrino: { spin: 1/2, charge: 0, mass: 1e-9 },
        middleNeutrino: { spin: 1/2, charge: 0, mass: 1e-9 },
        heaviestNeutrino: { spin: 1/2, charge: 0, mass: 1e-9 },
        electron: { spin: 1/2, charge: -1, mass: 511e-6 },
        muon: { spin: 1/2, charge: -1, mass: 106e-3 },
        tau: { spin: 1/2, charge: -1, mass: 1.777 },
    };
    static quarks = {
        up: { spin: 1/2, charge: 2/3, mass: 0.002 },
        down: { spin: 1/2, charge: -1/3, mass: 0.005 },
        charm: { spin: 1/2, charge: 2/3, mass: 1.3 },
        strange: { spin: 1/2, charge: -1/3, mass: 0.1 },
        top: { spin: 1/2, charge: 2/3, mass: 173 },
        bottom: { spin: 1/2, charge: -1/3, mass: 4.2 },
    };

    static render() {
        document.title = "Standard Model";
        let html = `<h1>${document.title}</h1>`;

        html += '<table class="standard-model"><thead><tr>';
        html += '<th colspan="3">Fermions</th>';
        html += '<th colspan="2">Bosons</th>';
        html += '</tr></thead><tbody><tr>';
        html += '<td class="quark">up</td>';
        html += '<td class="quark">charm</td>';
        html += '<td class="quark">top</td>';
        html += '<td class="boson">gluon</td>';
        html += '<td class="higgs boson">Higgs</td>';
        html += '</tr><tr>';
        html += '<td class="quark">down</td>';
        html += '<td class="quark">strange</td>';
        html += '<td class="quark">bottom</td>';
        html += '<td class="boson">photon</td>';
        html += '<td class="empty"></td>';
        html += '</tr><tr>';
        html += '<td class="lepton">electron</td>';
        html += '<td class="lepton">muon</td>';
        html += '<td class="lepton">tau</td>';
        html += '<td class="boson">Z</td>';
        html += '<td class="empty"></td>';
        html += '</tr><tr>';
        html += '<td class="lepton">electron<br>neutrino</td>';
        html += '<td class="lepton">muon<br>neutrino</td>';
        html += '<td class="lepton">tau<br>neutrino</td>';
        html += '<td class="boson">W</td>';
        html += '<td class="empty"></td>';
        html += '</tr></tbody></table>';

        document.body.insertAdjacentHTML('beforeend', html);
    }
}

Particles.render();
