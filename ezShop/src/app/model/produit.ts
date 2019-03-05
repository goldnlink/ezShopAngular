import { Commentaire } from './commentaire';

export class Produit {
    constructor(public id: number,
                public code: string,
                public label: string,
                public description: string,
                public price: number,
                public quantity: number,
                public categoryId: number,
                public imageSrc: string,
                public bestDeal: boolean,
                public comments: Commentaire[]) {}
}
