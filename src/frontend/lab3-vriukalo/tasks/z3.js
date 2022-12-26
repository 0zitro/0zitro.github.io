let BIOs = [
    ["Воробець Тарас Васильович", "01.01.05", "person1@noemail.real", "??"],
    ["Вороніч Владислав Сергійович", "02.01.05", "person2@noemail.real", "??"],
    ["Гавор Владислав Ігорович", "03.01.05", "person3@noemail.real", "??"],
    ["Галик Арсен Назарович", "04.01.05", "person4@noemail.real", "??"]
];

// Дані випадкові (крім імен); я однокурсників навіть ні разу вживу не бачив!



function change_bio(i) {
    let [name, birth_date, email, music] = BIOs[i];

    bio.innerHTML = `Привіт! Мене звати ${name}, я народився ${birth_date}. Ти можеш написати мені листа <a href="mailto:${email}">тут</a>. Улюблена музика: ${music}`;
}