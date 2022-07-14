
/* a = ingresos, b = gastos */
let caja = [
    {
        p: "Enero",
        ingresos: 1500,
        gastos: 1500
    },
    {
        p: "Febrero",
        ingresos: 2500,
        gastos: 2500
    },
    {
        p: "Marzo",
        ingresos: 84683,
        gastos: 1155
    },
    {
        p: "Abril",
        ingresos: 135353,
        gastos: 1533
    },
    {
        p: "Mayo",
        ingresos: 1535,
        gastos: 5434
    },
    {
        p: "Junio",
        ingresos: 4343354,
        gastos: 5434534
    },
    {
        p: "Julio",
        ingresos: 435453,
        gastos: 4543
    },
    {
        p: "Agosto",
        ingresos: 78351,
        gastos: 7816
    },
    {
        p: "Septiembre",
        ingresos: 1878,
        gastos: 95634
    },
    {
        p: "Octubre",
        ingresos: 48483,
        gastos: 9433
    },
    {
        p: "Noviembre",
        ingresos: 35483,
        gastos: 53133
    },
    {
        p: "Diciembre",
        ingresos: 3843,
        gastos: 348133
    },
];
let a = 0;
let b = 0;
for (let i = 0;i < caja.length;i++){
a += caja[i].ingresos;
b += caja[i].gastos 
}

if(a>b){
   alert('No se generan perdidas') 
}else{
    alert('Se generan perdidas')
}