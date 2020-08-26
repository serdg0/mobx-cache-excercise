const CreateCountStore = () => {
    let count = 1;
    let pokemons = {};

    return {
        count,
        pokemons,
        increment(){
            this.count++;
        },
        decrement(){
            if (this.count === 1) {
                this.count = 1;
            } else {
                this.count--;
            }
        },
        cache(id, sprite){
            
            if (this.pokemons[id] === undefined) {
                pokemons[id] = sprite;
            };
            console.log(this.pokemons[id])
            return this.pokemons[id];
        }
    }
};

export default CreateCountStore;