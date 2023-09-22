const btn = document.getElementById('fetch');
const img = document.getElementById('card');

async function fetchData() {
    const res = await fetch('./images/1.jpeg');
    const data = await res.blob();
    img.src = URL.createObjectURL(data);
    console.log("image displayed")
}

// function fetchData() {
//     console.log("btn Clicked me!!!");
//     fetch('./images/1.jpeg')
//         .then(res => res.blob())
//         .then(data => {
//             img.src = URL.createObjectURL(data);
//         })
//         .catch(err => console.log("error is", err));
// }

btn.addEventListener('click', () => {
    fetchData()
    .catch(err => console.log("error I displayed", err.message));
})