
export class Pokemon {
    constructor(id, name, types, url, base_experience, sprites, stats, weight, height) {
        this.id = id;
        this.name = name;
        this.types = types;
        this.url = url;
        this.sprites = sprites;
        this.stats = stats;
        this.base_experience = base_experience;
        this.weight = weight;
        this.height = height;
        this.back_sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.id}.png`;
        this.front_sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
    }

    getWeight() {
        let arr = this.weight.toString().split('');
        switch (arr.length) {
            case 2:
                arr.splice(1, 0, ".");
                return arr.join('');

            case 3:
                arr.splice(2, 0, ".");
                return arr.join('');

            default: return this.weight.toString();
        }
    }

    getFrontSprite = () => this.front_sprite;
    getBackSprite = () => this.back_sprite;
}

export default Pokemon;