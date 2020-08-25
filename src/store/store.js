const CreateCountStore = () => {
    return {
        count: 12,
        increment(){
            this.count++;
        },
    }
};

export default CreateCountStore;