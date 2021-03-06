const Sistema = require('../lib/Process')
const {toBeDeepCloseTo} = require('jest-matcher-deep-close-to')
expect.extend( { toBeDeepCloseTo})

const sistema  = new Sistema()


describe('Processador de boleto', () => {



  const fatura = {
    nome: "Jose da Silva", 
    data: "28/09/2020", 
    valorTotal: 11300.00
  }
  

     const boleto = [{

     codigo: 3459, 
     data: "23/04/2009", 
     valorPago: 1300.00

     },

       {
         codigo: 234, 
         data: "25/06/2020", 
         valorPago: 100.00
       },
       {
       codigo: 345, 
       data: "23/04/2010", 
       valorPago: 100.00
       },
       {
       codigo: 34, 
       data: "23/04/2011", 
       valorPago: 1200.00
       }

    ]

    const pagamento =  
    {

   
      valorPago: 1300.00,
      data: "12/04/2021",
      tipoPagamento: "boleto"
     
  
      }
      const verificacao = sistema.verificar(fatura, pagamento) 
    const somaBoleto = sistema.SomaBoletos(boleto) 
    const qtd = sistema.QuantidadeBoleto(boleto) 
    const valores = sistema.Map(boleto)  
    const faturaTotal = sistema.processa(fatura, valores, qtd, verificacao)
 
  
    
 test(' quantidade de boletos', () => {
  expect(qtd).toBe(4) 


})
test(' Valores dos Boletos', () => {

  expect(valores).toStrictEqual([1300.00, 100.00, 100.00, 1200.00])

 })

 test(' Fatura nao paga', () => {
  expect(verificacao).toBe('fatura nao marcada como paga')


})

test(' Soma dos Boletos', () => {
  expect(somaBoleto).toBe(2700.00)


})





    })

      
   
  





