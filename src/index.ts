import { Assalariado } from "./model/Assalariado";
import { Comissionado } from "./model/Comissionado";
import { Horista } from "./model/Horista";

const a1 = new Assalariado(`Jade`, `14832819302`, 2500);
console.log(a1)
a1.setNome(`Josi`);
a1.setCPF(`42434922`);
a1.setSalario(3500);
console.log(a1.getNome());
console.log(a1.getCPF());
console.log(a1.getSalario());
console.log(a1.vencimento());

const a2 = new Horista(`Jasmim`, `83948982`, 30, 20);
console.log(a2)
a2.setNome(`Carniel`);
a2.setCPF(`28329329`);
a2.setValorHora(20);
a2.setHorasTrabalhadas(30);
console.log(a2.getNome());
console.log(a2.getCPF());
console.log(a2.getValorHora());
console.log(a2.getHorasTrablhadas());
console.log(a2.vencimento());


const a3 = new Comissionado(`Joe`, `2394898382`, 40, 500);
console.log(a3)
a3.setNome(`Isis`);
a3.setCPF(`939494300203`);
a3.setTotalVendas(30);
a3.setTaxaComissao(200);
console.log(a3.getNome());
console.log(a3.getCPF());
console.log(a3.getTotalVendas());
console.log(a3.getTaxaComissao());
console.log(a3.vencimento());
