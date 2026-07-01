import bcrypt from 'bcrypt';

let senha = 'minhaSenha';
let hashSalvo = '$2b$10$OvfwtdOUVprHGFtqGTmXwOQFnin3ttz4oMpFMBghmdOYeWBNbBHDC';

const senhaCorreta = await bcrypt.compare(senha, hashSalvo);

if(senhaCorreta)
    console.log('Login OK');
else
    console.log('Login Fail');