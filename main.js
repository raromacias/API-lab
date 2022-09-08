const btn = document.querySelector("button")

// const baseURL = `http://swapi.dev/api/planets`

const btnClick = () => {
// const {residents} = planets


axios.get("https://swapi.dev/api/planets/?search=Alder").then(res =>

{

// console.log(res.data.results[0].residents);
const {residents}= res.data.results[0];
for(let i=0; i<residents.length; i++){
    axios.get(residents[i]).then(res =>{
        const {name} = res.data;
        const resNames = document.createElement('h2');
        resNames.textContent = name;
            document.querySelector("body").appendChild(resNames)}
    )}
})
}
btn.addEventListener('click', btnClick)