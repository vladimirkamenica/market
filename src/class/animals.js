import FindIcon from './findProductsIcon.js';
export default{
    animals:[
        {
            title : 'Kalendar ždrebljenja (okota) kobila',
            description: 'Skotnost kod konja traje između 330 i 410 dana. Na svet dolazi po pravilu samo jedno mladunče.',
            animal : 'Konj',
            img : FindIcon.find('Kobila').img,
            color : FindIcon.find('Kobila').color,
            from : 330,
            to: 410,
        },
        {
            title : 'Kalendar jarenja (okota) koza',
            animal : 'Koza',

            description: 'Period bremenitosti, skozni period koza traje oko 150 dana od momenta koncepcije,</br> pripusta ili veštačkog osemenjavanja sa malim odstupanjima od 5 dana ranije ili kasnije.',
            img : FindIcon.find('Koze').img,
            color : FindIcon.find('Koze').color,
            from : 150,
            to: 0,
        },
        {
            title : 'Kalendar jagnjenja (okota) ovaca',
            animal : 'Ovca',

            description: 'Bremenitost ovaca započinje oplodnjom i implantacijom ranog embriona u rogu materice, a završava se normalnim porođajem (jagnjenjem). Bremenitost ovaca traje prosečno 150 dana, sa malim varijacijama koje se kreću između 145-152 dana.',
            img : FindIcon.find('Ovca').img,
            color : FindIcon.find('Ovca').color,
            from : 145,
            to: 152,
        },
        {
            title : 'Kalendar prašenja (okota) krmača',
            animal : 'Krmača',

            description: 'Period trudnoće kod svinja traje prosečno 115 dana. Do 85. dana trudnoće krmače se trebaju dovesti u optimalno telesno stanje do oprasivanja. To je važno za tok porođaja, prinos mleka i plodnost.',
            img : FindIcon.find('Prasad').img,
            color : FindIcon.find('Prasad').color,
            from : 85,
            to: 115,
        },
        {
            title : 'Kalendar telenja (okota) krava',
            animal : 'Krava',

            description: 'Period trudnoće kod krava traje prosečno 280 dana. Pri priplodu stoke najvažniji je dobar izbor bika.',
            img : FindIcon.find('Priplodne junice').img,
            color : FindIcon.find('Priplodne junice').color,
            from : 280,
            to: 0,
        }
    ]
}
