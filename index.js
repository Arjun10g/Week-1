let examples = {
    'discrete': "Number of children in a family (1, 2, 3), the number of cars in a parking lot (0, 1, 2), or Different types of cars (SUV, Sedan, Hatchback)",
    'continuous': "Height (e.g., 1.5m, 1.6m, 1.7m), Weight (e.g., 50kg, 60kg, 70kg), Temperature (e.g., 20°C, 21°C, 22°C)",
    'Nominal': "Colors (e.g., red, blue, green), Types of fruits (e.g., apple, banana, orange)",
    'Ordinal': "Ranking (e.g., 1st, 2nd, 3rd), Rating (e.g., 1 star, 2 stars, 3 stars)",
    'Interval': "Temperature in Celsius or Fahrenheit (e.g., 20°C, 68°F), IQ scores (e.g., IQ 100, IQ 120, IQ 140), Calendar years (e.g., 1990, 2000, 2010)",
    'Ratio': "Height (e.g., 1.5m, 1.6m, 1.7m), Weight (e.g., 50kg, 60kg, 70kg), Income (e.g., 0, 10k, 100k)"
}

const examplesArray = [
    examples['discrete'],
    examples['Nominal'],
    examples['Ordinal'],
    examples['continuous'],
    examples['Interval'],
    examples['Ratio']
];

let boldList = document.querySelectorAll('li > b');

// console.log(examples);

boldList.forEach((item, index) => {
    item.addEventListener('click', () => {
        let currentExample = examplesArray[index];
        let currentParent = item.parentElement;
        currentParent.textContent += ` Example: ${currentExample}`;
    })
}
);

let remove = document.querySelectorAll('.remove');
let replace = document.querySelectorAll('.replace');
let imageCont = document.querySelectorAll('.images');

remove.forEach((item, index) => {
item.addEventListener('click', () => {
    let tl = gsap.timeline();
    tl.to(item, { opacity: 0, duration: 0.5 })
    .set(item, { display: 'none' })
    .set(replace[index], { display: 'block' })
    .to(replace[index], { opacity: 1, duration: 0.5 })

    replace[index].style.height = '70%';
    replace[index].style.width = '70%';
    imageCont[index].style.display = 'grid';
    imageCont[index].style.placeItems = 'center';
}
);
});

let btn = document.querySelector('.play');
let frame = document.querySelector('.frame');

btn.addEventListener('click', () => {
    frame.classList.toggle('inactive');
    gsap.from(frame, { opacity: 0, xPercent:-100 ,duration: 1 });
});