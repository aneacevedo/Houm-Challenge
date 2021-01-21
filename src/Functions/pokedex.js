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


// export const getPokemons = async () => {
//     try {
//     //   let url = 'https://pokeapi.co/api/v2/pokemon?offset=0';
//       const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//       const data = response.json();
//       console.log(response);
//       return data;
//     } catch (err) {}
//   };

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
