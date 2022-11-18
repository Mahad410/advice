const url = 'https://api.adviceslip.com/advice';
const advice_content = document.getElementById('advice_content');
const loader = document.getElementById('loading');
const dice = document.getElementById('advice_btn');
const options = {
    method: 'GET',
}

async function getAdvice() {
    loader.style.display = 'flex';
    advice_content.style.display = 'none';
    const response = await fetch(url, options);
    let json = await response.json();
    window.advice = [json.slip];
    if (response) {
        loader.style.display = 'none';
        advice_content.style.display = 'block';
        advice_content.innerHTML = advice.map((val) => {
            return `<p class="green">Advice #${val.id}</p>
        <h1 class="advice">&quot;${val.advice}&quot;</h1>`
        }).join('')
    }
}

getAdvice().catch(err => console.log(err));

dice.addEventListener('click', getAdvice);