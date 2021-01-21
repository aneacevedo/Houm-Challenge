export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        const data = response.json()
        return data;
    } catch(err) {
    }
};
export default searchPokemon;
// export async function getAllPokemons({ url }) {
//     return new Promise((resolve, reject) => {
//         fetch(url).then(res => res.json())
//             .then(data => {
//                 resolve(data)
//         });
//     });
// };

// export async function getThePokemons(url) {
//     return new Promise((resolve, reject) => {
//         fetch(url).then(res => res.json())
//             .then(data => {
//                 resolve(data)
//         });
//     });   
// };
