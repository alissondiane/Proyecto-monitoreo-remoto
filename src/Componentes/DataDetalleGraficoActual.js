const DETALLEGRAFICOACTUAL = {
    temperatura :[
        {
            rango: "0-25",
            estado: 'Por debajo del rango',
            color: 'rojo'
        },
        {
            rango: "25-30",
            estado: 'Dentro del rango',
            color: 'amarillo'
        },
        {
            rango: "30-50",
            estado: 'Por encima del rango',
            color: 'verde'
        }
    ],
    oxigeno :[
        {
            rango: "60-80",
            estado: 'Por debajo del rango',
            color: 'rojo'
        },
        {
            rango: "80-120",
            estado: 'Dentro del rango',
            color: 'amarillo'
        },
        {
            rango: "120-150",
            estado: 'Por encima del rango',
            color: 'verde'
        }
    ],
    ph :[
        {
            rango: "0-5",
            estado: 'Por debajo del rango',
            color: 'rojo'
        },
        {
            rango: "5-7",
            estado: 'Dentro del rango',
            color: 'amarillo'
        },
        {
            rango: "7-14",
            estado: 'Por encima del rango',
            color: 'verde'
        }
    ],

    
};

export default DETALLEGRAFICOACTUAL;