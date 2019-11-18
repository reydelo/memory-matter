export interface Card {
    value: string,
    image: string,
    id: number,
};

const cards = [
    { value: 'deer', image: '/images/card-deer.jpg' },
    { value: 'bear', image: '/images/card-bear.jpg' },
    { value: 'buffalo', image: '/images/card-buffalo.jpg' },
    { value: 'elk', image: '/images/card-elk.jpg' },
    { value: 'fox', image: '/images/card-fox.jpg' },
    { value: 'horse', image: '/images/card-horse.jpg' },
    { value: 'wolf', image: '/images/card-wolf.jpg' }
];

function shuffleCards(a: Array<any>) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = a[i];

        a[i] = a[j];
        a[j] = temp;
    }
    return a;
}

function getCards() {
    const shuffledOptions = shuffleCards(cards).slice(0, 6);
    const duplicatedOptions = shuffleCards([...shuffledOptions, ...shuffledOptions]);

    return duplicatedOptions.map((card, i) => {
        return { ...card, id: i };
    });
};

export default getCards;