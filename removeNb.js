function removeNb (n) {
    let seq = [];
    for (let i = 1; i <= n; i++) {
        seq.push(i);
    }

    let passing = [];
    for (let i = 0; i < seq.length; i++) {
        let j = 0;
        while (j < seq.length) {
            if (seq[i] === seq[j]) {
                j++;
                continue;
            }
            let prod = seq[i] * seq[j], sum;
            let filteredSeq = seq.filter(e => e !== seq[i] && e !== seq[j]);
            if (filteredSeq.length) {
                sum = filteredSeq.reduce((a, b) => a + b);
            } else {
                sum = null;
            }
            if (prod === sum) {
                passing.push([seq[i], seq[j]]);
            }
            j++;
        }
    }
    return passing;
}