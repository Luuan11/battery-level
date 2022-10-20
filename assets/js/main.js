battery()

function battery(){
    const batteryLiquid = document.querySelector('.battery-liquid'),
          batteryStatus = document.querySelector('.battery-status'),
          batteryPerc = document.querySelector('.battery-perc');

    navigator.getBattery().then((batt) =>{
        updateBattery = () =>{

            let level = Math.floor(batt.level * 100)
            batteryPerc.innerHTML = level+ '%'

            batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`

            if(level == 100){
                batteryStatus.innerHTML = `Bateria cheia <i class="ri-battery-2-fill green-color"></i>`
                batteryLiquid.style.height = '103%'
            }
            else if(level <= 20 &! batt.charging){
                batteryStatus.innerHTML = `Bateria baixa <i class="ri-plug-2-line animated-red"></i>`
            }
            else if(batt.charging){
                batteryStatus.innerHTML = `Carregando... <i class="ri-battery-charge-fill animated-green"></i>`
            }
            else{
                batteryStatus.innerHTML = ''
            }

            if(level <= 20){
                batteryLiquid.classList.add('gradient-color-red');
                batteryLiquid.classList.remove('gradient-color-orange','gradient-color-yellow','gradient-color-green');
            }
            else if(level <= 40){
                batteryLiquid.classList.add('gradient-color-orange');
                batteryLiquid.classList.remove('gradient-color-red','gradient-color-yellow','gradient-color-green');
            }
            else if(level <= 80){
                batteryLiquid.classList.add('gradient-color-yellow');
                batteryLiquid.classList.remove('gradient-color-red','gradient-color-orange','gradient-color-green');
            }
            else{
                batteryLiquid.classList.add('gradient-color-green');
                batteryLiquid.classList.remove('gradient-color-red','gradient-color-orange','gradient-color-yellow');
            }

        }
        updateBattery()

        batt.addEventListener('carregando', () => {updateBattery()});
        batt.addEventListener('levelcarga', () => {updateBattery()});
    })
}