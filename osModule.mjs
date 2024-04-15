import os from 'node:os'

function informacionOs(){  
    console.log(`Nombre: ${os.platform()} 
    Tipo: ${os.type()} 
    Version:${os.version()} ${os.release}
    Arquitectura: ${os.arch()}
    Memoria Total: ${(os.totalmem() / (1024 * 1024)).toFixed(2)}
    MB Memoria Libre: ${(os.freemem() / (1024 * 1024)).toFixed(2)} MB`)
}

export default informacionOs 

informacionOs();

