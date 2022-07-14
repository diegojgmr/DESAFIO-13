let ofertas =[
    {
        Nombre: "Plan 0001",
        Capital: 150000,
        Plazo: 30,
        Tasa: 0.15 

    },
    {
        Nombre : "Plan 0002",
        Capital : 300000,
        Plazo : 180,
        Tasa : 0.10

    },
    {
        Nombre : "Plan 0003",
        Capital : 400000,
        Plazo : 60,
        Tasa  : 0.23 

    }
];
var intereses = [];

for (let i = 0;i<ofertas.length;i++){
    
    var aux = ofertas[i]
    let calculo = ((aux.Capital*aux.Plazo*aux.Tasa )/100);
    intereses.push({
          Nombre: aux.Nombre,
          Capital: aux.Capital,
          Plazo: aux.Plazo,
          Tasa: aux.Tasa,
          Interes: calculo
          });
}

console.log(intereses)
