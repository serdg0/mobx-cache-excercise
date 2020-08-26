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
    }
};

export default CreateCountStore;