
export class Pokemon {
    constructor(id, name, types, url) {
        this.id = id;
        this.name = name;
        this.types = types;
        this.url = url;
        this.back_sprite = `"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.id}.png"`;
        this.front_sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png"`;
    }

    getFrontSprite = () => this.front_sprite;
    getBackSprite = () => this.back_sprite;
}

export default Pokemon;