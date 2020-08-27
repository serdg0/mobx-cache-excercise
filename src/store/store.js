import { observable } from "mobx";

const CreateCountStore = () => {
    let count = 1;
    let pokemons = observable.map({});

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
            this.pokemons[id] = sprite;
            return this.pokemons[id];
        }
    }
};

export default CreateCountStore;