function parseSet(text) {
    text = text.replace(/[{}]/g, "").trim();
    if (text === "") return [];
    return text.split(/[,،]/).map(x => x.trim());
}

function calc() {
    const A = parseSet(document.getElementById("setA").value);
    const B = parseSet(document.getElementById("setB").value);

    const union = [...new Set([...A, ...B])];
    const intersection = A.filter(x => B.includes(x));
    const difference = A.filter(x => !B.includes(x));

    document.getElementById("result").textContent =
        "اجتماع: { " + union.join(", ") + " }\n" +
        "اشتراک: { " + intersection.join(", ") + " }\n" +
        "تفاضل A−B: { " + difference.join(", ") + " }";
}
