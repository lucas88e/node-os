import os from 'node:os'

function interfaz(){

const interfaces = os.networkInterfaces()
console.log(interfaces)
Object.keys(interfaces).forEach(element => {
    console.log("Nombre :", element);
    interfaces[element].forEach(detail => {
     console.log(`Familia: ${detail.family} Direccion: ${detail.address} 
     Interno:${detail.internal}`)
    })
})
}
export default interfaz
