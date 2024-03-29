const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
    let quotes = {
        'Платон' : 'Для мудрої людини ніщо не є більш важким і ніщо не викликає більшого занепокоєння, ніж необхідність витрачати на непотрібне більше часу, ніж потрібно.',
        'Волт Дісней' : 'Найкращий метод, щоб почати щось робити – перестати говорити і почати робити.',
        'Майкл Джордан' : 'Ви не повинні зупинятися, навіть якщо щось може йти не так, як би хотілось.',
        'Норман Вінсент Піл' : 'Потрібно вірити в себе та свої здібності! Без раціональної впевненості у своїх силах, неможливо бути успішним та щасливим.',
        'Леонардо да Вінчі' : 'Розум ніколи не вичерпується, навчаючись.',
        'Генрі Форд' : 'Коли людина перестає змінюватись, вона вмирає, а похорон – просто формальність.',
        'Бертран Рассел' : 'Я можу помилятися, тому за свої переконання я ніколи не віддам життя.',
        'Франклін Д. Рузвельт' : 'Наші сьогоднішні сумніви – єдина межа наших завтрашніх звершень.',
        'Рональд Рейган' : 'Найрозумніші люди не в уряді. Бізнес викрав би їх, якби вони там були.',
        'Джон Вейн' : 'Найважливіша річ у житті – завтрашній день. Він приходить опівночі. Він сподівається, що відучора ми хоч чомусь навчилися.'
    }
    let author = Object.keys(quotes)
    
    let authors = author[Math.floor(Math.random() * author.length)]
    console.log(authors)

    let quote = quotes[authors]

    document.getElementById('quote').innerHTML = quote
    document.getElementById('author').innerHTML = authors
})