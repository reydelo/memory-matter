import sampleSize from 'lodash.samplesize';
import shuffle from 'lodash.shuffle';
import deerImage from '../images/card-deer.jpg';
import bearImage from '../images/card-bear.jpg';
import buffaloImage from '../images/card-buffalo.jpg';
import elkImage from '../images/card-elk.jpg';
import foxImage from '../images/card-fox.jpg';
import horseImage from '../images/card-horse.jpg';
import wolfImage from '../images/card-wolf.jpg';

export interface Card {
    value: string,
    image: string,
    id: number,
};

const cards = [
    { value: 'deer', image: deerImage },
    { value: 'bear', image: bearImage },
    { value: 'buffalo', image: buffaloImage },
    { value: 'elk', image: elkImage },
    { value: 'fox', image: foxImage },
    { value: 'horse', image: horseImage },
    { value: 'wolf', image: wolfImage },
];

cards.forEach(card => new Image().src = card.image);

function getCards() {
    const cardsSample = sampleSize(cards, 6);
    const duplicatedOptions = [...cardsSample, ...cardsSample].map((card, i) => { return { ...card, id: i }});

    return shuffle(duplicatedOptions);
};

export default getCards;